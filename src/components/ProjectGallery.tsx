import { projectGroups } from "@/data/site";
import { ProjectImage } from "@/components/ProjectImage";

function prettyName(fileName: string) {
  return fileName
    .replace(/\.(jpg|jpeg|png|gif|webp)$/i, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export function ProjectGallery() {
  return (
    <div className="project-stack project-gallery">
      {projectGroups.map((group) => (
        <section className="project-section" id={group.slug} key={group.slug}>
          <div className="section-heading section-heading-left">
            <p className="eyebrow">Project Type</p>
            <h2>{group.title}</h2>
            <p>{group.description}</p>
          </div>

          <div className="gallery-grid">
            {group.images.map((image) => (
              <figure className="project-card" key={image}>
                <ProjectImage fileName={image} alt={prettyName(image)} />
              </figure>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
