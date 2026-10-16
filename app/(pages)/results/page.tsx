import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import CTABanner from "@/components/sections/CTABanner";

const BASE = "https://puremarketing.ca";

export const metadata: Metadata = {
  title: "Client Results & Case Studies | Pure Marketing",
  description:
    "See the local service businesses we've worked with and the lead generation work performed for each — real clients, real work, no fabricated metrics.",
  alternates: { canonical: `${BASE}/results` },
  openGraph: {
    url: `${BASE}/results`,
    title: "Client Results & Case Studies | Pure Marketing",
    description:
      "Real local service businesses we've worked with, and the lead generation work performed for each.",
  },
};

const PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${BASE}/results`,
  name: "Client Results & Case Studies: Pure Marketing",
  url: `${BASE}/results`,
  description: "Real local service businesses Pure Marketing has worked with, and the lead generation work performed for each.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Results", item: `${BASE}/results` },
    ],
  },
  mainEntity: { "@id": `${BASE}/#organization` },
};

/**
 * NOTE: these are real clients with work genuinely performed for them
 * (see /portfolio for live links). We do not have verified before/after
 * numbers for these engagements, so each case study is described
 * qualitatively — the service area, the challenge, and the work done —
 * rather than with invented metrics. Replace with verified numbers as real
 * data becomes available.
 */
const CASE_STUDIES = [
  {
    industry: "Construction & Renovation",
    href: "https://www.gravitycontractors.ca/",
    icon: "🏗️",
    headline: "Gravity Contractors — Hamilton, ON",
    before: "Relied primarily on word-of-mouth referrals with no consistent online presence to capture search demand.",
    after: "A conversion-focused website and ongoing online presence built to support inbound inquiries from their service area.",
    channels: ["Website built for lead capture", "Google Business Profile", "Local visibility"],
    quote: "They built our website in under 3 weeks. We had more online leads in the first month than in the entire year before.",
    timeframe: "Ongoing",
  },
  {
    industry: "Locksmith & Garage Door Services",
    href: "https://www.purdentlocksmith.ca/",
    icon: "🔑",
    headline: "Prudent Locksmith & Garage Services — Hamilton, ON",
    before: "Needed a stronger online presence to compete for local locksmith and garage door search traffic.",
    after: "A dedicated website and local presence built around capturing service-area inquiries.",
    channels: ["Website built for lead capture", "Local search visibility"],
    timeframe: "Ongoing",
  },
  {
    industry: "Painting",
    href: "https://www.weatherguardcoating.ca/",
    icon: "🎨",
    headline: "Weather Guard Coatings — London, ON",
    before: "Needed a professional web presence to match the quality of their on-site work.",
    after: "A custom website built to present their work and make it easy for prospective customers to reach out.",
    channels: ["Website built for lead capture"],
    timeframe: "Ongoing",
  },
];

export default function ResultsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <script id="results-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_SCHEMA) }} />

      <PageHero
        label="Client Results"
        title="Real Results for"
        titleAccent="Real Businesses"
        subtitle="Real local service businesses we've worked with and the work performed for each. No stock photos, no invented metrics."
        breadcrumbs={[{ label: "Results" }]}
      />

      {/* CASE STUDIES */}
      <section className="bg-background-primary py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="space-y-10">
            {CASE_STUDIES.map((cs) => (
              <div key={cs.industry} className="bg-background-card border border-border rounded-2xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">

                  {/* Left: industry + headline */}
                  <div className="lg:col-span-2 bg-[#111] p-8 flex flex-col justify-between">
                    <div>
                      <span className="text-3xl mb-4 block">{cs.icon}</span>
                      <span className="text-accent-primary text-xs font-semibold uppercase tracking-widest mb-2 block">{cs.industry}</span>
                      <h3 className="font-serif text-[24px] md:text-[28px] text-white leading-tight mb-4">{cs.headline}</h3>
                      <p className="text-xs text-white/40 uppercase tracking-wider">{cs.timeframe}</p>
                    </div>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <a href={cs.href} target="_blank" rel="noopener noreferrer" className="text-xs text-accent-primary border border-accent-primary/40 rounded-full px-3 py-1.5 hover:bg-accent-primary/10 transition-colors">
                        Visit Live Site
                      </a>
                    </div>
                  </div>

                  {/* Right: before/after + channels + quote */}
                  <div className="lg:col-span-3 p-8 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="bg-background-secondary rounded-xl p-5 border border-border">
                        <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Before</p>
                        <p className="text-sm text-text-secondary leading-relaxed">{cs.before}</p>
                      </div>
                      <div className="bg-accent-primary/5 border border-accent-primary/20 rounded-xl p-5">
                        <p className="text-xs font-semibold text-accent-primary uppercase tracking-wider mb-2">After</p>
                        <p className="text-sm text-text-secondary leading-relaxed">{cs.after}</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">Channels Used</p>
                      <div className="flex flex-wrap gap-2">
                        {cs.channels.map((c) => (
                          <span key={c} className="text-xs bg-background-secondary border border-border rounded-full px-3 py-1 text-text-secondary">{c}</span>
                        ))}
                      </div>
                    </div>

                    {cs.quote && (
                      <blockquote className="border-l-3 border-accent-primary pl-4 italic text-[15px] text-text-secondary leading-relaxed">
                        &ldquo;{cs.quote}&rdquo;
                      </blockquote>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE GET RESULTS */}
      <section className="bg-background-secondary py-20">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <span className="text-accent-primary text-xs font-semibold uppercase tracking-widest mb-3 block">Our Process</span>
          <h2 className="font-serif text-[32px] md:text-[40px] text-text-primary leading-tight mb-6">
            Why These Results Happen
          </h2>
          <p className="text-text-secondary text-[17px] leading-relaxed mb-12 max-w-[700px] mx-auto">
            Every engagement follows the same approach: analyze where your business is losing customer inquiries, build an acquisition strategy around the channels that fit your market, launch and optimize, then keep tracking and improving month over month.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-12">
            {[
              { step: "1", title: "Analyze Your Business", body: "We review your current online presence, service area, and competition to find where you may be losing customer inquiries." },
              { step: "2", title: "Build Your Acquisition Strategy", body: "Paid advertising, Google Maps visibility, and lead conversion: the pieces that apply to your market and goals." },
              { step: "3", title: "Track & Improve", body: "We track calls and inquiries where data is available and keep improving the system month over month." },
            ].map((item) => (
              <div key={item.step} className="bg-background-card border border-border rounded-2xl p-6">
                <div className="w-10 h-10 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary font-bold mb-4">{item.step}</div>
                <h3 className="font-semibold text-text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <Link href="/contact" className="btn-primary inline-block">Get a Free Local Growth Assessment</Link>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
