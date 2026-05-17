import Image from "next/image";
import lawnBeforeImg from "../../../public/images/projects/lawn-cleanup-before.png";
import lawnAfterImg from "../../../public/images/projects/lawn-cleanup-after.png";
import { IMAGE_SIZES } from "@/lib/images";

export function HomeIntroCompare() {
  return (
    <div
      className="intro-ba-showcase"
      aria-label="Land clearing before and after"
    >
      <div className="intro-ba-mats">
        <figure className="intro-ba-photo">
          <div className="intro-ba-mat">
            <div className="intro-ba-image">
              <Image
                src={lawnBeforeImg}
                alt="Partially wooded backyard with exposed soil, mulch, and fence before clearing and lawn prep"
                fill
                placeholder="blur"
                sizes={IMAGE_SIZES.introComparePair}
              />
            </div>
          </div>
          <figcaption className="intro-ba-label">Before</figcaption>
        </figure>
        <figure className="intro-ba-photo">
          <div className="intro-ba-mat">
            <div className="intro-ba-image">
              <Image
                src={lawnAfterImg}
                alt="Open green lawn after clearing, grading, and lawn installation"
                fill
                placeholder="blur"
                sizes={IMAGE_SIZES.introComparePair}
              />
            </div>
          </div>
          <figcaption className="intro-ba-label">After</figcaption>
        </figure>
      </div>
    </div>
  );
}
