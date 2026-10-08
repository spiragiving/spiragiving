"use client";
import Link from "next/link";
import {
  Check,
  ChevronRight,
  Code2,
  Github,
  Play,
  Workflow,
  Activity,
  Layers3,
} from "lucide-react";
import { useState } from "react";
import { NetworkVisual } from "./network";
import { SectionHeading, Features, CTA, FAQ, Reveal } from "./shared";
import { integrations } from "@/lib/data";
import { BrandMark } from "./brand";
export function Home() {
  const [preview, setPreview] = useState("Overview");
  return (
    <>
      <section className="hero container">
        <Reveal className="hero-copy">
          <Link className="announcement" href="/platform">
            <span className="announcement-tag">Introducing</span>
            <span>The future of connectivity</span>
            <ChevronRight size={14} />
          </Link>
          <h1>
            Connect
            <br />
            everything.
            <br />
            <span className="gradient-text">
              Build without
              <br className="hero-break" /> limits.
            </span>
          </h1>
          <p>
            Your software. Your APIs. One connected ecosystem. Integrate faster,
            automate smarter, and make your technology work together.
          </p>
          <div className="button-row">
            <Link href="/signup" className="button button-primary">
              Get started
            </Link>
            <Link href="/integrations" className="button button-secondary">
              Explore integrations
            </Link>
          </div>
          <div className="hero-footnote">
            <span>
              <Check size={13} /> Built for modern businesses
            </span>
            <Link href="/dashboard">
              <Play size={12} /> Explore the demo
            </Link>
          </div>
        </Reveal>
        <Reveal className="hero-visual">
          <NetworkVisual />
        </Reveal>
      </section>
      <section className="integration-strip container">
        <div className="strip-heading">
          <span>Designed for the tools you already use</span>
          <span className="small-note">Example integrations</span>
        </div>
        <div className="integration-wordmarks">
          {["stripe", "slack", "notion", "github", "supabase", "openai"].map(
            (slug) => {
              const app = integrations.find((a) => a.slug === slug)!;
              return (
                <Link key={slug} href={`/integrations/${slug}`}>
                  <span className="wordmark-symbol">
                    {slug === "github" ? <Github size={25} /> : app.mark}
                  </span>
                  {app.name}
                </Link>
              );
            },
          )}
        </div>
      </section>
      <section className="section container">
        <Reveal>
          <SectionHeading
            label="A connected foundation"
            title="Less complexity. More possibility."
            text="Everything you need to bring your digital world together, thoughtfully designed to work as one."
          />
        </Reveal>
        <Features />
      </section>
      <section className="section platform-section container">
        <div className="split-heading">
          <SectionHeading
            label="Your command center"
            title="One platform. Complete control."
            text="A clear view of your connections, workflows, and everything in between."
          />
          <Link href="/dashboard" className="button button-secondary">
            Open demo workspace
          </Link>
        </div>
        <Reveal className="dashboard-preview">
          <div className="preview-chrome">
            <div className="window-dots">
              <i />
              <i />
              <i />
            </div>
            <span>workspace.spiragiving · product demo</span>
            <span className="preview-label">DEMO DATA</span>
          </div>
          <div className="preview-layout">
            <aside className="preview-sidebar">
              <span className="mini-brand">
                <BrandMark />
                Workspace
              </span>
              {["Overview", "Integrations", "Workflows", "Activity"].map(
                (name, i) => {
                  const Icon = [Layers3, Code2, Workflow, Activity][i];
                  return (
                    <button
                      key={name}
                      className={preview === name ? "selected" : ""}
                      onClick={() => setPreview(name)}
                    >
                      <Icon size={16} />
                      {name}
                    </button>
                  );
                },
              )}
              <span className="workspace-plan">
                Preview workspace
                <br />
                <small>Explore without connecting accounts</small>
              </span>
            </aside>
            <div className="preview-main">
              <div className="preview-title">
                <div>
                  <span className="small-note">
                    YOUR WORKSPACE / {preview.toUpperCase()}
                  </span>
                  <h3>
                    {preview === "Overview"
                      ? "Everything, connected."
                      : preview}
                  </h3>
                </div>
                <Link
                  className="button button-small button-secondary"
                  href="/dashboard"
                >
                  View workspace
                </Link>
              </div>
              {preview === "Overview" ? (
                <>
                  <div className="preview-stats">
                    {[
                      ["Connected apps", "12", "+2 this week"],
                      ["Active workflows", "8", "All running smoothly"],
                      ["API requests", "24,580", "Sample monthly usage"],
                    ].map(([label, value, note]) => (
                      <div key={label}>
                        <span>{label}</span>
                        <strong>{value}</strong>
                        <small>{note}</small>
                      </div>
                    ))}
                  </div>
                  <div className="preview-chart-head">
                    <h4>Workflow activity</h4>
                    <span className="small-note">Last 7 days · sample</span>
                  </div>
                  <div
                    className="bar-chart"
                    aria-label="Demo workflow activity chart"
                  >
                    {[
                      35, 48, 39, 64, 49, 81, 68, 74, 54, 89, 65, 78, 96, 79,
                      85, 63, 82, 98, 85, 72, 94, 89, 100, 86, 93, 80, 92, 100,
                    ].map((v, i) => (
                      <span key={i} style={{ height: `${v}%` }} />
                    ))}
                  </div>
                  <div className="chart-labels">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                  </div>
                </>
              ) : (
                <div className="preview-list">
                  {(preview === "Activity"
                    ? [
                        "Sample payment received",
                        "CRM record updated",
                        "Team notification delivered",
                      ]
                    : preview === "Workflows"
                      ? [
                          "Customer onboarding",
                          "Payment → CRM → Slack",
                          "Weekly reporting",
                        ]
                      : ["Stripe", "HubSpot", "Slack"]
                  ).map((name, i) => (
                    <div key={name}>
                      <span
                        className="app-icon"
                        style={
                          {
                            "--app-color": integrations[i + 2].color,
                          } as React.CSSProperties
                        }
                      >
                        {integrations[i + 2].mark}
                      </span>
                      <div>
                        <strong>{name}</strong>
                        <small>Demonstration only</small>
                      </div>
                      <span className="badge">
                        {preview === "Activity"
                          ? "Sample event"
                          : preview === "Workflows"
                            ? "Ready to demo"
                            : "Demo connected"}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </section>
      <section className="section how-section container">
        <SectionHeading
          label="From scattered to connected"
          title="Three steps. Endless potential."
        />
        <div className="steps">
          {[
            [
              "01",
              "Choose your applications",
              "Find the tools your team depends on in one integration directory.",
            ],
            [
              "02",
              "Make the connection",
              "Define access, map your data, and configure your workflow.",
            ],
            [
              "03",
              "Automate and grow",
              "Bring repeatable processes into a workspace you can understand.",
            ],
          ].map(([number, title, text]) => (
            <Reveal className="step" key={number}>
              <span className="step-number">{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="section developer-section container">
        <Reveal className="developer-copy">
          <span className="eyebrow">For the builders</span>
          <h2>
            Great ideas deserve
            <br />
            better infrastructure.
          </h2>
          <p>
            Clear APIs. Thoughtful workflows. A connected foundation for what
            you build next.
          </p>
          <Link href="/developers" className="button button-secondary">
            Explore developer tools
          </Link>
          <span className="small-note code-disclaimer">
            API architecture preview · production access coming soon
          </span>
        </Reveal>
        <Reveal className="code-card">
          <div className="code-top">
            <span>
              <Code2 size={15} /> connect.ts
            </span>
            <span>TypeScript</span>
          </div>
          <pre>
            <code>
              <span className="syntax-purple">const</span> connection ={" "}
              <span className="syntax-purple">await</span> fetch(
              <br />{" "}
              <span className="syntax-green">
                &apos;https://api.spiragiving.com/v1/integrations&apos;
              </span>
              ,<br /> {"{"}
              <br /> headers: {"{"}
              <br /> Authorization:{" "}
              <span className="syntax-green">
                `Bearer ${"{"}API_KEY{"}"}`
              </span>
              ,<br /> {"}"},<br /> {"}"}
              <br />
              );
              <br />
              <br />
              <span className="syntax-muted">
                // Illustrative endpoint — not a live API
              </span>
            </code>
          </pre>
          <div className="code-bottom">
            <span className="code-status">
              <Check size={14} /> Built around familiar patterns
            </span>
            <span>REST · JSON · Webhooks</span>
          </div>
        </Reveal>
      </section>
      <section className="section container faq-section">
        <SectionHeading
          label="A little clarity"
          title="Good questions. Clear answers."
        />
        <FAQ limit={4} />
        <Link className="text-link" href="/faq">
          Explore all frequently asked questions <ChevronRight size={16} />
        </Link>
      </section>
      <CTA />
    </>
  );
}
