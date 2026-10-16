import type { Metadata } from "next";
import IndustryFullPageTemplate, { type IndustryFullConfig } from "@/components/templates/IndustryFullPageTemplate";

const BASE = "https://puremarketing.ca";

export const metadata: Metadata = {
  title: "Local Lead Generation for Electricians | Pure Marketing",
  description:
    "We help electricians across Canada get more emergency calls, panel upgrades, and residential jobs with Google Ads, Local Service Ads, Google Maps visibility, and lead capture built into one system.",
  keywords: [
    "electrician marketing Canada",
    "Google Ads for electricians",
    "electrician lead generation Ontario",
    "marketing for electricians Hamilton",
    "electrician website design",
    "Local Service Ads electricians",
  ],
  alternates: { canonical: `${BASE}/industries/electricians` },
  openGraph: {
    url: `${BASE}/industries/electricians`,
    title: "Local Lead Generation for Electricians | Pure Marketing",
    description:
      "Pure Marketing helps Canadian electricians generate more qualified calls with Google Ads, Local Service Ads, and conversion-focused websites. Book a free local growth assessment.",
  },
};

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Local Lead Generation for Electricians",
  provider: { "@id": `${BASE}/#organization` },
  serviceType: "Local Lead Generation",
  areaServed: { "@type": "Country", name: "Canada" },
  description:
    "Local lead generation for electricians across Canada: Google Ads, Local Service Ads, Google Maps visibility, and lead capture.",
  url: `${BASE}/industries/electricians`,
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Industries", item: `${BASE}/industries` },
    { "@type": "ListItem", position: 3, name: "Electricians", item: `${BASE}/industries/electricians` },
  ],
};

const config: IndustryFullConfig = {
  industry: "Electricians",
  badge: "Local Lead Generation for Electricians",
  headline: "Stop Waiting for Referrals.",
  headlineAccent: "Get Qualified Calls Every Week.",
  subheadline:
    "Paid ads, Google Maps visibility, AI search discoverability, and lead capture: unified into one predictable lead generation system built exclusively for electricians.",
  heroCheckmarks: ["More Service Calls", "Higher-Value Panels & Installs", "Fully Booked Schedule"],
  dashboard: {
    url: "yourelectricalco.ca",
    headline: "Powering Homes.",
    headlineAccent: "Trusted Electricians.",
    tagline: "Licensed & insured. Emergency service available.",
    cta: "Book an Electrician →",
    sources: [
      { label: "Google", val: "142" },
      { label: "LSA", val: "89" },
      { label: "Website", val: "41" },
      { label: "Maps", val: "28" },
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
  problemHeadline: "Why Electricians Stay Stuck on Referrals",
  problemSubtext:
    "Great work gets noticed. But without a system, you're invisible to the customers searching for you right now.",
  painPoints: [
    {
      icon: "RefreshCw",
      title: "Feast or Famine Cycle",
      desc: "Work floods in from referrals then dries up. You have zero control over when the next job arrives or how big it is.",
    },
    {
      icon: "BarChart3",
      title: "Missing from Google",
      desc: "Homeowners searching 'electrician near me' right now can't find you. Competitors with weaker reputations are getting those calls.",
    },
    {
      icon: "Zap",
      title: "No System to Scale",
      desc: "No website that converts. No ads running. No follow-up. Every potential lead is slipping through without you even knowing.",
    },
  ],
  videoLabel: "How We Grow Electrician Businesses",
  videoTitle: "Watch How We Turn Electricians Into the #1 Local Choice",
  videoDesc:
    "A 2-minute breakdown of the exact system we use to fill electricians' schedules with qualified panel upgrades, renovations, and emergency calls.",
  videoBullets: [
    "Why most electricians lose leads to competitors with worse reviews",
    "The one system we build to put you at the top of Google",
    "How we generate emergency calls 24/7, not just during business hours",
    "What to expect in your first 90 days with us",
  ],
  growthSteps: [
    { num: "01", icon: "Target",     title: "Paid Customer Acquisition",             desc: "Google Search Ads and Local Service Ads targeting homeowners searching for panel upgrades, EV charger installs, and emergency electrical calls right now." },
    { num: "02", icon: "MapPin",     title: "Google Maps & Local Search Visibility", desc: "Fully optimized Google Business Profile and review strategy so you appear in the top 3 on Maps for every electrical search in your area." },
    { num: "03", icon: "Search",     title: "AI Search Discoverability",             desc: "Clear service-area pages and structured content so homeowners and AI assistants alike can find and recommend you for panel, wiring, and EV charger work." },
    { num: "04", icon: "Zap",        title: "Lead Capture & Conversion",             desc: "Fast, mobile-first site with emergency call buttons and instant follow-up, so every enquiry is captured before they call a competitor." },
  ],
  resultsHeadline: "What Electrician Clients Tell Us",
  results: [
    { metric: "More Calls",  label: "Weekly Call Volume",  client: "Electrician client, Hamilton area", detail: "Went from a trickle of referral calls to a steady stream of qualified calls every week, now booked out well in advance." },
    { metric: "More Jobs",   label: "Jobs Booked",         client: "Electrician client, GTA",            detail: "A consistent flow of panel upgrade and install jobs booked directly from the system, month over month." },
    { metric: "Booked Out",  label: "Schedule Fill",       client: "Electrician client, Ontario",        detail: "Booked solid weeks in advance after the system launched, instead of relying on word-of-mouth." },
  ],
  videoReviews: [],
  ctaHeadline: "Your Competitors Are Getting\nYour Customers.",
  ctaSubtext:
    "Let's build your growth system and put your electrical business in front of every homeowner searching for an electrician near you.",
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do electricians get more leads online?",
      acceptedAnswer: { "@type": "Answer", text: "Google Local Service Ads and Google Ads targeting searches like 'electrician near me' are the top channels. Combined with an optimized Google Business Profile and a conversion-focused landing page, this one lead generation system helps electrician clients build a steady weekly flow of qualified calls instead of relying on referrals." },
    },
    {
      "@type": "Question",
      name: "What is the best digital marketing for electricians?",
      acceptedAnswer: { "@type": "Answer", text: "The highest-ROI approach for electricians is Google Local Service Ads (pay per verified lead) combined with Google Ads for broader coverage. Pure Marketing builds this as part of one coordinated system that also includes Google Maps visibility, AI search discoverability, and lead capture." },
    },
    {
      "@type": "Question",
      name: "How quickly can an electrician get leads from Google Ads?",
      acceptedAnswer: { "@type": "Answer", text: "It depends on your market, competition, and starting point, so we don't promise a fixed timeline. Paid campaigns can go live within days; Google Maps and local search improvements typically build over a longer period as Quality Score and visibility improve." },
    },
    {
      "@type": "Question",
      name: "Do electricians need a website to get more leads?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. A fast, mobile-first website with clear emergency call buttons, service pages, and trust signals is essential. It acts as the foundation for all ad campaigns and improves Google Ad Quality Score, lowering your cost per click and increasing conversions." },
    },
  ],
};

export default function ElectriciansPage() {
  return (
    <>
      <script
        id="service-schema-electricians"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <script
        id="faq-schema-electricians"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        id="breadcrumb-schema-electricians"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <IndustryFullPageTemplate config={config} />
    </>
  );
}
