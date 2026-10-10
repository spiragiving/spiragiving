"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { reports, grants, money, filingUrl, foundation } from "@/lib/nonprofit";
export function GivingRecord() {
  const [year, setYear] = useState(2025);
  const [category, setCategory] = useState("All areas");
  const rows = grants.filter(
    (g) =>
      g.year === year && (category === "All areas" || g.category === category),
  );
  return (
    <section className="giving-record" id="giving-record">
      <div className="record-controls">
        <div>
          <label htmlFor="grant-year">Fiscal year</label>
          <select
            id="grant-year"
            value={year}
            onChange={(e) => {
              setYear(Number(e.target.value));
              setCategory("All areas");
            }}
          >
            <option value={2025}>2025</option>
            <option value={2024}>2024</option>
          </select>
        </div>
        <div>
          <label htmlFor="grant-category">Focus area</label>
          <select
            id="grant-category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {[
              "All areas",
              ...new Set(
                grants.filter((g) => g.year === year).map((g) => g.category),
              ),
            ].map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
        <p>Grants paid · {year} Form 990-PF</p>
      </div>
      <div className="grant-table">
        <div className="grant-table-head">
          <span>Charitable organization</span>
          <span>Focus</span>
          <span>Amount</span>
        </div>
        {rows.map((g) => (
          <div className="grant-row" key={`${g.year}-${g.name}`}>
            <div>
              <a href={g.url} target="_blank" rel="noreferrer">
                {g.name}
                <ArrowUpRight size={18} />
              </a>
              <p>{g.description}</p>
            </div>
            <span className="grant-category">{g.category}</span>
            <strong>{money(g.amount)}</strong>
          </div>
        ))}
        <div className="grant-total">
          <span>
            {category === "All areas" ? "Total grants paid" : "Selected grants"}
          </span>
          <strong>{money(rows.reduce((a, g) => a + g.amount, 0))}</strong>
        </div>
      </div>
      <p className="source-note">
        Source:{" "}
        <a href={filingUrl(year)} target="_blank" rel="noreferrer">
          {year} Form 990-PF, grants-paid schedule <ArrowUpRight size={13} />
        </a>
        . Names are standardized for readability. Focus labels are editorial
        categories; grant purposes follow the filing. Listing a recipient does
        not imply an ongoing partnership.
      </p>
    </section>
  );
}
export function FinancialRecord() {
  const [year, setYear] = useState(2025);
  const report = reports.find((r) => r.year === year)!;
  return (
    <section id="financials" className="financial-record">
      <div className="section-heading">
        <div>
          <p className="eyebrow">A clear public record</p>
          <h2>Giving, in numbers.</h2>
        </div>
        <label className="year-select" htmlFor="financial-year">
          Fiscal year
          <select
            id="financial-year"
            aria-label="Fiscal year"
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
          >
            {reports.map((r) => (
              <option key={r.year}>{r.year}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="financial-grid">
        {[
          ["Grants paid", report.grants],
          ["Total revenue", report.revenue],
          ["Total expenses", report.expenses],
          ["Year-end assets", report.assets],
        ].map(([label, value]) => (
          <div key={label}>
            <span>{label}</span>
            <strong>{money(Number(value))}</strong>
            <small>Fiscal year {year}</small>
          </div>
        ))}
      </div>
      <p className="source-note">
        Source: {year} Form 990-PF, filed {report.filed}. Assets are end-of-year
        book value. Grants paid are included in total expenses; revenue is not
        fundraising income.{" "}
        <a href={filingUrl(year)} target="_blank" rel="noreferrer">
          View the public filing
          <ArrowUpRight size={13} />
        </a>
      </p>
      <div className="filing-list">
        <h3>Annual filings</h3>
        {reports.map((r) => (
          <a
            key={r.year}
            href={filingUrl(r.year)}
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <strong>{r.year}</strong> Form 990-PF
            </span>
            <span>
              Filed {r.filed}
              <ArrowUpRight size={17} />
            </span>
          </a>
        ))}
      </div>
      <a
        className="text-link"
        href={foundation.profile}
        target="_blank"
        rel="noreferrer"
      >
        Browse all public records
        <ArrowUpRight size={17} />
      </a>
    </section>
  );
}
