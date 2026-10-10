# Spira Giving Colorado — research and redesign plan

Prepared October 10, 2026. The user identified the organization as Spira Giving Colorado in Denver. The site is in English for its US audience.

## Research findings

- Legal name: Spira Giving Colorado; EIN 88-2401698; Denver, Colorado. Public records identify a 501(c)(3) private foundation, an August 2022 exemption ruling, and an arts, culture and humanities classification.
- The foundation files Form 990-PF. Its 2025 filing reports $675,984 revenue, $149,004 expenses, $3,456,366 year-end book assets and $109,500 in grants paid. The user-supplied $2.1M annual income was not reproduced because it does not match the latest filing.
- The actual 2025 grants-paid schedule lists Music Appreciation Society ($100,000), Levitt Pavilion Denver ($7,000) and Creative Music Works ($2,500). The 2024 schedule also lists KGNU Radio Denver and Denver Young Artists Orchestra.
- The 2025 filing checks the indication that contributions are made only to preselected charitable organizations; unsolicited requests for funds are not accepted. An open grant application would therefore be inappropriate.
- Curious Theatre Company's April 9, 2026 announcement identifies Acoma Theater LLC as a nonprofit project of Spira Giving Colorado in a redevelopment partnership at 1080 Acoma Street. The journal presents a dated summary, not a claim that construction has finished.
- NEA Colorado research gives context for the arts sector. Statewide economic figures are clearly distinguished from foundation impact.

## Sources

- [Organization profile and annual filings](https://projects.propublica.org/nonprofits/organizations/882401698)
- [2025 original filing reconstructed from IRS data](https://projects.propublica.org/nonprofits/organizations/882401698/202601149349100030/full)
- [2024 original filing](https://projects.propublica.org/nonprofits/organizations/882401698/202511219349101011/full)
- [2023 original filing](https://projects.propublica.org/nonprofits/organizations/882401698/202421299349101612/full)
- [2022 original filing](https://projects.propublica.org/nonprofits/organizations/882401698/202301329349104405/full)
- [Curious Theatre Company announcement](https://www.curioustheatre.org/curious-theatre-company-secures-future-at-1080-acoma-through-sale-and-redevelopment-partnership-announces-29th-season-at-cleo-parker-robinsons-historic-shorter-ame/)
- [NEA Colorado profile](https://www.arts.gov/impact/state-profiles/colorado)
- [IRS organization search and verification guidance](https://www.irs.gov/charities-non-profits/search-for-tax-exempt-organizations)

## Design and content plan

Preserve the nonprofit visitor journeys: home, about, giving/causes, news, giving inquiry, volunteer interest and contact. Use original design and implementation rather than adapting the old charity template code. Replace SaaS pricing, integrations, accounts and dashboards with nonprofit content.

Use cream, forest green, terracotta, sage and soft lavender. Pair a large editorial serif with a restrained sans serif. A bloom mark and concert/gallery imagery connect the visual system to culture. Use generous spacing and clear actions, avoiding fabricated beneficiaries, testimonials, fundraising progress or event dates.

The homepage introduces purpose, areas reflected in actual giving, financial transparency and sourced news. Dedicated pages provide governance, filterable grants, year-selectable financial summaries, annual filings and a clear grantmaking policy.

Preserve name, email and message fields, plus contribution amount selection. GitHub Pages cannot run the old PHP mail handler. Forms therefore validate inputs and prepare an email draft or downloadable text copy; they never claim delivery. The existing repository's contact address, contact@spiragiving.dev, is retained. Its mailbox delivery has not been independently tested. No payment processor or official donation URL was supplied, so giving remains an inquiry and no card information is collected. No currently open volunteer role is invented.

## Build and publication

Retain Next.js static export and GitHub Pages. Source remains in main/web; generated export in main/docs. Publish generated files to the existing STartup branch root, preserving spiragiving.dev. Original .html page links and former SaaS routes redirect to the appropriate nonprofit pages. Keep Next static segment aliases for GitHub Pages client navigation.

Validate production build, all primary routes at desktop/tablet/mobile widths, real form behavior, public-record links, navigation, redirects, image loading, metadata and live HTTPS deployment. No force push.

## Photography

Images are illustrative and are not represented as foundation programs or recipients. Credits appear on the website privacy page.

- [CHUTTERSNAP — violin rehearsal](https://unsplash.com/photos/man-standing-in-front-of-stage-playing-violin-Kx4Mm3ZnZBc)
- [Johnell Pannell — museum visitors](https://unsplash.com/photos/two-people-looking-at-a-painting-in-a-museum-0aL3qzGKDpY)
- Both images: [Unsplash License](https://unsplash.com/license).
