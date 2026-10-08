"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import {
  Moon,
  Sun,
  Menu,
  X,
  ChevronDown,
  Github,
  Command,
  ExternalLink,
} from "lucide-react";
import * as Dropdown from "@radix-ui/react-dropdown-menu";
import { Logo } from "./brand";
const nav = [
  {
    name: "Platform",
    href: "/platform",
    items: [
      ["Overview", "/platform"],
      ["API connectivity", "/platform#api"],
      ["Workflow automation", "/platform#automation"],
      ["Security", "/platform#security"],
      ["Infrastructure", "/platform#infrastructure"],
    ],
  },
  { name: "Integrations", href: "/integrations" },
  {
    name: "Solutions",
    href: "/solutions",
    items: [
      ["Startups", "/solutions#startups"],
      ["Enterprises", "/solutions#enterprises"],
      ["Developers", "/solutions#developers"],
      ["SaaS businesses", "/solutions#saas-businesses"],
      ["Digital agencies", "/solutions#digital-agencies"],
    ],
  },
  { name: "Developers", href: "/developers" },
  { name: "Pricing", href: "/pricing" },
  {
    name: "Company",
    href: "/about",
    items: [
      ["About us", "/about"],
      ["Journal", "/blog"],
      ["Contact", "/contact"],
    ],
  },
];
export function ThemeToggle() {
  const [light, setLight] = useState(false);
  useEffect(() => {
    const stored = localStorage.getItem("spiragiving-theme");
    const value = stored === "light";
    setLight(value);
    document.documentElement.dataset.theme = value ? "light" : "dark";
  }, []);
  return (
    <button
      className="icon-button"
      aria-label={light ? "Switch to dark theme" : "Switch to light theme"}
      onClick={() => {
        const value = !light;
        setLight(value);
        document.documentElement.dataset.theme = value ? "light" : "dark";
        localStorage.setItem("spiragiving-theme", value ? "light" : "dark");
      }}
    >
      {light ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
export function SiteShell({ children }: { children: ReactNode }) {
  const path = usePathname();
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    setMobile(false);
  }, [path]);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="nav-inner">
          <Link href="/" aria-label="SPIRAGIVING home">
            <Logo />
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {nav.map((item) =>
              item.items ? (
                <Dropdown.Root key={item.name}>
                  <Dropdown.Trigger
                    className={`nav-link ${path.startsWith(item.href) ? "active" : ""}`}
                  >
                    {item.name}
                    <ChevronDown size={12} />
                  </Dropdown.Trigger>
                  <Dropdown.Portal>
                    <Dropdown.Content className="nav-dropdown" sideOffset={18}>
                      {item.items.map(([label, href]) => (
                        <Dropdown.Item asChild key={href}>
                          <Link href={href}>{label}</Link>
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Content>
                  </Dropdown.Portal>
                </Dropdown.Root>
              ) : (
                <Link
                  key={item.name}
                  className={`nav-link ${path.startsWith(item.href) ? "active" : ""}`}
                  href={item.href}
                >
                  {item.name}
                </Link>
              ),
            )}
          </nav>
          <div className="nav-actions">
            <ThemeToggle />
            <Link href="/login" className="login-link">
              Log in
            </Link>
            <Link href="/signup" className="button button-primary button-small">
              Get started
            </Link>
            <button
              className="icon-button mobile-menu-button"
              aria-label={mobile ? "Close navigation" : "Open navigation"}
              aria-expanded={mobile}
              aria-controls="mobile-navigation"
              onClick={() => setMobile(!mobile)}
            >
              {mobile ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
        {mobile && (
          <nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
          >
            {nav.map((item) => (
              <Link key={item.name} href={item.href}>
                {item.name}
              </Link>
            ))}
            <Link href="/blog">Journal</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/login">Log in</Link>
            <Link href="/signup">Get started</Link>
          </nav>
        )}
      </header>
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
function Footer() {
  return (
    <footer className="footer container">
      <div className="footer-top">
        <div className="footer-brand">
          <Link href="/">
            <Logo />
          </Link>
          <p>
            Connect everything.
            <br />
            Build without limits.
          </p>
          <a
            className="social-link"
            href="https://github.com/spiragiving/spiragiving"
            target="_blank"
            rel="noreferrer"
            aria-label="SPIRAGIVING on GitHub"
          >
            <Github size={18} />
            <span>GitHub</span>
            <ExternalLink size={12} />
          </a>
        </div>
        {[
          [
            "Product",
            ["Platform", "/platform"],
            ["Integrations", "/integrations"],
            ["Solutions", "/solutions"],
            ["Pricing", "/pricing"],
          ],
          [
            "Company",
            ["About us", "/about"],
            ["Journal", "/blog"],
            ["Contact", "/contact"],
          ],
          [
            "Resources",
            ["Developers", "/developers"],
            ["Documentation", "/developers#documentation"],
            ["FAQ", "/faq"],
            ["Demo workspace", "/dashboard"],
          ],
          [
            "Legal",
            ["Privacy policy", "/privacy"],
            ["Terms of service", "/terms"],
          ],
        ].map(([heading, ...links]) => (
          <div className="footer-column" key={heading as string}>
            <h3>{heading}</h3>
            {(links as string[][]).map(([label, href]) => (
              <Link key={label} href={href}>
                {label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <span>© 2026 SPIRAGIVING. All rights reserved.</span>
        <span className="footer-note">
          <Command size={13} /> A more connected digital future.
        </span>
      </div>
    </footer>
  );
}
