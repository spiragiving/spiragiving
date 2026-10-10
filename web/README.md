# Spira Giving Colorado website

Original nonprofit design built with Next.js App Router, React, TypeScript, Tailwind CSS and Lucide icons. Inter is self-hosted; headings use the system Georgia serif. No environment variables or secrets are required for the website.

## Development and export

```sh
npm ci
npm run dev
npm run build
node scripts/publish-export.mjs
```

The static export uses trailing-slash routes. The publishing script replaces only the repository `docs/` directory, adds dotted static-segment aliases required for Next.js navigation on GitHub Pages, preserves CNAME/.nojekyll, and provides redirects for the original nonprofit `.html` URLs.

Source is maintained on `main`. GitHub Pages uses **STartup /**. Copy the generated contents of `docs/` into the deployment branch root, commit normally and push that branch. Keep `CNAME` set to `spiragiving.dev`; do not force-push.

## Active website

- Home, Our Story, Our Giving, Transparency, Journal, Contact, Giving Inquiry, Volunteer Interest, FAQ, Privacy and Terms.
- Three sourced journal articles and annual public filings for 2022–2025.
- Year/category filters for actual grants paid in 2024–2025; year selection for financial summaries.
- Three validated forms with reviewable mailto drafts, text downloads and explicit delivery status.
- Mobile navigation with Escape handling, keyboard focus, reduced-motion support and a skip link.
- Metadata, social preview image, NGO structured data, sitemap and redirects from previous routes.

## Content and operational boundaries

See [NONPROFIT-PLAN.md](../NONPROFIT-PLAN.md) for evidence. Do not add fabricated people, testimonials, beneficiaries, event dates or fundraising statistics. Financial summaries describe specific fiscal years; they are not statements of current balances or recipient outcomes.

The foundation only contributes to preselected charitable organizations and does not accept unsolicited funding requests. There is no open grant application. No current foundation-run volunteer opening is claimed.

Contact, giving and volunteer forms prepare drafts on the visitor’s device. They do not submit responses to a server. The existing repository’s contact address, `contact@spiragiving.dev`, is retained; mailbox delivery has not been tested. Giving amount/frequency choices are inquiries only. No payment is collected, no recurring charge is configured and no tax receipt is issued. A verified official payment link or processor is required before adding checkout.

Images are licensed Unsplash illustrations of arts and culture, not photographs of the foundation’s activity. Credits and source links appear on the privacy page. The original implementation does not use the old charity template code or its photographs.

## Source structure

- `app/`: routes, export configuration and metadata.
- `components/nonprofit/`: current public website, forms and financial/grant interactions.
- `lib/nonprofit.ts`: organization identity, filing data, recipients, journal and FAQ.
- `public/photos/`: licensed illustrative photography.
- `scripts/publish-export.mjs`: GitHub Pages export preparation.
- `scripts/nonprofit-qa.cjs`: production browser checks, using the provided runtime’s Playwright and local Microsoft Edge. Set `QA_BASE` to test a different host; default is `http://127.0.0.1:4174`.

Earlier SaaS components remain unreferenced for source-history continuity. Legacy route lists are used only to generate redirect pages; the new site does not ship the earlier dashboard interface.

## Validation

Serve `docs/` over HTTP after exporting, then run `node scripts/nonprofit-qa.cjs`. The script checks fourteen content routes at 1440, 768, 390 and 320 pixels; navigation, grants, finances, input validation, drafts/downloads, FAQ, redirects and mobile menu behavior. It fails on overflow, broken images, runtime errors, failed same-host requests or unexpected form POSTs.
