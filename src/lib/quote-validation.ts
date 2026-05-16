export const quoteFieldLimits = {
  nameMin: 1,
  nameMax: 120,
  messageMin: 1,
  messageMax: 8000,
  phoneDigitsMin: 10,
  phoneDigitsMax: 15,
} as const;

export type QuoteFormPayload = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function sanitizeQuotePayload(input: {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
}): QuoteFormPayload {
  return {
    name: typeof input.name === "string" ? input.name.trim() : "",
    email: typeof input.email === "string" ? input.email.trim().toLowerCase() : "",
    phone: typeof input.phone === "string" ? input.phone.trim() : "",
    message: typeof input.message === "string" ? input.message.trim() : "",
  };
}

export function countPhoneDigits(phone: string): number {
  return phone.replace(/\D/g, "").length;
}

export function validateQuoteFields(
  p: QuoteFormPayload,
): { ok: true } | { ok: false; errors: Record<string, string> } {
  const errors: Record<string, string> = {};
  const { nameMin, nameMax, messageMin, messageMax, phoneDigitsMin, phoneDigitsMax } =
    quoteFieldLimits;

  if (p.name.length < nameMin) {
    errors.name = "Please enter your name.";
  } else if (p.name.length > nameMax) {
    errors.name = `Name must be ${nameMax} characters or fewer.`;
  }

  if (!p.email) {
    errors.email = "Please enter a valid email address.";
  } else if (!emailPattern.test(p.email)) {
    errors.email = "That email address does not look valid.";
  }

  if (p.phone) {
    const digits = countPhoneDigits(p.phone);
    if (digits < phoneDigitsMin || digits > phoneDigitsMax) {
      errors.phone = `Please enter a phone number with ${phoneDigitsMin}–${phoneDigitsMax} digits, or leave it blank.`;
    }
  }

  if (p.message.length < messageMin) {
    errors.message = "Please describe the work you need.";
  } else if (p.message.length > messageMax) {
    errors.message = `Please shorten your message to ${messageMax} characters or less.`;
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }
  return { ok: true };
}
