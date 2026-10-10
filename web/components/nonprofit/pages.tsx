import Link from "next/link";
import {
  ArrowUpRight,
  MapPin,
  Mail,
  Music2,
  Radio,
  Sparkles,
  FileText,
  HeartHandshake,
} from "lucide-react";
import {
  PageIntro,
  Photo,
  Bloom,
  Invitation,
  Action,
  TextLink,
} from "./common";
import { GivingRecord, FinancialRecord } from "./records";
import { InquiryForm } from "./forms";
import { foundation, questions, stories } from "@/lib/nonprofit";

export function About() {
  return (
    <>
      <PageIntro
        eyebrow="Our story / Denver, Colorado"
        title="Giving culture room to grow."
        description="Spira Giving Colorado is a Denver-based private foundation supporting charitable organizations in arts and culture."
      />
      <section className="about-feature wrap">
        <div className="about-image">
          <Photo
            src="/photos/gallery.jpg"
            alt="Visitors engaging with art in a museum; illustrative photograph"
          />
          <span className="image-caption">
            Arts open up new perspectives. / Illustrative photography
          </span>
        </div>
        <div>
          <p className="eyebrow">Local roots. Shared possibility.</p>
          <h2>
            For the creative life
            <br />
            of <em>our community.</em>
          </h2>
          <p className="lead">
            Colorado’s cultural life is shaped by the people and organizations
            who create, perform, teach and bring us together.
          </p>
          <p>
            Our foundation’s giving supports selected charitable organizations.
            The public record includes music organizations, community radio and
            arts education in Colorado.
          </p>
          <p>
            Established in 2022, Spira Giving Colorado received its IRS
            exemption ruling in August of that year. Public records classify the
            foundation in arts, culture and humanities.
          </p>
          <TextLink href="/work/">Explore the giving record</TextLink>
        </div>
      </section>
      <section className="principles section-space wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Our approach</p>
            <h2>
              Thoughtful support.
              <br />
              <em>Clear intentions.</em>
            </h2>
          </div>
        </div>
        <div className="principle-grid">
          <div>
            <span>01</span>
            <h3>Rooted in Colorado</h3>
            <p>
              Giving is connected to the organizations contributing to
              Colorado’s cultural community.
            </p>
          </div>
          <div>
            <span>02</span>
            <h3>Selected with purpose</h3>
            <p>
              We make contributions to preselected charitable organizations. We
              do not accept unsolicited requests for funding.
            </p>
          </div>
          <div>
            <span>03</span>
            <h3>Open to understanding</h3>
            <p>
              Annual public filings offer a clear view of grants, finances and
              foundation governance.
            </p>
          </div>
        </div>
      </section>
      <section className="governance section-space">
        <div className="wrap two-column">
          <div>
            <p className="eyebrow">Foundation governance</p>
            <h2>
              The people behind
              <br />
              <em>the giving.</em>
            </h2>
            <p>
              Officers and directors listed in the 2025 Form 990-PF. No officer
              compensation is reported in that filing.
            </p>
          </div>
          <div className="officer-list">
            <div>
              <span>DS</span>
              <div>
                <h3>David Spira</h3>
                <p>President and Director</p>
              </div>
            </div>
            <div>
              <span>JS</span>
              <div>
                <h3>Jeremy Spira</h3>
                <p>Secretary, Treasurer and Director</p>
              </div>
            </div>
            <a
              className="text-link"
              href={foundation.profile}
              target="_blank"
              rel="noreferrer"
            >
              Review the public record
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>
      <div className="wrap identity-line">
        <span>Legal name: Spira Giving Colorado</span>
        <span>EIN: {foundation.ein}</span>
        <span>Denver, CO · 501(c)(3) private foundation</span>
      </div>
      <Invitation />
    </>
  );
}

export function Work() {
  return (
    <>
      <PageIntro
        eyebrow="Our giving / Arts & culture"
        title="Supporting a more vibrant Colorado."
        description="Selected grants to charitable organizations that contribute to music, creative opportunity and the cultural life of our communities."
      />
      <section className="work-banner wrap">
        <Photo
          src="/photos/performance.jpg"
          alt="Violinist rehearsing in a concert hall; illustrative arts photograph"
        />
        <div>
          <Bloom />
          <h2>
            Creativity is something
            <br />
            we can <em>nurture together.</em>
          </h2>
          <p>
            Explore actual grants paid, with amounts and fiscal years drawn from
            the foundation’s public filings.
          </p>
        </div>
      </section>
      <section className="section-space wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected organizations. Recorded support.</p>
            <h2>Our giving record.</h2>
          </div>
          <p>
            Browse grants paid in 2024 and 2025.
            <br />
            Visit each organization to explore its work.
          </p>
        </div>
        <GivingRecord />
      </section>
      <section className="grant-policy wrap">
        <FileText size={32} />
        <div>
          <h2>A note about grantmaking.</h2>
          <p>
            The foundation only makes contributions to preselected charitable
            organizations and does not accept unsolicited requests for funds.
            There is no open grant application process on this website.
          </p>
          <TextLink href="/faq/">Read our common questions</TextLink>
        </div>
      </section>
      <Invitation />
    </>
  );
}

export function Impact() {
  return (
    <>
      <PageIntro
        eyebrow="Transparency / Public accountability"
        title="Giving with a clear public record."
        description="Explore the foundation’s financial history, annual Form 990-PF filings and the facts behind our giving."
      />
      <div className="wrap section-space-top">
        <FinancialRecord />
      </div>
      <section className="transparency-notes section-space wrap">
        <div>
          <p className="eyebrow">Reading the record</p>
          <h2>Context matters.</h2>
        </div>
        <div className="reading-notes">
          <div>
            <h3>Grants are a financial measure.</h3>
            <p>
              Grants paid indicate funds disbursed during a fiscal year. They
              are not counts of people served, event attendance or a measure of
              recipient outcomes.
            </p>
          </div>
          <div>
            <h3>Revenue has different sources.</h3>
            <p>
              The filing’s total revenue includes investment income and gains.
              It should not be read as a total of public donations received.
            </p>
          </div>
          <div>
            <h3>Assets support the foundation’s future.</h3>
            <p>
              Year-end assets are reported at book value. They are separate from
              annual grants and are not funds already distributed to the
              community.
            </p>
          </div>
        </div>
      </section>
      <section className="verification-banner">
        <div className="wrap two-column">
          <div>
            <p className="eyebrow">Organization details</p>
            <h2>Know who you’re supporting.</h2>
            <p>
              Spira Giving Colorado · Denver, CO
              <br />
              EIN 88-2401698 · IRS ruling: August 2022
            </p>
          </div>
          <div>
            <p>
              Public records identify the foundation as a 501(c)(3) private
              foundation and list contributions as tax-deductible. Review
              current IRS records and the circumstances of your gift before
              contributing.
            </p>
            <a
              className="action action-outline"
              href={foundation.irs}
              target="_blank"
              rel="noreferrer"
            >
              Search IRS records
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>
      <Invitation />
    </>
  );
}

export function Contact() {
  return (
    <>
      <PageIntro
        eyebrow="Contact / Start a conversation"
        title="Good connections start with hello."
        description="A question about the foundation, its public records or Colorado’s cultural community? We’d be glad to hear from you."
      />
      <section className="wrap form-layout">
        <aside className="form-aside">
          <Bloom />
          <h2>Let’s connect.</h2>
          <p>
            For general foundation inquiries, use the form to prepare a message
            or write directly to our website contact address.
          </p>
          <div className="contact-detail">
            <MapPin size={19} />
            <div>
              <strong>Based in Denver</strong>
              <span>Colorado, United States</span>
            </div>
          </div>
          <div className="contact-detail">
            <Mail size={19} />
            <a href={`mailto:${foundation.email}`}>{foundation.email}</a>
          </div>
          <div className="aside-note">
            <h3>Before you reach out</h3>
            <p>
              The foundation does not accept unsolicited grant requests. This
              form is not a funding application.
            </p>
            <Link href="/faq/">
              Read common questions
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </aside>
        <InquiryForm />
      </section>
    </>
  );
}

export function Donate() {
  return (
    <>
      <PageIntro
        eyebrow="Support the arts / Giving inquiries"
        title="Make space for more possibility."
        description="Interested in contributing to Spira Giving Colorado? Start a conversation about supporting the foundation’s charitable work."
      />
      <section className="wrap form-layout">
        <aside className="form-aside">
          <HeartHandshake className="aside-icon" strokeWidth={1} />
          <h2>
            Thoughtful giving
            <br />
            starts here.
          </h2>
          <p>
            Use this form to discuss a possible gift. We’ll prepare a message
            you can review and send from your email app.
          </p>
          <div className="aside-note">
            <h3>Online payments are not connected.</h3>
            <p>
              This website does not collect card details, process donations, set
              up recurring charges or issue tax receipts. An amount selected
              here is an inquiry only.
            </p>
          </div>
          <p className="source-note">
            Public records list contributions as tax-deductible. Confirm current
            status using EIN {foundation.ein} and obtain instructions and gift
            documentation before transferring funds.
          </p>
          <TextLink href="/impact/">Review our public records</TextLink>
        </aside>
        <InquiryForm kind="giving" />
      </section>
      <section className="support-options section-space wrap">
        <h2>More ways to support creative life.</h2>
        <div className="two-column">
          <div>
            <h3>Discover cultural organizations.</h3>
            <p>
              Explore our giving record and visit recipients directly to learn
              about their own giving, performances and community opportunities.
            </p>
            <TextLink href="/work/">Explore the organizations</TextLink>
          </div>
          <div>
            <h3>Share your time and skills.</h3>
            <p>
              Express an interest in contributing your skills. No foundation-run
              volunteer openings are currently advertised here.
            </p>
            <TextLink href="/volunteer/">Share volunteer interest</TextLink>
          </div>
        </div>
      </section>
    </>
  );
}

export function Volunteer() {
  return (
    <>
      <PageIntro
        eyebrow="Get involved / Volunteer interest"
        title="Your time. Your talent. Your community."
        description="Interested in contributing to Colorado’s creative life? Tell us about your skills and the kind of involvement you’re looking for."
      />
      <section className="wrap form-layout">
        <aside className="form-aside">
          <Sparkles className="aside-icon" strokeWidth={1} />
          <h2>
            Bring your
            <br />
            creative energy.
          </h2>
          <p>
            Music, cultural gatherings and local organizations offer many ways
            to connect with a community.
          </p>
          <div className="aside-note">
            <h3>An expression of interest</h3>
            <p>
              No current foundation-run volunteer openings are advertised on
              this site. This form prepares an inquiry; it is not an application
              for an available role and does not guarantee placement.
            </p>
          </div>
          <p>
            For current opportunities, explore the recipient organizations
            directly.
          </p>
          <TextLink href="/work/">Meet the organizations</TextLink>
        </aside>
        <InquiryForm kind="volunteer" />
      </section>
    </>
  );
}

export function Journal() {
  return (
    <>
      <PageIntro
        eyebrow="Journal / Arts, giving & community"
        title="A little inspiration goes a long way."
        description="Foundation records, cultural news and perspectives on Colorado’s creative community. Each story links to its source."
      />
      <section className="wrap journal-list">
        <div className="story-grid">
          {stories.map((s) => (
            <Link className="story-card" href={`/blog/${s.slug}/`} key={s.slug}>
              <div className="story-image">
                <Photo
                  src={s.image}
                  alt="Illustrative arts and culture photograph"
                />
                <span>
                  <ArrowUpRight size={24} />
                </span>
              </div>
              <div className="story-meta">
                <span>{s.category}</span>
                <span>{s.date}</span>
              </div>
              <h2>{s.title}</h2>
              <p>{s.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
      <Invitation />
    </>
  );
}

export function FAQ() {
  return (
    <>
      <PageIntro
        eyebrow="Common questions / A little clarity"
        title="Let’s make things clear."
        description="Helpful answers about the foundation, its grantmaking, public records and ways to get in touch."
      />
      <section className="wrap faq-layout">
        <aside>
          <Bloom />
          <h2>Still have a question?</h2>
          <p>We can help you find the right information.</p>
          <Action href="/contact/">Get in touch</Action>
        </aside>
        <div className="faq-list">
          {questions.map(([q, a]) => (
            <details key={q}>
              <summary>
                {q}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}

export function Privacy() {
  return (
    <>
      <PageIntro
        eyebrow="Website information / Privacy"
        title="Your information, handled clearly."
        description="How this website handles contact drafts, technical requests and the photography used in its design."
      />
      <article className="wrap prose">
        <p className="source-note">Updated October 10, 2026</p>
        <h2>Contact and interest forms</h2>
        <p>
          Information entered in a form stays in the current page’s memory. The
          website does not transmit form responses to a database or store them
          in browser storage. Navigating away or reloading clears the form.
          Downloading a draft saves a text file on your device.
        </p>
        <p>
          Choosing “Open email app” passes the draft to your configured email
          application. You decide whether to send it. Your email provider’s
          privacy terms apply, and any message you send is handled through email
          rather than this website.
        </p>
        <h2>Website hosting</h2>
        <p>
          The website is hosted on GitHub Pages. Hosting infrastructure receives
          technical request data, such as IP address and browser information,
          when you visit. See{" "}
          <a
            href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
            target="_blank"
            rel="noreferrer"
          >
            GitHub’s privacy statement
          </a>{" "}
          for hosting-related information.
        </p>
        <h2>Analytics and cookies</h2>
        <p>
          This website does not add advertising trackers, analytics tools or
          form-storage cookies. Images and fonts are served with the site.
          External websites and email services have their own policies.
        </p>
        <h2>External links</h2>
        <p>
          Public filings and cultural organization links open third-party
          websites. Their information handling and content are separate from
          this website.
        </p>
        <h2 id="photography">Illustrative photography</h2>
        <p>
          The arts photographs are design illustrations and do not depict Spira
          Giving Colorado programs, officers, grant recipients or a foundation
          event.
        </p>
        <ul>
          <li>
            Violin rehearsal:{" "}
            <a
              href="https://unsplash.com/photos/man-standing-in-front-of-stage-playing-violin-Kx4Mm3ZnZBc"
              target="_blank"
              rel="noreferrer"
            >
              CHUTTERSNAP on Unsplash
            </a>
            .
          </li>
          <li>
            Museum visitors:{" "}
            <a
              href="https://unsplash.com/photos/two-people-looking-at-a-painting-in-a-museum-0aL3qzGKDpY"
              target="_blank"
              rel="noreferrer"
            >
              Johnell Pannell on Unsplash
            </a>
            .
          </li>
        </ul>
        <p>
          Both photographs are used under the{" "}
          <a
            href="https://unsplash.com/license"
            target="_blank"
            rel="noreferrer"
          >
            Unsplash License
          </a>
          .
        </p>
        <h2>Questions and corrections</h2>
        <p>
          Contact <a href={`mailto:${foundation.email}`}>{foundation.email}</a>{" "}
          for website inquiries or to flag an error. Please avoid including
          sensitive financial or identity information in a form or email.
        </p>
      </article>
    </>
  );
}

export function Terms() {
  return (
    <>
      <PageIntro
        eyebrow="Website information / Terms"
        title="A shared understanding."
        description="The purpose of this website and the limits of its information and inquiry tools."
      />
      <article className="wrap prose">
        <p className="source-note">Updated October 10, 2026</p>
        <h2>Informational purpose</h2>
        <p>
          This website introduces Spira Giving Colorado and summarizes public
          records and sourced cultural news. It does not offer an open grant
          program, a financial product or a guarantee of future foundation
          funding.
        </p>
        <h2>Grants and inquiries</h2>
        <p>
          The foundation’s public filing states that it only makes contributions
          to preselected charitable organizations and does not accept
          unsolicited requests for funds. Contacting the foundation does not
          constitute a grant application or a funding commitment.
        </p>
        <h2>Giving and volunteering</h2>
        <p>
          Giving and volunteer forms prepare email drafts only. They do not
          transfer funds, create recurring payments, issue receipts, submit
          volunteer applications or confirm placement. Confirm any payment
          instructions and the intended recipient before making a contribution.
        </p>
        <h2>Sources and accuracy</h2>
        <p>
          Financial summaries identify fiscal years and link to public filings.
          Public records may be amended or updated. The complete original
          filings should be consulted for financial details. This site does not
          provide individualized tax or legal advice.
        </p>
        <h2>Third-party content</h2>
        <p>
          Recipient listings identify grants reported in particular fiscal
          years. They do not imply endorsement, an ongoing relationship or
          permission to speak on behalf of a recipient. External news summaries
          reflect the source’s stated publication date.
        </p>
        <h2>Responsible use</h2>
        <p>
          Use this website lawfully and do not send malicious, abusive or
          misleading inquiries. Please report factual errors through the contact
          page so they can be reviewed.
        </p>
        <TextLink href="/contact/">Contact the website team</TextLink>
      </article>
    </>
  );
}

export const pageEntries: Record<
  string,
  { title: string; description: string; component: () => React.ReactNode }
> = {
  about: {
    title: "Our story",
    description:
      "Meet Spira Giving Colorado, a Denver-based private foundation supporting charitable organizations in arts and culture.",
    component: About,
  },
  work: {
    title: "Our giving",
    description:
      "Explore Spira Giving Colorado’s grants paid to selected charitable organizations in 2024 and 2025.",
    component: Work,
  },
  impact: {
    title: "Transparency & public filings",
    description:
      "View Spira Giving Colorado financial summaries and public Form 990-PF filings for fiscal years 2022–2025.",
    component: Impact,
  },
  contact: {
    title: "Contact",
    description:
      "Prepare a general inquiry to Spira Giving Colorado. Funding requests are not accepted through this form.",
    component: Contact,
  },
  donate: {
    title: "Giving inquiries",
    description:
      "Prepare an inquiry about supporting Spira Giving Colorado. Online payment processing is not connected.",
    component: Donate,
  },
  volunteer: {
    title: "Volunteer interest",
    description:
      "Express an interest in contributing time or skills to Colorado’s creative community.",
    component: Volunteer,
  },
  blog: {
    title: "Journal",
    description:
      "Sourced stories about arts, giving and Colorado’s creative community.",
    component: Journal,
  },
  faq: {
    title: "Common questions",
    description:
      "Answers about the foundation’s grantmaking, public records, giving inquiries and volunteer interest.",
    component: FAQ,
  },
  privacy: {
    title: "Website privacy",
    description:
      "How the Spira Giving Colorado website handles contact drafts, hosting requests and photography.",
    component: Privacy,
  },
  terms: {
    title: "Website terms",
    description:
      "Terms for the informational website and inquiry tools of Spira Giving Colorado.",
    component: Terms,
  },
};
export const legacyRoutes: Record<string, string> = {
  platform: "/about/",
  integrations: "/work/",
  solutions: "/work/",
  developers: "/impact/",
  pricing: "/donate/",
  login: "/contact/",
  signup: "/volunteer/",
  dashboard: "/impact/",
  causes: "/work/",
  service: "/work/",
  team: "/about/",
  event: "/blog/",
  transparency: "/impact/",
};
