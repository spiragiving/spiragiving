import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/lib/data";
import { PageHeader, CTA } from "@/components/shared";
export const dynamicParams = false;
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  return article
    ? {
        title: article.title,
        description: article.excerpt,
        alternates: { canonical: `/blog/${slug}/` },
        openGraph: {
          title: article.title,
          description: article.excerpt,
          type: "article",
          url: `/blog/${slug}/`,
        },
        twitter: { title: article.title, description: article.excerpt },
      }
    : {};
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();
  return (
    <>
      <PageHeader
        eyebrow={article.category}
        title={article.title}
        description={article.excerpt}
      >
        <div className="article-meta" style={{ marginTop: 30, maxWidth: 400 }}>
          <span>SPIRAGIVING editorial · {article.date}</span>
          <span>{article.time}</span>
        </div>
      </PageHeader>
      <article className="container article-body">
        <nav className="breadcrumb">
          <Link href="/blog">Back to journal</Link>
        </nav>
        {article.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <div className="panel">
          <h3>Explore the idea in practice.</h3>
          <p>
            Try the sample connection and workflow experience in our demo
            workspace.
          </p>
          <Link
            className="button button-secondary"
            href="/dashboard"
            style={{ marginTop: 20 }}
          >
            Open product demo
          </Link>
        </div>
      </article>
      <CTA />
    </>
  );
}
