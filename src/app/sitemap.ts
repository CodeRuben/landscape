import type { MetadataRoute } from "next";
import { business } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/projects", "/location", "/quote"];

  return routes.map((route) => ({
    url: `${business.siteUrl}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
