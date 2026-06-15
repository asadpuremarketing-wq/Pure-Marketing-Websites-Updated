import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import CTABanner from "@/components/sections/CTABanner";

const BASE = "https://puremarketing.ca";

export const metadata: Metadata = {
  title: "Client Results | Pure Marketing - Real Lead Generation Results",
  description:
    "Real results from Pure Marketing clients. See how electricians, plumbers, HVAC companies, painters, locksmiths, restaurants, and contractors grew their leads with Google Ads, Meta Ads, and local SEO.",
  alternates: { canonical: `${BASE}/results` },
  openGraph: {
    url: `${BASE}/results`,
    title: "Client Results | Pure Marketing",
    description:
      "See real lead generation results from local service businesses across Hamilton and the GTA who work with Pure Marketing.",
  },
};

const PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${BASE}/results`,
  name: "Client Results — Pure Marketing",
  url: `${BASE}/results`,
  description: "Real results from Pure Marketing clients across multiple industries including electricians, plumbers, HVAC companies, painters, restaurants, locksmiths, and general contractors.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Results", item: `${BASE}/results` },
    ],
  },
  mainEntity: { "@id": `${BASE}/#organization` },
};

const HEADLINE_STATS = [
  { value: "312%", label: "Average lead increase" },
  { value: "7–14", label: "Days to first leads" },
  { value: "5–8x", label: "Average return on ad spend" },
  { value: "40–80", label: "Leads per month per client" },
];

const CASE_STUDIES = [
  {
    industry: "Electricians",
    href: "/industries/electricians",
    blogHref: "/blog/how-electricians-get-more-leads",
    icon: "⚡",
    headline: "312% More Leads in 90 Days",
    before: "6–8 calls/week from referrals only, no online presence",
    after: "18+ qualified calls per week, fully booked 3 weeks out",
    channels: ["Google Local Service Ads", "Google Business Profile", "Missed-call automation"],
    quote: "We went from chasing work to turning jobs away. We had to hire another technician within the first 90 days.",
    timeframe: "90 days",
  },
  {
    industry: "Plumbers",
    href: "/industries/plumbers",
    blogHref: "/blog/plumbing-business-emergency-calls",
    icon: "🔧",
    headline: "From 6 to 22+ Calls Per Week",
    before: "Missing emergency calls after hours, no Google visibility",
    after: "22+ calls per week, fully booked 3 weeks out within 90 days",
    channels: ["Google Local Service Ads", "After-hours SMS automation", "Google Ads"],
    quote: "Blue Wave Plumbing went from 6 calls per week to 22+ after we launched their LSA and Google Ads system.",
    timeframe: "90 days",
  },
  {
    industry: "HVAC Companies",
    href: "/industries/hvac",
    blogHref: "/blog/hvac-year-round-leads",
    icon: "❄️",
    headline: "First Fully Booked Spring in 5 Years",
    before: "Seasonal gaps in spring and fall, turning ads off in slow months",
    after: "Fully booked year-round with maintenance contract revenue added",
    channels: ["Year-round Google Ads calendar", "Maintenance contract campaigns", "Seasonal Meta Ads"],
    quote: "Arctic Air HVAC was dark during spring and fall before working with us. After the year-round calendar, they had their first fully booked spring in 5 years.",
    timeframe: "60 days",
  },
  {
    industry: "Painting Companies",
    href: "/industries/painters",
    blogHref: "/blog/painting-company-marketing",
    icon: "🎨",
    headline: "8 Weeks Booked Out — In February",
    before: "Slow winter months, relying on spring rush and referrals",
    after: "8 weeks booked in advance during the historically slowest month",
    channels: ["Before/after Instagram Reels", "Meta Ads targeting homeowners", "Google Ads for estimate requests"],
    quote: "ProPaint Hamilton had never tried video marketing. Within 6 weeks of their first reel strategy, they were 8 weeks booked out — in February.",
    timeframe: "6 weeks",
  },
  {
    industry: "Locksmiths",
    href: "/industries/locksmiths",
    blogHref: "/blog/locksmith-google-ads-strategy",
    icon: "🔑",
    headline: "Calls Doubled, Map Pack Top 2 in 60 Days",
    before: "11 Google reviews, no LSA, low Map Pack visibility",
    after: "74 reviews, Map Pack position 2, daily calls more than doubled",
    channels: ["Google Local Service Ads", "GBP review automation", "Google Ads"],
    quote: "Rapid Lock Service had 11 reviews when they started. Within 60 days they had 74 reviews, Map Pack position 2, and calls had more than doubled.",
    timeframe: "60 days",
  },
  {
    industry: "Restaurants",
    href: "/industries/restaurants",
    blogHref: "/blog/gta-restaurant-marketing-guide",
    icon: "🍽️",
    headline: "40% More Weekend Reservations in 6 Weeks",
    before: "Inconsistent social media, no paid ads, relying on foot traffic",
    after: "40% increase in Friday and Saturday reservation requests",
    channels: ["Instagram Reels strategy", "Meta Ads weekend fill campaign", "Google Business Profile"],
    quote: "One of our restaurant clients in Hamilton saw a 40% increase in Friday and Saturday reservation requests within 6 weeks of launching a consistent Reels strategy.",
    timeframe: "6 weeks",
  },
  {
    industry: "General Contractors",
    href: "/industries/general-contractors",
    blogHref: "/blog/general-contractor-90-day-plan",
    icon: "🏗️",
    headline: "6–10 Qualified Estimate Requests per Month",
    before: "Feast-and-famine from referrals, no predictable pipeline",
    after: "6–10 qualified estimate requests/month, 2–4 converting to projects",
    channels: ["Google Ads for renovation searches", "Meta Ads for homeowners", "Retargeting"],
    quote: "Most contractor clients start seeing estimate requests within 2–3 weeks of launching Google Ads when the landing pages and follow-up system are in place.",
    timeframe: "90 days",
  },
  {
    industry: "Real Estate Agents",
    href: "/industries/real-estate",
    blogHref: "/blog/real-estate-agent-video-marketing",
    icon: "🏠",
    headline: "Days on Market Dropped from 28 to 6",
    before: "Listings sitting 28+ days, competing on price against other agents",
    after: "Average 6 days on market, winning listing presentations with video",
    channels: ["Property tour videos", "Agent brand video", "Facebook/Instagram listing ads"],
    quote: "Sarah Mitchell Real Estate added property tour videos to every listing. Average days on market dropped from 28 days to 6.",
    timeframe: "30 days",
  },
];

export default function ResultsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Script id="results-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_SCHEMA) }} />

      <PageHero
        label="Client Results"
        title="Real Results for"
        titleAccent="Real Businesses"
        subtitle="Specific outcomes from local service businesses across Hamilton and the GTA. No stock photos, no made-up metrics."
        breadcrumbs={[{ label: "Results" }]}
      />

      {/* HEADLINE STATS */}
      <section className="bg-accent-primary py-5">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {HEADLINE_STATS.map((s, i) => (
              <div key={i} className={`flex flex-col items-center text-center py-3 ${i < HEADLINE_STATS.length - 1 ? "border-r border-white/20" : ""}`}>
                <span className="text-[38px] md:text-[44px] font-black text-white leading-none">{s.value}</span>
                <span className="text-xs md:text-sm text-white/75 font-medium mt-1">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                      <p className="text-xs text-white/40 uppercase tracking-wider">Results in {cs.timeframe}</p>
                    </div>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <Link href={cs.href} className="text-xs text-accent-primary border border-accent-primary/40 rounded-full px-3 py-1.5 hover:bg-accent-primary/10 transition-colors">
                        Industry Page
                      </Link>
                      <Link href={cs.blogHref} className="text-xs text-white/50 border border-white/20 rounded-full px-3 py-1.5 hover:text-white transition-colors">
                        Read Article
                      </Link>
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

                    <blockquote className="border-l-3 border-accent-primary pl-4 italic text-[15px] text-text-secondary leading-relaxed">
                      &ldquo;{cs.quote}&rdquo;
                    </blockquote>
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
            Every result above came from the same system: the right channels for the specific industry, a website built to convert rather than just exist, tracking that shows revenue not just clicks, and monthly optimization based on what is actually working.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-12">
            {[
              { step: "1", title: "Audit Your Current Presence", body: "We find exactly where you are losing leads right now and what it would take to capture them." },
              { step: "2", title: "Build the Right System", body: "Google Ads, Meta Ads, GBP optimization, and a conversion-focused website — the pieces that apply to your industry." },
              { step: "3", title: "Optimize Monthly for More", body: "Every month we review performance data and make specific adjustments to lower your cost per lead and increase volume." },
            ].map((item) => (
              <div key={item.step} className="bg-background-card border border-border rounded-2xl p-6">
                <div className="w-10 h-10 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary font-bold mb-4">{item.step}</div>
                <h3 className="font-semibold text-text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <Link href="/contact" className="btn-primary inline-block">Book a Free Strategy Call</Link>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
