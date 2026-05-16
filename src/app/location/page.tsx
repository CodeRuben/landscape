import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/data/site";

export const metadata: Metadata = {
  title: "Location",
  description:
    "K.H. White Bobcat Services is based in Natick, MA and serves Framingham, Wellesley, Sudbury, Weston, Wayland, and MetroWest Massachusetts.",
  alternates: {
    canonical: "/location",
  },
};

export default function LocationPage() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${business.address.street}, ${business.address.city}, ${business.address.state} ${business.address.zip}`,
  )}`;

  const mapEmbedQuery = encodeURIComponent(
    `${business.address.street}, ${business.address.city}, ${business.address.state} ${business.address.zip}`,
  );

  return (
    <section className="page-section location-page">
      <div className="container location-layout">
        <header className="location-intro">
          <p className="eyebrow">Location</p>
          <h1 className="page-title">
            Bobcat services based in Natick, serving MetroWest MA
          </h1>
          <p className="lede">
            K.H. White Bobcat Services works throughout Natick, Framingham,
            Wellesley, Sudbury, Weston, Wayland, and nearby towns.
          </p>
        </header>

        <div className="location-body">
          <div className="map-panel location-map">
            <iframe
              title="Map to K.H. White Bobcat Services"
              src={`https://www.google.com/maps?q=${mapEmbedQuery}&output=embed`}
              loading="lazy"
            />
          </div>

          <aside className="location-aside" aria-label="Address and actions">
            <div className="address-card">
              <h2>{business.name}</h2>
              <p>
                {business.address.street}
                <br />
                {business.address.city}, {business.address.state}
                <br />
                {business.address.zip}
                <br />
                <a href={business.phoneHref}>{business.phone}</a>
              </p>
            </div>
            <div className="hero-actions location-actions">
              <a className="button button-primary" href={mapsUrl}>
                Open in Google Maps
              </a>
              <Link className="button button-secondary" href="/quote">
                Request a Quote
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
