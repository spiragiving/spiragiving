"use client";
import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Blocks,
  Network,
  Workflow,
  KeyRound,
  BarChart3,
  Gauge,
  CreditCard,
  Settings,
  HelpCircle,
  Search,
  Bell,
  Plus,
  Play,
  Pause,
  Check,
  Download,
  Loader2,
  CircleHelp,
  Menu,
  X,
  ChevronRight,
  Activity,
  Copy,
  RotateCcw,
  Terminal,
  ShieldCheck,
} from "lucide-react";
import { integrations } from "@/lib/data";
import { AppIcon } from "../integrations/directory";
import { downloadText } from "../forms/contact-form";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ThemeToggle } from "@/components/site-shell";
import { BrandMark } from "@/components/brand";
type Connection = { id: number; slug: string; scope: string; auth: string };
type Flow = {
  id: number;
  name: string;
  path: string;
  active: boolean;
  runs: number;
};
const sections = [
  { name: "Overview", icon: LayoutDashboard },
  { name: "Applications", icon: Blocks },
  { name: "Integrations", icon: Network },
  { name: "Workflows", icon: Workflow },
  { name: "API access", icon: KeyRound },
  { name: "Analytics", icon: BarChart3 },
  { name: "Usage", icon: Gauge },
  { name: "Billing", icon: CreditCard },
  { name: "Settings", icon: Settings },
  { name: "Support", icon: HelpCircle },
];
const initialConnections: Connection[] = [
  { id: 1, slug: "stripe", scope: "Read events", auth: "OAuth" },
  {
    id: 2,
    slug: "hubspot",
    scope: "Read and write sample records",
    auth: "OAuth",
  },
  { id: 3, slug: "slack", scope: "Send sample notifications", auth: "OAuth" },
  { id: 4, slug: "github", scope: "Read events", auth: "OAuth" },
];
const initialFlows: Flow[] = [
  {
    id: 1,
    name: "Customer onboarding",
    path: "Stripe → HubSpot → Slack",
    active: true,
    runs: 128,
  },
  {
    id: 2,
    name: "Release announcements",
    path: "GitHub → Slack",
    active: true,
    runs: 42,
  },
  {
    id: 3,
    name: "Weekly reporting",
    path: "HubSpot → Notion",
    active: false,
    runs: 18,
  },
];
export function Dashboard() {
  const [section, setSection] = useState("Overview");
  const [search, setSearch] = useState("");
  const [mobile, setMobile] = useState(false);
  const [connections, setConnections] = useState(initialConnections);
  const [flows, setFlows] = useState(initialFlows);
  const [events, setEvents] = useState([
    "Sample onboarding workflow completed",
    "Demo GitHub connection added",
    "Sample payment event received",
  ]);
  const [running, setRunning] = useState<number | null>(null);
  const [notice, setNotice] = useState("");
  const [connectOpen, setConnectOpen] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [profile, setProfile] = useState(false);
  const [workflowOpen, setWorkflowOpen] = useState(false);
  const [workflowName, setWorkflowName] = useState("");
  const [workspaceName, setWorkspaceName] = useState("Preview workspace");
  const [displayName, setDisplayName] = useState("Alex");
  const [apiRevealed, setApiRevealed] = useState(false);
  const [sampleKey, setSampleKey] = useState("demo_only_not_a_real_api_key");
  const [keyCopied, setKeyCopied] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 300);
    return () => clearTimeout(timer);
  }, []);
  const matches = (value: string) =>
    value.toLowerCase().includes(search.toLowerCase().trim());
  const visibleConnections = useMemo(
    () =>
      connections.filter((c) =>
        matches(integrations.find((a) => a.slug === c.slug)!.name),
      ),
    [connections, search],
  );
  const visibleFlows = useMemo(
    () => flows.filter((f) => matches(f.name + " " + f.path)),
    [flows, search],
  );
  const visibleApps = useMemo(
    () => integrations.filter((a) => matches(a.name + " " + a.category)),
    [search],
  );
  const visibleEvents = events.filter(matches);
  function go(name: string) {
    setSection(name);
    setMobile(false);
    setSearch("");
    setNotice("");
  }
  async function run(flow: Flow) {
    if (!flow.active) return;
    setRunning(flow.id);
    setNotice("");
    await new Promise((resolve) => setTimeout(resolve, 650));
    setFlows((current) =>
      current.map((f) => (f.id === flow.id ? { ...f, runs: f.runs + 1 } : f)),
    );
    setEvents((current) =>
      [`Sample run completed: ${flow.name}`, ...current].slice(0, 10),
    );
    setRunning(null);
    setNotice(
      `Demo run completed for “${flow.name}”. No external applications were contacted.`,
    );
  }
  function addConnection(slug: string, scope: string, auth: string) {
    setConnections((current) => [
      ...current,
      { id: Date.now(), slug, scope, auth },
    ]);
    setEvents((current) =>
      [
        `Demo connection added: ${integrations.find((a) => a.slug === slug)!.name}`,
        ...current,
      ].slice(0, 10),
    );
    setNotice(
      "Demo connection saved for this page session. No external account is connected.",
    );
    setSection("Integrations");
  }
  function exportReport() {
    downloadText(
      "spiragiving-demo-usage.csv",
      "Metric,Value,Mode\nConnected sample apps," +
        connections.length +
        ",demo\nActive sample workflows," +
        flows.filter((f) => f.active).length +
        ",demo\nSample workflow runs," +
        flows.reduce((total, f) => total + f.runs, 0) +
        ",demo\nIllustrative API requests,24580,demo\n",
      "text/csv;charset=utf-8",
    );
    setNotice(
      "Demo usage report prepared for download. All values are sample data.",
    );
  }
  return (
    <section className="workspace container">
      <div className="demo-banner">
        <span className="badge badge-purple">Interactive demo</span>
        <p>
          Sample data only. Changes reset when you reload. No real accounts,
          payments, or API calls.
        </p>
        <Link href="/platform">
          About the platform
          <ChevronRight size={13} />
        </Link>
      </div>
      <div className="workspace-shell">
        <aside className={`workspace-sidebar ${mobile ? "open" : ""}`}>
          <span className="mini-brand">
            <BrandMark />
            {workspaceName}
          </span>
          <button
            className="icon-button dashboard-close"
            aria-label="Close workspace navigation"
            onClick={() => setMobile(false)}
          >
            <X size={18} />
          </button>
          <nav aria-label="Workspace navigation">
            {sections.map(({ name, icon: Icon }) => (
              <button
                className={section === name ? "selected" : ""}
                key={name}
                onClick={() => go(name)}
                aria-current={section === name ? "page" : undefined}
              >
                <Icon size={17} />
                {name}
              </button>
            ))}
          </nav>
          <div className="sidebar-bottom">
            <span className="badge">Preview environment</span>
            <p>Build a connected future.</p>
            <button className="profile-button" onClick={() => setProfile(true)}>
              <span className="avatar">{displayName[0] || "A"}</span>
              <span>
                {displayName}
                <small>Demo user</small>
              </span>
              <Settings size={14} />
            </button>
          </div>
        </aside>
        <div className="workspace-content">
          <div className="workspace-toolbar">
            <button
              className="icon-button dashboard-menu"
              aria-label="Open workspace navigation"
              onClick={() => setMobile(true)}
            >
              <Menu size={20} />
            </button>
            <div className="search-wrap">
              <Search size={16} />
              <input
                aria-label="Search workspace"
                className="input"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search this workspace…"
              />
            </div>
            <div className="workspace-toolbar-actions">
              <button
                className="icon-button"
                aria-label="Demo notifications"
                onClick={() => setNotifications(true)}
              >
                <Bell size={17} />
              </button>
              <Link
                className="icon-button"
                href="/faq"
                aria-label="Help center"
              >
                <CircleHelp size={17} />
              </Link>
              <ThemeToggle />
              <button
                className="avatar"
                aria-label="Open demo profile"
                onClick={() => setProfile(true)}
              >
                {displayName[0] || "A"}
              </button>
            </div>
          </div>
          <div className="workspace-main">
            <div className="workspace-heading">
              <div>
                <span className="eyebrow">
                  WORKSPACE / {section.toUpperCase()}
                </span>
                <h1>
                  {section === "Overview"
                    ? `Welcome back, ${displayName}.`
                    : section}
                </h1>
                <p>
                  {section === "Overview"
                    ? "Here’s how your sample ecosystem is doing."
                    : "Explore your sample workspace."}
                </p>
              </div>
              <Button size="small" onClick={() => setConnectOpen(true)}>
                <Plus size={15} />
                Add connection
              </Button>
            </div>
            {notice && (
              <div role="status" className="form-status workspace-notice">
                {notice}
                <button
                  aria-label="Dismiss notification"
                  onClick={() => setNotice("")}
                >
                  <X size={14} />
                </button>
              </div>
            )}
            {!ready ? (
              <div
                className="skeleton-grid"
                aria-label="Loading sample workspace"
              >
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="skeleton" />
                ))}
              </div>
            ) : (
              <>
                {section === "Overview" && (
                  <>
                    <div className="stat-grid">
                      {[
                        [
                          "Sample connections",
                          String(connections.length),
                          "Managed in this preview",
                        ],
                        [
                          "Active sample workflows",
                          String(flows.filter((f) => f.active).length),
                          "Ready for a demo run",
                        ],
                        [
                          "Illustrative API requests",
                          "24,580",
                          "Not live API traffic",
                        ],
                        [
                          "Demo system status",
                          "Operational",
                          "Simulated environment",
                        ],
                      ].map(([label, value, caption]) => (
                        <div className="stat-card" key={label}>
                          <span>{label}</span>
                          <strong
                            className={
                              value === "Operational" ? "status-value" : ""
                            }
                          >
                            {value}
                          </strong>
                          <small>{caption}</small>
                        </div>
                      ))}
                    </div>
                    <div className="dashboard-columns">
                      <div className="dashboard-panel">
                        <div className="panel-heading">
                          <h2>Workflow activity</h2>
                          <span className="small-note">
                            Last 7 days · sample
                          </span>
                        </div>
                        <div
                          className="bar-chart large"
                          role="img"
                          aria-label="Sample workflow executions: Monday 24, Tuesday 36, Wednesday 29, Thursday 42, Friday 51, Saturday 38, Sunday 46"
                        >
                          {[24, 36, 29, 42, 51, 38, 46].map((v, i) => (
                            <div
                              className="chart-bar"
                              key={i}
                              style={{ height: `${(v / 51) * 100}%` }}
                            >
                              <span>{v}</span>
                            </div>
                          ))}
                        </div>
                        <div className="chart-labels">
                          {[
                            "Mon",
                            "Tue",
                            "Wed",
                            "Thu",
                            "Fri",
                            "Sat",
                            "Sun",
                          ].map((d) => (
                            <span key={d}>{d}</span>
                          ))}
                        </div>
                      </div>
                      <div className="dashboard-panel">
                        <div className="panel-heading">
                          <h2>Connected apps</h2>
                          <button
                            onClick={() => go("Integrations")}
                            className="text-link"
                          >
                            View all
                          </button>
                        </div>
                        <div className="connection-mini-list">
                          {visibleConnections.slice(0, 4).map((c) => {
                            const app = integrations.find(
                              (a) => a.slug === c.slug,
                            )!;
                            return (
                              <div key={c.id}>
                                <AppIcon app={app} />
                                <div>
                                  <strong>{app.name}</strong>
                                  <small>Demo connected</small>
                                </div>
                                <Check size={14} />
                              </div>
                            );
                          })}
                          {visibleConnections.length === 0 && (
                            <p className="field-hint">
                              No sample connections match your search.
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="dashboard-panel">
                      <div className="panel-heading">
                        <h2>Recent activity</h2>
                        <span className="small-note">Sample events</span>
                      </div>
                      <div className="activity-list">
                        {visibleEvents.map((event, i) => (
                          <div key={event + i}>
                            <span className="activity-icon">
                              <Activity size={15} />
                            </span>
                            <span>{event}</span>
                            <small>
                              {i === 0 ? "Just now" : `${i * 4} min ago · demo`}
                            </small>
                          </div>
                        ))}
                        {visibleEvents.length === 0 && (
                          <p className="field-hint">
                            No sample events match your search.
                          </p>
                        )}
                      </div>
                    </div>
                  </>
                )}
                {section === "Applications" && (
                  <>
                    <div className="workspace-inline-heading">
                      <p>{visibleApps.length} application examples</p>
                      <Link href="/integrations" className="text-link">
                        Explore full directory
                      </Link>
                    </div>
                    <div className="workspace-app-grid">
                      {visibleApps.map((app) => (
                        <article className="workspace-app-card" key={app.slug}>
                          <AppIcon app={app} />
                          <h3>{app.name}</h3>
                          <span className="small-note">{app.category}</span>
                          <Button
                            variant="secondary"
                            size="small"
                            onClick={() => setConnectOpen(true)}
                          >
                            Add demo connection
                          </Button>
                        </article>
                      ))}
                    </div>
                    {visibleApps.length === 0 && (
                      <Empty text="No applications match your search." />
                    )}
                  </>
                )}
                {section === "Integrations" && (
                  <div className="dashboard-panel">
                    <div className="panel-heading">
                      <h2>Your sample connections</h2>
                      <span className="small-note">
                        {visibleConnections.length} connections
                      </span>
                    </div>
                    {visibleConnections.map((c) => {
                      const app = integrations.find((a) => a.slug === c.slug)!;
                      return (
                        <div className="connection-row" key={c.id}>
                          <AppIcon app={app} />
                          <div>
                            <h3>{app.name}</h3>
                            <p>
                              {c.scope} · {c.auth} preview
                            </p>
                          </div>
                          <span className="badge badge-purple">
                            Demo connected
                          </span>
                          <Button
                            variant="ghost"
                            size="small"
                            onClick={() => {
                              setConnections((current) =>
                                current.filter((item) => item.id !== c.id),
                              );
                              setNotice(
                                `${app.name} demo connection removed. No external account was affected.`,
                              );
                            }}
                          >
                            Remove
                          </Button>
                        </div>
                      );
                    })}
                    {visibleConnections.length === 0 && (
                      <Empty text="No sample connections here. Add one or clear your search." />
                    )}
                  </div>
                )}
                {section === "Workflows" && (
                  <>
                    <div className="workspace-inline-heading">
                      <p>Run sample workflows in this browser.</p>
                      <Button
                        variant="secondary"
                        size="small"
                        onClick={() => setWorkflowOpen(true)}
                      >
                        <Plus size={14} />
                        Create sample workflow
                      </Button>
                    </div>
                    <div className="stack">
                      {visibleFlows.map((flow) => (
                        <article
                          className="dashboard-panel workflow-row"
                          key={flow.id}
                        >
                          <span className="workflow-icon">
                            <Workflow size={23} />
                          </span>
                          <div>
                            <h3>{flow.name}</h3>
                            <p>{flow.path}</p>
                            <span className="small-note">
                              {flow.runs} sample runs
                            </span>
                          </div>
                          <div className="workflow-actions">
                            <span className="badge">
                              {flow.active ? "Active demo" : "Paused demo"}
                            </span>
                            <Button
                              variant="ghost"
                              size="small"
                              onClick={() =>
                                setFlows((current) =>
                                  current.map((f) =>
                                    f.id === flow.id
                                      ? { ...f, active: !f.active }
                                      : f,
                                  ),
                                )
                              }
                            >
                              {flow.active ? (
                                <Pause size={13} />
                              ) : (
                                <Play size={13} />
                              )}{" "}
                              {flow.active ? "Pause" : "Resume"}
                            </Button>
                            <Button
                              size="small"
                              disabled={!flow.active || running !== null}
                              onClick={() => run(flow)}
                            >
                              {running === flow.id ? (
                                <Loader2 size={13} className="spin" />
                              ) : (
                                <Play size={13} />
                              )}{" "}
                              {running === flow.id ? "Running…" : "Run demo"}
                            </Button>
                          </div>
                        </article>
                      ))}
                      {visibleFlows.length === 0 && (
                        <Empty text="No sample workflows match your search." />
                      )}
                    </div>
                  </>
                )}
                {section === "API access" && (
                  <>
                    <div className="dashboard-panel">
                      <div className="panel-heading">
                        <h2>API architecture preview</h2>
                        <span className="badge">Not a live API</span>
                      </div>
                      <p className="dashboard-paragraph">
                        Production API keys cannot be created here. This sample
                        string demonstrates where a scoped credential could
                        appear in a future workspace.
                      </p>
                      <div className="demo-key">
                        <KeyRound size={18} />
                        <code>
                          {apiRevealed
                            ? sampleKey
                            : "demo_only_••••••••••••••••"}
                        </code>
                      </div>
                      <div className="button-row">
                        <Button
                          variant="secondary"
                          size="small"
                          onClick={() => setApiRevealed(!apiRevealed)}
                        >
                          {apiRevealed ? "Hide sample" : "Reveal sample"}
                        </Button>
                        <Button
                          variant="secondary"
                          size="small"
                          onClick={async () => {
                            try {
                              await navigator.clipboard.writeText(sampleKey);
                              setKeyCopied(true);
                              setTimeout(() => setKeyCopied(false), 1800);
                            } catch {
                              setNotice(
                                "Copy is unavailable. Reveal and select the sample string to copy it.",
                              );
                            }
                          }}
                        >
                          {keyCopied ? <Check size={14} /> : <Copy size={14} />}{" "}
                          {keyCopied ? "Copied" : "Copy sample"}
                        </Button>
                        <Button
                          variant="secondary"
                          size="small"
                          onClick={() => {
                            setSampleKey(`demo_only_${Date.now()}_not_valid`);
                            setNotice(
                              "The illustrative string was replaced. This is not a real API key.",
                            );
                          }}
                        >
                          <RotateCcw size={14} />
                          Rotate sample
                        </Button>
                      </div>
                    </div>
                    <div className="two-column" style={{ marginTop: 24 }}>
                      <div className="panel">
                        <Terminal className="accent-icon" />
                        <h3 style={{ marginTop: 15 }}>
                          Build with familiar patterns
                        </h3>
                        <p>
                          Explore example requests, event contracts, and
                          response formats.
                        </p>
                        <Link
                          className="text-link"
                          href="/developers"
                          style={{ marginTop: 20 }}
                        >
                          View developer notes
                        </Link>
                      </div>
                      <div className="panel">
                        <ShieldCheck className="accent-icon" />
                        <h3 style={{ marginTop: 15 }}>
                          Keep real keys on the server
                        </h3>
                        <p>
                          Never enter provider credentials in this demo.
                          Production keys require a server, access controls, and
                          secret management.
                        </p>
                      </div>
                    </div>
                  </>
                )}
                {section === "Analytics" && (
                  <>
                    <div className="stat-grid">
                      {[
                        [
                          "Sample success rate",
                          "98.4%",
                          "Illustrative, not measured",
                        ],
                        [
                          "Sample average duration",
                          "240 ms",
                          "Illustrative processing time",
                        ],
                        [
                          "Sample executions",
                          String(flows.reduce((n, f) => n + f.runs, 0)),
                          "Updates when you run demos",
                        ],
                        ["Demo errors", "3", "Illustrative recoverable events"],
                      ].map(([l, v, c]) => (
                        <div className="stat-card" key={l}>
                          <span>{l}</span>
                          <strong>{v}</strong>
                          <small>{c}</small>
                        </div>
                      ))}
                    </div>
                    <div className="dashboard-panel">
                      <div className="panel-heading">
                        <h2>Sample executions by workflow</h2>
                        <Button
                          variant="secondary"
                          size="small"
                          onClick={exportReport}
                        >
                          <Download size={14} />
                          Export sample
                        </Button>
                      </div>
                      <div className="analytics-bars">
                        {visibleFlows.map((f) => (
                          <div key={f.id}>
                            <div>
                              <span>{f.name}</span>
                              <strong>{f.runs}</strong>
                            </div>
                            <div className="progress-track">
                              <span
                                style={{
                                  width: `${Math.min(100, (f.runs / Math.max(...flows.map((x) => x.runs), 1)) * 100)}%`,
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
                {section === "Usage" && (
                  <div className="dashboard-panel">
                    <div className="panel-heading">
                      <h2>Usage overview</h2>
                      <Button
                        variant="secondary"
                        size="small"
                        onClick={exportReport}
                      >
                        <Download size={14} />
                        Download CSV
                      </Button>
                    </div>
                    <p className="dashboard-paragraph">
                      Illustrative limits only. Production quotas and billing
                      terms have not been confirmed.
                    </p>
                    {[
                      ["API requests", "24,580 of 50,000 sample requests", 49],
                      [
                        "Workflow executions",
                        `${flows.reduce((n, f) => n + f.runs, 0)} sample executions`,
                        38,
                      ],
                      [
                        "Connections",
                        `${connections.length} sample connections`,
                        connections.length * 10,
                      ],
                    ].map(([label, caption, value]) => (
                      <div className="usage-item" key={label}>
                        <div>
                          <h3>{label}</h3>
                          <span className="small-note">{caption}</span>
                        </div>
                        <div className="progress-track">
                          <span
                            style={{
                              width: `${Math.min(Number(value), 100)}%`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {section === "Billing" && (
                  <div className="dashboard-panel billing-panel">
                    <CreditCard size={35} className="accent-icon" />
                    <h2>No subscription in this preview.</h2>
                    <p>
                      No payments are processed and no payment information is
                      collected. Proposed plans and pricing discussions are
                      available on the public website.
                    </p>
                    <div className="button-row">
                      <Link className="button button-primary" href="/pricing">
                        Explore proposed plans
                      </Link>
                      <Link className="button button-secondary" href="/contact">
                        Discuss requirements
                      </Link>
                    </div>
                  </div>
                )}
                {section === "Settings" && (
                  <form
                    className="dashboard-panel settings-form"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setNotice(
                        "Demo workspace settings updated for this page session. They reset on reload.",
                      );
                    }}
                  >
                    <h2>Demo workspace settings</h2>
                    <p className="dashboard-paragraph">
                      These are local demonstration preferences. No account
                      settings are saved to a server.
                    </p>
                    <div className="field">
                      <label htmlFor="workspace-name">Workspace name</label>
                      <input
                        id="workspace-name"
                        value={workspaceName}
                        onChange={(e) => setWorkspaceName(e.target.value)}
                        required
                        maxLength={35}
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="display-name">Demo display name</label>
                      <input
                        id="display-name"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        required
                        maxLength={30}
                      />
                    </div>
                    <div className="settings-theme">
                      <div>
                        <strong>Appearance</strong>
                        <p>
                          Switch between light and dark. Theme preference stays
                          on this device.
                        </p>
                      </div>
                      <ThemeToggle />
                    </div>
                    <Button type="submit" size="small">
                      Save demo settings
                    </Button>
                  </form>
                )}
                {section === "Support" && (
                  <div className="support-grid">
                    {[
                      [
                        "Product FAQ",
                        "Understand the platform and what this demo can do.",
                        "/faq",
                        HelpCircle,
                      ],
                      [
                        "Developer notes",
                        "Explore illustrative APIs and architecture patterns.",
                        "/developers",
                        Terminal,
                      ],
                      [
                        "Contact draft",
                        "Prepare a local inquiry about your requirements.",
                        "/contact",
                        Network,
                      ],
                    ].map(([title, text, href, Icon]) => {
                      const I = Icon as typeof HelpCircle;
                      return (
                        <Link
                          className="panel"
                          key={title as string}
                          href={href as string}
                        >
                          <I className="accent-icon" />
                          <h3 style={{ marginTop: 20 }}>{title as string}</h3>
                          <p>{text as string}</p>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <Dialog open={connectOpen} onOpenChange={setConnectOpen}>
        <ConnectionDialog
          existing={connections.map((c) => c.slug)}
          onSave={addConnection}
          onClose={() => setConnectOpen(false)}
        />
      </Dialog>
      <Dialog open={notifications} onOpenChange={setNotifications}>
        <DialogContent
          title="Demo notifications"
          description="These notifications are sample events. No real services are being monitored."
        >
          <div className="activity-list">
            {events.slice(0, 4).map((event, i) => (
              <div key={event + i}>
                <Activity size={16} />
                <span>{event}</span>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={profile} onOpenChange={setProfile}>
        <DialogContent
          title="Your demo profile"
          description="This is a sample user, not an authenticated account. No login or profile information is stored on a server."
        >
          <div className="profile-modal">
            <span className="avatar">{displayName[0] || "A"}</span>
            <div>
              <strong>{displayName}</strong>
              <span className="small-note">Preview workspace user</span>
            </div>
          </div>
          <Button
            variant="secondary"
            onClick={() => {
              go("Settings");
              setProfile(false);
            }}
          >
            Edit demo settings
          </Button>
        </DialogContent>
      </Dialog>
      <Dialog open={workflowOpen} onOpenChange={setWorkflowOpen}>
        <DialogContent
          title="Create a sample workflow"
          description="Add a local demonstration workflow. It will use sample Stripe → HubSpot → Slack steps and will not access external accounts."
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setFlows((current) => [
                ...current,
                {
                  id: Date.now(),
                  name: workflowName.trim(),
                  path: "Stripe → HubSpot → Slack",
                  active: true,
                  runs: 0,
                },
              ]);
              setWorkflowName("");
              setWorkflowOpen(false);
              setNotice(
                "Sample workflow created for this session. Run it to explore the demo.",
              );
            }}
          >
            <div className="field">
              <label htmlFor="workflow-name">Workflow name</label>
              <input
                id="workflow-name"
                value={workflowName}
                onChange={(e) => setWorkflowName(e.target.value)}
                required
                minLength={3}
                maxLength={60}
                placeholder="My onboarding workflow"
              />
            </div>
            <Button type="submit">Create sample workflow</Button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}
function Empty({ text }: { text: string }) {
  return (
    <div className="empty-state">
      <Search size={24} />
      <p>{text}</p>
    </div>
  );
}
function ConnectionDialog({
  existing,
  onSave,
  onClose,
}: {
  existing: string[];
  onSave: (slug: string, scope: string, auth: string) => void;
  onClose: () => void;
}) {
  const [step, setStep] = useState(0);
  const [slug, setSlug] = useState("");
  const [auth, setAuth] = useState("OAuth");
  const [scope, setScope] = useState("Read events");
  const [testing, setTesting] = useState(false);
  const [tested, setTested] = useState(false);
  const available = integrations.filter((a) => !existing.includes(a.slug));
  const app = integrations.find((a) => a.slug === slug);
  return (
    <DialogContent
      title={
        [
          "Choose an application",
          "Configure your connection",
          "Test the sample connection",
          "Save your demo connection",
        ][step]
      }
      description="Demo mode. This flow illustrates configuration without collecting credentials or contacting a provider."
    >
      <div className="connection-steps" aria-label={`Step ${step + 1} of 4`}>
        {[1, 2, 3, 4].map((n, i) => (
          <span className={i <= step ? "current" : ""} key={n}>
            {n}
          </span>
        ))}
      </div>
      {step === 0 ? (
        <div className="field">
          <label htmlFor="connect-app">Application</label>
          <select
            id="connect-app"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
          >
            <option value="">Select an application</option>
            {available.map((a) => (
              <option key={a.slug} value={a.slug}>
                {a.name}
              </option>
            ))}
          </select>
          {available.length === 0 && (
            <p className="field-hint">
              All sample applications are already connected.
            </p>
          )}
        </div>
      ) : step === 1 ? (
        <>
          <div className="field">
            <label htmlFor="connect-auth">Authorization method (preview)</label>
            <select
              id="connect-auth"
              value={auth}
              onChange={(e) => setAuth(e.target.value)}
            >
              <option>OAuth</option>
              <option>API key</option>
            </select>
            <span className="field-hint">
              No token or password is requested. Real authorization is
              unavailable.
            </span>
          </div>
          <div className="field">
            <label htmlFor="connect-scope">Sample permissions</label>
            <select
              id="connect-scope"
              value={scope}
              onChange={(e) => setScope(e.target.value)}
            >
              <option>Read events</option>
              <option>Read sample records</option>
              <option>Read and write sample records</option>
            </select>
          </div>
        </>
      ) : step === 2 ? (
        <div className="connection-test">
          <div className="test-icon">
            {testing ? (
              <Loader2 className="spin" />
            ) : tested ? (
              <Check />
            ) : (
              <Network />
            )}
          </div>
          <h3>
            {testing
              ? "Running sample test…"
              : tested
                ? "Sample test complete"
                : "Ready for a sample test"}
          </h3>
          <p>
            {tested
              ? "The local demonstration passed. No external connection was tested."
              : "Explore a simulated validation step for " + app?.name + "."}
          </p>
          <Button
            variant="secondary"
            disabled={testing || tested}
            onClick={async () => {
              setTesting(true);
              await new Promise((resolve) => setTimeout(resolve, 650));
              setTested(true);
              setTesting(false);
            }}
          >
            Run sample test
          </Button>
        </div>
      ) : (
        <div className="panel connection-summary">
          <h3>{app?.name}</h3>
          <p>
            {auth} preview · {scope}
          </p>
          <span className="badge badge-purple">Demo only</span>
          <p>
            No external account will be connected. This sample is kept for the
            current page session.
          </p>
        </div>
      )}
      <div className="button-row">
        {step > 0 && (
          <Button
            variant="secondary"
            disabled={testing}
            onClick={() => setStep(step - 1)}
          >
            Back
          </Button>
        )}
        <Button
          disabled={(step === 0 && !slug) || (step === 2 && !tested) || testing}
          onClick={() => {
            if (step < 3) setStep(step + 1);
            else {
              onSave(slug, scope, auth);
              onClose();
              setStep(0);
              setSlug("");
              setTested(false);
            }
          }}
        >
          {step === 3 ? "Save demo connection" : "Continue"}
        </Button>
      </div>
    </DialogContent>
  );
}
