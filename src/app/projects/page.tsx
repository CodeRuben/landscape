import type { Metadata } from "next";
import { ProjectGallery } from "@/components/ProjectGallery";
import { getProjectGalleryJumpLinks } from "@/lib/project-nav";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "View K.H. White Bobcat Services project categories including land clearing, sod installation, French drains, pool removal, grub damage repair, and concrete slab removal.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  const jumpLinks = getProjectGalleryJumpLinks();

  return (
    <section className="page-section">
      <div className="container">
        <p className="eyebrow">Project Gallery</p>
        <h1 className="page-title">
          Land clearing, drainage, removal, and lawn preparation projects
        </h1>
        <p className="lede">
          Browse before-and-after and in-progress shots by project type—from land clearing
          and sod to French drains, pool removal, grub repair, and small concrete
          removals—so you can see how we tackle real MetroWest yards.
        </p>
      </div>

      <div className="container project-jump-list" aria-label="Project sections">
        {jumpLinks.map((link) => (
          <a key={link.slug} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>

      <div className="container">
        <ProjectGallery />
      </div>
    </section>
  );
}
