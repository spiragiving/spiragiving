import Link from "next/link";
export default function NotFound() {
  return (
    <section className="container page-header" style={{ minHeight: 550 }}>
      <span className="eyebrow">404 / A missing connection</span>
      <h1>This page isn’t connected.</h1>
      <p>
        The address may have changed. Explore the platform or return to the
        homepage.
      </p>
      <div className="button-row" style={{ marginTop: 30 }}>
        <Link className="button button-primary" href="/">
          Back to home
        </Link>
        <Link className="button button-secondary" href="/integrations">
          Explore integrations
        </Link>
      </div>
    </section>
  );
}
