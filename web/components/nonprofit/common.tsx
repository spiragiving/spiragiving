import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export function Bloom({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
    >
      {Array.from({ length: 8 }, (_, i) => (
        <ellipse
          key={i}
          cx="50"
          cy="25"
          rx="12"
          ry="24"
          transform={`rotate(${i * 45} 50 50)`}
          fill="currentColor"
        />
      ))}
      <circle cx="50" cy="50" r="12" fill="var(--paper)" />
    </svg>
  );
}
export function Wordmark() {
  return (
    <span className="wordmark">
      <Bloom />
      <span>
        Spira<span className="wordmark-light">Giving</span>
        <small>COLORADO</small>
      </span>
    </span>
  );
}
export function Action({
  href,
  children,
  secondary = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
  className?: string;
}) {
  return (
    <Link
      className={`action ${secondary ? "action-outline" : ""} ${className}`}
      href={href}
    >
      {children}
      <ArrowUpRight size={18} />
    </Link>
  );
}
export function TextLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link className="text-link" href={href}>
      {children}
      <ArrowRight size={18} />
    </Link>
  );
}
export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-intro wrap">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="intro-description">{description}</p>
    </section>
  );
}
export function Invitation() {
  return (
    <section className="invitation">
      <div className="wrap invitation-inner">
        <Bloom />
        <div>
          <p className="eyebrow">A more vibrant Colorado</p>
          <h2>
            There’s a place for
            <br />
            <em>all of us.</em>
          </h2>
          <p>
            Discover the organizations bringing creative life to our
            communities.
          </p>
          <Action href="/work/">Explore our giving</Action>
        </div>
      </div>
    </section>
  );
}
export function Photo({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      width={1800}
      height={1200}
    />
  );
}
