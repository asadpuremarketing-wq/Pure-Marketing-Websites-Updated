import type { Metadata } from "next";
import Script from "next/script";
import IndustryFullPageTemplate, { type IndustryFullConfig } from "@/components/templates/IndustryFullPageTemplate";

const BASE = "https://puremarketing.ca";

export const metadata: Metadata = {
  title: "Marketing for Real Estate Agents | Property Videos & Lead Gen - Pure Marketing",
  description:
    "We help real estate agents in Canada sell faster with property tour videos, agent websites, and targeted lead generation campaigns. 4.2x faster sales on average.",
  keywords: [
    "real estate marketing Canada",
    "real estate agent marketing Ontario",
    "property tour video Hamilton",
    "real estate lead generation",
    "marketing for realtors Hamilton",
    "real estate website design",
  ],
  alternates: { canonical: `${BASE}/industries/real-estate` },
  openGraph: {
    url: `${BASE}/industries/real-estate`,
    title: "Marketing for Real Estate Agents | 4.2x Faster Sales - Pure Marketing",
    description:
      "Pure Marketing helps real estate agents sell faster with property videos, agent branding, and lead gen campaigns. Book a free audit.",
  },
};

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Marketing for Real Estate Agents",
  provider: { "@id": `${BASE}/#organization` },
  serviceType: "Digital Marketing",
  areaServed: { "@type": "Country", name: "Canada" },
  description:
    "Property tour videos, agent websites, Facebook/Instagram lead gen campaigns for real estate agents across Canada.",
  url: `${BASE}/industries/real-estate`,
};

const config: IndustryFullConfig = {
  industry: "Real Estate",
  badge: "90-Day Real Estate Growth System",
  headline: "More Listings. More Buyers.",
  headlineAccent: "Build a Brand That Attracts Both.",
  subheadline:
    "Agent websites, property videos, Google, Meta Ads, Automation & SEO — one system that builds your personal brand and generates a steady pipeline of buyers and sellers.",
  heroCheckmarks: ["More Seller Listings", "Consistent Buyer Leads", "A Personal Brand That Attracts Referrals"],
  dashboard: {
    url: "rogersinghamilton.ca",
    headline: "Your Trusted Agent.",
    headlineAccent: "Homes Sold Faster.",
    tagline: "Residential & investment properties. Free home valuation.",
    cta: "Get a Free Valuation →",
    sources: [
      { label: "Google", val: "88" },
      { label: "Meta", val: "96" },
      { label: "Website", val: "52" },
      { label: "Maps", val: "18" },
    ],
  },
  heroMetrics: [
    { label: "Faster Sales",  val: "4.2x", chg: "+4.2x" },
    { label: "Buyer Leads",   val: "+35%", chg: "+35%" },
    { label: "Sell Price",    val: "+8%",  chg: "+8%" },
  ],
  bandStats: [
    { value: "4.2x", label: "Faster sales" },
    { value: "35%",  label: "More buyer leads" },
    { value: "8%",   label: "Higher selling price" },
    { value: "2.3x", label: "More website traffic" },
  ],
  problemHeadline: "Why Real Estate Agents Can't Build Consistent Pipelines",
  problemSubtext:
    "Great agents close deals — but without a personal brand and lead system, you're dependent on whoever calls next instead of building something predictable.",
  painPoints: [
    {
      icon: "RefreshCw",
      title: "Income Dependent on Who Calls",
      desc: "Without a pipeline system, your income is tied to the last referral or cold call. There's no predictable inflow of buyers and sellers you can count on.",
    },
    {
      icon: "MapPin",
      title: "No Personal Brand Online",
      desc: "Buyers and sellers research agents before reaching out. Without a strong website, social presence, and reviews, you lose to agents who market better — not agents who close better.",
    },
    {
      icon: "MessageSquare",
      title: "Leads Go Cold Without Nurturing",
      desc: "Most buyers take weeks or months to be ready. Without automated follow-up and nurture sequences, you lose those deals to agents who stayed in touch.",
    },
  ],
  videoLabel: "How We Grow Real Estate Agent Businesses",
  videoTitle: "Watch How We Build Real Estate Agents Into the Dominant Local Brand",
  videoDesc:
    "A 2-minute breakdown of the agent branding, property video, and lead generation system that builds consistent pipelines for realtors across Canada.",
  videoBullets: [
    "Why buyers and sellers choose agents based on online presence before anything else",
    "The role of property videos and agent content in winning more listings",
    "How Google and Meta ads build your brand while generating immediate buyer leads",
    "What to expect in your first 90 days — and how your pipeline grows month over month",
  ],
  growthSteps: [
    { num: "01", icon: "Globe",      title: "Agent Website & Brand",      desc: "Personal agent website with listing showcase, lead capture forms, and neighbourhood pages that work for you 24/7." },
    { num: "02", icon: "MapPin",     title: "Google Business Profile",    desc: "Optimized GBP with agent bio, testimonials, and listing areas to capture buyers and sellers searching locally." },
    { num: "03", icon: "Star",       title: "Reputation & Referrals",     desc: "Systematic review requests from past clients that build the credibility needed to win listings over competing agents." },
    { num: "04", icon: "BarChart2",  title: "Lead & Pipeline Tracking",   desc: "Full CRM setup and lead source tracking so you know which marketing channel is filling your pipeline." },
    { num: "05", icon: "Video",      title: "Property & Brand Content",   desc: "Cinematic listing videos, agent brand reels, and neighbourhood tours — the content that sells properties faster." },
    { num: "06", icon: "TrendingUp", title: "Google Ads",                 desc: "Search campaigns targeting active buyers and sellers in your market, capturing intent at the right moment." },
    { num: "07", icon: "Share2",     title: "Meta Ads & Retargeting",     desc: "Instagram and Facebook campaigns that showcase listings, build your personal brand, and retarget warm buyers." },
    { num: "08", icon: "Zap",        title: "Lead Nurture Automation",    desc: "Automated email sequences and follow-ups that keep buyers and sellers engaged until they're ready to transact." },
    { num: "09", icon: "Search",     title: "SEO & Neighbourhood Pages",  desc: "Community and neighbourhood pages that rank for local real estate searches and attract organic seller leads." },
  ],
  resultsHeadline: "Hear It From Our Real Estate Clients",
  results: [
    { metric: "4.2x", label: "Faster Sales",      client: "Sarah Mitchell Real Estate", detail: "Properties sold 4.2x faster with listing video content and targeted buyer ads." },
    { metric: "35%",  label: "More Buyer Leads",  client: "Lakefront Realty Team",      detail: "2.3x more website traffic and 35% more qualified buyer leads within 90 days." },
    { metric: "8%",   label: "Higher Sell Price", client: "Rocket AMG - Roger Singh",   detail: "Dominant social presence and professional listing content drove 8% higher average selling prices." },
  ],
  videoReviews: [
    { name: "Roger Singh", company: "Rocket AMG",               result: "Dominant Local Brand",  dur: "1:46" },
    { name: "Sarah M.",    company: "Sarah Mitchell Real Estate", result: "4.2x Faster Sales",    dur: "2:04" },
    { name: "Paul L.",     company: "Lakefront Realty Team",     result: "35%+ More Leads",       dur: "1:57" },
  ],
  ctaHeadline: "Your Buyers & Sellers Are\nSearching Right Now.",
  ctaSubtext:
    "Let's build your real estate growth system so that every buyer and seller in your market finds you first — not your competition.",
};

export default function RealEstatePage() {
  return (
    <>
      <Script
        id="service-schema-real-estate"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <IndustryFullPageTemplate config={config} />
    </>
  );
}
