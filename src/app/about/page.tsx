import type { Metadata } from "next";
import Image from "next/image";
import { business, services } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about K.H. White Bobcat Services, a MetroWest Massachusetts excavation and bobcat services company established in 1989.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="section section-intro">
        <div className="container who-block">
          <div className="about-hero-visual">
            <figure className="intro-ba-photo">
              <div className="intro-ba-mat">
                <div className="intro-ba-image">
                  <Image
                    src="/images/projects/french-drain-dig-trench-backhoe.jpg"
                    alt="Trench excavation for a French drain with compact backhoe equipment"
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 900px) 46vw, 440px"
                    priority
                  />
                </div>
              </div>
            </figure>
          </div>
          <div className="who-copy">
            <p className="eyebrow">About K.H. White</p>
            <h1 className="page-title">
              Experienced bobcat and excavation services since {business.founded}
            </h1>
            <p className="lede">
              Established in 1989, Kevin White has provided the MetroWest area
              with quality Bobcat excavator service. K.H. White Bobcat Services
              has decades of operating experience across excavation, land
              development, grading, drainage, and lawn installation.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-muted about-services-section">
        <div className="container">
          <div className="about-services-section-head">
            <div>
              <p className="eyebrow">Capabilities</p>
              <h2>Services offered</h2>
            </div>
            <p className="about-services-section-lede">
              Hands-on work for tight backyards and larger stretches of grade,
              from clearing and drainage to lawn prep.
            </p>
          </div>

          <ul className="about-service-catalog" aria-label="Services offered">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
