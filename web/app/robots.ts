import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/dashboard/",
        "/login/",
        "/signup/",
        "/integrations/",
        "/platform/",
        "/pricing/",
        "/developers/",
        "/solutions/",
      ],
    },
    sitemap: "https://spiragiving.dev/sitemap.xml",
  };
}
