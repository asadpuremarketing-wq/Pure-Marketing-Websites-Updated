import type { Metadata } from "next";
import IndustryFullPageTemplate, { type IndustryFullConfig } from "@/components/templates/IndustryFullPageTemplate";

const BASE = "https://puremarketing.ca";

export const metadata: Metadata = {
  title: "Local Lead Generation for Painters | Pure Marketing",
  description:
    "We help painting companies get more residential and commercial project inquiries with Google Ads, Meta Ads, Google Maps visibility, and before/after visual content.",
  keywords: [
    "painter marketing Canada",
    "Google Ads for painters",
    "painting company lead generation Ontario",
    "marketing for painters Hamilton",
    "painting website design",
    "Meta Ads painters",
  ],
  alternates: { canonical: `${BASE}/industries/painters` },
  openGraph: {
    url: `${BASE}/industries/painters`,
    title: "Local Lead Generation for Painters | Pure Marketing",
    description:
      "Pure Marketing helps painting companies generate more quote requests with Google Ads, Meta Ads, and visual content. Book a free local growth assessment.",
  },
};

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Marketing for Painters",
  provider: { "@id": `${BASE}/#organization` },
  serviceType: "Digital Marketing",
  areaServed: { "@type": "Country", name: "Canada" },
  description:
    "Specialized Google Ads, Meta Ads, before/after content, and lead generation for painting companies across Canada.",
  url: `${BASE}/industries/painters`,
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Industries", item: `${BASE}/industries` },
    { "@type": "ListItem", position: 3, name: "Painters", item: `${BASE}/industries/painters` },
  ],
};

const config: IndustryFullConfig = {
  industry: "Painters",
  badge: "Local Lead Generation for Painters",
  headline: "Stop Waiting for Word of Mouth.",
  headlineAccent: "Book Projects Consistently.",
  subheadline:
    "Paid ads, Google Maps visibility, AI search discoverability, and lead capture: one system that keeps painting companies booked solid with residential and commercial projects.",
  heroCheckmarks: [
    "More Residential Projects",
    "Higher-Value Commercial Jobs",
    "Consistent Quote Requests",
  ],
  dashboard: {
    url: "yourpaintingco.ca",
    headline: "Flawless Finishes.",
    headlineAccent: "Every Time.",
    tagline: "Interior, exterior & commercial painting. Free estimates.",
    cta: "Get a Free Quote →",
    sources: [
      { label: "Google", val: "124" },
      { label: "Meta", val: "88" },
      { label: "Website", val: "46" },
      { label: "Maps", val: "21" },
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
  problemHeadline: "Why Great Painters Struggle to Stay Fully Booked",
  problemSubtext:
    "Beautiful work sells itself, but only if people can find you. Without a marketing system, your best projects go unseen.",
  painPoints: [
    {
      icon: "RefreshCw",
      title: "Slow Periods Kill Momentum",
      desc: "Referrals carry you in summer then go quiet in fall. Without a system generating quotes year-round, cash flow becomes unpredictable.",
    },
    {
      icon: "MapPin",
      title: "Your Work Is Invisible Online",
      desc: "Homeowners search for painters before they ask friends. Without Google presence and visual content, they book competitors before they ever see your work.",
    },
    {
      icon: "MessageSquare",
      title: "Quotes Go Cold Without Follow-Up",
      desc: "A homeowner gets 3 quotes. The painter who follows up fastest wins. Without automation, that job goes to whoever followed up first, not who quoted best.",
    },
  ],
  videoLabel: "How We Grow Painting Companies",
  videoTitle: "Watch How We Book Painters Solid with Before/After Content & Ads",
  videoDesc:
    "A 2-minute breakdown of the visual content and paid advertising system that drives consistent quote requests for painting companies across Canada.",
  videoBullets: [
    "Why most painters lose jobs to competitors with worse work but better marketing",
    "The power of before/after content: the highest-converting format for painting companies",
    "How Google & Meta ads target homeowners actively looking to repaint",
    "What to expect in your first 75 days with the full system running",
  ],
  growthSteps: [
    { num: "01", icon: "Target",     title: "Paid Customer Acquisition",             desc: "Google and Meta campaigns with before/after creative targeting high-intent queries like 'interior painters near me' and 'exterior house painting quotes'." },
    { num: "02", icon: "MapPin",     title: "Google Maps & Local Search Visibility", desc: "Optimized Google Business Profile with project photos and a curated review strategy so you rank for interior, exterior, and cabinet painting searches." },
    { num: "03", icon: "Search",     title: "AI Search Discoverability",             desc: "Service-area and paint-type content that makes it easy for homeowners and AI-powered search to find and recommend your work." },
    { num: "04", icon: "Zap",        title: "Lead Capture & Conversion",             desc: "Online quote forms and instant automated follow-up after every request, so leads stay warm until they book instead of going to whoever responded first." },
  ],
  resultsHeadline: "What Painting Clients Tell Us",
  results: [
    { metric: "More Quotes", label: "Quote Requests", client: "Painting client, Hamilton area", detail: "From inconsistent referrals to a steady stream of quote requests every month." },
    { metric: "More Projects", label: "Projects Booked", client: "Painting client, Ontario", detail: "A consistent flow of residential and commercial projects booked directly from the system." },
    { metric: "Booked Out",   label: "Schedule Fill",    client: "Painting client, GTA",      detail: "Booked weeks out in advance, with no more slow weeks since the system launched." },
  ],
  videoReviews: [],
  ctaHeadline: "Your Best Work Deserves\nto Be Found.",
  ctaSubtext:
    "Let's build your painting growth system and make sure homeowners see your before/after work before they call anyone else.",
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do painting companies get more residential projects?",
      acceptedAnswer: { "@type": "Answer", text: "Google Ads targeting searches like 'house painter near me' and 'interior painting estimate' combined with before/after visual proof used as ad creative on Instagram and Facebook. A landing page showcasing finished projects builds trust and converts visitors into booked estimates, with instant follow-up making sure none of those quote requests go cold." },
    },
    {
      "@type": "Question",
      name: "What is the best marketing for a painting company?",
      acceptedAnswer: { "@type": "Answer", text: "Before/after visual content performs exceptionally well for painters when used as ad creative on Instagram and Facebook, driving estimate requests. Google Ads capture high-intent searches. Together, as one system, this drives both awareness and direct leads." },
    },
    {
      "@type": "Question",
      name: "How quickly can a painting company get leads from digital marketing?",
      acceptedAnswer: { "@type": "Answer", text: "It depends on your market, competition, and starting point, so we don't promise a fixed timeline. Paid campaigns can go live within days; local search and AI discoverability improvements build over a longer period." },
    },
    {
      "@type": "Question",
      name: "How much does marketing for a painting company cost?",
      acceptedAnswer: { "@type": "Answer", text: "Scope and ad spend depend on your market and goals. We'll walk you through recommendations on a free local growth assessment rather than publishing blanket pricing. All engagements are month-to-month with no long-term contracts required." },
    },
  ],
};

export default function PaintersPage() {
  return (
    <>
      <script
        id="service-schema-painters"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <script
        id="faq-schema-painters"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        id="breadcrumb-schema-painters"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <IndustryFullPageTemplate config={config} />
    </>
  );
}
