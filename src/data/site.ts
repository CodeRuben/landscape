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

export const projectGroups = [
  {
    title: "Land Clearing",
    slug: "land-clearing",
    description:
      "Clearing overgrown spaces, removing brush, reshaping grades, and preparing land for lawns or future improvements.",
    images: [
      "land-clearing-to-lawn.jpg",
      "land-clearing-to-lawn-after.jpg",
      "brush-removal.jpg",
      "land-grading-clearing.jpg",
      "new-lawn-seeded-2-weeks.jpg",
      "new-lawn-seeded-8-weeks.jpg",
    ],
  },
  {
    title: "Sod Installation",
    slug: "sod-installation",
    description:
      "Finish grading and lawn preparation work for clean, even sod installation and curb appeal.",
    images: ["sod-installation.jpg", "sod-completion.jpg"],
  },
  {
    title: "French Drain Installation",
    slug: "french-drain-installation",
    description:
      "Drainage trenching and grading to redirect water and reduce wet spots around lawns and foundations.",
    images: [
      "french-drain-sscrape-grass.jpg",
      "french-drain-start-trench.jpg",
      "french-drain-dig-trench-backhoe.jpg",
      "french-drain-start-trench-2.jpg",
      "bobcat-backhoe-attachment.jpg",
    ],
  },
  {
    title: "In-ground Pool Removal",
    slug: "pool-removal",
    description:
      "Removal and backfilling work for old in-ground pools so yards can be reclaimed and regraded.",
    images: ["pool-removal-before.jpg", "pool-removal-after.jpg"],
  },
  {
    title: "Grub Damage Repair",
    slug: "grub-damage-repair",
    description:
      "Repairing damaged turf areas with soil preparation, grading, and lawn restoration support.",
    images: [
      "grub-damage-before.jpg",
      "grub-damage-during.jpg",
      "grub-damage-after.jpg",
    ],
  },
  {
    title: "Concrete Slab Removal",
    slug: "concrete-slab-removal",
    description:
      "Light demolition and removal of concrete slabs, patios, and similar small excavation projects.",
    images: ["slab-removal.jpg", "concrete-slab-removal.jpg", "concrete-removal.jpg"],
  },
];

export const quoteFields = [
  "Name",
  "Email Address",
  "Telephone Number",
  "Description of Work Needed",
];
