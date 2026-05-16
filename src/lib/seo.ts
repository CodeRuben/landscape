import { business, services } from "@/data/site";

export const defaultDescription =
  "K.H. White Bobcat Services provides excavation, grading, land clearing, drainage, French drain, sod installation, and light demolition services across MetroWest Massachusetts.";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    legalName: business.legalName,
    url: business.siteUrl,
    telephone: business.phone,
    foundingDate: business.founded,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: "US",
    },
    areaServed: business.serviceArea.map((area) => ({
      "@type": "City",
      name: area,
    })),
    knowsAbout: services,
    priceRange: "$$",
  };
}
