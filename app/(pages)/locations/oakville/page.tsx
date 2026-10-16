import type { Metadata } from "next";
import CityPageTemplate, { type CityConfig } from "@/components/templates/CityPageTemplate";

const BASE = "https://puremarketing.ca";

export const metadata: Metadata = {
  title: "Digital Marketing Agency Oakville | Google Ads & Lead Gen - Pure Marketing",
  description:
    "Pure Marketing helps Oakville local service businesses get more calls and booked jobs through paid advertising, Google Maps visibility, and local lead generation. Close to Hamilton. No contracts. Book a free strategy call.",
  keywords: [
    "digital marketing agency Oakville",
    "Google Ads Oakville Ontario",
    "lead generation Oakville",
    "marketing agency Oakville Ontario",
    "local business marketing Oakville",
    "local service ads Oakville",
    "local SEO Oakville",
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
    "Pure Marketing is a local lead generation agency based in Hamilton, serving Oakville and the Halton Region, helping local service businesses get more calls and booked jobs through paid advertising and Google Maps visibility.",
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
      acceptedAnswer: { "@type": "Answer", text: "Yes. Pure Marketing is based in nearby Hamilton and serves Oakville businesses throughout the Halton Region and Greater Toronto Area with one local lead generation system: paid advertising (Google and Meta), Google Maps and local SEO visibility, AI search discoverability, and lead capture & conversion." },
    },
    {
      "@type": "Question",
      name: "How do Oakville local businesses get more leads?",
      acceptedAnswer: { "@type": "Answer", text: "Google Ads targeting high-intent searches like 'electrician Oakville' or 'plumber near me Oakville', combined with Local Service Ads and Google Business Profile optimization, produce the fastest results. Timelines vary by market and competition, so we don't promise a fixed timeline." },
    },
    {
      "@type": "Question",
      name: "How much does digital marketing cost for Oakville businesses?",
      acceptedAnswer: { "@type": "Answer", text: "Pricing and scope depend on your market and goals. We discuss recommended budget and scope on a free local growth assessment rather than publishing blanket pricing. All engagements are month-to-month with no long-term contracts." },
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
      a: "Yes. Pure Marketing is based in nearby Hamilton and serves Oakville throughout the Halton Region with one local lead generation system: paid advertising, Google Maps and local SEO visibility, and lead capture & conversion.",
    },
    {
      q: "How do Oakville local businesses get more leads?",
      a: "Google Ads and Local Service Ads targeting local searches produce the fastest results, combined with Google Business Profile optimization and a conversion-focused website. Timelines vary by market and competition, so we don't promise a fixed timeline.",
    },
    {
      q: "How much does digital marketing cost for Oakville businesses?",
      a: "Pricing and scope depend on your market and goals. We discuss recommended budget on a free local growth assessment rather than publishing blanket pricing. All engagements are month-to-month, no contracts.",
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
      <script id="city-schema-oakville" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(CITY_SCHEMA) }} />
      <script id="breadcrumb-oakville" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script id="faq-oakville" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <CityPageTemplate config={config} />
    </>
  );
}
