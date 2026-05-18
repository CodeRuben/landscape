/** Shared helpers and layout hints for `next/image`. */

export const IMAGE_SIZES = {
  /** Full-viewport banners (hero strip). */
  heroBanner: "100vw",
  /** Project gallery cells: three columns on large breakpoints. */
  galleryGrid: "(max-width: 620px) 100vw, (max-width: 900px) 50vw, 33vw",
  /** “Services we offer” cards on the home page. */
  serviceCardGrid: "(max-width: 620px) 100vw, (max-width: 900px) 50vw, 33vw",
  /** Before/after pair: stacked full width on small screens, paired wider up. */
  introComparePair:
    "(max-width: 620px) 100vw, (max-width: 900px) 44vw, min(520px, 50vw)",
  /** “Who we are” portrait block: full width once stacked (~1024px), else sidebar width. */
  whoPortrait: "(max-width: 1024px) 100vw, 42vw",
  /** About page hero visual (~half width tablet, fixed max on desktop). */
  aboutHero: "(max-width: 640px) 90vw, (max-width: 900px) 46vw, 440px",
} as const;

export function projectImageSrc(fileName: string) {
  return `/images/projects/${fileName}`;
}
