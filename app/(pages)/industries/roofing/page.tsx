import type { Metadata } from "next";
import IndustryFullPageTemplate, { type IndustryFullConfig } from "@/components/templates/IndustryFullPageTemplate";

const BASE = "https://puremarketing.ca";

export const metadata: Metadata = {
  title: "Local Lead Generation for Roofing Companies | Pure Marketing",
  description:
    "Local lead generation for Canadian roofing companies: Google Ads, Local Service Ads, Google Maps visibility, and lead capture built to fill your estimate calendar.",
  keywords: [
    "roofing company marketing Canada",
    "roofing lead generation Ontario",
    "Google Ads for roofers",
    "roofing contractor marketing Hamilton",
    "storm damage roofing leads",
    "re-roof lead generation",
  ],
  alternates: { canonical: `${BASE}/industries/roofing` },
  openGraph: {
    url: `${BASE}/industries/roofing`,
    title: "Local Lead Generation for Roofing Companies | Pure Marketing",
    description:
      "We help Canadian roofing companies generate more estimate requests through Google visibility, paid advertising, and lead capture. Book a free local growth assessment.",
  },
};

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Local Lead Generation for Roofing Companies",
  provider: { "@id": `${BASE}/#organization` },
  serviceType: "Local Lead Generation",
  areaServed: { "@type": "Country", name: "Canada" },
  description:
    "Google Ads, Local Service Ads, Google Maps visibility, AI search discoverability, and lead capture for roofing companies across Canada.",
  url: `${BASE}/industries/roofing`,
};

const config: IndustryFullConfig = {
  industry: "Roofing Companies",
  badge: "Local Lead Generation for Roofing Companies",
  headline: "More Roof Estimates.",
  headlineAccent: "More Booked Jobs.",
  subheadline:
    "One system that gets your roofing company in front of homeowners searching for re-roofs, repairs, and storm damage help right now, then captures and converts those inquiries into booked estimates.",
  heroCheckmarks: [
    "More Roof Estimate Requests",
    "Top Google & Maps Visibility",
    "Lead Capture for High-Value Jobs",
  ],
  dashboard: {
    url: "yourroofingco.ca",
    headline: "Free Roof",
    headlineAccent: "Inspection Today.",
    tagline: "Re-roofs, repairs, and storm damage assessments. Licensed and insured.",
    cta: "Request a Free Estimate →",
    sources: [
      { label: "Google", val: "142" },
      { label: "LSA", val: "86" },
      { label: "Maps", val: "47" },
      { label: "Website", val: "33" },
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
  problemHeadline: "Why Roofing Companies Lose High-Value Jobs to Competitors",
  problemSubtext:
    "Roofing jobs are big-ticket and infrequent. If a homeowner can't find you the moment they need a roof, they book with whoever shows up first.",
  painPoints: [
    {
      icon: "MapPin",
      title: "Invisible for Storm & Re-Roof Searches",
      desc: "When a storm hits or a roof starts leaking, homeowners search Google immediately. If you're not visible in that moment, a competitor gets the estimate call.",
    },
    {
      icon: "RefreshCw",
      title: "Seasonal, Unpredictable Demand",
      desc: "Roofing demand spikes with weather and seasons. Without a consistent lead generation system, your calendar swings between overbooked and empty.",
    },
    {
      icon: "MessageSquare",
      title: "Slow Follow-Up Loses Big Jobs",
      desc: "Roofing estimates are high-value, and homeowners often request quotes from several companies. The roofer who follows up fastest usually wins the job.",
    },
  ],
  videoLabel: "How We Grow Roofing Companies",
  videoTitle: "Watch How We Help Roofing Companies Book More Estimates",
  videoDesc:
    "A breakdown of the local lead generation system we use to help roofing companies get found by homeowners searching for re-roofs, repairs, and storm damage help.",
  videoBullets: [
    "Why most roofing companies lose high-value jobs to faster-responding competitors",
    "How Google Ads and Local Service Ads capture high-intent re-roof and repair searches",
    "Why Google Maps visibility matters most during storm season",
    "What to expect as your lead generation system comes online",
  ],
  growthSteps: [
    { num: "01", icon: "Globe",      title: "Roofing Website",            desc: "Fast, mobile-first site with clear estimate request forms and service-area pages that convert visitors into booked inspections." },
    { num: "02", icon: "MapPin",     title: "Google Business Profile",    desc: "Fully optimized GBP so you rank in the local map pack for re-roof, repair, and storm damage searches." },
    { num: "03", icon: "Star",       title: "Reviews & Trust Signals",    desc: "Automated review requests after every completed job to build the reputation homeowners check before a big-ticket purchase." },
    { num: "04", icon: "BarChart2",  title: "Call & Lead Tracking",       desc: "Every estimate request tracked back to its source, so ad spend goes toward what actually fills your calendar." },
    { num: "05", icon: "Video",      title: "Monthly Content",            desc: "Completed project photos, before/after content, and seasonal posts that build credibility between storms." },
    { num: "06", icon: "TrendingUp", title: "Google Ads & LSA",           desc: "Search ads and pay-per-lead Local Service Ads targeting homeowners actively searching for roofing help." },
    { num: "07", icon: "Share2",     title: "Meta Ads",                   desc: "Facebook & Instagram campaigns building awareness and retargeting homeowners who visited your site but didn't request a quote." },
    { num: "08", icon: "Zap",        title: "Follow-Up Automation",       desc: "Instant responses and missed-call texts so a competing roofer doesn't get the job while you're on a ladder." },
    { num: "09", icon: "Search",     title: "Local SEO & Geo Growth",     desc: "Service-area and project-type pages that build organic visibility for re-roofs, repairs, and storm damage searches over time." },
  ],
  resultsHeadline: "What Roofing Clients Tell Us",
  results: [
    {
      metric: "More Estimates",
      label: "Roof Estimate Requests",
      client: "Roofing client, Ontario",
      detail: "A steadier flow of estimate requests after the system launched, instead of relying on storm season alone.",
    },
    {
      metric: "Top Rankings",
      label: "Google Maps Visibility",
      client: "Roofing client, GTA",
      detail: "Improved Google Maps visibility for re-roof and repair searches in their service area.",
    },
    {
      metric: "Faster Follow-Up",
      label: "Lead Response Time",
      client: "Roofing client, Canada",
      detail: "Automated follow-up now reaches homeowners within minutes of an inquiry instead of hours.",
    },
  ],
  videoReviews: [],
  ctaHeadline: "Your Next Roofing Job\nIs Searching for You Right Now.",
  ctaSubtext:
    "Let's build your local lead generation system so homeowners searching for a roofer in your area find you first.",
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do roofing companies generate more estimate requests?",
      acceptedAnswer: { "@type": "Answer", text: "The most effective combination for roofing companies is Google Ads and Local Service Ads targeting re-roof, repair, and storm damage searches, paired with strong Google Maps visibility and fast lead follow-up. Pure Marketing's one lead generation system combines all of these into a single coordinated approach." },
    },
    {
      "@type": "Question",
      name: "Should roofing companies use Google Local Service Ads?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Local Service Ads are especially effective for roofing because homeowners searching after storm damage or a leak are extremely high-intent, and the Google Guarantee badge builds trust quickly for a large purchase decision." },
    },
    {
      "@type": "Question",
      name: "How does storm season affect roofing lead generation?",
      acceptedAnswer: { "@type": "Answer", text: "Search demand for roofing spikes sharply after storms. Having campaigns and Google visibility already in place before storm season means you capture that demand immediately instead of scrambling to set up advertising after the fact." },
    },
    {
      "@type": "Question",
      name: "How much does roofing marketing cost?",
      acceptedAnswer: { "@type": "Answer", text: "Ad spend and scope depend on your service area and competition level. We'll walk you through recommendations on a free local growth assessment rather than publishing blanket pricing." },
    },
  ],
};

export default function RoofingPage() {
  return (
    <>
      <script
        id="service-schema-roofing"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <script
        id="faq-schema-roofing"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <IndustryFullPageTemplate config={config} />
    </>
  );
}
