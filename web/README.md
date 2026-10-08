# SPIRAGIVING website

Original technology startup website built with Next.js App Router, React, TypeScript, Tailwind CSS, Radix-based shadcn-style primitives, Framer Motion, and Lucide icons. Fonts are self-hosted.

## Run locally

```sh
npm ci
npm run dev
```

## Build and publish to GitHub Pages

```sh
npm run typecheck
npm run build
node scripts/publish-export.mjs
```

Commit `web/` and the generated `docs/` directory, then push `main`. GitHub Pages must be set to deploy from **main /docs**. The custom domain is `spiragiving.dev`; `docs/CNAME` preserves it and `.nojekyll` allows `_next` assets to be served. This site uses static export with trailing-slash routes and can also be deployed using a static host or Vercel.

Existing legacy website files and the `STartup` branch have been retained. They are not used by the new Pages publishing source. No files or styles from the older template are used in this original implementation.

## Available functionality

- Fifteen primary pages: Home, Platform, Integrations, Solutions, Developers, Pricing, About, Contact, Journal, FAQ, Privacy, Terms, Login, Signup, and Demo Dashboard.
- Nineteen illustrative connector detail pages and three original journal articles.
- Search, category filters, sorting, pagination, light/dark theme, accessible mobile navigation, FAQ accordions, code language selection and clipboard copy.
- Interactive browser-only dashboard with local sample connections, a four-step connection flow, workflow creation/run/pause, usage CSV export, activity updates, settings, notifications, and profile dialogs.
- Contact validation and local draft download. Authentication screens validate sample inputs and explicitly report that accounts cannot be created or signed in.
- Canonical metadata, Open Graph and Twitter text metadata, sitemap, robots, organization and FAQ structured data, original logo assets, favicon, and application icon.

## Demo boundaries

No production integration, authentication provider, database, API, email delivery, payment processor, analytics tracker, or security certification is represented as implemented. Pricing and connectors are marked as proposed/coming soon. All dashboard values are sample data. Dashboard edits remain in memory and reset on reload; only the non-sensitive theme preference is stored locally. Auth inputs are never transmitted or stored. Contact drafts are generated on the visitor's device and are not submitted.

No environment variables or secret keys are required. Never place credentials in `NEXT_PUBLIC_*`, browser storage, public files, or commits. GitHub Pages serves static files and does not run a backend; real authentication, contact delivery, and integrations require a separately configured service. Server headers and server-side rate limiting cannot be implemented by this static application.

## Structure

`app/` contains statically generated routes and metadata; `components/` contains the shared brand, navigation, layouts, and public-page compositions; `features/` contains directory, developer examples, forms, and demo workspace behavior; `lib/` contains typed public content and utilities; `public/` contains original SVG branding and hosting assets.

## Brand assets

- `brand-icon.svg`: standalone original gradient symbol
- `logo-light.svg`: horizontal logo for dark backgrounds
- `logo-dark.svg`: horizontal logo for light backgrounds
- `logo-monochrome.svg`: one-color horizontal logo
- `favicon.svg`: compact browser icon
- `app-icon.svg`: scalable 512×512 application icon

Third-party app names are illustrative and do not claim partnerships or endorsement. Only the verified SPIRAGIVING GitHub repository is linked as an official social profile.
