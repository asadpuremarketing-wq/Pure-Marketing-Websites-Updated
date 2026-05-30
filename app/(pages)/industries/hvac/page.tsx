import type { Metadata } from "next";
import Script from "next/script";
import IndustryFullPageTemplate, { type IndustryFullConfig } from "@/components/templates/IndustryFullPageTemplate";

const BASE = "https://puremarketing.ca";

export const metadata: Metadata = {
  title: "Marketing for HVAC Companies | Google Ads & Lead Gen - Pure Marketing",
  description:
    "We help HVAC companies get AC tune-ups, furnace installs, and emergency heating calls year-round with Google Ads and Local Service Ads. 267% avg lead increase.",
  keywords: [
    "HVAC marketing Canada",
    "Google Ads for HVAC companies",
    "HVAC lead generation Ontario",
    "marketing for HVAC Hamilton",
    "HVAC website design",
    "furnace AC marketing",
  ],
  alternates: { canonical: `${BASE}/industries/hvac` },
  openGraph: {
    url: `${BASE}/industries/hvac`,
    title: "Marketing for HVAC Companies | 267% More Leads - Pure Marketing",
    description:
      "Pure Marketing keeps HVAC companies busy year-round with seasonal Google Ads and lead generation. Book a free audit.",
  },
};

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Marketing for HVAC Companies",
  provider: { "@id": `${BASE}/#organization` },
  serviceType: "Digital Marketing",
  areaServed: { "@type": "Country", name: "Canada" },
  description:
    "Specialized Google Ads, seasonal campaigns, web design, and lead generation for HVAC companies across Canada. Average 267% lead increase.",
  url: `${BASE}/industries/hvac`,
};

const config: IndustryFullConfig = {
  industry: "HVAC",
  badge: "90-Day HVAC Growth System",
  headline: "Stay Busy Year-Round.",
  headlineAccent: "AC, Furnace & Emergency Calls.",
  subheadline:
    "Websites, Google, Content, Ads, Automation & SEO — one seasonal system that keeps HVAC companies fully booked through every season.",
  heroCheckmarks: [
    "Summer AC Tune-Ups & Installs",
    "Winter Furnace & Heating Jobs",
    "Year-Round Emergency Calls",
  ],
  dashboard: {
    url: "climatecontrolpro.ca",
    headline: "Comfort All Year.",
    headlineAccent: "Expert HVAC Service.",
    tagline: "AC, furnace, heat pumps & emergency heating. Licensed & insured.",
    cta: "Book a Service Call →",
    sources: [
      { label: "Google", val: "118" },
      { label: "LSA", val: "74" },
      { label: "Website", val: "33" },
      { label: "Maps", val: "19" },
    ],
  },
  heroMetrics: [
    { label: "Monthly Calls", val: "267", chg: "+35%" },
    { label: "Jobs Booked", val: "148", chg: "+29%" },
    { label: "Revenue", val: "$36K", chg: "+41%" },
  ],
  bandStats: [
    { value: "267%", label: "Avg lead increase" },
    { value: "19+", label: "Service calls/month" },
    { value: "4.8★", label: "Avg Google rating" },
    { value: "$36K", label: "Revenue 90 days" },
  ],
  problemHeadline: "Why HVAC Companies Struggle to Stay Busy Off-Season",
  problemSubtext:
    "Skilled HVAC techs lose thousands in slow months — not from lack of ability, but from lack of a system that generates leads year-round.",
  painPoints: [
    {
      icon: "RefreshCw",
      title: "Feast or Famine Seasons",
      desc: "Summer and winter are slammed. Spring and fall are slow. Without a system, you're at the mercy of weather instead of controlling your pipeline.",
    },
    {
      icon: "MapPin",
      title: "Losing Local Searches",
      desc: "Homeowners searching 'HVAC near me' or 'furnace repair' right now are booking competitors who have better Google presence — not better work.",
    },
    {
      icon: "BarChart3",
      title: "No Maintenance Plan Pipeline",
      desc: "Without automated follow-up and maintenance reminders, past customers forget you exist. You're losing recurring revenue every single month.",
    },
  ],
  videoLabel: "How We Grow HVAC Businesses Year-Round",
  videoTitle: "Watch How We Keep HVAC Companies Fully Booked Through Every Season",
  videoDesc:
    "A 2-minute breakdown of the seasonal marketing system that generates AC tune-ups in summer, furnace installs in fall, and emergency calls all winter long.",
  videoBullets: [
    "Why most HVAC companies only win in peak season — and how to change that",
    "The 9-step system that generates leads year-round, not just in summer and winter",
    "How we use Google Ads seasonal budgeting to maximize ROI every month",
    "What to expect in your first 90 days with the full system running",
  ],
  growthSteps: [
    { num: "01", icon: "Globe",      title: "HVAC Website",               desc: "Seasonal landing pages, financing CTAs, and emergency messaging built to convert on desktop and mobile." },
    { num: "02", icon: "MapPin",     title: "Google Business Profile",     desc: "GBP optimized for AC tune-up, furnace install, and emergency heating searches in your service area." },
    { num: "03", icon: "Star",       title: "Reviews & Trust Building",   desc: "Post-service review requests that build your 5-star rating and win more installs over competitors." },
    { num: "04", icon: "BarChart2",  title: "Seasonal Tracking Setup",    desc: "Campaign dashboards that show cost-per-lead by season so we scale spend when ROI is highest." },
    { num: "05", icon: "Video",      title: "Monthly Content",            desc: "Seasonal tips, install showcases, and branded content that keep your HVAC brand visible year-round." },
    { num: "06", icon: "TrendingUp", title: "Google Ads (Seasonal)",      desc: "Smart seasonal budgeting — spend peaks in summer and winter, pulled back in shoulder months for max ROI." },
    { num: "07", icon: "Share2",     title: "Meta Ads",                   desc: "Facebook & Instagram ads promoting maintenance plans, AC tune-ups, and financing offers to local homeowners." },
    { num: "08", icon: "Zap",        title: "Follow-Up Automation",       desc: "Automated service reminders, maintenance plan upsells, and instant lead responses running 24/7." },
    { num: "09", icon: "Search",     title: "Local SEO & Geo Growth",     desc: "City and service-type pages that rank for furnace, AC, and heat pump searches organically." },
  ],
  resultsHeadline: "Hear It From Our HVAC Clients",
  results: [
    { metric: "267%", label: "Lead Increase", client: "Climate Control Pro", detail: "From seasonal peaks only to consistent leads 12 months of the year." },
    { metric: "$36K", label: "Revenue in 90 Days", client: "Comfort Systems HVAC", detail: "19 service calls per month and $36K in tracked revenue within 90 days." },
    { metric: "12 mo.", label: "Fully Booked", client: "Arctic Air HVAC", detail: "Booked solid every month of the year — including the slow spring season." },
  ],
  videoReviews: [
    { name: "James K.", company: "Climate Control Pro", result: "267%+ More Leads", dur: "1:46" },
    { name: "David M.", company: "Comfort Systems HVAC", result: "Year-Round Bookings", dur: "2:03" },
    { name: "Lisa T.", company: "Arctic Air HVAC", result: "Top Local Rankings", dur: "1:58" },
  ],
  ctaHeadline: "Your Competitors Are Busy\nEvery Season. Are You?",
  ctaSubtext:
    "Let's build your HVAC growth system and make sure your business gets calls for AC, furnace, and emergency service all year long.",
};

export default function HvacPage() {
  return (
    <>
      <Script
        id="service-schema-hvac"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <IndustryFullPageTemplate config={config} />
    </>
  );
}
