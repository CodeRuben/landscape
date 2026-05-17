import Link from "next/link";
import Image from "next/image";
import headerBanner from "../../public/images/brand/header.jpg";
import { business } from "@/data/site";
import { IMAGE_SIZES } from "@/lib/images";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-banner">
        <Image
          src={headerBanner}
          alt="K.H. White Bobcat Services header with bobcat and phone number"
          fill
          priority
          placeholder="blur"
          sizes={IMAGE_SIZES.heroBanner}
        />
      </div>

      <div className="container hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">
            Established in 1989 • MetroWest Massachusetts
          </p>
          <h1 className="hero-title">
            Excavation, grading, and bobcat work in MetroWest MA
          </h1>
          <p className="hero-lede">
            K.H. White Bobcat Services has been providing lawn installations,
            land clearing, drywells and more in the MetroWest area for over 35
            years. We not only provide you with great service, but we also have
            the most competitive pricing in the area, as we charge on the actual
            work at your property and do not seek making money on the materials.
            If you are looking to improve your lawn, expand your backyard to get
            the most out of your property or fix poor drainage issues once and
            for all, give us a call. We have free estimates and are fully
            insured.
          </p>
          <div className="hero-service-list" aria-label="Common services">
            <span>Land Clearing</span>
            <span>Grading</span>
            <span>Drainage</span>
            <span>Lawn Prep</span>
          </div>
          <div className="hero-actions">
            <Link className="button button-primary" href="/quote">
              Request a Quote
            </Link>
            <a className="button button-secondary" href={business.phoneHref}>
              Call {business.phone}
            </a>
          </div>
        </div>

        <div className="hero-card" aria-label="Free estimates">
          <span>Free Estimates</span>
          <strong>{business.phone}</strong>
        </div>
      </div>
    </section>
  );
}
