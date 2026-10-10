import type { Metadata, Viewport } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "./globals.css";
import { NonprofitShell } from "@/components/nonprofit/shell";
import brandAssets from "@/lib/brand-assets.json";
export const metadata: Metadata = {
  metadataBase: new URL("https://spiragiving.dev"),
  title: {
    default: "Spira Giving Colorado | Giving Culture Room to Grow",
    template: "%s | Spira Giving Colorado",
  },
  description:
    "A Denver-based private foundation supporting selected charitable organizations in arts and culture. Discover our giving, public records and Colorado’s creative community.",
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: brandAssets.png, type: "image/png", sizes: "32x32" },
      { url: brandAssets.svg, type: "image/svg+xml", sizes: "any" },
    ],
    shortcut: [{ url: brandAssets.ico, type: "image/x-icon" }],
    apple: [{ url: brandAssets.apple, type: "image/png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Spira Giving Colorado — Giving Culture Room to Grow",
    description:
      "Supporting the organizations that bring music, creativity and connection to life in Colorado.",
    siteName: "Spira Giving Colorado",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/photos/performance.jpg",
        width: 1800,
        height: 1200,
        alt: "Illustrative photograph of a violinist rehearsing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spira Giving Colorado",
    description: "Giving culture room to grow in Colorado.",
    images: ["/photos/performance.jpg"],
  },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#183e35",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <NonprofitShell>{children}</NonprofitShell>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              name: "Spira Giving Colorado",
              alternateName: "SpiraGiving",
              url: "https://spiragiving.dev",
              taxID: "88-2401698",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Denver",
                addressRegion: "CO",
                addressCountry: "US",
              },
              description:
                "Private foundation supporting selected charitable organizations in arts and culture in Colorado.",
            }),
          }}
        />
      </body>
    </html>
  );
}
