import type { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate, { type CityConfig } from "@/components/templates/CityPageTemplate";

const BASE = "https://puremarketing.ca";

export const metadata: Metadata = {
  title: "Digital Marketing Agency Oakville | Google Ads & Lead Gen - Pure Marketing",
  description:
    "Pure Marketing helps Oakville local service businesses get more qualified leads with Google Ads, Meta Ads, and web design. Close to Hamilton. No contracts. Book a free strategy call.",
  keywords: [
    "digital marketing agency Oakville",
    "Google Ads Oakville Ontario",
    "lead generation Oakville",
    "marketing agency Oakville Ontario",
    "local business marketing Oakville",
    "web design Oakville",
    "social media management Oakville",
  ],
  alternates: { canonical: `${BASE}/locations/oakville` },
  openGraph: {
    url: `${BASE}/locations/oakville`,
    title: "Digital Marketing Agency Oakville | Pure Marketing",
    description:
      "Pure Marketing helps Oakville local service businesses get more qualified leads. Based nearby in Hamilton. No contracts. Book a free strategy call.",
  },
};

const CITY_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE}/locations/oakville#localbusiness`,
  name: "Pure Marketing - Digital Marketing Agency Oakville",
  url: `${BASE}/locations/oakville`,
  telephone: "+16479512786",
  email: "info@puremarketing.ca",
  description:
    "Pure Marketing is a digital marketing agency based in Hamilton, serving Oakville and the Halton Region. We help local service businesses get more leads with Google Ads, Meta Ads, and web design.",
  areaServed: { "@type": "City", name: "Oakville", addressRegion: "ON", addressCountry: "CA" },
  parentOrganization: { "@id": `${BASE}/#organization` },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Locations", item: `${BASE}/locations` },
    { "@type": "ListItem", position: 3, name: "Oakville", item: `${BASE}/locations/oakville` },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does Pure Marketing serve Oakville businesses?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Pure Marketing is based in nearby Hamilton and serves Oakville businesses throughout the Halton Region and Greater Toronto Area. We help local service businesses in Oakville get more leads with Google Ads, Meta Ads, web design, social media management, lead generation, and video production." },
    },
    {
      "@type": "Question",
      name: "How do Oakville local businesses get more leads?",
      acceptedAnswer: { "@type": "Answer", text: "Google Ads targeting high-intent searches like 'electrician Oakville' or 'plumber near me Oakville', combined with Local Service Ads and Google Business Profile optimization, produce the fastest results. Most Oakville clients start seeing qualified leads within 7-14 days of campaigns launching." },
    },
    {
      "@type": "Question",
      name: "How much does digital marketing cost for Oakville businesses?",
      acceptedAnswer: { "@type": "Answer", text: "Pure Marketing Oakville pricing: lead generation from $1,499/month, Google and Meta Ads management from $500/month, social media management from $899/month, video production from $699. Web design is custom-quoted. All month-to-month with no long-term contracts." },
    },
    {
      "@type": "Question",
      name: "What industries does Pure Marketing serve in Oakville?",
      acceptedAnswer: { "@type": "Answer", text: "Pure Marketing helps local service businesses in Oakville including electricians, plumbers, HVAC companies, landscapers, general contractors, painters, real estate agents, cleaning services, roofers, and locksmiths." },
    },
  ],
};

const config: CityConfig = {
  city: "Oakville",
  province: "Ontario",
  slug: "oakville",
  region: "Halton Region",
  nearbyAreas: ["Burlington", "Mississauga", "Milton", "Hamilton", "Brampton"],
  localContext:
    "Oakville&apos;s high household income and growing population means residents actively seek premium local service providers. Pure Marketing helps Oakville businesses get found online and generate consistent, qualified leads.",
  faq: [
    {
      q: "Does Pure Marketing serve Oakville businesses?",
      a: "Yes. Pure Marketing is based in nearby Hamilton and serves Oakville throughout the Halton Region. We offer Google Ads, Meta Ads, web design, lead generation, social media management, and video production.",
    },
    {
      q: "How do Oakville local businesses get more leads?",
      a: "Google Ads and Local Service Ads targeting local searches produce the fastest results. Combined with Google Business Profile optimization and a conversion-focused website, most Oakville clients start seeing leads within 7-14 days.",
    },
    {
      q: "How much does digital marketing cost for Oakville businesses?",
      a: "Lead generation from $1,499/month. Google and Meta Ads from $500/month. Social media management from $899/month. Video production from $699. All month-to-month, no contracts.",
    },
    {
      q: "Does Pure Marketing require long-term contracts?",
      a: "No. All services are month-to-month. Cancel any time. We earn your business through results every month.",
    },
  ],
};

export default function OakvillePage() {
  return (
    <>
      <Script id="city-schema-oakville" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(CITY_SCHEMA) }} />
      <Script id="breadcrumb-oakville" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <Script id="faq-oakville" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <CityPageTemplate config={config} />
    </>
  );
}
