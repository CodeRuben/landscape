"use client";

import { useState } from "react";
import Image from "next/image";

type ProjectImageProps = {
  fileName: string;
  alt: string;
};

export function ProjectImage({ fileName, alt }: ProjectImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="image-placeholder">
        <span>{alt}</span>
      </div>
    );
  }

  return (
    <div className="project-image-wrapper">
      <Image
        className="project-image"
        src={`/images/projects/${fileName}`}
        alt={alt}
        fill
        sizes="(max-width: 620px) 100vw, (max-width: 900px) 50vw, 33vw"
        onError={() => setHasError(true)}
      />
    </div>
  );
}
