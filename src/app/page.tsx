import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { business, projectGroups } from "@/data/site";

function projectBySlug(slug: string) {
  const group = projectGroups.find((p) => p.slug === slug);
  if (!group) {
    throw new Error(`Missing project group: ${slug}`);
  }
  return group;
}

const landClearing = projectBySlug("land-clearing");
const sodInstallation = projectBySlug("sod-installation");
const frenchDrain = projectBySlug("french-drain-installation");
const poolRemoval = projectBySlug("pool-removal");
const grubRepair = projectBySlug("grub-damage-repair");

/** Home “Services we offer” cards — three per row */
const servicesWeOffer = [
  {
    slug: landClearing.slug,
    title: landClearing.title,
    description: landClearing.description,
    image: "land-clearing-to-lawn-after.jpg",
  },
  {
    slug: sodInstallation.slug,
    title: sodInstallation.title,
    description: sodInstallation.description,
    image: "sod-installation.jpg",
  },
  {
    slug: frenchDrain.slug,
    title: frenchDrain.title,
    description: frenchDrain.description,
    image: "french-drain-dig-trench-backhoe.jpg",
  },
  {
    slug: poolRemoval.slug,
    title: poolRemoval.title,
    description: poolRemoval.description,
    image: "pool-removal-after.jpg",
  },
  {
    slug: grubRepair.slug,
    title: "Lawn replanting",
    description:
      "Restore lawns damaged by grubs and pets with grading, soil preparation, and replanting.",
    image: "grub-damage-after.jpg",
    imageAlt: "Healthy lawn after grub damage repair and replanting",
  },
  {
    slug: landClearing.slug,
    title: "Re-grading",
    description:
      "Regrade hilled areas to create more flat, usable land.",
    image: "lawn-leveling-after.jpg",
    imageAlt:
      "Graded backyard terrace covered with mulch beside a lawn after leveling work",
  },
];

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
              We use compact equipment to clear heavy brush and tight wooded
              edges, then grade and prep the soil so overgrown areas like these
              can become open, plantable lawn.
            </p>
            <Link className="button button-primary" href="/quote">
              Contact Us
            </Link>
          </div>
          <div
            className="intro-ba-showcase"
            aria-label="Land clearing before and after"
          >
            <div className="intro-ba-mats">
              <figure className="intro-ba-photo">
                <div className="intro-ba-mat">
                  <div className="intro-ba-image">
                    <Image
                      src="/images/projects/lawn-cleanup-before.png"
                      alt="Partially wooded backyard with exposed soil, mulch, and fence before clearing and lawn prep"
                      fill
                      sizes="(max-width: 640px) 42vw, (max-width: 900px) 44vw, 520px"
                    />
                  </div>
                </div>
                <figcaption className="intro-ba-label">Before</figcaption>
              </figure>
              <figure className="intro-ba-photo">
                <div className="intro-ba-mat">
                  <div className="intro-ba-image">
                    <Image
                      src="/images/projects/lawn-cleanup-after.png"
                      alt="Open green lawn after clearing, grading, and lawn installation"
                      fill
                      sizes="(max-width: 640px) 42vw, (max-width: 900px) 44vw, 520px"
                    />
                  </div>
                </div>
                <figcaption className="intro-ba-label">After</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container section-heading">
          <p className="eyebrow">Services We Offer</p>
          <h2>Focused excavation and landscape preparation services</h2>
          <p>
            A simpler service lineup than a full landscape company, but built
            around the work homeowners often need before planting, building, or
            restoring a yard.
          </p>
        </div>

        <div className="container service-feature-grid">
          {servicesWeOffer.map((item) => (
            <Link
              className="service-feature-card"
              href={`/projects#${item.slug}`}
              key={item.image}
            >
              <div className="service-feature-image">
                <Image
                  src={`/images/projects/${item.image}`}
                  alt={item.imageAlt ?? item.title}
                  fill
                  sizes="(max-width: 620px) 100vw, (max-width: 900px) 50vw, 33vw"
                />
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container who-block who-block--tight-media">
          <div className="who-image">
            <Image
              src="/images/projects/bobcat-group.jpg"
              alt="Bobcat compact equipment used for excavation and landscaping work"
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
            />
          </div>
          <div className="who-copy">
            <p className="eyebrow">Who We Are</p>
            <h2>Serving MetroWest since {business.founded}</h2>
            <p>
              Established in 1989, Kevin White has provided the MetroWest area
              with quality Bobcat excavator service. K.H. White Bobcat Services
              has over 25 years operating experience, handling excavation and
              land development from land clearing through final grade and lawn
              installation.
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
