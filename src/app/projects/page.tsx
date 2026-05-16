import type { Metadata } from "next";
import { ProjectGallery } from "@/components/ProjectGallery";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "View K.H. White Bobcat Services project categories including land clearing, sod installation, French drains, pool removal, grub damage repair, and concrete slab removal.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <section className="page-section">
      <div className="container">
        <p className="eyebrow">Project Gallery</p>
        <h1 className="page-title">
          Land clearing, drainage, removal, and lawn preparation projects
        </h1>
        <p className="lede">
          The original WordPress site split these projects into several pages.
          This rebuild combines them into one simple project gallery so visitors
          can quickly understand the range of work.
        </p>
      </div>

      <div className="container project-jump-list" aria-label="Project sections">
        <a href="#land-clearing">Land Clearing</a>
        <a href="#sod-installation">Sod Installation</a>
        <a href="#french-drain-installation">French Drains</a>
        <a href="#pool-removal">Pool Removal</a>
        <a href="#grub-damage-repair">Grub Damage</a>
        <a href="#concrete-slab-removal">Slab Removal</a>
      </div>

      <div className="container">
        <ProjectGallery />
      </div>
    </section>
  );
}
