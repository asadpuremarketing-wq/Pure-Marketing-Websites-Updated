import type { Metadata } from "next";
import CityPageTemplate, { type CityConfig } from "@/components/templates/CityPageTemplate";

const BASE = "https://puremarketing.ca";

export const metadata: Metadata = {
  title: "Digital Marketing Agency Brampton | Google Ads & Lead Gen - Pure Marketing",
  description:
    "Pure Marketing helps Brampton local service businesses get more calls and booked jobs through paid advertising, Google Maps visibility, and local lead generation. Month-to-month. No contracts. Book a free strategy call.",
  keywords: [
    "digital marketing agency Brampton",
    "Google Ads Brampton",
    "lead generation Brampton",
    "marketing agency Brampton Ontario",
    "local business marketing Brampton",
    "local service ads Brampton",
    "local SEO Brampton",
    "Google Business Profile Brampton",
  ],
  alternates: { canonical: `${BASE}/locations/brampton` },
  openGraph: {
    url: `${BASE}/locations/brampton`,
    title: "Digital Marketing Agency Brampton | Pure Marketing",
    description:
      "Pure Marketing helps Brampton local service businesses get more qualified leads. No contracts. Book a free strategy call.",
  },
};

const CITY_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE}/locations/brampton#localbusiness`,
  name: "Pure Marketing - Digital Marketing Agency Brampton",
  url: `${BASE}/locations/brampton`,
  telephone: "+16479512786",
  email: "info@puremarketing.ca",
  description:
    "Pure Marketing is a local lead generation agency serving Brampton and the Greater Toronto Area, helping local service businesses get more calls and booked jobs through paid advertising, Google Maps visibility, and lead capture & conversion.",
  areaServed: { "@type": "City", name: "Brampton", addressRegion: "ON", addressCountry: "CA" },
  parentOrganization: { "@id": `${BASE}/#organization` },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Locations", item: `${BASE}/locations` },
    { "@type": "ListItem", position: 3, name: "Brampton", item: `${BASE}/locations/brampton` },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does Pure Marketing serve Brampton businesses?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Pure Marketing serves Brampton businesses throughout the Greater Toronto Area with one local lead generation system: paid advertising (Google and Meta), Google Maps and local SEO visibility, AI search discoverability, and lead capture & conversion. All services are month-to-month with no long-term contracts." },
    },
    {
      "@type": "Question",
      name: "How do Brampton businesses get more leads online?",
      acceptedAnswer: { "@type": "Answer", text: "For Brampton local service businesses, Google Ads and Local Service Ads targeting high-intent local searches produce the fastest results, combined with Google Business Profile optimization and a conversion-focused website. Timelines vary by market and competition, so we don't promise a fixed timeline." },
    },
    {
      "@type": "Question",
      name: "How much does digital marketing cost for Brampton businesses?",
      acceptedAnswer: { "@type": "Answer", text: "Pricing and scope depend on your market and goals. We discuss recommended budget and scope on a free local growth assessment rather than publishing blanket pricing. All engagements are month-to-month with no long-term contracts." },
    },
    {
      "@type": "Question",
      name: "What types of businesses does Pure Marketing help in Brampton?",
      acceptedAnswer: { "@type": "Answer", text: "Pure Marketing helps local service businesses in Brampton including electricians, plumbers, HVAC companies, landscapers, general contractors, painters, real estate agents, cleaning services, roofers, and locksmiths." },
    },
  ],
};

const config: CityConfig = {
  city: "Brampton",
  province: "Ontario",
  slug: "brampton",
  region: "Greater Toronto Area",
  nearbyAreas: ["Mississauga", "Vaughan", "Caledon", "Toronto", "Bolton"],
  localContext:
    "Brampton is one of Canada&apos;s fastest-growing cities. Pure Marketing helps Brampton local service businesses capture this growing demand with targeted digital marketing that generates consistent, qualified leads.",
  faq: [
    {
      q: "Does Pure Marketing serve Brampton businesses?",
      a: "Yes. Pure Marketing serves Brampton businesses throughout the Greater Toronto Area with one local lead generation system: paid advertising, Google Maps and local SEO visibility, and lead capture & conversion.",
    },
    {
      q: "How do Brampton businesses get more leads online?",
      a: "Google Ads and Local Service Ads targeting high-intent local searches produce the fastest results, combined with Google Business Profile optimization and a conversion-focused website. Timelines vary by market and competition, so we don't promise a fixed timeline.",
    },
    {
      q: "How much does digital marketing cost for Brampton businesses?",
      a: "Pricing and scope depend on your market and goals. We discuss recommended budget on a free local growth assessment rather than publishing blanket pricing. All engagements are month-to-month, no contracts.",
    },
    {
      q: "Does Pure Marketing require contracts for Brampton clients?",
      a: "No. All services are month-to-month. Cancel any time. We earn your business through results, not long-term contracts.",
    },
  ],
};

export default function BramptonPage() {
  return (
    <>
      <script id="city-schema-brampton" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(CITY_SCHEMA) }} />
      <script id="breadcrumb-brampton" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script id="faq-brampton" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <CityPageTemplate config={config} />
    </>
  );
}
