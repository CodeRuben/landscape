import { getProjectGroupBySlug } from "@/data/site";

const landClearing = getProjectGroupBySlug("land-clearing");
const sodInstallation = getProjectGroupBySlug("sod-installation");
const frenchDrain = getProjectGroupBySlug("french-drain-installation");
const poolRemoval = getProjectGroupBySlug("pool-removal");
const reGrading = getProjectGroupBySlug("re-grading");
const grubRepair = getProjectGroupBySlug("grub-damage-repair");

/**
 * Home “Services we offer” cards — three columns on large screens.
 * Each row must have a stable `id` for React keys (slugs repeat for some offerings).
 */
export const homeServiceCards = [
  {
    id: "land-clearing",
    slug: landClearing.slug,
    title: landClearing.title,
    description: landClearing.description,
    image: "land-clearing-to-lawn-after.jpg",
    imageAlt: landClearing.title,
  },
  {
    id: "sod",
    slug: sodInstallation.slug,
    title: sodInstallation.title,
    description: sodInstallation.description,
    image: "sod-installation.jpg",
    imageAlt: sodInstallation.title,
  },
  {
    id: "drain",
    slug: frenchDrain.slug,
    title: frenchDrain.title,
    description: frenchDrain.description,
    image: "french-drain-dig-trench-backhoe.jpg",
    imageAlt: frenchDrain.title,
  },
  {
    id: "pool",
    slug: poolRemoval.slug,
    title: poolRemoval.title,
    description: poolRemoval.description,
    image: "pool-removal-after.jpg",
    imageAlt: poolRemoval.title,
  },
  {
    id: "replant",
    slug: grubRepair.slug,
    title: "Lawn replanting",
    description:
      "Restore lawns damaged by grubs and pets with grading, soil preparation, and replanting.",
    image: "grub-damage-after.jpg",
    imageAlt: "Healthy lawn after grub damage repair and replanting",
  },
  {
    id: "regrade",
    slug: reGrading.slug,
    title: reGrading.title,
    description: reGrading.description,
    image: "lawn-leveling-after.jpg",
    imageAlt:
      "Graded backyard terrace covered with mulch beside a lawn after leveling work",
  },
] as const;
