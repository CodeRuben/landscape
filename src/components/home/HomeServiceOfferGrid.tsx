import Link from "next/link";
import Image from "next/image";
import { homeServiceCards } from "@/data/home-service-cards";
import { IMAGE_SIZES, projectImageSrc } from "@/lib/images";

export function HomeServiceOfferGrid() {
  return (
    <div className="container service-feature-grid">
      {homeServiceCards.map((item) => (
        <Link
          className="service-feature-card"
          href={`/projects#${item.slug}`}
          key={item.id}
        >
          <div className="service-feature-image">
            <Image
              src={projectImageSrc(item.image)}
              alt={item.imageAlt}
              fill
              sizes={IMAGE_SIZES.serviceCardGrid}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
