import { NextResponse } from "next/server";
import { Resend } from "resend";
import { RECAPTCHA_QUOTE_ACTION } from "@/lib/recaptcha";
import {
  sanitizeQuotePayload,
  validateQuoteFields,
} from "@/lib/quote-validation";

export const runtime = "nodejs";

function parseMinScore(): number {
  const raw = process.env.RECAPTCHA_MIN_SCORE;
  const n = raw !== undefined ? Number.parseFloat(raw) : 0.5;
  if (!Number.isFinite(n)) return 0.5;
  return Math.min(1, Math.max(0, n));
}

async function verifyRecaptchaV3(token: string): Promise<{
  ok: boolean;
  score?: number;
}> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    return { ok: false };
  }

  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token }),
  });

  const data = (await res.json()) as {
    success?: boolean;
    score?: number;
    action?: string;
  };

  if (data.success !== true) {
    return { ok: false };
  }

  /* v3-specific */
  const minScore = parseMinScore();
  const score =
    typeof data.score === "number" && Number.isFinite(data.score) ? data.score : undefined;
  if (score === undefined || score < minScore) {
    return { ok: false, score };
  }

  if (data.action !== RECAPTCHA_QUOTE_ACTION) {
    return { ok: false, score };
  }

  return { ok: true, score };
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const record = body as Record<string, unknown>;

  // Honeypot: bots often fill hidden fields.
  const trap =
    typeof record.website === "string" ? record.website.trim() : record.website;
  if (trap) {
    return NextResponse.json({ success: true });
  }

  const payload = sanitizeQuotePayload({
    name: record.name,
    email: record.email,
    phone: record.phone,
    message: record.message,
  });

  const validation = validateQuoteFields(payload);
  if (!validation.ok) {
    return NextResponse.json({ errors: validation.errors }, { status: 400 });
  }

  const captcha =
    typeof record.recaptchaToken === "string" ? record.recaptchaToken.trim() : "";
  if (!captcha) {
    return NextResponse.json(
      {
        errors: {
          captcha: "Submission could not be verified. Refresh the page and try again.",
        },
      },
      { status: 400 },
    );
  }

  const captchaResult = await verifyRecaptchaV3(captcha);
  if (!captchaResult.ok) {
    return NextResponse.json(
      {
        errors: {
          captcha:
            "Automatic verification did not clear this submission. Try again in a moment, or call us instead.",
        },
      },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.QUOTE_TO_EMAIL?.trim();
  const fromRaw = process.env.QUOTE_FROM_EMAIL?.trim();

  if (!apiKey || !to || !fromRaw) {
    console.error("[quote] Missing RESEND_API_KEY, QUOTE_TO_EMAIL, or QUOTE_FROM_EMAIL");
    return NextResponse.json(
      { error: "The contact form is not configured yet." },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const safeName = payload.name.replace(/\r|\n/g, " ");
  const text = [
    `Quote request from ${safeName}`,
    "",
    `Email: ${payload.email}`,
    payload.phone ? `Phone: ${payload.phone}` : "Phone: (not provided)",
    "",
    "Message:",
    payload.message,
  ].join("\n");

  const { error } = await resend.emails.send({
    from: fromRaw,
    to: [to],
    replyTo: payload.email,
    subject: `Quote request from ${safeName}`,
    text,
  });

  if (error) {
    console.error("[quote] Resend error:", error);
    return NextResponse.json(
      { error: "Could not send your message. Please try again or call us." },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}
