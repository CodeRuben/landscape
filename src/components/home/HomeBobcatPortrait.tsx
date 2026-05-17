import Image from "next/image";
import bobcatGroup from "../../../public/images/projects/bobcat-group.jpg";
import { IMAGE_SIZES } from "@/lib/images";

export function HomeBobcatPortrait() {
  return (
    <div className="who-image">
      <Image
        src={bobcatGroup}
        alt="Bobcat compact equipment used for excavation and landscaping work"
        fill
        sizes={IMAGE_SIZES.whoPortrait}
        placeholder="blur"
      />
    </div>
  );
}
