export const foundation = {
  name: "Spira Giving Colorado",
  shortName: "SpiraGiving",
  ein: "88-2401698",
  location: "Denver, Colorado",
  email: "contact@spiragiving.dev",
  profile: "https://projects.propublica.org/nonprofits/organizations/882401698",
  irs: "https://www.irs.gov/charities-non-profits/search-for-tax-exempt-organizations",
};

export const reports = [
  {
    year: 2025,
    revenue: 675984,
    expenses: 149004,
    assets: 3456366,
    grants: 109500,
    object: "202601149349100030",
    filed: "April 24, 2026",
  },
  {
    year: 2024,
    revenue: 99940,
    expenses: 196577,
    assets: 2943874,
    grants: 158000,
    object: "202511219349101011",
    filed: "May 1, 2025",
  },
  {
    year: 2023,
    revenue: 75293,
    expenses: 113951,
    assets: 3046366,
    grants: 105000,
    object: "202421299349101612",
    filed: "May 8, 2024",
  },
  {
    year: 2022,
    revenue: 7397,
    expenses: 22616,
    assets: 3005049,
    grants: 0,
    object: "202301329349104405",
    filed: "May 12, 2023",
  },
];
// All recipients and amounts below are transcribed from the foundation's
// 2024 and 2025 Form 990-PF, supplementary information, grants paid.
export const grants = [
  {
    year: 2025,
    name: "Music Appreciation Society",
    amount: 100000,
    category: "Music",
    description: "Support for welfare and culture in Colorado.",
    url: "https://www.musicappreciationsociety.org/",
  },
  {
    year: 2025,
    name: "Levitt Pavilion Denver",
    amount: 7000,
    category: "Music",
    description: "Support for welfare and culture in Colorado.",
    url: "https://www.levittdenver.org/",
  },
  {
    year: 2025,
    name: "Creative Music Works",
    amount: 2500,
    category: "Music",
    description: "Support for welfare and culture in Colorado.",
    url: "https://www.creativemusicworks.org/",
  },
  {
    year: 2024,
    name: "Music Appreciation Society",
    amount: 100000,
    category: "Music",
    description: "Support for welfare and culture in Colorado.",
    url: "https://www.musicappreciationsociety.org/",
  },
  {
    year: 2024,
    name: "KGNU Radio Denver",
    amount: 30000,
    category: "Community radio",
    description: "Support for welfare and culture in Colorado.",
    url: "https://kgnu.org/",
  },
  {
    year: 2024,
    name: "Denver Young Artists Orchestra",
    amount: 25000,
    category: "Arts education",
    description: "Support for welfare and culture in Colorado.",
    url: "https://www.dyao.org/",
  },
  {
    year: 2024,
    name: "Levitt Pavilion Denver",
    amount: 3000,
    category: "Music",
    description: "Support for welfare and culture in Colorado.",
    url: "https://www.levittdenver.org/",
  },
];
export const money = (amount: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
export const filingUrl = (year: number) => {
  const report = reports.find((r) => r.year === year);
  return report?.object
    ? `${foundation.profile}/${report.object}/full`
    : foundation.profile;
};

export const stories = [
  {
    slug: "a-new-chapter-for-denver-theatre",
    category: "Community news",
    date: "April 9, 2026",
    title: "A new chapter for a Denver cultural space.",
    excerpt:
      "Curious Theatre Company announces a redevelopment partnership at 1080 Acoma Street with a nonprofit project of Spira Giving Colorado.",
    image: "/photos/performance.jpg",
    source:
      "https://www.curioustheatre.org/curious-theatre-company-secures-future-at-1080-acoma-through-sale-and-redevelopment-partnership-announces-29th-season-at-cleo-parker-robinsons-historic-shorter-ame/",
    sourceName: "Curious Theatre Company announcement",
    paragraphs: [
      "On April 9, 2026, Curious Theatre Company announced the sale of its 1080 Acoma Street property to Acoma Theater LLC, described in the announcement as a nonprofit project of Spira Giving Colorado.",
      "The announcement describes a comprehensive redevelopment of the property, with Curious Theatre Company intended to remain the resident company and anchor tenant in a renovated cultural venue in Denver’s Golden Triangle neighborhood.",
      "Curious also announced that its 29th season would take place at Cleo Parker Robinson’s Historic Shorter AME. For performance dates, project updates and the latest details, please visit Curious Theatre Company’s original announcement.",
      "This summary reflects the April 2026 announcement. It does not confirm construction completion or a reopening date.",
    ],
  },
  {
    slug: "2025-giving-at-a-glance",
    category: "Foundation update",
    date: "Fiscal year 2025",
    title: "2025 giving, in the public record.",
    excerpt:
      "A closer look at the $109,500 in grants paid to three Colorado charitable organizations in our 2025 filing.",
    image: "/photos/gallery.jpg",
    source: filingUrl(2025),
    sourceName: "2025 Form 990-PF",
    paragraphs: [
      "Spira Giving Colorado’s Form 990-PF for the fiscal year ending December 2025 reports $109,500 in grants paid. The return was filed on April 24, 2026.",
      "The grants-paid schedule lists Music Appreciation Society ($100,000), Levitt Pavilion Denver ($7,000), and Creative Music Works ($2,500). The stated purpose for each grant is support for welfare and culture in Colorado.",
      "These are financial disbursements reported for one fiscal year. They do not measure attendance, individual beneficiaries, or the broader results of the recipient organizations’ work.",
      "The foundation’s filing states that it makes contributions to preselected charitable organizations and does not accept unsolicited requests for funds. Our transparency page links to the public filings so readers can review the complete financial context.",
    ],
  },
  {
    slug: "why-colorados-creative-life-matters",
    category: "Arts & community",
    date: "Research perspective",
    title: "Culture is part of a community’s everyday life.",
    excerpt:
      "Music, performance and cultural spaces contribute to Colorado’s shared experiences and creative economy.",
    image: "/photos/performance.jpg",
    source: "https://www.arts.gov/impact/state-profiles/colorado",
    sourceName: "National Endowment for the Arts — Colorado",
    paragraphs: [
      "Arts and culture bring people together through experiences they can share: a performance, a piece of music, an exhibition or a neighborhood gathering.",
      "The National Endowment for the Arts’ Colorado profile reports that arts and cultural production added approximately $20 billion to the state economy in 2023. This is statewide sector research, not a measure of Spira Giving Colorado’s impact.",
      "The same profile describes participation in live music, theater, dance and art exhibitions. These experiences connect cultural organizations with the people and places around them.",
      "For Spira Giving Colorado, the public record offers a more specific view: selected grants to charitable organizations working in Colorado’s cultural community. Explore our giving record alongside the original sources to understand the distinction.",
    ],
  },
];

export const questions = [
  [
    "What is Spira Giving Colorado?",
    "Spira Giving Colorado is a private foundation based in Denver, Colorado, classified in arts, culture and humanities. Its EIN is 88-2401698; public records list an IRS exemption ruling in August 2022.",
  ],
  [
    "Can my organization apply for a grant?",
    "The foundation’s public filing states that it only contributes to preselected charitable organizations and does not accept unsolicited requests for funds. The contact form is for general inquiries and is not a grant application.",
  ],
  [
    "Where can I review the financial statements?",
    "Our Transparency page summarizes fiscal years 2022–2025 and links to public Form 990-PF filings. Figures are labeled by year; grants paid are distinct from total expenses and assets.",
  ],
  [
    "Can I make a donation online?",
    "An online payment processor has not been connected to this website. The giving form prepares an inquiry about contributing; it does not charge a card, transfer funds or issue a tax receipt.",
  ],
  [
    "Are contributions tax-deductible?",
    "Public records identify Spira Giving Colorado as a 501(c)(3) organization and list contributions as tax-deductible. Check current eligibility with the IRS using EIN 88-2401698 and confirm the details of your particular gift before contributing.",
  ],
  [
    "Are there volunteer openings?",
    "No current foundation-run volunteer openings are advertised here. You can prepare an expression of interest, or explore opportunities directly with the cultural organizations listed in our giving record. An inquiry does not guarantee placement.",
  ],
  [
    "How do the contact forms work?",
    "The forms prepare an email draft on your device. You can open the draft in your email app or download a text copy. You still need to send the email yourself; this website does not submit or store form responses.",
  ],
];
