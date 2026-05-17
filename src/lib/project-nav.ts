import { projectGroups } from "@/data/site";

const SHORT_LABELS: Partial<Record<string, string>> = {
  "french-drain-installation": "French Drains",
  "grub-damage-repair": "Grub Damage",
};

/** Jump links rendered above the gallery (compact labels vs full titles). */
export function getProjectGalleryJumpLinks() {
  return projectGroups.map((group) => ({
    slug: group.slug,
    label: SHORT_LABELS[group.slug] ?? group.title,
    href: `#${group.slug}`,
  }));
}
