"use client";

import type { FormEvent } from "react";
import { useRef, useState } from "react";
import { business, quoteFields } from "@/data/site";
import {
  quoteFieldLimits,
  sanitizeQuotePayload,
  validateQuoteFields,
} from "@/lib/quote-validation";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError(null);
    setSuccess(false);
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const website = formData.get("website");

    const payload = sanitizeQuotePayload({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    });

    const localCheck = validateQuoteFields(payload);
    if (!localCheck.ok) {
      setErrors(localCheck.errors);
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          website: typeof website === "string" ? website : "",
        }),
      });

      let data: unknown;
      try {
        data = await res.json();
      } catch {
        data = {};
      }

      const record =
        typeof data === "object" && data !== null ? (data as Record<string, unknown>) : {};

      if (res.ok && record.success === true) {
        setSuccess(true);
        formRef.current?.reset();
        return;
      }

      if (
        !res.ok &&
        record.errors &&
        typeof record.errors === "object" &&
        record.errors !== null
      ) {
        setErrors(record.errors as Record<string, string>);
        return;
      }

      const errMsg =
        typeof record.error === "string"
          ? record.error
          : "Something went wrong. Please try again or call us.";
      setFormError(errMsg);
    } catch {
      setFormError("Network error. Please try again or call us.");
    } finally {
      setSubmitting(false);
    }
  }

  const { nameMax, messageMax } = quoteFieldLimits;

  return (
    <form ref={formRef} className="quote-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <label>
          {quoteFields[0]}
          <input
            name="name"
            type="text"
            autoComplete="name"
            required
            minLength={quoteFieldLimits.nameMin}
            maxLength={nameMax}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "error-name" : undefined}
            className={errors.name ? "field-invalid" : undefined}
          />
          {errors.name ? (
            <p id="error-name" className="field-error" role="alert">
              {errors.name}
            </p>
          ) : null}
        </label>
        <label>
          {quoteFields[1]}
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "error-email" : undefined}
            className={errors.email ? "field-invalid" : undefined}
          />
          {errors.email ? (
            <p id="error-email" className="field-error" role="alert">
              {errors.email}
            </p>
          ) : null}
        </label>
      </div>

      <label>
        {quoteFields[2]}
        <input
          name="phone"
          type="tel"
          autoComplete="tel"
          maxLength={32}
          aria-invalid={errors.phone ? true : undefined}
          aria-describedby={errors.phone ? "error-phone" : undefined}
          className={errors.phone ? "field-invalid" : undefined}
        />
        {errors.phone ? (
          <p id="error-phone" className="field-error" role="alert">
            {errors.phone}
          </p>
        ) : null}
      </label>

      <div className="honeypot" aria-hidden="true">
        <label>
          Website
          <input tabIndex={-1} name="website" type="text" autoComplete="off" defaultValue="" />
        </label>
      </div>

      <label>
        {quoteFields[3]}
        <textarea
          name="message"
          rows={6}
          required
          minLength={quoteFieldLimits.messageMin}
          maxLength={messageMax}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "error-message" : undefined}
          className={errors.message ? "field-invalid" : undefined}
        />
        {errors.message ? (
          <p id="error-message" className="field-error" role="alert">
            {errors.message}
          </p>
        ) : null}
      </label>

      {formError ? (
        <p className="form-note form-note--error" role="alert">
          {formError}
        </p>
      ) : null}

      {success ? (
        <p className="form-note form-note--success" role="status">
          Thanks — your message was sent. We will get back to you soon. For the fastest response,
          you can also call{" "}
          <a href={business.phoneHref}>{business.phone}</a>.
        </p>
      ) : null}

      <button className="button button-primary" type="submit" disabled={submitting}>
        {submitting ? "Sending…" : "Contact Us"}
      </button>

      <p className="quote-form-contact-hint" role="note">
        <span className="quote-form-contact-hint__lead">
          Submissions are emailed to our team.
        </span>{" "}
        Prefer the phone? Call <a href={business.phoneHref}>{business.phone}</a>.
      </p>
    </form>
  );
}
