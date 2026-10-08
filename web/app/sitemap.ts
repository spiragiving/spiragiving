import type { MetadataRoute } from "next";
import { integrations, articles } from "@/lib/data";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "platform",
    "integrations",
    "solutions",
    "developers",
    "pricing",
    "about",
    "contact",
    "blog",
    "faq",
    "privacy",
    "terms",
    ...integrations.map((a) => "integrations/" + a.slug),
    ...articles.map((a) => "blog/" + a.slug),
  ].map((path) => ({
    url: `https://spiragiving.dev/${path}${path ? "/" : ""}`,
    lastModified: "2026-10-08",
    priority: path ? 0.7 : 1,
  }));
}
