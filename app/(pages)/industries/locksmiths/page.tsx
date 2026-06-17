import type { Metadata } from "next";
import IndustryFullPageTemplate, { type IndustryFullConfig } from "@/components/templates/IndustryFullPageTemplate";

const BASE = "https://puremarketing.ca";

export const metadata: Metadata = {
  title: "Marketing for Locksmiths | Google Ads & Local SEO - Pure Marketing",
  description:
    "We put locksmiths at the top of Google for emergency lockout searches with Google Local Service Ads and Local SEO. 300%+ lead increase. Live in 7 days.",
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
    title: "Marketing for Locksmiths | 300%+ More Calls - Pure Marketing",
    description:
      "Pure Marketing puts locksmiths at the top of Google for emergency searches. 300%+ lead increase, live in 7 days. Book a free audit.",
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
    "Google Local Service Ads, emergency Google Ads, and Local SEO for locksmiths across Canada. Average 300%+ lead increase.",
  url: `${BASE}/industries/locksmiths`,
};

const config: IndustryFullConfig = {
  industry: "Locksmiths",
  badge: "90-Day Locksmith Growth System",
  headline: "More Emergency Calls.",
  headlineAccent: "24/7. Around the Clock.",
  subheadline:
    "Websites, Google, Local Ads, Automation & SEO — one always-on system that puts your locksmith business at the top of Google when someone needs you most.",
  heroCheckmarks: [
    "More Emergency Lockout Calls",
    "Top Google & Maps Rankings",
    "24/7 Automated Lead Recovery",
  ],
  dashboard: {
    url: "citylocksmith.ca",
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
    { label: "Daily Calls", val: "300%", chg: "+300%" },
    { label: "Avg Response", val: "< 3min", chg: "instant" },
    { label: "Rating", val: "5.0★", chg: "+0.8★" },
  ],
  bandStats: [
    { value: "300%+", label: "Avg lead increase" },
    { value: "7", label: "Days to launch" },
    { value: "24/7", label: "Lead generation" },
    { value: "5★", label: "Avg Google rating" },
  ],
  problemHeadline: "Why Locksmiths Lose Emergency Calls Every Day",
  problemSubtext:
    "A locked-out customer is searching right now. If your business isn't the first result they see, you've already lost that job.",
  painPoints: [
    {
      icon: "Zap",
      title: "Emergencies Won't Wait",
      desc: "Someone locked out of their car or home calls the first locksmith they find. If you're not showing at the top of Google in that moment, the call — and the revenue — goes elsewhere.",
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
  videoTitle: "Watch How We Put Locksmiths at the Top of Google — 24/7",
  videoDesc:
    "A 2-minute breakdown of the emergency advertising and local SEO system that generates around-the-clock lockout calls for locksmiths across Canada.",
  videoBullets: [
    "Why most locksmiths miss emergency calls that should be theirs",
    "How Google Local Service Ads put you first for every lockout search near you",
    "Why missed-call text-back automation is the single highest-ROI tool for locksmiths",
    "What to expect in your first 7 days — the fastest launch in our entire system",
  ],
  growthSteps: [
    { num: "01", icon: "Globe",      title: "Locksmith Website",          desc: "Fast, mobile-first site with prominent click-to-call, service area pages, and emergency messaging that converts panic into calls." },
    { num: "02", icon: "MapPin",     title: "Google Business Profile",    desc: "Optimized GBP with 24/7 availability, service areas, and photos to rank in the top 3 for lockout searches near you." },
    { num: "03", icon: "Star",       title: "Reviews & Trust Signals",    desc: "Automated post-job review requests that build a 5-star reputation — the #1 trust factor for emergency service calls." },
    { num: "04", icon: "BarChart2",  title: "Call Tracking & Analytics",  desc: "Every call source tracked so we know exactly which keywords and ads bring real lockout jobs." },
    { num: "05", icon: "Video",      title: "Monthly Content",            desc: "Security tips, lock brand content, and local awareness posts that keep your business visible between emergencies." },
    { num: "06", icon: "TrendingUp", title: "Google Ads & LSA",           desc: "Emergency search ads and pay-per-lead Local Service Ads that put you first when someone is locked out right now." },
    { num: "07", icon: "Share2",     title: "Meta Ads",                   desc: "Facebook & Instagram awareness campaigns targeting homeowners and vehicle owners in your service radius." },
    { num: "08", icon: "Zap",        title: "Missed-Call Text Recovery",  desc: "Instant automated texts fire when a panicked caller hangs up — recovering high-value emergency leads before they call someone else." },
    { num: "09", icon: "Search",     title: "Local SEO & Geo Growth",     desc: "Neighbourhood and service-type pages that rank for residential, automotive, and commercial locksmith searches organically." },
  ],
  resultsHeadline: "Hear It From Our Locksmith Clients",
  results: [
    {
      metric: "3x",
      label: "More Emergency Calls",
      client: "Rapid Lock & Key",
      detail: "Tripled daily emergency calls within the first 30 days. Phone rings around the clock.",
    },
    {
      metric: "Top 3",
      label: "Google Maps Ranking",
      client: "City Locksmith",
      detail: "Ranked in the top 3 on Google Maps for every locksmith search in their service area.",
    },
    {
      metric: "100%",
      label: "Call Recovery Rate",
      client: "Pro Lock Solutions",
      detail: "Missed-call text-back automation now recovers every unanswered emergency call automatically.",
    },
  ],
  videoReviews: [
    { name: "Tony M.",  company: "City Locksmith",     result: "3x More Daily Calls",  dur: "1:39" },
    { name: "Dave R.",  company: "Rapid Lock & Key",   result: "Top 3 Google Maps",    dur: "2:02" },
    { name: "Kim S.",   company: "Pro Lock Solutions", result: "24/7 Lead Recovery",   dur: "1:51" },
  ],
  ctaHeadline: "Every Missed Call Is\nRevenue You're Losing.",
  ctaSubtext:
    "Let's build your locksmith growth system so every emergency search in your area finds your business first — day or night.",
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do locksmiths get more emergency lockout calls?",
      acceptedAnswer: { "@type": "Answer", text: "Google Local Service Ads are the most effective marketing channel for locksmiths. Emergency lockout searches are extremely high-intent and LSAs appear at the very top of results with a Google Guarantee badge. Pure Marketing puts locksmiths at the top of Google for emergency searches and averages 300%+ lead increases." },
    },
    {
      "@type": "Question",
      name: "Should locksmiths use Google Local Service Ads?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, absolutely. LSAs are the ideal marketing tool for locksmiths because you only pay per verified call, you appear above regular Google Ads, and the Google Guarantee builds trust for people in stressful lockout situations. Pure Marketing can have locksmith LSA campaigns live within 7 days." },
    },
    {
      "@type": "Question",
      name: "How quickly can a locksmith get leads from digital marketing?",
      acceptedAnswer: { "@type": "Answer", text: "Locksmith clients typically see their first emergency calls within 3-7 days of campaigns launching, because lockout searches happen 24/7 and are extremely high-intent. Pure Marketing also sets up missed-call text automation so no lead is ever lost to voicemail." },
    },
    {
      "@type": "Question",
      name: "How much does locksmith marketing cost?",
      acceptedAnswer: { "@type": "Answer", text: "Locksmith lead generation with Pure Marketing starts from $1,499/month. Ad spend (paid to Google) is additional and depends on your service area size. Most locksmith clients see positive ROI within 2-4 weeks due to the high urgency of lockout jobs." },
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
      <IndustryFullPageTemplate config={config} />
    </>
  );
}
