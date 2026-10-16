import type { Metadata } from "next";
import IndustryFullPageTemplate, { type IndustryFullConfig } from "@/components/templates/IndustryFullPageTemplate";

const BASE = "https://puremarketing.ca";

export const metadata: Metadata = {
  title: "Local Lead Generation for Locksmiths | Pure Marketing",
  description:
    "We help locksmiths get more emergency lockout calls with Google Local Service Ads, Google Maps visibility, and Local SEO built for always-on demand.",
  keywords: [
    "locksmith marketing Canada",
    "Google Ads for locksmiths",
    "locksmith lead generation Ontario",
    "marketing for locksmiths Hamilton",
    "locksmith website design",
    "emergency locksmith ads",
    "Local Service Ads locksmiths",
  ],
  alternates: { canonical: `${BASE}/industries/locksmiths` },
  openGraph: {
    url: `${BASE}/industries/locksmiths`,
    title: "Local Lead Generation for Locksmiths | Pure Marketing",
    description:
      "Pure Marketing helps Canadian locksmiths get more emergency calls through Google visibility and lead capture. Book a free local growth assessment.",
  },
};

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Marketing for Locksmiths",
  provider: { "@id": `${BASE}/#organization` },
  serviceType: "Digital Marketing",
  areaServed: { "@type": "Country", name: "Canada" },
  description:
    "Google Local Service Ads, emergency Google Ads, and Local SEO for locksmiths across Canada.",
  url: `${BASE}/industries/locksmiths`,
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Industries", item: `${BASE}/industries` },
    { "@type": "ListItem", position: 3, name: "Locksmiths", item: `${BASE}/industries/locksmiths` },
  ],
};

const config: IndustryFullConfig = {
  industry: "Locksmiths",
  badge: "Local Lead Generation for Locksmiths",
  headline: "More Emergency Calls.",
  headlineAccent: "24/7. Around the Clock.",
  subheadline:
    "Paid ads, Google Maps visibility, AI search discoverability, and lead capture: one always-on system that puts your locksmith business at the top of Google when someone needs you most.",
  heroCheckmarks: [
    "More Emergency Lockout Calls",
    "Top Google & Maps Rankings",
    "24/7 Automated Lead Recovery",
  ],
  dashboard: {
    url: "yourlocksmithco.ca",
    headline: "Locked Out?",
    headlineAccent: "We're On Our Way.",
    tagline: "Emergency locksmith service. Residential, automotive & commercial.",
    cta: "Call a Locksmith Now →",
    sources: [
      { label: "Google", val: "164" },
      { label: "LSA", val: "112" },
      { label: "Maps", val: "58" },
      { label: "Website", val: "29" },
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
  problemHeadline: "Why Locksmiths Lose Emergency Calls Every Day",
  problemSubtext:
    "A locked-out customer is searching right now. If your business isn't the first result they see, you've already lost that job.",
  painPoints: [
    {
      icon: "Zap",
      title: "Emergencies Won't Wait",
      desc: "Someone locked out of their car or home calls the first locksmith they find. If you're not showing at the top of Google in that moment, the call, and the revenue, goes elsewhere.",
    },
    {
      icon: "MapPin",
      title: "Losing the Local Map Pack",
      desc: "The top 3 results on Google Maps get 90% of all emergency locksmith calls. If you're not in that pack, you're invisible to the most valuable customers in your area.",
    },
    {
      icon: "MessageSquare",
      title: "Missed Calls = Lost Revenue",
      desc: "A locksmith who doesn't answer immediately loses the job. Without missed-call text-back automation, every unanswered emergency call is money left on the table.",
    },
  ],
  videoLabel: "How We Grow Locksmith Businesses",
  videoTitle: "Watch How We Put Locksmiths at the Top of Google, 24/7",
  videoDesc:
    "A 2-minute breakdown of the emergency advertising and local SEO system that generates around-the-clock lockout calls for locksmiths across Canada.",
  videoBullets: [
    "Why most locksmiths miss emergency calls that should be theirs",
    "How Google Local Service Ads put you first for every lockout search near you",
    "Why missed-call text-back automation is the single highest-ROI tool for locksmiths",
    "What to expect in your first 7 days: the fastest launch in our entire system",
  ],
  growthSteps: [
    { num: "01", icon: "Target",     title: "Paid Customer Acquisition",             desc: "Emergency search ads and pay-per-lead Local Service Ads that put you first the moment someone is locked out of their car or home." },
    { num: "02", icon: "MapPin",     title: "Google Maps & Local Search Visibility", desc: "Optimized Google Business Profile with 24/7 availability and a 5-star review strategy so you rank in the top 3 for lockout searches near you." },
    { num: "03", icon: "Search",     title: "AI Search Discoverability",             desc: "Neighbourhood and service-type content that keeps you visible across traditional and AI-powered search for residential, automotive, and commercial lockouts." },
    { num: "04", icon: "Zap",        title: "Lead Capture & Conversion",             desc: "Prominent click-to-call and missed-call text recovery so a panicked caller who hangs up is recovered instantly instead of calling someone else." },
  ],
  resultsHeadline: "What Locksmith Clients Tell Us",
  results: [
    {
      metric: "Stronger Local Presence",
      label: "Website & Local Visibility",
      client: "Prudent Locksmith & Garage Services, Hamilton, Ontario",
      detail: "A dedicated website and local presence built around capturing emergency locksmith and garage door service-area inquiries.",
    },
    {
      metric: "Top Rankings",
      label: "Google Maps Ranking",
      client: "Locksmith client, Ontario",
      detail: "Ranking near the top of Google Maps for locksmith searches in their service area.",
    },
    {
      metric: "Fewer Missed Calls",
      label: "Call Recovery",
      client: "Locksmith client, GTA",
      detail: "Missed-call text-back automation now recovers unanswered emergency calls automatically.",
    },
  ],
  videoReviews: [],
  ctaHeadline: "Every Missed Call Is\nRevenue You're Losing.",
  ctaSubtext:
    "Let's build your locksmith growth system so every emergency search in your area finds your business first, day or night.",
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do locksmiths get more emergency lockout calls?",
      acceptedAnswer: { "@type": "Answer", text: "Google Local Service Ads are the most effective marketing channel for locksmiths. Emergency lockout searches are extremely high-intent and LSAs appear at the very top of results with a Google Guarantee badge. Pure Marketing's one lead generation system puts locksmiths at the top of Google for emergency searches." },
    },
    {
      "@type": "Question",
      name: "Should locksmiths use Google Local Service Ads?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. LSAs are an effective marketing tool for locksmiths because you only pay per verified call, you appear above regular Google Ads, and the Google Guarantee builds trust for people in stressful lockout situations." },
    },
    {
      "@type": "Question",
      name: "How quickly can a locksmith get leads from digital marketing?",
      acceptedAnswer: { "@type": "Answer", text: "It depends on your market, competition, and starting point, so we don't promise a fixed timeline. Paid campaigns can go live within days; local search improvements build over a longer period. We also set up missed-call follow-up so inquiries aren't lost to voicemail." },
    },
    {
      "@type": "Question",
      name: "How much does locksmith marketing cost?",
      acceptedAnswer: { "@type": "Answer", text: "Ad spend and scope depend on your service area size. We'll walk you through recommendations on a free local growth assessment rather than publishing blanket pricing." },
    },
  ],
};

export default function LocksmithsPage() {
  return (
    <>
      <script
        id="service-schema-locksmiths"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <script
        id="faq-schema-locksmiths"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        id="breadcrumb-schema-locksmiths"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <IndustryFullPageTemplate config={config} />
    </>
  );
}
