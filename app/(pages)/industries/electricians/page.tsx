import type { Metadata } from "next";
import Script from "next/script";
import IndustryFullPageTemplate, { type IndustryFullConfig } from "@/components/templates/IndustryFullPageTemplate";

const BASE = "https://puremarketing.ca";

export const metadata: Metadata = {
  title: "Marketing for Electricians | Google Ads & Lead Gen - Pure Marketing",
  description:
    "We help electricians across Canada get more emergency calls, panel upgrades, and residential jobs with Google Ads, Local Service Ads, and conversion-focused websites. 312% avg lead increase.",
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
    title: "Marketing for Electricians | 312% More Leads - Pure Marketing",
    description:
      "Pure Marketing helps electricians get 18+ qualified leads per week with Google Ads, LSA, and conversion websites. Book a free audit.",
  },
};

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Marketing for Electricians",
  provider: { "@id": `${BASE}/#organization` },
  serviceType: "Digital Marketing",
  areaServed: { "@type": "Country", name: "Canada" },
  description:
    "Specialized Google Ads, Local Service Ads, web design, and lead generation for electricians across Canada. Average 312% lead increase in 90 days.",
  url: `${BASE}/industries/electricians`,
};

const config: IndustryFullConfig = {
  industry: "Electricians",
  badge: "90-Day Electrician Growth System",
  headline: "Stop Waiting for Referrals.",
  headlineAccent: "Get Qualified Calls Every Week.",
  subheadline:
    "Websites, Google, Content, Ads, Automation & SEO — unified into one predictable lead generation machine built exclusively for electricians.",
  heroCheckmarks: ["More Service Calls", "Higher-Value Panels & Installs", "Fully Booked Schedule"],
  dashboard: {
    url: "sparkelectrical.ca",
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
    { label: "New Calls", val: "312", chg: "+41%" },
    { label: "Jobs Booked", val: "186", chg: "+34%" },
    { label: "Revenue", val: "$52K", chg: "+38%" },
  ],
  bandStats: [
    { value: "312%", label: "Avg lead increase" },
    { value: "18+", label: "Leads per week" },
    { value: "90", label: "Days to scale" },
    { value: "$34K", label: "Avg revenue 90 days" },
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
    "The 9-step system we build to put you at the top of Google",
    "How we generate emergency calls 24/7 — not just during business hours",
    "What to expect in your first 90 days with us",
  ],
  growthSteps: [
    { num: "01", icon: "Globe",      title: "Electrician Website",            desc: "Fast, mobile-first site with emergency call buttons, service pages, and trust signals built to convert visitors into calls." },
    { num: "02", icon: "MapPin",     title: "Google Business Profile",        desc: "Fully optimized GBP so you appear in the top 3 on Maps for every electrical search in your area." },
    { num: "03", icon: "Star",       title: "Reviews & Reputation",           desc: "Automated review requests after every job to build a 5-star reputation that wins more residential bids." },
    { num: "04", icon: "BarChart2",  title: "Lead Tracking Setup",            desc: "Full visibility into every call and form — so we know exactly which campaigns bring real jobs." },
    { num: "05", icon: "Video",      title: "Monthly Content",                desc: "Job site photos, panel upgrade reels, and branded posts that build authority in your local market." },
    { num: "06", icon: "TrendingUp", title: "Google Ads & Local Service Ads", desc: "Search ads and pay-per-lead LSA campaigns targeting homeowners searching for electricians right now." },
    { num: "07", icon: "Share2",     title: "Meta Ads",                       desc: "Facebook & Instagram ads that build brand awareness and generate estimate requests in your service area." },
    { num: "08", icon: "Zap",        title: "Follow-Up Automation",           desc: "Instant responses and missed-call texts so every enquiry is captured before they call a competitor." },
    { num: "09", icon: "Search",     title: "Local SEO & Geo Growth",         desc: "Service-area pages and local citations that drive organic electrician leads month after month." },
  ],
  resultsHeadline: "Hear It From Our Electrician Clients",
  results: [
    { metric: "312%", label: "Lead Increase",    client: "Bright Spark Electric", detail: "Went from 3 calls/week to 18+. Now fully booked 4 weeks out." },
    { metric: "$34K", label: "Revenue in 90 Days", client: "Premier Electrical",  detail: "18 jobs/week and $34K in revenue within the first 90 days." },
    { metric: "4 wk.", label: "Fully Booked",    client: "GTA Electric",          detail: "Booked solid 4 weeks in advance within the first quarter." },
  ],
  videoReviews: [
    { name: "Mike D.",   company: "Bright Spark Electric", result: "312%+ More Leads",        dur: "1:38" },
    { name: "Kevin S.",  company: "Premier Electrical",    result: "Fully Booked in 60 Days", dur: "2:02" },
    { name: "Jason L.",  company: "GTA Electric",          result: "Top Google Rankings",     dur: "1:51" },
  ],
  ctaHeadline: "Your Competitors Are Getting\nYour Customers.",
  ctaSubtext:
    "Let's build your growth system and put your electrical business in front of every homeowner searching for an electrician near you.",
};

export default function ElectriciansPage() {
  return (
    <>
      <Script
        id="service-schema-electricians"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <IndustryFullPageTemplate config={config} />
    </>
  );
}
