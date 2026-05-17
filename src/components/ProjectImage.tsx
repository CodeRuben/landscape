import Image from "next/image";
import { IMAGE_SIZES, projectImageSrc } from "@/lib/images";

type ProjectImageProps = {
  fileName: string;
  alt: string;
};

export function ProjectImage({ fileName, alt }: ProjectImageProps) {
  return (
    <div className="project-image-wrapper">
      <Image
        className="project-image"
        src={projectImageSrc(fileName)}
        alt={alt}
        fill
        sizes={IMAGE_SIZES.galleryGrid}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
