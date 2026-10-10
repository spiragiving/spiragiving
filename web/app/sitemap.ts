import type { MetadataRoute } from "next";
import { stories } from "@/lib/nonprofit";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "about",
    "work",
    "impact",
    "contact",
    "donate",
    "volunteer",
    "blog",
    "faq",
    "privacy",
    "terms",
    ...stories.map((s) => `blog/${s.slug}`),
  ].map((path) => ({
    url: `https://spiragiving.dev/${path}${path ? "/" : ""}`,
    lastModified: "2026-10-10",
    priority: path ? 0.7 : 1,
  }));
}
