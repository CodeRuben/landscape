import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "This page doesn’t exist. Return to K.H. White Bobcat Services for excavation and bobcat work in MetroWest Massachusetts.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className="page-section section-intro not-found-page">
      <div className="container not-found-stack">
        <p className="eyebrow">Error 404</p>
        <h1 className="page-title">We couldn&apos;t find that page</h1>
        <p className="lede">
          The address may have been mistyped or the page may have moved.
          Try the home page, project gallery, or request a quote and we&apos;ll
          steer you toward what you need.
        </p>
        <nav className="not-found-actions" aria-label="Helpful links">
          <Link className="button button-primary" href="/">
            Back to home
          </Link>
          <Link className="button button-secondary" href="/quote">
            Request a quote
          </Link>
        </nav>
      </div>
    </section>
  );
}
