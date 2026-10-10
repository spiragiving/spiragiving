import { integrations } from "@/lib/data";
import { LegacyRedirect } from "@/components/nonprofit/legacy";
export const dynamicParams = false;
export const metadata = {
  title: "Page moved",
  robots: { index: false, follow: true },
  alternates: { canonical: "/work/" },
};
export function generateStaticParams() {
  return integrations.map(({ slug }) => ({ slug }));
}
export default function Page() {
  return <LegacyRedirect to="/work/" />;
}
