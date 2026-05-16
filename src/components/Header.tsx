"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { business, navigation } from "@/data/site";

const SITE_NAV_ID = "site-nav";

export function Header() {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);

  const closeNav = useCallback(() => setNavOpen(false), []);

  /* Close drawer on route change (incl. browser back/forward). */
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- sync open state to new route
    setNavOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!navOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeNav();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [navOpen, closeNav]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand header-brand" href="/" aria-label={`${business.name} home`}>
          <span className="brand-mark">KH</span>
          <span>
            <strong>{business.name}</strong>
            <small>Bobcat and excavation services</small>
          </span>
        </Link>

        <button
          type="button"
          className={`nav-toggle${navOpen ? " nav-toggle--open" : ""}`}
          aria-expanded={navOpen}
          aria-controls={SITE_NAV_ID}
          onClick={() => setNavOpen((o) => !o)}
        >
          <span className="visually-hidden">{navOpen ? "Close menu" : "Open menu"}</span>
          <span className="nav-toggle-bars" aria-hidden />
        </button>

        <nav
          id={SITE_NAV_ID}
          className={`nav${navOpen ? " nav--open" : ""}`}
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={closeNav}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          className="header-phone"
          href={business.phoneHref}
          aria-label={`Call ${business.phone}`}
        >
          {business.phone}
        </a>
      </div>
    </header>
  );
}
