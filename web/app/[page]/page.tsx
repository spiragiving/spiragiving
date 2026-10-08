import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  PlatformPage,
  SolutionsPage,
  DevelopersPage,
  PricingPage,
  AboutPage,
  ContactPage,
  BlogPage,
  FAQPage,
  PrivacyPage,
  TermsPage,
} from "@/components/content-pages";
import { Directory } from "@/features/integrations/directory";
import { AuthForm } from "@/features/forms/auth-form";
import { Dashboard } from "@/features/dashboard/dashboard";
import { faq } from "@/lib/data";
export const dynamicParams = false;
const pages: Record<
  string,
  { title: string; description: string; component: React.ComponentType }
> = {
  platform: {
    title: "Platform",
    description:
      "Explore SPIRAGIVING’s vision for API connectivity, workflow automation, and integration management.",
    component: PlatformPage,
  },
  integrations: {
    title: "Integrations",
    description:
      "Browse illustrative software integrations, filter by category, and explore connected workflow use cases.",
    component: Directory,
  },
  solutions: {
    title: "Solutions",
    description:
      "Explore software connectivity use cases for startups, enterprises, developers, SaaS businesses, and agencies.",
    component: SolutionsPage,
  },
  developers: {
    title: "Developers",
    description:
      "Explore illustrative API requests, event patterns, and SPIRAGIVING developer architecture notes.",
    component: DevelopersPage,
  },
  pricing: {
    title: "Pricing",
    description:
      "Compare the proposed Starter, Pro, and Enterprise plans. Pricing and production availability to be confirmed.",
    component: PricingPage,
  },
  about: {
    title: "About us",
    description:
      "Our mission is to make digital connectivity simple. Read about SPIRAGIVING’s vision and principles.",
    component: AboutPage,
  },
  contact: {
    title: "Contact",
    description:
      "Prepare a local contact draft for an integration question, partnership idea, or enterprise requirement.",
    component: ContactPage,
  },
  blog: {
    title: "Journal",
    description:
      "Ideas on connected software ecosystems, thoughtful automation, and dependable workflow design.",
    component: BlogPage,
  },
  faq: {
    title: "Frequently asked questions",
    description:
      "Clear answers about SPIRAGIVING, the product demonstration, and planned production capabilities.",
    component: FAQPage,
  },
  privacy: {
    title: "Privacy policy",
    description:
      "Understand information handling, local preferences, and demonstration data on the SPIRAGIVING website.",
    component: PrivacyPage,
  },
  terms: {
    title: "Terms of service",
    description:
      "Terms for using the SPIRAGIVING public website and browser-based product demonstration.",
    component: TermsPage,
  },
  login: {
    title: "Log in",
    description:
      "Authentication preview. Explore the demonstration workspace without a production account.",
    component: AuthForm,
  },
  signup: {
    title: "Get started",
    description:
      "Explore SPIRAGIVING’s account creation preview and interactive product demonstration.",
    component: () => <AuthForm signup />,
  },
  dashboard: {
    title: "Demo workspace",
    description:
      "Interact with sample integrations, workflows, usage reports, and workspace settings. Demo data only.",
    component: Dashboard,
  },
};
export function generateStaticParams() {
  return Object.keys(pages).map((page) => ({ page }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const { page } = await params;
  const entry = pages[page];
  if (!entry) return {};
  return {
    title: entry.title,
    description: entry.description,
    alternates: { canonical: `/${page}/` },
    openGraph: {
      title: `${entry.title} | SPIRAGIVING`,
      description: entry.description,
      url: `/${page}/`,
    },
    twitter: {
      title: `${entry.title} | SPIRAGIVING`,
      description: entry.description,
    },
    robots: ["login", "signup", "dashboard"].includes(page)
      ? { index: false, follow: true }
      : undefined,
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const entry = pages[page];
  if (!entry) notFound();
  const Component = entry.component;
  return (
    <>
      {page === "faq" && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faq.map(([q, a]) => ({
                "@type": "Question",
                name: q,
                acceptedAnswer: { "@type": "Answer", text: a },
              })),
            }),
          }}
        />
      )}
      <Component />
    </>
  );
}
