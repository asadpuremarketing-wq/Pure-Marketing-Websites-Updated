import type { Metadata } from "next";
import Script from "next/script";
import IndustryFullPageTemplate, { type IndustryFullConfig } from "@/components/templates/IndustryFullPageTemplate";

const BASE = "https://puremarketing.ca";

export const metadata: Metadata = {
  title: "Marketing for Painters | Google Ads & Lead Gen - Pure Marketing",
  description:
    "We help painting companies book more residential and commercial projects with Google Ads, Meta Ads, and before/after video content. 324% avg project increase.",
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
    title: "Marketing for Painters | 324% More Projects - Pure Marketing",
    description:
      "Pure Marketing helps painting companies book 12+ projects per month with Google Ads, Meta Ads, and visual content. Book a free audit.",
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

const config: IndustryFullConfig = {
  industry: "Painters",
  badge: "90-Day Painter Growth System",
  headline: "Stop Waiting for Word of Mouth.",
  headlineAccent: "Book Projects Consistently.",
  subheadline:
    "Websites, Google, Before/After Content, Ads & Automation — one system that keeps painting companies booked solid with residential and commercial projects.",
  heroCheckmarks: [
    "More Residential Projects",
    "Higher-Value Commercial Jobs",
    "Consistent Quote Requests",
  ],
  dashboard: {
    url: "premierpaintingsolutions.ca",
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
    { label: "Monthly Projects", val: "324", chg: "+44%" },
    { label: "Quote Requests", val: "189", chg: "+38%" },
    { label: "Revenue", val: "$52K", chg: "+41%" },
  ],
  bandStats: [
    { value: "324%", label: "Project increase" },
    { value: "12+", label: "Projects per month" },
    { value: "75", label: "Days to scale" },
    { value: "$52K", label: "Revenue 90 days" },
  ],
  problemHeadline: "Why Great Painters Struggle to Stay Fully Booked",
  problemSubtext:
    "Beautiful work sells itself — but only if people can find you. Without a marketing system, your best projects go unseen.",
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
      desc: "A homeowner gets 3 quotes. The painter who follows up fastest wins. Without automation, that job goes to whoever followed up first — not who quoted best.",
    },
  ],
  videoLabel: "How We Grow Painting Companies",
  videoTitle: "Watch How We Book Painters Solid with Before/After Content & Ads",
  videoDesc:
    "A 2-minute breakdown of the visual content and paid advertising system that drives consistent quote requests for painting companies across Canada.",
  videoBullets: [
    "Why most painters lose jobs to competitors with worse work but better marketing",
    "The power of before/after content — the highest-converting format for painting companies",
    "How Google & Meta ads target homeowners actively looking to repaint",
    "What to expect in your first 75 days with the full system running",
  ],
  growthSteps: [
    { num: "01", icon: "Globe",      title: "Painter Website",            desc: "Before/after gallery, online quote forms, and service area pages that showcase your work and book consultations automatically." },
    { num: "02", icon: "MapPin",     title: "Google Business Profile",    desc: "Optimized GBP with project photos and keyword-rich descriptions to rank for interior, exterior, and cabinet painting searches." },
    { num: "03", icon: "Star",       title: "Reviews & Portfolio",        desc: "Systematic review requests and a curated before/after portfolio that convince homeowners before they even call." },
    { num: "04", icon: "BarChart2",  title: "Quote & Lead Tracking",      desc: "Track every form submission, call, and quote request so we know which channels produce real signed projects." },
    { num: "05", icon: "Video",      title: "Before/After Content",       desc: "Professional photo and video of your completed jobs — the highest-converting content for painting companies." },
    { num: "06", icon: "TrendingUp", title: "Google Ads",                 desc: "Search campaigns targeting high-intent queries like 'interior painters near me' and 'exterior house painting quotes'." },
    { num: "07", icon: "Share2",     title: "Meta Ads",                   desc: "Facebook & Instagram before/after ads that stop the scroll and drive estimate requests from local homeowners." },
    { num: "08", icon: "Zap",        title: "Instant Quote Follow-Up",    desc: "Automated follow-up sequences after every quote request so leads stay warm until they book." },
    { num: "09", icon: "Search",     title: "Local SEO & Geo Growth",     desc: "Service-area and paint-type pages that rank organically for exterior, interior, and commercial painting searches." },
  ],
  resultsHeadline: "Hear It From Our Painting Clients",
  results: [
    { metric: "324%", label: "Project Increase", client: "Premier Painting Solutions", detail: "From inconsistent referrals to 12+ quote requests per month in 75 days." },
    { metric: "$52K", label: "Revenue in 90 Days", client: "Artisan Painters", detail: "12 projects per month and $52K in tracked revenue within the first quarter." },
    { metric: "8 wk.", label: "Booked in Advance", client: "ProPaint Hamilton", detail: "Booked 8 weeks out in advance — never a slow week since the system launched." },
  ],
  videoReviews: [
    { name: "David P.", company: "Premier Painting Solutions", result: "324%+ More Projects", dur: "1:42" },
    { name: "Rachel M.", company: "Artisan Painters", result: "Fully Booked in 75 Days", dur: "2:01" },
    { name: "Tom K.", company: "ProPaint Hamilton", result: "Top Local Rankings", dur: "1:55" },
  ],
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
      acceptedAnswer: { "@type": "Answer", text: "Google Ads targeting searches like 'house painter near me' and 'interior painting estimate' combined with before/after video content on Instagram and Facebook. A portfolio website showcasing finished projects builds trust. Pure Marketing clients average 324% more project bookings in the first 90 days." },
    },
    {
      "@type": "Question",
      name: "What is the best marketing for a painting company?",
      acceptedAnswer: { "@type": "Answer", text: "Before/after video content performs exceptionally well for painters on Instagram and Facebook, driving estimate requests. Google Ads capture high-intent searches. Together, this combination drives both brand awareness and direct leads. Pure Marketing builds and manages this full system for painting companies." },
    },
    {
      "@type": "Question",
      name: "How quickly can a painting company get leads from digital marketing?",
      acceptedAnswer: { "@type": "Answer", text: "Google Ads campaigns go live within 7-10 days and most painting clients see their first qualified estimate requests within 14 days. Social media content builds over 60-90 days as the audience grows. Pure Marketing averages 324% more project bookings in the first 90 days." },
    },
    {
      "@type": "Question",
      name: "How much does marketing for a painting company cost?",
      acceptedAnswer: { "@type": "Answer", text: "Painter lead generation with Pure Marketing starts from $1,499/month. Social media management starts from $899/month. Video production for before/after content starts from $699. All services are month-to-month with no long-term contracts required." },
    },
  ],
};

export default function PaintersPage() {
  return (
    <>
      <Script
        id="service-schema-painters"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <Script
        id="faq-schema-painters"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <IndustryFullPageTemplate config={config} />
    </>
  );
}
