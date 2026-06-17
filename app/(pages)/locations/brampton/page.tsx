import type { Metadata } from "next";
import CityPageTemplate, { type CityConfig } from "@/components/templates/CityPageTemplate";

const BASE = "https://puremarketing.ca";

export const metadata: Metadata = {
  title: "Digital Marketing Agency Brampton | Google Ads & Lead Gen - Pure Marketing",
  description:
    "Pure Marketing helps Brampton local service businesses get more qualified leads with Google Ads, Meta Ads, and web design. Month-to-month. No contracts. Book a free strategy call.",
  keywords: [
    "digital marketing agency Brampton",
    "Google Ads Brampton",
    "lead generation Brampton",
    "marketing agency Brampton Ontario",
    "local business marketing Brampton",
    "Meta Ads Brampton",
    "web design Brampton",
    "social media management Brampton",
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
    "Pure Marketing is a digital marketing agency serving Brampton and the Greater Toronto Area. We help local service businesses get more leads with Google Ads, Meta Ads, and web design.",
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
      acceptedAnswer: { "@type": "Answer", text: "Yes. Pure Marketing serves Brampton businesses throughout the Greater Toronto Area. We help local service businesses in Brampton get more leads with Google Ads, Meta Ads, web design, social media management, lead generation, and video production. All services are month-to-month with no long-term contracts." },
    },
    {
      "@type": "Question",
      name: "How do Brampton businesses get more leads online?",
      acceptedAnswer: { "@type": "Answer", text: "For Brampton local service businesses, Google Ads and Local Service Ads targeting high-intent local searches produce the fastest results. Combined with Google Business Profile optimization and a conversion-focused website, most Brampton clients start seeing qualified leads within 7-14 days." },
    },
    {
      "@type": "Question",
      name: "How much does digital marketing cost for Brampton businesses?",
      acceptedAnswer: { "@type": "Answer", text: "Pure Marketing Brampton pricing: lead generation from $1,499/month, Google and Meta Ads management from $500/month, social media management from $899/month, video production from $699. All month-to-month with no contracts." },
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
      a: "Yes. Pure Marketing serves Brampton businesses throughout the Greater Toronto Area. We help local service businesses get more leads with Google Ads, Meta Ads, web design, social media management, and video production.",
    },
    {
      q: "How do Brampton businesses get more leads online?",
      a: "Google Ads and Local Service Ads targeting high-intent local searches produce the fastest results. Combined with Google Business Profile optimization and a conversion-focused website, most Brampton clients start seeing leads within 7-14 days.",
    },
    {
      q: "How much does digital marketing cost for Brampton businesses?",
      a: "Lead generation from $1,499/month. Google and Meta Ads from $500/month. Social media management from $899/month. Video production from $699. All month-to-month, no contracts.",
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
