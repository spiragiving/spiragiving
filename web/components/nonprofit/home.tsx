import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Music2,
  Radio,
  Sparkles,
} from "lucide-react";
import { Action, Bloom, Photo, TextLink, Invitation } from "./common";
import { stories, filingUrl } from "@/lib/nonprofit";
export function NonprofitHome() {
  return (
    <>
      <section className="hero wrap">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="small-line" />A Colorado arts & culture foundation
          </p>
          <h1>
            Good things
            <br />
            grow when
            <br />
            we <em>give.</em>
            <Bloom className="hero-bloom" />
          </h1>
          <p>
            Supporting the organizations that bring music, creativity and
            connection to life in Colorado.
          </p>
          <div className="button-row">
            <Action href="/work/">Discover our giving</Action>
            <TextLink href="/about/">Meet SpiraGiving</TextLink>
          </div>
          <div className="hero-footnote">
            <span className="location-dot" />
            Denver, Colorado
            <span className="footnote-divider" />
            Established 2022
          </div>
        </div>
        <div className="hero-art">
          <Photo
            src="/photos/performance.jpg"
            alt="A violinist rehearsing in a concert hall"
            priority
          />
          <div className="hero-photo-label">
            <span>Creativity brings us together.</span>
            <small>Illustrative arts photography</small>
          </div>
          <div className="hero-stamp">
            <ArrowUpRight size={32} />
            <span>
              GIVING
              <br />
              CULTURE
              <br />
              ROOM TO GROW
            </span>
          </div>
        </div>
      </section>
      <section className="foundation-strip">
        <div className="wrap">
          <span>
            LOCAL ROOTS.
            <br />
            <strong>LASTING POSSIBILITY.</strong>
          </span>
          <p>
            A private foundation
            <br />
            <strong>with a cultural focus</strong>
          </p>
          <p>
            Based in Denver
            <br />
            <strong>Giving for Colorado</strong>
          </p>
          <p>
            Thoughtful support
            <br />
            <strong>for selected nonprofits</strong>
          </p>
        </div>
      </section>
      <section className="intro-section section-space wrap">
        <div>
          <p className="eyebrow">Our reason for giving</p>
          <h2>
            A vibrant community
            <br />
            has a <em>creative heart.</em>
          </h2>
        </div>
        <div className="intro-text">
          <p className="lead">
            A song that stays with you. A stage that makes you feel seen. A
            place where a community comes together.
          </p>
          <p>
            Spira Giving Colorado supports charitable organizations in arts and
            culture. Through selected grants, we help sustain the creative life
            that makes our communities distinctive.
          </p>
          <TextLink href="/about/">Our story and approach</TextLink>
        </div>
      </section>
      <section className="focus-section section-space">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Where giving takes shape</p>
              <h2>Culture connects us.</h2>
            </div>
            <p>
              Our giving record reflects support for music,
              <br className="desktop-break" /> cultural expression and creative
              opportunity.
            </p>
          </div>
          <div className="focus-grid">
            <Link href="/work/#giving-record" className="focus-card peach">
              <div className="focus-top">
                <span>01 / MUSIC</span>
                <ArrowUpRight />
              </div>
              <Music2 className="focus-icon" strokeWidth={1} />
              <h3>
                More music.
                <br />
                More connection.
              </h3>
              <p>
                Supporting charitable organizations that make music part of
                Colorado’s cultural life.
              </p>
              <span className="focus-link">
                Explore music grants
                <ArrowRight size={18} />
              </span>
            </Link>
            <Link href="/work/#giving-record" className="focus-card sage">
              <div className="focus-top">
                <span>02 / COMMUNITY VOICES</span>
                <ArrowUpRight />
              </div>
              <Radio className="focus-icon" strokeWidth={1} />
              <h3>
                Local voices.
                <br />
                Shared stories.
              </h3>
              <p>
                Our giving history includes community radio, alongside
                Colorado’s musical organizations.
              </p>
              <span className="focus-link">
                See our giving history
                <ArrowRight size={18} />
              </span>
            </Link>
            <Link href="/work/#giving-record" className="focus-card lavender">
              <div className="focus-top">
                <span>03 / CREATIVE OPPORTUNITY</span>
                <ArrowUpRight />
              </div>
              <Sparkles className="focus-icon" strokeWidth={1} />
              <h3>
                Room for the
                <br />
                next generation.
              </h3>
              <p>
                Past grants include support for the Denver Young Artists
                Orchestra.
              </p>
              <span className="focus-link">
                Discover selected recipients
                <ArrowRight size={18} />
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section className="impact-preview section-space wrap">
        <div className="impact-image">
          <Photo
            src="/photos/gallery.jpg"
            alt="Two visitors exploring an art museum"
          />
          <span className="image-caption">
            An invitation to see things differently. / Illustrative photography
          </span>
        </div>
        <div className="impact-copy">
          <p className="eyebrow">Thoughtful giving. Open records.</p>
          <h2>
            Care is a commitment.
            <br />
            <em>So is clarity.</em>
          </h2>
          <p>
            Giving deserves a clear public record. Explore our annual filings,
            the organizations we’ve supported and the financial context behind
            our work.
          </p>
          <div className="impact-figures">
            <div>
              <strong>$109,500</strong>
              <span>Grants paid in 2025</span>
            </div>
            <div>
              <strong>3</strong>
              <span>Recipients in 2025</span>
            </div>
          </div>
          <p className="source-note">
            Reported in the{" "}
            <a href={filingUrl(2025)} target="_blank" rel="noreferrer">
              2025 Form 990-PF
            </a>
            . These figures describe grants paid, not individual beneficiaries.
          </p>
          <Action href="/impact/" secondary>
            Explore our transparency
          </Action>
        </div>
      </section>
      <section className="journal-section section-space">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">From our creative community</p>
              <h2>Stories worth sharing.</h2>
            </div>
            <TextLink href="/blog/">Visit the journal</TextLink>
          </div>
          <div className="story-grid">
            {stories.slice(0, 2).map((s, i) => (
              <Link
                className="story-card"
                href={`/blog/${s.slug}/`}
                key={s.slug}
              >
                <div className="story-image">
                  <Photo
                    src={s.image}
                    alt={
                      i === 0
                        ? "A musician rehearsing on a stage; illustrative photograph"
                        : "Visitors in a museum; illustrative photograph"
                    }
                  />
                  <span>
                    <ArrowUpRight size={24} />
                  </span>
                </div>
                <div className="story-meta">
                  <span>{s.category}</span>
                  <time>{s.date}</time>
                </div>
                <h3>{s.title}</h3>
                <p>{s.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Invitation />
    </>
  );
}
