"use client";
import Link from "next/link";
import { useEffect } from "react";
export function LegacyRedirect({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);
  return (
    <section className="page-intro wrap">
      <p className="eyebrow">Spira Giving Colorado</p>
      <h1>A new home for this page.</h1>
      <p>Our website now focuses on the foundation’s arts and culture work.</p>
      <Link className="action" href={to}>
        Continue to the updated page →
      </Link>
    </section>
  );
}
