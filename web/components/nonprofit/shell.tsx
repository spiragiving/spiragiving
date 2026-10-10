"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Wordmark } from "./common";
import { foundation } from "@/lib/nonprofit";
const nav = [
  ["Our story", "/about/"],
  ["Our giving", "/work/"],
  ["Transparency", "/impact/"],
  ["Journal", "/blog/"],
];
export function NonprofitShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    function escape(e: KeyboardEvent) {
      if (e.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="location-bar">
        <div className="wrap">
          <span>
            <span className="location-dot" />
            Rooted in Denver. Giving for Colorado.
          </span>
          <Link href="/contact/">
            Let’s connect <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>
      <header className="site-header">
        <div className="wrap header-inner">
          <Link href="/" aria-label="SpiraGiving Colorado home">
            <Wordmark />
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {nav.map(([name, href]) => (
              <Link
                key={href}
                href={href}
                aria-current={pathname === href ? "page" : undefined}
              >
                {name}
              </Link>
            ))}
          </nav>
          <Link href="/donate/" className="header-give">
            Support the arts <ArrowUpRight size={16} />
          </Link>
          <button
            ref={toggle}
            className="menu-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav
            id="mobile-navigation"
            className="mobile-nav wrap"
            aria-label="Mobile navigation"
          >
            {[
              ...nav,
              ["Support the arts", "/donate/"],
              ["Contact", "/contact/"],
            ].map(([name, href]) => (
              <Link
                key={href}
                href={href}
                aria-current={pathname === href ? "page" : undefined}
              >
                {name}
                <ArrowUpRight size={17} />
              </Link>
            ))}
          </nav>
        )}
      </header>
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <footer className="site-footer">
        <div className="wrap">
          <div className="footer-top">
            <div className="footer-brand">
              <Link href="/" aria-label="SpiraGiving Colorado home">
                <Wordmark />
              </Link>
              <p>
                Helping Colorado’s
                <br />
                creative community flourish.
              </p>
              <span>Denver, Colorado · EIN {foundation.ein}</span>
            </div>
            <div>
              <h2>The foundation</h2>
              <Link href="/about/">Our story</Link>
              <Link href="/work/">Our giving</Link>
              <Link href="/impact/">Transparency & filings</Link>
              <Link href="/blog/">Journal</Link>
            </div>
            <div>
              <h2>Get involved</h2>
              <Link href="/donate/">Giving inquiries</Link>
              <Link href="/volunteer/">Volunteer interest</Link>
              <Link href="/contact/">Contact us</Link>
              <Link href="/faq/">Common questions</Link>
            </div>
            <div className="footer-contact">
              <h2>Start a conversation</h2>
              <a href={`mailto:${foundation.email}`}>
                {foundation.email}
                <ArrowUpRight size={15} />
              </a>
              <p>
                Grants support preselected charitable organizations. Unsolicited
                funding requests are not accepted.
              </p>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Spira Giving Colorado</span>
            <div>
              <Link href="/privacy/">Privacy</Link>
              <Link href="/terms/">Website terms</Link>
              <a href={foundation.profile} target="_blank" rel="noreferrer">
                Public records <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
          <p className="photo-disclosure">
            Photography illustrates arts and culture; it does not depict
            foundation programs or grant recipients.{" "}
            <Link href="/privacy/#photography">Photo credits</Link>
          </p>
        </div>
      </footer>
    </>
  );
}
