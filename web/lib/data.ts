export type Integration = {
  slug: string;
  name: string;
  category: string;
  description: string;
  color: string;
  mark: string;
  useCase: string;
};
export const integrations: Integration[] = [
  {
    slug: "google-workspace",
    name: "Google Workspace",
    category: "Productivity",
    description: "Keep documents, calendars, and team data in sync.",
    color: "#4285f4",
    mark: "G",
    useCase:
      "Turn a new calendar event into a project task and shared document.",
  },
  {
    slug: "microsoft-365",
    name: "Microsoft 365",
    category: "Productivity",
    description: "Connect the tools your team uses every day.",
    color: "#f35325",
    mark: "M",
    useCase: "Coordinate Outlook messages, Teams updates, and shared files.",
  },
  {
    slug: "slack",
    name: "Slack",
    category: "Communication",
    description: "Bring the right updates into your team conversations.",
    color: "#d986db",
    mark: "#",
    useCase: "Notify a channel when a high-value deal enters your CRM.",
  },
  {
    slug: "notion",
    name: "Notion",
    category: "Productivity",
    description: "Make your knowledge base part of your workflow.",
    color: "#a3a3b6",
    mark: "N",
    useCase: "Create a project page when a customer completes onboarding.",
  },
  {
    slug: "github",
    name: "GitHub",
    category: "Development",
    description: "Connect code, issues, and deployment events.",
    color: "#a3a3b6",
    mark: "GH",
    useCase: "Send release updates to your team and track deployment events.",
  },
  {
    slug: "gitlab",
    name: "GitLab",
    category: "Development",
    description: "Coordinate repositories and delivery pipelines.",
    color: "#fc6d26",
    mark: "GL",
    useCase: "Create a tracking record when a pipeline completes.",
  },
  {
    slug: "stripe",
    name: "Stripe",
    category: "Payments",
    description: "Bring payment events into your business processes.",
    color: "#8b7cff",
    mark: "S",
    useCase: "Create a CRM record and notification after a successful payment.",
  },
  {
    slug: "shopify",
    name: "Shopify",
    category: "E-commerce",
    description: "Connect orders, products, and customer journeys.",
    color: "#95bf47",
    mark: "S",
    useCase: "Route new orders to fulfillment and customer support tools.",
  },
  {
    slug: "hubspot",
    name: "HubSpot",
    category: "CRM",
    description: "Keep contacts and customer context connected.",
    color: "#ff7a59",
    mark: "H",
    useCase: "Enrich contacts using signup data and assign follow-up tasks.",
  },
  {
    slug: "salesforce",
    name: "Salesforce",
    category: "CRM",
    description: "Coordinate sales data across your software stack.",
    color: "#00a1e0",
    mark: "SF",
    useCase: "Synchronize opportunity changes with your reporting workspace.",
  },
  {
    slug: "supabase",
    name: "Supabase",
    category: "Databases",
    description: "Connect application data to your wider ecosystem.",
    color: "#3ecf8e",
    mark: "SB",
    useCase: "Use a database event to update downstream tools.",
  },
  {
    slug: "postgresql",
    name: "PostgreSQL",
    category: "Databases",
    description: "Design dependable data synchronization flows.",
    color: "#5f9ac7",
    mark: "PG",
    useCase: "Transform validated records into a reporting dataset.",
  },
  {
    slug: "openai",
    name: "OpenAI",
    category: "AI",
    description: "Explore AI-assisted enrichment and classification.",
    color: "#74aa9c",
    mark: "AI",
    useCase: "Classify incoming requests before routing them to a team.",
  },
  {
    slug: "anthropic",
    name: "Anthropic",
    category: "AI",
    description: "Add language intelligence to connected workflows.",
    color: "#d4a27f",
    mark: "A",
    useCase: "Summarize a support conversation for a human reviewer.",
  },
  {
    slug: "cloudflare",
    name: "Cloudflare",
    category: "Cloud Infrastructure",
    description: "Coordinate edge infrastructure and service events.",
    color: "#f38020",
    mark: "CF",
    useCase: "Surface infrastructure events in a shared operations channel.",
  },
  {
    slug: "aws",
    name: "AWS",
    category: "Cloud Infrastructure",
    description: "Explore cloud service connectivity.",
    color: "#ff9900",
    mark: "aws",
    useCase: "Connect a storage event to an application processing flow.",
  },
  {
    slug: "google-analytics",
    name: "Google Analytics",
    category: "Analytics",
    description: "Connect reporting insights to your team workspace.",
    color: "#e8a43c",
    mark: "GA",
    useCase: "Share a scheduled campaign performance digest.",
  },
  {
    slug: "mailchimp",
    name: "Mailchimp",
    category: "Marketing",
    description: "Coordinate audience data and campaign workflows.",
    color: "#e9ce52",
    mark: "MC",
    useCase: "Prepare an opted-in audience segment from validated CRM records.",
  },
  {
    slug: "n8n",
    name: "n8n",
    category: "Automation",
    description: "Explore reusable automation across your tools.",
    color: "#ea4b71",
    mark: "n8n",
    useCase: "Trigger a reviewed workflow from a business application event.",
  },
];
export const features = [
  [
    "Universal connectivity",
    "One thoughtful workspace for your applications, services, and data.",
    "Network",
  ],
  [
    "APIs without the friction",
    "Design flexible connections with clear contracts and scoped permissions.",
    "Code2",
  ],
  [
    "Workflows that work for you",
    "Turn repetitive processes into repeatable, observable workflows.",
    "Workflow",
  ],
  [
    "See the whole picture",
    "Find every connection, event, and workflow in one place.",
    "LayoutDashboard",
  ],
  [
    "Security by design",
    "Plan access around least privilege, careful handling, and visibility.",
    "ShieldCheck",
  ],
  [
    "Room to grow",
    "Build an integration architecture that evolves with your business.",
    "Cloud",
  ],
] as const;
export const faq = [
  [
    "What is SPIRAGIVING?",
    "SPIRAGIVING is a software connectivity platform in development. This website introduces its vision and includes an interactive demonstration of integration management.",
  ],
  [
    "How does software integration work?",
    "An integration uses APIs or events to move selected data between applications. A workflow defines when that transfer happens, how data is mapped, and how errors are handled.",
  ],
  [
    "Do I need technical experience?",
    "The planned workspace aims to make common workflows approachable. Advanced API setup and custom logic may still require a developer. You can explore the demo without any setup.",
  ],
  [
    "Can developers use the platform?",
    "The developer section describes the proposed REST API and webhook architecture. Code examples are illustrative; a public production API and SDK are not available yet.",
  ],
  [
    "What types of applications can be connected?",
    "The directory illustrates productivity, CRM, payments, cloud, database, and AI use cases. Listed connectors are planned examples, not currently available production integrations.",
  ],
  [
    "Is my data secure?",
    "The demo does not connect to external accounts or collect credentials. Production security controls will need to be implemented and independently verified before real integrations launch.",
  ],
  [
    "Can I automate business workflows?",
    "You can run sample workflows in the demo dashboard. These runs update demo data only and do not trigger actions in external applications.",
  ],
  [
    "Do you provide API access?",
    "Production API access is not currently available. The developer page provides illustrative request and response examples to explain the intended developer experience.",
  ],
  [
    "Is SPIRAGIVING suitable for startups?",
    "The product vision focuses on connecting a growing software stack with fewer custom integrations. Availability and final plan details will be confirmed before launch.",
  ],
  [
    "How can I contact the team?",
    "Use the contact page to prepare a message. It currently offers a draft download rather than a live submission service. You can also visit the verified GitHub repository.",
  ],
];
export const articles = [
  {
    slug: "a-connected-software-stack",
    category: "Perspective",
    title: "A connected stack is more than a collection of apps",
    excerpt:
      "Why the space between your tools deserves as much attention as the tools themselves.",
    date: "October 8, 2026",
    time: "4 min read",
    paragraphs: [
      "Every growing business adds software. A CRM captures leads, a payment tool records transactions, and a project workspace tracks delivery. The challenge appears between those tools: information becomes fragmented, ownership becomes unclear, and teams repeat the same work.",
      "A connected stack starts with a map of the information your business actually needs to share. Identify the source of truth for each record, the people responsible for it, and the moment another system needs to know about a change.",
      "Start with one narrow workflow. A customer completes onboarding, a project is created, and a team receives a notification. Define the minimum fields, permissions, and failure handling before adding more steps.",
      "The goal is not to connect everything at once. It is to create dependable connections that reduce work and remain understandable as your business changes. This is the approach behind the SPIRAGIVING product vision.",
    ],
  },
  {
    slug: "designing-resilient-workflows",
    category: "Engineering",
    title: "Design workflows for the moments things go wrong",
    excerpt:
      "Retries, idempotency, and visibility are part of the workflow, not an afterthought.",
    date: "October 8, 2026",
    time: "5 min read",
    paragraphs: [
      "An integration can fail even when every system is healthy. Networks time out, payloads change, rate limits apply, and the same event can arrive more than once. Reliable workflows account for these conditions from the beginning.",
      "Use an idempotency key to distinguish a repeat delivery from a new action. Store the result of completed work where a retry can find it. Choose a bounded retry strategy with increasing delays, and stop automatically when intervention is needed.",
      "Validate events before acting on them. A structurally valid payload is not necessarily authorized. Check the event source, the intended scope, and the action permitted by the workflow configuration.",
      "Finally, make failure useful. An activity record should say which step failed, why it failed, and what can happen next. Avoid logging tokens or unnecessary personal data. A clear trail makes automation easier to operate and easier to trust.",
    ],
  },
  {
    slug: "least-privilege-integrations",
    category: "Product thinking",
    title: "Give every connection only the access it needs",
    excerpt:
      "A practical approach to permissions before connecting another service.",
    date: "October 8, 2026",
    time: "3 min read",
    paragraphs: [
      "A connection is a decision about access. Before authorizing a service, write down the exact action the integration needs to perform. Reading a calendar is different from editing it; sending a notification is different from accessing every message.",
      "Choose the narrowest permissions supported by the provider. Keep credentials outside the browser, rotate them according to your operational requirements, and make revocation straightforward.",
      "Permission needs also change over time. Review connections when a workflow changes, when ownership changes, and when a service is no longer used. Remove access that has outlived its purpose.",
      "The SPIRAGIVING demo illustrates a permission selection step without collecting real tokens. It is a product demonstration, not a production security guarantee.",
    ],
  },
];
export const solutions = [
  {
    name: "Startups",
    icon: "Rocket",
    detail: "Build your product. Connect the rest.",
    text: "Make a growing software stack work together without rebuilding every connection.",
    benefits: [
      "A clearer path from signup to onboarding",
      "Reusable workflows for lean teams",
      "Visibility as your stack grows",
    ],
  },
  {
    name: "Enterprises",
    icon: "Building2",
    detail: "Bring complex systems into focus.",
    text: "Plan consistent connections across departments, applications, and operational teams.",
    benefits: [
      "Explicit ownership and permissions",
      "Observable cross-team processes",
      "A shared integration workspace",
    ],
  },
  {
    name: "Developers",
    icon: "Terminal",
    detail: "More building. Less glue code.",
    text: "Explore an API-first architecture for connecting services to your application.",
    benefits: [
      "Clear request and event contracts",
      "Repeatable testing patterns",
      "Designed for custom workflows",
    ],
  },
  {
    name: "SaaS businesses",
    icon: "Layers3",
    detail: "Let your product work with theirs.",
    text: "Extend your product vision through carefully scoped third-party connections.",
    benefits: [
      "Integration-led product experiences",
      "Consistent connection management",
      "A foundation for an ecosystem",
    ],
  },
  {
    name: "Digital agencies",
    icon: "Palette",
    detail: "Keep every client stack connected.",
    text: "Design repeatable integration patterns across different client projects.",
    benefits: [
      "Reusable workflow blueprints",
      "Clear operational handoffs",
      "Less repetitive coordination",
    ],
  },
];
