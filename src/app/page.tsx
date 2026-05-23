import Link from "next/link";
import { Hero } from "@/components/Hero";
import { HomeBobcatPortrait } from "@/components/home/HomeBobcatPortrait";
import { HomeIntroCompare } from "@/components/home/HomeIntroCompare";
import { HomeServiceOfferGrid } from "@/components/home/HomeServiceOfferGrid";
import { business } from "@/data/site";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section section-intro">
        <div className="container intro-block">
          <div className="intro-copy">
            <p className="eyebrow">Land clearing</p>
            <h2>Bobcat clearing: from thick brush to usable lawn</h2>
            <p>
              We use compact equipment to clear heavy brush and tight wooded edges, then
              grade and prep the soil so overgrown areas like these can become open,
              plantable lawn.
            </p>
            <Link className="button button-primary" href="/quote">
              Contact Us
            </Link>
          </div>
          <HomeIntroCompare />
        </div>
      </section>

      <section className="section section-muted">
        <div className="container section-heading">
          <p className="eyebrow">Services We Offer</p>
          <h2>K.H. White bobcat services offers a wide range of machine work</h2>
          <p>
            With both backhoe and grapple attachments we can provide you with a one stop
            option to get your landscape projects done and in a short amount of time.
          </p>
        </div>

        <HomeServiceOfferGrid />
      </section>

      <section className="section">
        <div className="container who-block who-block--tight-media">
          <HomeBobcatPortrait />
          <div className="who-copy">
            <p className="eyebrow">Who We Are</p>
            <h2>Serving MetroWest since {business.founded}</h2>
            <p>
              Established in 1989, Kevin White has provided the MetroWest area with
              quality Bobcat excavator service. K.H. White Bobcat Services has over 25
              years operating experience, handling excavation and land development from
              land clearing through final grade and lawn installation.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/about">
                About Us
              </Link>
              <Link className="button button-secondary" href="/projects">
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-inner">
          <div>
            <p className="eyebrow">Free Estimates</p>
            <h2>Ready to talk through your project?</h2>
          </div>
          <div className="hero-actions">
            <a className="button button-secondary" href={business.phoneHref}>
              Call {business.phone}
            </a>
            <Link className="button button-primary" href="/quote">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
