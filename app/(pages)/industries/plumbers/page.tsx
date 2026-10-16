import type { Metadata } from "next";
import IndustryFullPageTemplate, { type IndustryFullConfig } from "@/components/templates/IndustryFullPageTemplate";

const BASE = "https://puremarketing.ca";

export const metadata: Metadata = {
  title: "Local Lead Generation for Plumbers | Pure Marketing",
  description:
    "We help plumbers across Canada get more emergency calls, drain cleanings, and water heater install inquiries with Google Ads, Local Service Ads, Google Maps visibility, and lead capture.",
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
    title: "Local Lead Generation for Plumbers | Pure Marketing",
    description:
      "Pure Marketing helps Canadian plumbers generate more qualified calls with Google Ads, Local Service Ads, and conversion-focused websites. Book a free local growth assessment.",
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
    "Specialized Google Ads, Local Service Ads, web design, and lead generation for plumbers across Canada.",
  url: `${BASE}/industries/plumbers`,
};

const config: IndustryFullConfig = {
  industry: "Plumbers",
  badge: "Local Lead Generation for Plumbers",
  headline: "More Emergency Calls.",
  headlineAccent: "More Booked Jobs. Every Week.",
  subheadline:
    "Websites, Google, Content, Ads, Automation & SEO: one system that keeps plumbers fully booked with qualified work year-round.",
  heroCheckmarks: ["More Emergency Calls", "Consistent High-Value Jobs", "Never Slow in Off-Season"],
  dashboard: {
    url: "yourplumbingco.ca",
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
    { label: "Lead Capture", val: "24/7", chg: "always on" },
    { label: "Service Area", val: "Canada-Wide", chg: "" },
    { label: "Contracts", val: "0", chg: "month-to-month" },
  ],
  bandStats: [
    { value: "1", label: "Focused System" },
    { value: "CA", label: "Canada-Wide" },
    { value: "0", label: "Long-Term Contracts" },
    { value: "24/7", label: "Lead Capture" },
  ],
  problemHeadline: "Why Plumbers Can't Break Out of Referral Dependency",
  problemSubtext:
    "Skilled plumbers lose jobs every day, not because of their work, but because they can't be found when it matters most.",
  painPoints: [
    {
      icon: "RefreshCw",
      title: "Unpredictable Lead Flow",
      desc: "Referrals arrive when they want, not when you need them. There's no way to turn up the volume when your schedule goes quiet.",
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
    { num: "03", icon: "Star",       title: "Reviews & Social Proof",  desc: "Systematic review collection after every job, building the 5-star credibility that wins bids over lower quotes." },
    { num: "04", icon: "BarChart2",  title: "Call & Lead Tracking",    desc: "Know exactly which keywords and ads bring real calls, so budget goes where it converts best." },
    { num: "05", icon: "Video",      title: "Monthly Content",         desc: "Before/after photos, job site clips, and educational posts that keep your brand top-of-mind in your city." },
    { num: "06", icon: "TrendingUp", title: "Google Ads & LSA",        desc: "Emergency search ads and pay-per-lead Local Service Ads so you're the first call when a pipe bursts." },
    { num: "07", icon: "Share2",     title: "Meta Ads",                desc: "Facebook & Instagram ads targeting homeowners with older homes: the most likely to need plumbing work." },
    { num: "08", icon: "Zap",        title: "Missed-Call Text Back",   desc: "Automated texts fire the second someone calls and hangs up, so every warm lead is recovered instantly." },
    { num: "09", icon: "Search",     title: "Local SEO & Geo Growth",  desc: "City-specific service pages and citation building that compound into free organic leads every month." },
  ],
  resultsHeadline: "What Plumbing Clients Tell Us",
  results: [
    { metric: "More Calls",  label: "Weekly Call Volume", client: "Plumbing client, Hamilton area", detail: "Went from word-of-mouth only to a steady stream of qualified calls every week from Google." },
    { metric: "Booked Out",  label: "Schedule Fill",      client: "Plumbing client, Ontario",       detail: "Booked solid weeks in advance after the system launched, up from an unpredictable schedule." },
    { metric: "More Jobs",   label: "Jobs Booked",        client: "Plumbing client, GTA",           detail: "A consistent flow of drain, install, and emergency jobs booked directly from the system." },
  ],
  videoReviews: [],
  ctaHeadline: "Every Search Is a Job\nYou Could Be Winning.",
  ctaSubtext:
    "Let's build your plumbing growth system and make sure your business shows up first when homeowners need a plumber right now.",
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do plumbers get more emergency calls?",
      acceptedAnswer: { "@type": "Answer", text: "Google Local Service Ads are the most effective channel for emergency plumbing calls because they appear at the very top of search results and you only pay per verified lead. Combined with Google Ads and an optimized Google Business Profile, this one lead generation system helps plumbing clients build a steady weekly flow of qualified calls." },
    },
    {
      "@type": "Question",
      name: "Should plumbers use Google Ads or Local Service Ads?",
      acceptedAnswer: { "@type": "Answer", text: "Both. Local Service Ads (LSA) are ideal for emergency plumbing because you pay per verified call and appear above regular ads. Google Ads complement LSA by capturing a wider range of plumbing searches. Pure Marketing manages both for maximum coverage and lowest cost per lead." },
    },
    {
      "@type": "Question",
      name: "How much does plumbing marketing cost?",
      acceptedAnswer: { "@type": "Answer", text: "Ad spend and scope depend on your market and competition level. We'll walk you through recommendations on a free local growth assessment rather than publishing blanket pricing." },
    },
    {
      "@type": "Question",
      name: "How quickly can a plumber get leads from digital marketing?",
      acceptedAnswer: { "@type": "Answer", text: "It depends on your market, competition, and starting point, so we don't promise a fixed timeline. Paid campaigns can go live within days; local search and AI discoverability improvements build over a longer period." },
    },
  ],
};

export default function PlumbersPage() {
  return (
    <>
      <script
        id="service-schema-plumbers"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <script
        id="faq-schema-plumbers"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <IndustryFullPageTemplate config={config} />
    </>
  );
}
