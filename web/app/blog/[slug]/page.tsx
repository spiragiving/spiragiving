import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { stories } from "@/lib/nonprofit";
import { articles } from "@/lib/data";
import { PageIntro, Photo, TextLink } from "@/components/nonprofit/common";
import { LegacyRedirect } from "@/components/nonprofit/legacy";
import { ArrowUpRight } from "lucide-react";
export const dynamicParams = false;
export function generateStaticParams() {
  return [...stories, ...articles].map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = stories.find((s) => s.slug === slug);
  return story
    ? {
        title: story.title,
        description: story.excerpt,
        alternates: { canonical: `/blog/${slug}/` },
        openGraph: {
          title: story.title,
          description: story.excerpt,
          type: "article",
          url: `/blog/${slug}/`,
          images: [story.image],
        },
      }
    : {
        title: "Journal page moved",
        robots: { index: false, follow: true },
        alternates: { canonical: "/blog/" },
      };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = stories.find((s) => s.slug === slug);
  if (!story) {
    if (articles.some((a) => a.slug === slug))
      return <LegacyRedirect to="/blog/" />;
    notFound();
  }
  return (
    <>
      <PageIntro
        eyebrow={`${story.category} / ${story.date}`}
        title={story.title}
        description={story.excerpt}
      />
      <div className="wrap">
        <Photo
          className="article-cover"
          src={story.image}
          alt="Illustrative arts and culture photograph"
        />
        <p className="image-caption">
          Illustrative photograph. Read the linked source for documentation of
          the actual activity.
        </p>
      </div>
      <article className="article-body">
        {story.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <section className="article-source">
          <h2>Go to the source.</h2>
          <p>
            This article summarizes publicly available information. Visit the
            original source for full details and subsequent updates.
          </p>
          <a
            className="text-link"
            href={story.source}
            target="_blank"
            rel="noreferrer"
          >
            {story.sourceName}
            <ArrowUpRight size={17} />
          </a>
        </section>
        <TextLink href="/blog/">Back to the journal</TextLink>
      </article>
    </>
  );
}
