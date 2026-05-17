import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  sanitizeQuotePayload,
  validateQuoteFields,
} from "@/lib/quote-validation";

export const runtime = "nodejs";

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
