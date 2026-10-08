import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { integrations } from "@/lib/data";
import { AppIcon } from "@/features/integrations/directory";
import { CheckList, Notice, CTA } from "@/components/shared";
export const dynamicParams = false;
export function generateStaticParams() {
  return integrations.map((a) => ({ slug: a.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const app = integrations.find((a) => a.slug === slug);
  return app
    ? {
        title: `${app.name} integration`,
        description: app.description + " Illustrative connector, coming soon.",
        alternates: { canonical: `/integrations/${slug}/` },
        openGraph: {
          title: `${app.name} integration | SPIRAGIVING`,
          description: app.description,
          url: `/integrations/${slug}/`,
        },
        twitter: {
          title: `${app.name} integration`,
          description: app.description,
        },
      }
    : {};
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = integrations.find((a) => a.slug === slug);
  if (!app) notFound();
  return (
    <>
      <section className="container page-header">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/integrations">Integrations</Link>
          <ChevronRight size={13} />
          <span>{app.name}</span>
        </nav>
        <div className="detail-heading">
          <AppIcon app={app} />
          <div>
            <h1>{app.name}</h1>
            <p>{app.category} · Illustrative integration</p>
          </div>
        </div>
        <p>{app.description}</p>
        <div className="button-row">
          <Link className="button button-primary" href="/dashboard">
            Explore connection demo
          </Link>
          <Link className="button button-secondary" href="/contact">
            Prepare an integration inquiry
          </Link>
        </div>
      </section>
      <div className="container page-body">
        <Notice>
          This connector is coming soon. The example below describes a possible
          use case, not an implemented integration or official partnership.
        </Notice>
        <div className="two-column">
          <section className="panel">
            <h2 style={{ fontSize: 30 }}>A connection worth exploring.</h2>
            <p style={{ marginTop: 22 }}>{app.useCase}</p>
            <CheckList
              items={[
                "Define the trigger and required data",
                "Choose the minimum permissions",
                "Map fields and validate the payload",
                "Review failures and duplicate events",
              ]}
            />
          </section>
          <section className="panel">
            <h3>How setup is intended to work</h3>
            <ol className="setup-list">
              <li>Select {app.name} from the directory.</li>
              <li>Review the authorization method and access scopes.</li>
              <li>Configure the workflow and field mapping.</li>
              <li>Validate a sample event before enabling a connection.</li>
            </ol>
            <p>
              Authentication, provider access, and production event processing
              must be implemented before this connector becomes available.
            </p>
          </section>
        </div>
        <div className="subsection">
          <h2 style={{ fontSize: 32 }}>Explore a related connection.</h2>
          <div className="related-links">
            {integrations
              .filter((a) => a.slug !== slug)
              .filter((a) => a.category === app.category)
              .concat(
                integrations.filter(
                  (a) => a.slug !== slug && a.category !== app.category,
                ),
              )
              .slice(0, 3)
              .map((a) => (
                <Link
                  className="panel"
                  key={a.slug}
                  href={`/integrations/${a.slug}`}
                >
                  <AppIcon app={a} />
                  <h3>{a.name}</h3>
                  <p>{a.description}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
      <CTA />
    </>
  );
}
