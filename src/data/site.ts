export const business = {
  name: "K.H. White Bobcat Services",
  legalName: "K.H. White Bobcat Services",
  phone: "(508) 655-6165",
  phoneHref: "tel:+15086556165",
  email: "",
  address: {
    street: "P.O BOX 2042",
    city: "Natick",
    state: "MA",
    zip: "01760",
  },
  serviceArea: [
    "Natick",
    "Framingham",
    "Wellesley",
    "Sudbury",
    "Weston",
    "Wayland",
    "Sherborn",
    "Dover",
    "Ashland",
    "MetroWest Massachusetts",
  ],
  founded: "1989",
  siteUrl: "https://www.khwhitebobcat.com",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Location", href: "/location" },
  { label: "Request a Quote", href: "/quote" },
];

export const services = [
  "Land Clearing",
  "Grading",
  "Drainage",
  "Terracing",
  "French Drains",
  "Backfilling Foundations",
  "Soil Removal and Installation",
  "In-ground Pool Removals",
  "Slab Foundation Removal",
  "Light Demolition",
  "Sod Installation",
  "Lawn Installation",
];

export type ProjectGalleryImage = {
  fileName: string;
  alt: string;
};

export const projectGroups: ReadonlyArray<{
  title: string;
  slug: string;
  description: string;
  images: readonly ProjectGalleryImage[];
}> = [
  {
    title: "Land Clearing",
    slug: "land-clearing",
    description:
      "Clearing overgrown spaces, removing brush, reshaping grades, and preparing land for lawns or future improvements.",
    images: [
      {
        fileName: "brush-removal.jpg",
        alt: "Dense brush pile and woody debris cleared from a backyard during land clearing",
      },
      {
        fileName: "land-grading-clearing.jpg",
        alt: "Compact loader grading and smoothing soil on a freshly cleared yard",
      },
      {
        fileName: "new-lawn-seeded-8-weeks.jpg",
        alt: "Established lawn about eight weeks after seeding with even grass cover",
      },
      {
        fileName: "land-clearing-to-lawn.jpg",
        alt: "Overgrown brush and edge growth on a residential lot before bobcat clearing work",
      },
      {
        fileName: "land-clearing-to-lawn-after.jpg",
        alt: "The same cleared area rough-graded and opened up, ready for seeding or sod preparation",
      },
    ],
  },
  {
    title: "Sod Installation",
    slug: "sod-installation",
    description:
      "Finish grading and lawn preparation work for clean, even sod installation and curb appeal.",
    images: [
      {
        fileName: "sod-installation.jpg",
        alt: "Fresh sod rolls being laid onto prepared grade along the edge of a house lot",
      },
      {
        fileName: "sod-completion.jpg",
        alt: "Completed sod lawn with tight seams and a smooth finish toward the foundation",
      },
    ],
  },
  {
    title: "French Drain Installation",
    slug: "french-drain-installation",
    description:
      "Drainage trenching and grading to redirect water and reduce wet spots around lawns and foundations.",
    images: [
      {
        fileName: "french-drain-sscrape-grass.jpg",
        alt: "Turf scraped back along a shallow line to expose the path for a French drain trench",
      },
      {
        fileName: "french-drain-start-trench.jpg",
        alt: "Drainage trench started across a lawn with soil laid to the side of the cut",
      },
      {
        fileName: "french-drain-dig-trench-backhoe.jpg",
        alt: "Small backhoe attachment deepening a drainage trench beside a seeded yard",
      },
      {
        fileName: "french-drain-start-trench-2.jpg",
        alt: "Long open drainage trench through grass with excavation spoil beside the trench",
      },
      {
        fileName: "bobcat-backhoe-attachment.jpg",
        alt: "Bobcat compact loader fitted with a backhoe arm parked at a trenching jobsite",
      },
    ],
  },
  {
    title: "In-ground Pool Removal",
    slug: "pool-removal",
    description:
      "Removal and backfilling work for old in-ground pools so yards can be reclaimed and regraded.",
    images: [
      {
        fileName: "pool-removal-before.jpg",
        alt: "In-ground backyard swimming pool awaiting demolition and backfill removal",
      },
      {
        fileName: "pool-removal-after.jpg",
        alt: "Leveled backyard after pool shell removal and backfill, cleared for grading or lawn",
      },
    ],
  },
  {
    title: "Re-grading",
    slug: "re-grading",
    description:
      "A hilled area can be re-graded to create flat usable land that can expand your lawn.",
    images: [
      {
        fileName: "bobcat-grapple.jpg",
        alt: "Bobcat loader with grapple attachment re-grading a sloped hillside near a home",
      },
      {
        fileName: "lawn-leveling-after.jpg",
        alt: "Graded backyard terrace covered with mulch beside a lawn after leveling work",
      },
    ],
  },
  {
    title: "Grub Damage Repair",
    slug: "grub-damage-repair",
    description:
      "Repairing damaged turf areas with soil preparation, grading, and lawn restoration support.",
    images: [
      {
        fileName: "grub-damage-before.jpg",
        alt: "Thin, brown, and patchy turf showing stress typical of grub damage before repair",
      },
      {
        fileName: "grub-damage-during.jpg",
        alt: "Lawn area disturbed for soil work and regrading while restoring grub-damaged turf",
      },
      {
        fileName: "grub-damage-after.jpg",
        alt: "Restored lawn area with improved soil and healthy grass cover after grub repair work",
      },
    ],
  },
  {
    title: "Concrete Slab Removal",
    slug: "concrete-slab-removal",
    description:
      "Light demolition and removal of concrete slabs, patios, and similar small excavation projects.",
    images: [
      {
        fileName: "slab-removal.jpg",
        alt: "Broken concrete patio pieces stacked on a lawn during small slab demolition",
      },
      {
        fileName: "concrete-slab-removal.jpg",
        alt: "Concrete slab section broken and separated for loader or hand removal from the yard",
      },
      {
        fileName: "concrete-removal.jpg",
        alt: "Excavation area cleared after concrete debris from a patio or slab was removed",
      },
    ],
  },
];

export const quoteFields = [
  "Name",
  "Email Address",
  "Telephone Number",
  "Description of Work Needed",
];

export function getProjectGroupBySlug(slug: string) {
  const group = projectGroups.find((p) => p.slug === slug);
  if (!group) {
    throw new Error(`Missing project group: ${slug}`);
  }
  return group;
}
