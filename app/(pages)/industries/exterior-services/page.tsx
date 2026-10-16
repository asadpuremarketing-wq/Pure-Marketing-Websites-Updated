import type { Metadata } from "next";
import IndustryFullPageTemplate, { type IndustryFullConfig } from "@/components/templates/IndustryFullPageTemplate";

const BASE = "https://puremarketing.ca";

export const metadata: Metadata = {
  title: "Local Lead Generation for Exterior & Siding Contractors | Pure Marketing",
  description:
    "Local lead generation for Canadian siding and exterior renovation contractors: Google Ads, Local Service Ads, Google Maps visibility, and lead capture built to fill your project calendar.",
  keywords: [
    "exterior contractor marketing Canada",
    "siding company lead generation Ontario",
    "Google Ads for siding contractors",
    "exterior renovation marketing Hamilton",
    "siding replacement leads",
    "exterior services marketing agency",
  ],
  alternates: { canonical: `${BASE}/industries/exterior-services` },
  openGraph: {
    url: `${BASE}/industries/exterior-services`,
    title: "Local Lead Generation for Exterior & Siding Contractors | Pure Marketing",
    description:
      "We help Canadian siding and exterior contractors generate more project inquiries through Google visibility, paid advertising, and lead capture. Book a free local growth assessment.",
  },
};

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Local Lead Generation for Exterior & Siding Contractors",
  provider: { "@id": `${BASE}/#organization` },
  serviceType: "Local Lead Generation",
  areaServed: { "@type": "Country", name: "Canada" },
  description:
    "Google Ads, Local Service Ads, Google Maps visibility, AI search discoverability, and lead capture for siding and exterior renovation contractors across Canada.",
  url: `${BASE}/industries/exterior-services`,
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Industries", item: `${BASE}/industries` },
    { "@type": "ListItem", position: 3, name: "Exterior & Siding Contractors", item: `${BASE}/industries/exterior-services` },
  ],
};

const config: IndustryFullConfig = {
  industry: "Exterior & Siding Contractors",
  badge: "Local Lead Generation for Exterior Contractors",
  headline: "More Project Inquiries.",
  headlineAccent: "More Booked Exteriors Work.",
  subheadline:
    "One system that gets your siding and exterior renovation business in front of homeowners planning a project, then captures and converts those inquiries into booked estimates.",
  heroCheckmarks: [
    "More Siding & Exterior Inquiries",
    "Top Google & Maps Visibility",
    "Lead Capture for High-Value Projects",
  ],
  dashboard: {
    url: "yourexteriorsco.ca",
    headline: "Free Exterior",
    headlineAccent: "Project Quote.",
    tagline: "Siding, soffit, fascia, and full exterior renovations. Licensed and insured.",
    cta: "Request a Free Quote →",
    sources: [
      { label: "Google", val: "118" },
      { label: "LSA", val: "64" },
      { label: "Maps", val: "41" },
      { label: "Website", val: "27" },
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
  problemHeadline: "Why Exterior Contractors Lose Big Projects to Competitors",
  problemSubtext:
    "Siding and exterior renovations are considered purchases. Homeowners research and compare before they call, so the contractor who shows up first in that research usually wins the project.",
  painPoints: [
    {
      icon: "MapPin",
      title: "Invisible When Homeowners Start Researching",
      desc: "Homeowners planning a siding or exterior project search and compare contractors online for weeks before reaching out. If you're not visible during that research phase, you're not on their shortlist.",
    },
    {
      icon: "RefreshCw",
      title: "Seasonal, Weather-Driven Demand",
      desc: "Exterior work is heavily seasonal and often follows storm or wind damage. Without a consistent system, your project calendar is unpredictable from month to month.",
    },
    {
      icon: "MessageSquare",
      title: "Slow Quotes Lose Large Projects",
      desc: "Exterior renovation quotes are high-value, and homeowners typically request several. The contractor who responds fastest and most professionally usually wins the job, regardless of price." ,
    },
  ],
  videoLabel: "How We Grow Exterior & Siding Contractors",
  videoTitle: "Watch How We Help Exterior Contractors Book More Projects",
  videoDesc:
    "A breakdown of the local lead generation system we use to help siding and exterior renovation contractors get found by homeowners planning a project.",
  videoBullets: [
    "Why most exterior contractors lose large projects during the homeowner's research phase",
    "How Google Ads and Local Service Ads capture high-intent siding and exterior renovation searches",
    "Why before/after project photos matter for winning high-value exterior work",
    "What to expect as your lead generation system comes online",
  ],
  growthSteps: [
    { num: "01", icon: "Target",     title: "Paid Customer Acquisition",             desc: "Search ads and pay-per-lead Local Service Ads targeting homeowners actively researching siding, soffit, fascia, and exterior renovation work." },
    { num: "02", icon: "MapPin",     title: "Google Maps & Local Search Visibility", desc: "Fully optimized Google Business Profile and a steady review strategy so you rank in the local map pack for exterior renovation searches." },
    { num: "03", icon: "Search",     title: "AI Search Discoverability",             desc: "Before/after project content and service-area pages that help homeowners researching for weeks find and trust you across traditional and AI-powered search." },
    { num: "04", icon: "Zap",        title: "Lead Capture & Conversion",             desc: "Strong project gallery, quote request forms, and instant follow-up so a competing contractor doesn't win the project while you're on-site." },
  ],
  resultsHeadline: "What Exterior Contractor Clients Tell Us",
  results: [
    {
      metric: "More Inquiries",
      label: "Project Quote Requests",
      client: "Exterior contractor client, Ontario",
      detail: "A steadier flow of project inquiries after the system launched, spread more evenly across the season.",
    },
    {
      metric: "Top Rankings",
      label: "Google Maps Visibility",
      client: "Exterior contractor client, GTA",
      detail: "Improved Google Maps visibility for siding and exterior renovation searches in their service area.",
    },
    {
      metric: "Faster Follow-Up",
      label: "Lead Response Time",
      client: "Exterior contractor client, Canada",
      detail: "Automated follow-up now reaches homeowners within minutes of a quote request instead of days.",
    },
  ],
  videoReviews: [],
  ctaHeadline: "Your Next Exterior Project\nIs Being Researched Right Now.",
  ctaSubtext:
    "Let's build your local lead generation system so homeowners researching siding and exterior contractors in your area find you first.",
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do siding and exterior contractors generate more project inquiries?",
      acceptedAnswer: { "@type": "Answer", text: "The most effective combination for exterior contractors is Google Ads and Local Service Ads targeting siding and renovation searches, paired with strong Google Maps visibility, a project photo gallery, and fast lead follow-up. Pure Marketing's one lead generation system combines all of these into a single coordinated approach." },
    },
    {
      "@type": "Question",
      name: "Should exterior contractors use Google Local Service Ads?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, where available. Local Service Ads work well for exterior contractors because they appear above regular search results and build trust with the Google Guarantee badge, which matters for a large home improvement decision." },
    },
    {
      "@type": "Question",
      name: "How important are before/after photos for exterior contractor marketing?",
      acceptedAnswer: { "@type": "Answer", text: "Very important. Homeowners comparing exterior contractors want visual proof of past work. A strong project gallery used across your website and ads is one of the most effective trust-building tools for this industry." },
    },
    {
      "@type": "Question",
      name: "How much does marketing for exterior contractors cost?",
      acceptedAnswer: { "@type": "Answer", text: "Ad spend and scope depend on your service area and competition level. We'll walk you through recommendations on a free local growth assessment rather than publishing blanket pricing." },
    },
  ],
};

export default function ExteriorServicesPage() {
  return (
    <>
      <script
        id="service-schema-exterior-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <script
        id="faq-schema-exterior-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        id="breadcrumb-schema-exterior-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <IndustryFullPageTemplate config={config} />
    </>
  );
}
