import type { Metadata } from "next";
import Script from "next/script";
import IndustryFullPageTemplate, { type IndustryFullConfig } from "@/components/templates/IndustryFullPageTemplate";

const BASE = "https://puremarketing.ca";

export const metadata: Metadata = {
  title: "Marketing for Plumbers | Google Ads & Lead Gen - Pure Marketing",
  description:
    "We help plumbers across Canada get emergency calls, drain cleanings, and water heater installs with Google Ads and Local Service Ads. 289% avg lead increase. Book a free audit.",
  keywords: [
    "plumber marketing Canada",
    "Google Ads for plumbers",
    "plumber lead generation Ontario",
    "marketing for plumbers Hamilton",
    "plumbing website design",
    "emergency plumber ads",
  ],
  alternates: { canonical: `${BASE}/industries/plumbers` },
  openGraph: {
    url: `${BASE}/industries/plumbers`,
    title: "Marketing for Plumbers | 289% More Leads - Pure Marketing",
    description:
      "Pure Marketing helps plumbers get 22+ qualified calls per week with Google Ads and conversion websites. Book a free audit.",
  },
};

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Marketing for Plumbers",
  provider: { "@id": `${BASE}/#organization` },
  serviceType: "Digital Marketing",
  areaServed: { "@type": "Country", name: "Canada" },
  description:
    "Specialized Google Ads, Local Service Ads, web design, and lead generation for plumbers across Canada. Average 289% lead increase in 90 days.",
  url: `${BASE}/industries/plumbers`,
};

const config: IndustryFullConfig = {
  industry: "Plumbers",
  badge: "90-Day Plumber Growth System",
  headline: "More Emergency Calls.",
  headlineAccent: "More Booked Jobs. Every Week.",
  subheadline:
    "Websites, Google, Content, Ads, Automation & SEO — one system that keeps plumbers fully booked with qualified work year-round.",
  heroCheckmarks: ["More Emergency Calls", "Consistent High-Value Jobs", "Never Slow in Off-Season"],
  dashboard: {
    url: "bluewaveplumbing.ca",
    headline: "Fast. Reliable.",
    headlineAccent: "Licensed Plumbers.",
    tagline: "Emergency service available 24/7. Free estimates.",
    cta: "Call a Plumber Now →",
    sources: [
      { label: "Google", val: "138" },
      { label: "LSA", val: "96" },
      { label: "Website", val: "38" },
      { label: "Maps", val: "22" },
    ],
  },
  heroMetrics: [
    { label: "Weekly Calls", val: "289", chg: "+38%" },
    { label: "Jobs Booked", val: "164", chg: "+32%" },
    { label: "Revenue", val: "$41K", chg: "+44%" },
  ],
  bandStats: [
    { value: "289%", label: "Avg lead increase" },
    { value: "22+", label: "Calls per week" },
    { value: "14", label: "Days to first lead" },
    { value: "$41K", label: "Revenue 90 days" },
  ],
  problemHeadline: "Why Plumbers Can't Break Out of Referral Dependency",
  problemSubtext:
    "Skilled plumbers lose jobs every day — not because of their work, but because they can't be found when it matters most.",
  painPoints: [
    {
      icon: "RefreshCw",
      title: "Unpredictable Lead Flow",
      desc: "Referrals arrive when they want — not when you need them. There's no way to turn up the volume when your schedule goes quiet.",
    },
    {
      icon: "MapPin",
      title: "Lost to Google Competitors",
      desc: "Every time someone searches 'plumber near me' and can't find you, that's a job and revenue going straight to a competitor.",
    },
    {
      icon: "MessageSquare",
      title: "Leads Go Cold Fast",
      desc: "A plumbing emergency waits for no one. Without instant response and follow-up automation, warm leads book someone else in minutes.",
    },
  ],
  videoLabel: "How We Grow Plumbing Businesses",
  videoTitle: "Watch How We Fill Plumbers' Schedules with 20+ Calls a Week",
  videoDesc:
    "A 2-minute walkthrough of the exact system that brings consistent emergency calls, drain jobs, and install requests to plumbers across Canada.",
  videoBullets: [
    "Why most plumbers lose emergency calls to faster-responding competitors",
    "The 9-step system we build to own local plumbing searches",
    "How missed-call text-back recovers leads you'd otherwise lose forever",
    "What to expect in your first 90 days with the system live",
  ],
  growthSteps: [
    { num: "01", icon: "Globe",      title: "Plumbing Website",        desc: "Conversion-first site with emergency call buttons, financing info, and trust badges that turn panic into booked jobs." },
    { num: "02", icon: "MapPin",     title: "Google Business Profile", desc: "Optimized GBP with service areas, photos, and Q&A so you dominate local Maps results 24/7." },
    { num: "03", icon: "Star",       title: "Reviews & Social Proof",  desc: "Systematic review collection after every job — building the 5-star credibility that wins bids over lower quotes." },
    { num: "04", icon: "BarChart2",  title: "Call & Lead Tracking",    desc: "Know exactly which keywords and ads bring real calls, so budget goes where it converts best." },
    { num: "05", icon: "Video",      title: "Monthly Content",         desc: "Before/after photos, job site clips, and educational posts that keep your brand top-of-mind in your city." },
    { num: "06", icon: "TrendingUp", title: "Google Ads & LSA",        desc: "Emergency search ads and pay-per-lead Local Service Ads so you're the first call when a pipe bursts." },
    { num: "07", icon: "Share2",     title: "Meta Ads",                desc: "Facebook & Instagram ads targeting homeowners with older homes — the most likely to need plumbing work." },
    { num: "08", icon: "Zap",        title: "Missed-Call Text Back",   desc: "Automated texts fire the second someone calls and hangs up, so every warm lead is recovered instantly." },
    { num: "09", icon: "Search",     title: "Local SEO & Geo Growth",  desc: "City-specific service pages and citation building that compound into free organic leads every month." },
  ],
  resultsHeadline: "Hear It From Our Plumbing Clients",
  results: [
    { metric: "289%", label: "Lead Increase",      client: "Blue Wave Plumbing",    detail: "From word-of-mouth only to 22 qualified calls every week from Google." },
    { metric: "$41K", label: "Revenue in 90 Days", client: "Reliable Plumbers Inc", detail: "Fully booked schedule and $41K in tracked revenue within 90 days." },
    { metric: "6 wk.", label: "Booked in Advance", client: "Hamilton Plumbing Co",  detail: "Booked 6 weeks out in advance within the first quarter of the system." },
  ],
  videoReviews: [
    { name: "Sarah T.", company: "Blue Wave Plumbing",    result: "289%+ More Leads",        dur: "1:44" },
    { name: "Mark R.",  company: "Reliable Plumbers Inc", result: "Fully Booked in 90 Days", dur: "2:08" },
    { name: "Chris P.", company: "Hamilton Plumbing Co",  result: "Top Google Rankings",     dur: "1:55" },
  ],
  ctaHeadline: "Every Search Is a Job\nYou Could Be Winning.",
  ctaSubtext:
    "Let's build your plumbing growth system and make sure your business shows up first when homeowners need a plumber right now.",
};

export default function PlumbersPage() {
  return (
    <>
      <Script
        id="service-schema-plumbers"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <IndustryFullPageTemplate config={config} />
    </>
  );
}
