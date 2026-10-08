import type { Metadata, Viewport } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/jetbrains-mono/400.css";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";
export const metadata: Metadata = {
  metadataBase: new URL("https://spiragiving.dev"),
  title: {
    default: "SPIRAGIVING | Software Connectivity Platform",
    template: "%s | SPIRAGIVING",
  },
  description:
    "Connect software, integrate APIs, and automate digital workflows with SPIRAGIVING’s unified technology platform. Explore our product vision and interactive demo.",
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg", apple: "/app-icon.svg" },
  openGraph: {
    title: "SPIRAGIVING — Connect Everything. Build Without Limits.",
    description:
      "One platform. Endless integrations. Explore a more connected digital future.",
    siteName: "SPIRAGIVING",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "SPIRAGIVING",
    description: "Connect Everything. Build Without Limits.",
  },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09090f",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SiteShell>{children}</SiteShell>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SPIRAGIVING",
              url: "https://spiragiving.dev",
              logo: "https://spiragiving.dev/logo-light.svg",
              sameAs: ["https://github.com/spiragiving/spiragiving"],
              description: "Software connectivity platform in development.",
            }),
          }}
        />
      </body>
    </html>
  );
}
