import Link from "next/link";
import {
  Rocket,
  Building2,
  Terminal,
  Layers3,
  Palette,
  Code2,
  Webhook,
  KeyRound,
  FileJson,
  TestTube2,
  Activity,
  Network,
  ShieldCheck,
  Cloud,
  Workflow,
  BookOpen,
  ExternalLink,
} from "lucide-react";
import {
  PageHeader,
  SectionHeading,
  Features,
  CTA,
  FAQ,
  CheckList,
  Notice,
} from "./shared";
import { NetworkVisual } from "./network";
import { CodePlayground } from "@/features/developers/code-playground";
import { ContactForm } from "@/features/forms/contact-form";
import { solutions, articles } from "@/lib/data";
export function PlatformPage() {
  return (
    <>
      <PageHeader
        eyebrow="The SPIRAGIVING platform"
        title="A connected foundation for your digital world."
        description="Software should work together. SPIRAGIVING is being designed to make that connection simpler, clearer, and easier to manage."
      >
        <div className="button-row">
          <Link className="button button-primary" href="/dashboard">
            Explore demo workspace
          </Link>
          <Link className="button button-secondary" href="/developers">
            For developers
          </Link>
        </div>
      </PageHeader>
      <div className="container page-body">
        <Notice>
          The platform is in development. This website and workspace demonstrate
          the intended product experience. Production integrations, hosting
          infrastructure, and API services are not available yet.
        </Notice>
        <Features />
        <div className="subsection two-column" id="api">
          <div>
            <span className="eyebrow">01 / API connectivity</span>
            <h2>Make services speak the same language.</h2>
            <p>
              Plan clear connections between applications using standard APIs,
              consistent data contracts, and explicit permissions.
            </p>
            <CheckList
              items={[
                "REST-first architecture and JSON payloads",
                "Provider-specific authentication and scoped access",
                "Data mapping, validation, and error handling",
              ]}
            />
            <Link className="text-link" href="/developers">
              Explore the API architecture
            </Link>
          </div>
          <NetworkVisual />
        </div>
        <div className="subsection two-column" id="automation">
          <div>
            <span className="eyebrow">02 / Workflow automation</span>
            <h2>From a trigger to a useful outcome.</h2>
            <p>
              Design workflows that connect business events to the next action,
              with a clear view of every step.
            </p>
            <CheckList
              items={[
                "Event-driven triggers and mapped actions",
                "Repeatable workflow templates",
                "Execution history and understandable failures",
              ]}
            />
            <Link className="text-link" href="/dashboard">
              Run a sample workflow
            </Link>
          </div>
          <div className="workflow-diagram panel">
            <div>
              <span className="feature-icon">
                <Webhook />
              </span>
              <strong>Payment event</strong>
              <small>Sample trigger</small>
            </div>
            <span className="flow-connector" />
            <div>
              <span className="feature-icon">
                <Layers3 />
              </span>
              <strong>Update CRM</strong>
              <small>Mapped action</small>
            </div>
            <span className="flow-connector" />
            <div>
              <span className="feature-icon">
                <Workflow />
              </span>
              <strong>Notify team</strong>
              <small>Sample outcome</small>
            </div>
          </div>
        </div>
        <div className="subsection two-column" id="security">
          <div>
            <span className="eyebrow">03 / Security by design</span>
            <h2>Be deliberate about every permission.</h2>
            <p>
              The intended architecture centers on least-privilege access,
              careful credential handling, and visible operations. These are
              design principles, not claims of completed certifications.
            </p>
          </div>
          <div className="panel">
            <ShieldCheck size={32} className="accent-icon" />
            <CheckList
              items={[
                "Provider credentials kept outside client code",
                "Explicit permission and access review",
                "Sensitive information excluded from logs",
                "Revocation and operational oversight planned",
              ]}
            />
            <p>No SOC 2, ISO, or other security certifications are claimed.</p>
          </div>
        </div>
        <div className="subsection two-column" id="infrastructure">
          <div>
            <span className="eyebrow">04 / Infrastructure</span>
            <h2>A clear path from prototype to scale.</h2>
            <p>
              A modular approach to connections, background jobs, and event
              handling can support growing workloads without hiding operational
              complexity.
            </p>
          </div>
          <div className="panel">
            <Cloud size={32} className="accent-icon" />
            <CheckList
              items={[
                "Separate connection and execution concerns",
                "Bounded retries and idempotency patterns",
                "Usage visibility and operational health",
                "Capacity planning before production launch",
              ]}
            />
          </div>
        </div>
      </div>
      <CTA />
    </>
  );
}
export function SolutionsPage() {
  const icons = [Rocket, Building2, Terminal, Layers3, Palette];
  return (
    <>
      <PageHeader
        eyebrow="Built around your business"
        title="Different teams. One connected vision."
        description="From your first workflow to a complex software ecosystem, discover how a unified foundation could support the way you work."
      />
      <div className="container page-body">
        <Notice>
          These solutions describe intended use cases. Explore the product
          demonstration or prepare an inquiry about your requirements.
        </Notice>
        {solutions.map((s, i) => {
          const Icon = icons[i];
          return (
            <section
              className="solution-card"
              id={s.name.toLowerCase().replaceAll(" ", "-")}
              key={s.name}
            >
              <div>
                <Icon className="solution-icon" size={30} />
                <span
                  className="eyebrow"
                  style={{ display: "block", marginTop: 10 }}
                >
                  For {s.name}
                </span>
                <h2>{s.detail}</h2>
              </div>
              <div>
                <p>{s.text}</p>
                <CheckList items={s.benefits} />
                <Link
                  href={`/contact#form`}
                  className="button button-secondary"
                >
                  Discuss your use case
                </Link>
              </div>
            </section>
          );
        })}
      </div>
      <CTA />
    </>
  );
}
export function DevelopersPage() {
  const docs = [
    {
      icon: Code2,
      name: "REST APIs",
      text: "Proposed resource-oriented endpoints with predictable JSON responses.",
      code: "GET /v1/integrations",
    },
    {
      icon: Webhook,
      name: "Webhooks",
      text: "Design event-driven workflows with signature validation and idempotent handling.",
      code: "integration.updated",
    },
    {
      icon: KeyRound,
      name: "Authentication",
      text: "Plan scoped server-side credentials. Never ship secret keys in a frontend bundle.",
      code: "Authorization: Bearer …",
    },
    {
      icon: FileJson,
      name: "SDK architecture",
      text: "A typed interface for connections, workflow definitions, and event payloads.",
      code: "SDK planned — not published",
    },
    {
      icon: TestTube2,
      name: "Testing environment",
      text: "Test mappings and error cases without touching production accounts.",
      code: "Demo workspace available",
    },
    {
      icon: Activity,
      name: "Usage and errors",
      text: "Design clear request limits, bounded retries, and observable event history.",
      code: "429 → bounded backoff",
    },
  ];
  return (
    <>
      <PageHeader
        eyebrow="For the builders"
        title="Built for developers. Designed for scale."
        description="Powerful ideas deserve clear interfaces. Explore the proposed APIs, event patterns, and developer experience behind SPIRAGIVING."
      />
      <div className="container page-body">
        <Notice>
          The API examples below are illustrative. No production endpoint,
          published SDK, or live sandbox is available. The demo dashboard runs
          entirely in your browser.
        </Notice>
        <div className="two-column" style={{ alignItems: "start" }}>
          <div>
            <SectionHeading
              label="Familiar by design"
              title="Less glue code. More possibility."
              text="Build around standard HTTP, JSON, and event patterns. The goal is a small, understandable surface area for a connected ecosystem."
            />
            <CheckList
              items={[
                "Explicit permissions at every connection",
                "Consistent resource and event shapes",
                "A clear distinction between test and production",
                "Errors that help you decide what to do next",
              ]}
            />
            <Link href="/dashboard" className="button button-secondary">
              Explore demo dashboard
            </Link>
          </div>
          <CodePlayground />
        </div>
        <section id="documentation" className="subsection">
          <SectionHeading
            label="Architecture notes"
            title="The developer building blocks."
            text="A practical overview of the intended interface. Detailed production documentation will accompany the product launch."
          />
          <div className="docs-grid">
            {docs.map(({ icon: Icon, ...d }) => (
              <article className="panel" key={d.name}>
                <Icon size={25} />
                <h3>{d.name}</h3>
                <p>{d.text}</p>
                <code style={{ display: "block", marginTop: 18 }}>
                  {d.code}
                </code>
              </article>
            ))}
          </div>
        </section>
        <div className="panel">
          <h3>Error handling and operational patterns</h3>
          <p>
            Validate inputs before creating an action. Treat repeated events as
            possible duplicates. Retry transient errors with bounded exponential
            backoff; surface persistent errors for review. Redact secrets and
            unnecessary personal data from logs.
          </p>
          <Link
            className="text-link"
            href="/blog/designing-resilient-workflows"
            style={{ marginTop: 20 }}
          >
            Read our workflow design notes
          </Link>
        </div>
      </div>
      <CTA />
    </>
  );
}
export function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="A plan for what’s next"
        title="Simple plans. Powerful possibilities."
        description="Choose the scope that fits your team. Final pricing and production availability will be confirmed before launch."
      />
      <div className="container page-body">
        <div className="three-column plan-grid">
          {[
            {
              name: "Starter",
              description:
                "For individuals and small projects exploring a connected stack.",
              features: [
                "Core integration workspace",
                "Essential workflow patterns",
                "Demo-first exploration",
                "Planned community resources",
              ],
            },
            {
              name: "Pro",
              description:
                "For growing teams bringing more of their business together.",
              features: [
                "Everything in Starter",
                "Advanced workflow patterns",
                "Shared team workspace",
                "Planned usage and activity insights",
              ],
            },
            {
              name: "Enterprise",
              description:
                "For organizations with more complex integration requirements.",
              features: [
                "Everything in Pro",
                "Requirements-led architecture",
                "Planned access and governance controls",
                "Custom scope and onboarding discussions",
              ],
            },
          ].map((p, i) => (
            <article
              className={`plan-card ${i === 1 ? "featured" : ""}`}
              key={p.name}
            >
              {i === 1 && <span className="plan-label">For growing teams</span>}
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <div className="plan-price">Contact for pricing</div>
              <span className="small-note">
                Proposed plan · availability to be confirmed
              </span>
              <CheckList items={p.features} />
              <Link
                className={`button ${i === 1 ? "button-primary" : "button-secondary"}`}
                href="/contact"
              >
                Discuss {p.name.toLowerCase()}
              </Link>
            </article>
          ))}
        </div>
        <section className="subsection">
          <SectionHeading
            label="Find your fit"
            title="A clear view of the proposed plans."
          />
          <div className="comparison">
            <table>
              <caption className="sr-only">
                Proposed plan comparison. Features are planned, not currently
                available.
              </caption>
              <thead>
                <tr>
                  <th scope="col">Planned capability</th>
                  <th scope="col">Starter</th>
                  <th scope="col">Pro</th>
                  <th scope="col">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Integration workspace", "Core", "Expanded", "Custom scope"],
                  ["Workflow patterns", "Essential", "Advanced", "Custom"],
                  ["Collaboration", "Individual", "Team", "Organization"],
                  ["Usage visibility", "Basic", "Detailed", "Requirements-led"],
                  [
                    "Access controls",
                    "Standard",
                    "Team roles",
                    "Custom requirements",
                  ],
                  [
                    "Pricing and limits",
                    "To be confirmed",
                    "To be confirmed",
                    "Contact for scope",
                  ],
                ].map((row) => (
                  <tr key={row[0]}>
                    {row.map((c, i) =>
                      i === 0 ? (
                        <th scope="row" key={i}>
                          {c}
                        </th>
                      ) : (
                        <td key={i}>{c}</td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section className="subsection faq-section" style={{ margin: "auto" }}>
          <SectionHeading
            label="Before you choose"
            title="A few things to know."
          />
          <div className="faq-list">
            <details>
              <summary>Can I purchase a plan now?</summary>
              <p>
                No. Production plans are not available yet. The website lets you
                explore the product vision and prepare a pricing inquiry.
              </p>
            </details>
            <details>
              <summary>Is the demo free to explore?</summary>
              <p>
                Yes. The sample dashboard requires no account or payment. Its
                actions modify demonstration data only.
              </p>
            </details>
            <details>
              <summary>Where are the monthly and yearly prices?</summary>
              <p>
                Prices, usage limits, and billing terms have not been confirmed.
                We will publish them before offering paid subscriptions.
              </p>
            </details>
            <details>
              <summary>Can we discuss enterprise requirements?</summary>
              <p>
                The contact page helps you prepare a local inquiry draft. Live
                inquiry submission is not available yet.
              </p>
            </details>
          </div>
        </section>
      </div>
      <CTA />
    </>
  );
}
export function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our point of view"
        title="Building a more connected digital future."
        description="SPIRAGIVING is focused on a simple idea: the technology you choose should be able to work together."
      />
      <div className="container page-body">
        <p className="about-statement">
          The best software opens doors. We believe the connections between your
          tools should do the same—giving you more freedom to build, automate,
          and grow.
        </p>
        <div className="two-column">
          <section className="mission-panel">
            <span className="eyebrow">Our mission</span>
            <h2>Make digital connectivity simple.</h2>
            <p>
              Make software integration, automation, and digital infrastructure
              more accessible, flexible, and understandable.
            </p>
          </section>
          <section className="panel">
            <span className="eyebrow">Our vision</span>
            <h2 style={{ fontSize: 35 }}>Technology that works together.</h2>
            <p style={{ marginTop: 20 }}>
              A world where businesses can create connected digital ecosystems
              without unnecessary barriers between applications.
            </p>
          </section>
        </div>
        <section className="subsection">
          <SectionHeading
            label="What guides us"
            title="Principles worth building around."
          />
          <div className="value-grid">
            {[
              [
                "Innovation",
                "Question complexity and find a clearer path forward.",
              ],
              [
                "Reliability",
                "Design for the realities of networks, events, and change.",
              ],
              [
                "Transparency",
                "Be clear about what works, what is planned, and what comes next.",
              ],
              [
                "Security",
                "Treat permissions and sensitive information with care.",
              ],
              [
                "Customer focus",
                "Start with the task someone actually needs to complete.",
              ],
              [
                "Continuous improvement",
                "Keep learning from how people connect and build.",
              ],
            ].map(([t, d]) => (
              <div key={t}>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </section>
        <Notice>
          SPIRAGIVING is in development. We share our product direction here
          without claiming unverified customers, investment, partnerships,
          certifications, or production availability.
        </Notice>
      </div>
      <CTA />
    </>
  );
}
export function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Start a conversation"
        title="Let’s build something connected."
        description="Have a question, an integration idea, or a project in mind? Prepare an inquiry about what you want to build."
      />
      <div className="container page-body">
        <Notice>
          Live message delivery is not configured. This form validates your
          details and downloads a contact draft on your device. It does not send
          your message.
        </Notice>
        <div className="two-column" id="form">
          <ContactForm />
          <aside className="contact-aside">
            <h2>A better connection starts with context.</h2>
            <p>
              Tell us about your applications, the process you want to improve,
              and the outcome that matters to your team.
            </p>
            <CheckList
              items={[
                "Explore a product or integration question",
                "Discuss a business or technology partnership",
                "Outline an enterprise workflow requirement",
              ]}
            />
            <div className="panel">
              <BookOpen className="accent-icon" />
              <h3 style={{ marginTop: 20 }}>Looking for a little clarity?</h3>
              <p>
                Read the product FAQ or explore the developer architecture
                notes.
              </p>
              <div className="button-row" style={{ marginTop: 22 }}>
                <Link className="text-link" href="/faq">
                  Read the FAQ
                </Link>
                <Link className="text-link" href="/developers">
                  Developer resources
                </Link>
              </div>
            </div>
            <a
              href="https://github.com/spiragiving/spiragiving"
              className="text-link"
              style={{ marginTop: 25 }}
              target="_blank"
              rel="noreferrer"
            >
              Visit our GitHub repository
              <ExternalLink size={13} />
            </a>
          </aside>
        </div>
      </div>
    </>
  );
}
export function BlogPage() {
  const icons = [Network, Workflow, ShieldCheck];
  return (
    <>
      <PageHeader
        eyebrow="The SPIRAGIVING journal"
        title="Ideas for a more connected world."
        description="Notes on software ecosystems, thoughtful automation, and the infrastructure between your tools."
      />
      <div className="container page-body three-column">
        {articles.map((a, i) => {
          const Icon = icons[i];
          return (
            <article className="article-card" key={a.slug}>
              <Link
                href={`/blog/${a.slug}`}
                aria-label={a.title}
                className="article-cover"
              >
                <Icon />
              </Link>
              <span className="eyebrow">{a.category}</span>
              <Link href={`/blog/${a.slug}`}>
                <h3>{a.title}</h3>
              </Link>
              <p>{a.excerpt}</p>
              <div className="article-meta">
                <span>{a.date}</span>
                <span>{a.time}</span>
              </div>
            </article>
          );
        })}
      </div>
      <CTA />
    </>
  );
}
export function FAQPage() {
  return (
    <>
      <PageHeader
        eyebrow="Questions, answered"
        title="A little clarity goes a long way."
        description="Understand the platform vision, the demo experience, and what is still in development."
      />
      <div className="container page-body faq-section">
        <FAQ />
        <div className="panel" style={{ marginTop: 45 }}>
          <h3>Still have a question?</h3>
          <p>
            Prepare an inquiry on the contact page or explore the developer
            notes.
          </p>
          <Link
            className="button button-secondary"
            href="/contact"
            style={{ marginTop: 20 }}
          >
            Visit contact page
          </Link>
        </div>
      </div>
    </>
  );
}
export function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy policy"
        description="How this website handles information. Effective October 8, 2026."
      />
      <article className="container legal">
        <h2>1. Scope</h2>
        <p>
          This policy describes the public SPIRAGIVING website and its
          browser-based product demonstration. Production accounts,
          subscriptions, and integrations are not available through this
          website.
        </p>
        <h2>2. Information you enter</h2>
        <p>
          The contact form prepares a text draft on your device. It does not
          submit the name, email, company, subject, or message to SPIRAGIVING.
          Authentication preview fields are validated locally and are not sent
          to an authentication service or stored as credentials. Use sample
          passwords only.
        </p>
        <h2>3. Local preferences and demo data</h2>
        <p>
          The website stores your light or dark theme preference in your
          browser’s local storage. Demo workspace changes stay in memory for the
          current page session and reset when reloaded. Downloaded drafts and
          reports remain on your device until you remove them. You can remove
          the theme preference by clearing site data in your browser.
        </p>
        <h2>4. Hosting and external links</h2>
        <p>
          The website is hosted on GitHub Pages. The hosting provider may
          process standard connection information under its own policies. See{" "}
          <a
            href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
            target="_blank"
            rel="noreferrer"
          >
            GitHub’s privacy statement
          </a>
          . Visiting an external link subjects that visit to the destination’s
          policies.
        </p>
        <h2>5. Analytics and third-party accounts</h2>
        <p>
          This website does not include marketing analytics, advertising
          trackers, or a connector that accesses your third-party accounts.
          Fonts and brand assets are served with the website. Illustrative
          integrations do not transmit account data to the named providers.
        </p>
        <h2>6. Your choices</h2>
        <p>
          You can explore the public site without entering personal information.
          Clear browser site data to remove local theme preferences. Delete
          downloaded files to remove drafts or reports from your device. Do not
          include sensitive information in demonstration forms.
        </p>
        <h2>7. Updates and contact</h2>
        <p>
          We will update this policy when the website’s data practices change or
          production services are introduced. The current date is shown above.
          The contact page explains the available inquiry method; a live
          submission service is not configured yet.
        </p>
        <Link
          className="button button-secondary"
          href="/contact"
          style={{ marginTop: 30 }}
        >
          Contact information
        </Link>
      </article>
    </>
  );
}
export function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms of service"
        description="Terms for using this public website and product demonstration. Effective October 8, 2026."
      />
      <article className="container legal">
        <h2>1. Website and demonstration</h2>
        <p>
          SPIRAGIVING provides this website to introduce its software
          connectivity product vision. The demo workspace is a browser-based
          illustration. It does not perform real integrations, run external
          workflows, create accounts, process payments, or provide a production
          API.
        </p>
        <h2>2. Acceptable use</h2>
        <p>
          Use the website lawfully and responsibly. Do not attempt to interfere
          with its availability, exploit vulnerabilities, misrepresent your
          identity, or use sample interfaces to enter credentials belonging to
          real external accounts.
        </p>
        <h2>3. Availability and plans</h2>
        <p>
          Product descriptions, connector examples, and plan comparisons
          describe intended capabilities. They are not a promise that a
          production service is available. Pricing, usage limits, support terms,
          and service commitments will be confirmed before any paid offering.
        </p>
        <h2>4. Intellectual property and third-party names</h2>
        <p>
          The SPIRAGIVING name, original visual assets, and site content are
          presented as part of this website. Third-party application names
          belong to their respective owners. Their appearance illustrates use
          cases and does not imply endorsement or an official partnership.
        </p>
        <h2>5. Information and downloads</h2>
        <p>
          Contact drafts and demo reports are generated on your device. You are
          responsible for reviewing and managing those files. A draft download
          is not a submitted inquiry. Sample metrics, connection states, and
          execution events describe demonstration data only.
        </p>
        <h2>6. No production commitments</h2>
        <p>
          This public preview does not establish a paid subscription,
          service-level agreement, or enterprise contract. Any production
          service will require its own published commercial and operational
          terms. Do not rely on illustrative examples for production decisions.
        </p>
        <h2>7. Changes and inquiries</h2>
        <p>
          These terms may be updated as the product develops. Read the current
          version before using newly introduced services. The contact page
          explains the available inquiry method.
        </p>
        <Link
          className="button button-secondary"
          href="/privacy"
          style={{ marginTop: 30 }}
        >
          Read privacy policy
        </Link>
      </article>
    </>
  );
}
