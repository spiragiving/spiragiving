import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageEntries, legacyRoutes } from "@/components/nonprofit/pages";
import { LegacyRedirect } from "@/components/nonprofit/legacy";
export const dynamicParams = false;
export function generateStaticParams() {
  return [...Object.keys(pageEntries), ...Object.keys(legacyRoutes)].map(
    (page) => ({ page }),
  );
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const { page } = await params;
  const entry = pageEntries[page];
  if (!entry)
    return {
      title: "Page moved",
      robots: { index: false, follow: true },
      alternates: { canonical: legacyRoutes[page] || "/" },
    };
  return {
    title: entry.title,
    description: entry.description,
    alternates: { canonical: `/${page}/` },
    openGraph: {
      title: `${entry.title} | Spira Giving Colorado`,
      description: entry.description,
      url: `/${page}/`,
    },
    twitter: { title: entry.title, description: entry.description },
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  if (legacyRoutes[page]) return <LegacyRedirect to={legacyRoutes[page]} />;
  const entry = pageEntries[page];
  if (!entry) notFound();
  const Component = entry.component;
  return <Component />;
}
