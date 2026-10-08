"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ChevronDown,
  Network,
  Code2,
  Workflow,
  LayoutDashboard,
  ShieldCheck,
  Cloud,
  Check,
  Plus,
} from "lucide-react";
import { type ReactNode } from "react";
import { features, faq } from "@/lib/data";
export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-header container">
      <span className="eyebrow">
        <span className="eyebrow-line" />
        {eyebrow}
      </span>
      <h1>{title}</h1>
      <p>{description}</p>
      {children}
    </section>
  );
}
export function SectionHeading({
  label,
  title,
  text,
}: {
  label: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{label}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
export function Features() {
  const icons = [Network, Code2, Workflow, LayoutDashboard, ShieldCheck, Cloud];
  return (
    <div className="feature-grid">
      {features.map(([name, text], i) => {
        const Icon = icons[i];
        return (
          <Reveal className={`feature-card feature-${i}`} key={name}>
            <span className="feature-icon">
              <Icon size={23} />
            </span>
            <h3>{name}</h3>
            <p>{text}</p>
            <span className="feature-index">0{i + 1}</span>
          </Reveal>
        );
      })}
    </div>
  );
}
export function FAQ({ limit }: { limit?: number }) {
  return (
    <div className="faq-list">
      {faq.slice(0, limit).map(([q, a]) => (
        <details key={q}>
          <summary>
            {q}
            <Plus size={19} />
          </summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  );
}
export function CTA() {
  return (
    <section className="container cta-wrap">
      <Reveal className="cta">
        <span className="eyebrow">Your next connection starts here</span>
        <h2>
          Ready to connect
          <br />
          your digital world?
        </h2>
        <p>Bring your applications, services, and workflows together.</p>
        <div className="button-row">
          <Link className="button button-white" href="/signup">
            Get started
          </Link>
          <Link className="button button-cta-secondary" href="/contact">
            Let’s talk
          </Link>
        </div>
        <span className="cta-orbit" aria-hidden="true" />
        <span className="cta-orbit second" aria-hidden="true" />
      </Reveal>
    </section>
  );
}
export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="check-list">
      {items.map((text) => (
        <li key={text}>
          <Check size={16} />
          {text}
        </li>
      ))}
    </ul>
  );
}
export function Notice({ children }: { children: ReactNode }) {
  return (
    <div className="notice">
      <span className="notice-label">Product preview</span>
      <p>{children}</p>
    </div>
  );
}
