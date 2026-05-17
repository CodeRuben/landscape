import { ProjectImage } from "@/components/ProjectImage";
import { projectGroups } from "@/data/site";

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
              <figure className="project-card" key={image.fileName}>
                <ProjectImage fileName={image.fileName} alt={image.alt} />
              </figure>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
