"use client";
import Link from "next/link";
import { Search, ChevronLeft, ChevronRight, SearchX } from "lucide-react";
import { useMemo, useState, type CSSProperties } from "react";
import { integrations, type Integration } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Notice, PageHeader, CTA } from "@/components/shared";
export function AppIcon({ app }: { app: Integration }) {
  return (
    <span
      className="app-icon"
      style={{ "--app-color": app.color } as CSSProperties}
      aria-hidden="true"
    >
      {app.mark}
    </span>
  );
}
export function IntegrationCard({ app }: { app: Integration }) {
  return (
    <article className="integration-card">
      <div className="integration-card-head">
        <AppIcon app={app} />
        <span className="badge">Coming soon</span>
      </div>
      <h3>{app.name}</h3>
      <p>{app.description}</p>
      <div className="card-footer">
        <span>{app.category}</span>
        <Link
          href={`/integrations/${app.slug}`}
          aria-label={`Learn more about ${app.name}`}
        >
          Learn more
        </Link>
      </div>
    </article>
  );
}
export function Directory() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("Featured");
  const [page, setPage] = useState(1);
  const categories = ["All", ...new Set(integrations.map((a) => a.category))];
  const filtered = useMemo(() => {
    let result = integrations.filter(
      (a) =>
        (category === "All" || a.category === category) &&
        (a.name + " " + a.description)
          .toLowerCase()
          .includes(query.toLowerCase().trim()),
    );
    if (sort === "A–Z")
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "Z–A")
      result = [...result].sort((a, b) => b.name.localeCompare(a.name));
    return result;
  }, [query, category, sort]);
  const pages = Math.max(1, Math.ceil(filtered.length / 9));
  return (
    <>
      <PageHeader
        eyebrow="The integration ecosystem"
        title="Your tools. Better together."
        description="Explore the connections that could power your next workflow. One place for the software that makes your business work."
      />
      <div className="container page-body">
        <Notice>
          This directory illustrates planned integrations. Connectors are not
          available for production use. Explore a use case or try a connection
          in the demo workspace.
        </Notice>
        <div className="directory-toolbar">
          <div className="search-wrap">
            <Search size={18} />
            <input
              className="input"
              aria-label="Search integrations"
              placeholder="Search your favorite tools…"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
            />
          </div>
          <select
            className="input"
            aria-label="Sort integrations"
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
              setPage(1);
            }}
          >
            {["Featured", "A–Z", "Z–A"].map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
        <div className="filter-chips" aria-label="Integration categories">
          {categories.map((c) => (
            <button
              key={c}
              className={`filter-chip ${category === c ? "selected" : ""}`}
              aria-pressed={category === c}
              onClick={() => {
                setCategory(c);
                setPage(1);
              }}
            >
              {c}
            </button>
          ))}
        </div>
        <p className="directory-count" aria-live="polite">
          {filtered.length} illustrative integrations
          {category !== "All" ? ` in ${category}` : ""}
        </p>
        {filtered.length ? (
          <div className="three-column">
            {filtered.slice((page - 1) * 9, page * 9).map((app) => (
              <IntegrationCard key={app.slug} app={app} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <SearchX />
            <h3>No connections found</h3>
            <p>Try a different search or explore another category.</p>
            <Button
              variant="secondary"
              onClick={() => {
                setQuery("");
                setCategory("All");
              }}
            >
              Clear filters
            </Button>
          </div>
        )}
        {pages > 1 && (
          <nav className="pagination" aria-label="Directory pages">
            <Button
              variant="secondary"
              size="small"
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              <ChevronLeft size={16} />
              Previous
            </Button>
            <span aria-live="polite">
              Page {page} of {pages}
            </span>
            <Button
              variant="secondary"
              size="small"
              disabled={page === pages}
              onClick={() => setPage(page + 1)}
            >
              Next
              <ChevronRight size={16} />
            </Button>
          </nav>
        )}
      </div>
      <CTA />
    </>
  );
}
