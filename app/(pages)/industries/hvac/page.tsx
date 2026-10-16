import type { Metadata } from "next";
import IndustryFullPageTemplate, { type IndustryFullConfig } from "@/components/templates/IndustryFullPageTemplate";

const BASE = "https://puremarketing.ca";

export const metadata: Metadata = {
  title: "Local Lead Generation for HVAC Companies | Pure Marketing",
  description:
    "We help HVAC companies get more AC tune-up, furnace install, and emergency heating inquiries year-round with Google Ads, Local Service Ads, Google Maps visibility, and lead capture.",
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
    title: "Local Lead Generation for HVAC Companies | Pure Marketing",
    description:
      "Pure Marketing helps Canadian HVAC companies stay busy year-round with seasonal Google Ads and local lead generation. Book a free local growth assessment.",
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
    "Specialized Google Ads, seasonal campaigns, web design, and lead generation for HVAC companies across Canada.",
  url: `${BASE}/industries/hvac`,
};

const config: IndustryFullConfig = {
  industry: "HVAC",
  badge: "Local Lead Generation for HVAC Companies",
  headline: "Stay Busy Year-Round.",
  headlineAccent: "AC, Furnace & Emergency Calls.",
  subheadline:
    "Websites, Google, Content, Ads, Automation & SEO: one seasonal system that keeps HVAC companies fully booked through every season.",
  heroCheckmarks: [
    "Summer AC Tune-Ups & Installs",
    "Winter Furnace & Heating Jobs",
    "Year-Round Emergency Calls",
  ],
  dashboard: {
    url: "yourhvacco.ca",
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
  problemHeadline: "Why HVAC Companies Struggle to Stay Busy Off-Season",
  problemSubtext:
    "Skilled HVAC techs lose thousands in slow months, not from lack of ability, but from lack of a system that generates leads year-round.",
  painPoints: [
    {
      icon: "RefreshCw",
      title: "Feast or Famine Seasons",
      desc: "Summer and winter are slammed. Spring and fall are slow. Without a system, you're at the mercy of weather instead of controlling your pipeline.",
    },
    {
      icon: "MapPin",
      title: "Losing Local Searches",
      desc: "Homeowners searching 'HVAC near me' or 'furnace repair' right now are booking competitors who have better Google presence, not better work.",
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
    "Why most HVAC companies only win in peak season, and how to change that",
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
    { num: "06", icon: "TrendingUp", title: "Google Ads (Seasonal)",      desc: "Smart seasonal budgeting: spend peaks in summer and winter, pulled back in shoulder months for max ROI." },
    { num: "07", icon: "Share2",     title: "Meta Ads",                   desc: "Facebook & Instagram ads promoting maintenance plans, AC tune-ups, and financing offers to local homeowners." },
    { num: "08", icon: "Zap",        title: "Follow-Up Automation",       desc: "Automated service reminders, maintenance plan upsells, and instant lead responses running 24/7." },
    { num: "09", icon: "Search",     title: "Local SEO & Geo Growth",     desc: "City and service-type pages that rank for furnace, AC, and heat pump searches organically." },
  ],
  resultsHeadline: "What HVAC Clients Tell Us",
  results: [
    { metric: "Year-Round",  label: "Lead Flow",     client: "HVAC client, Hamilton area", detail: "From seasonal peaks only to a steadier flow of leads across all 12 months of the year." },
    { metric: "More Calls",  label: "Service Calls",  client: "HVAC client, Ontario",       detail: "A consistent increase in service calls per month after the system launched." },
    { metric: "Booked Out",  label: "Schedule Fill",  client: "HVAC client, GTA",           detail: "Booked solid through the shoulder seasons that used to be slow." },
  ],
  videoReviews: [],
  ctaHeadline: "Your Competitors Are Busy\nEvery Season. Are You?",
  ctaSubtext:
    "Let's build your HVAC growth system and make sure your business gets calls for AC, furnace, and emergency service all year long.",
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do HVAC companies get leads year-round?",
      acceptedAnswer: { "@type": "Answer", text: "Seasonal campaign adjustments are key. Summer targets AC tune-ups, repairs, and replacements. Winter targets furnace installs, emergency heating calls, and maintenance contracts. Pure Marketing manages these seasonal campaign switches as part of one system to keep HVAC companies consistently busy year-round." },
    },
    {
      "@type": "Question",
      name: "What digital marketing works best for HVAC companies?",
      acceptedAnswer: { "@type": "Answer", text: "Google Ads and Local Service Ads targeting seasonal keywords deliver the fastest results for HVAC. Local Service Ads are especially effective for emergency heating and cooling calls because you only pay per verified lead." },
    },
    {
      "@type": "Question",
      name: "Should HVAC companies use Local Service Ads?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Local Service Ads (LSA) are highly effective for HVAC because emergency heating and cooling searches are extremely high-intent. The Google Guarantee badge on LSA ads also builds trust instantly. Pure Marketing sets up and manages LSA campaigns for HVAC companies across Canada." },
    },
    {
      "@type": "Question",
      name: "How much does HVAC marketing cost?",
      acceptedAnswer: { "@type": "Answer", text: "Scope and ad spend depend on your market and season. We'll walk you through recommendations on a free local growth assessment rather than publishing blanket pricing." },
    },
  ],
};

export default function HvacPage() {
  return (
    <>
      <script
        id="service-schema-hvac"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <script
        id="faq-schema-hvac"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <IndustryFullPageTemplate config={config} />
    </>
  );
}
