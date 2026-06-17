import type { Metadata } from "next";
import CityPageTemplate, { type CityConfig } from "@/components/templates/CityPageTemplate";

const BASE = "https://puremarketing.ca";

export const metadata: Metadata = {
  title: "Digital Marketing Agency Toronto | Google Ads & Lead Generation - Pure Marketing",
  description:
    "Pure Marketing is a digital marketing agency serving Toronto businesses. We help local service businesses get more leads with Google Ads, Meta Ads, web design, and lead generation. No contracts.",
  keywords: [
    "digital marketing agency Toronto",
    "Google Ads Toronto",
    "lead generation Toronto",
    "marketing agency Toronto Ontario",
    "local business marketing Toronto",
    "Meta Ads agency Toronto",
    "web design Toronto local business",
    "social media management Toronto",
  ],
  alternates: { canonical: `${BASE}/locations/toronto` },
  openGraph: {
    url: `${BASE}/locations/toronto`,
    title: "Digital Marketing Agency Toronto | Pure Marketing",
    description:
      "Pure Marketing helps Toronto local service businesses get more qualified leads with Google Ads, Meta Ads, and conversion-focused web design. No contracts. Book a free strategy call.",
  },
};

const CITY_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE}/locations/toronto#localbusiness`,
  name: "Pure Marketing - Digital Marketing Agency Toronto",
  url: `${BASE}/locations/toronto`,
  telephone: "+16479512786",
  email: "info@puremarketing.ca",
  description:
    "Pure Marketing is a digital marketing agency serving Toronto and the Greater Toronto Area. Specializing in Google Ads, Meta Ads, lead generation, web design, and social media management for local service businesses.",
  areaServed: { "@type": "City", name: "Toronto", addressRegion: "ON", addressCountry: "CA" },
  parentOrganization: { "@id": `${BASE}/#organization` },
  sameAs: [`${BASE}/#organization`],
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Locations", item: `${BASE}/locations` },
    { "@type": "ListItem", position: 3, name: "Toronto", item: `${BASE}/locations/toronto` },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Pure Marketing a Toronto digital marketing agency?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Pure Marketing serves Toronto businesses and operates throughout the Greater Toronto Area. We offer Google Ads, Meta Ads, web design, lead generation, social media management, and video production for local service businesses in Toronto and surrounding areas including North York, Scarborough, and Etobicoke." },
    },
    {
      "@type": "Question",
      name: "How do Toronto local businesses get more leads online?",
      acceptedAnswer: { "@type": "Answer", text: "The most effective approach for Toronto local service businesses combines Google Ads targeting high-intent local searches, Local Service Ads for emergency services, an optimized Google Business Profile for Maps visibility, and a conversion-focused website. Pure Marketing builds this full lead generation system for Toronto businesses." },
    },
    {
      "@type": "Question",
      name: "How much does digital marketing cost for a Toronto business?",
      acceptedAnswer: { "@type": "Answer", text: "Pure Marketing Toronto services: lead generation from $1,499/month, Google Ads and Meta Ads management from $500/month, social media management from $899/month, video production from $699. Web design is custom-quoted. All services are month-to-month with no long-term contracts." },
    },
    {
      "@type": "Question",
      name: "How quickly can a Toronto business see results from digital marketing?",
      acceptedAnswer: { "@type": "Answer", text: "Most Toronto clients start seeing qualified leads within 7-14 days of Google Ads and Local Service Ads launching. Full campaign optimization typically takes 30-60 days. Pure Marketing averages 40-80 qualified leads per month for established clients." },
    },
  ],
};

const config: CityConfig = {
  city: "Toronto",
  province: "Ontario",
  slug: "toronto",
  region: "Greater Toronto Area",
  nearbyAreas: ["North York", "Scarborough", "Etobicoke", "Mississauga", "Markham"],
  localContext:
    "Toronto&apos;s competitive market means your competitors are already running ads. Pure Marketing helps local service businesses in Toronto cut through the noise and generate consistent, qualified leads every month.",
  faq: [
    {
      q: "Is Pure Marketing a Toronto digital marketing agency?",
      a: "Yes. Pure Marketing serves Toronto businesses throughout the Greater Toronto Area. We offer Google Ads, Meta Ads, web design, lead generation, social media management, and video production for local service businesses in Toronto and surrounding areas.",
    },
    {
      q: "How do Toronto local businesses get more leads online?",
      a: "The most effective approach combines Google Ads targeting high-intent local searches, Local Service Ads for emergency services, Google Business Profile optimization for Maps visibility, and a conversion-focused website. Most Toronto clients start seeing leads within 7-14 days.",
    },
    {
      q: "How much does digital marketing cost for a Toronto business?",
      a: "Lead generation from $1,499/month. Google and Meta Ads management from $500/month. Social media management from $899/month. Video production from $699. Web design is custom-quoted. All month-to-month, no contracts.",
    },
    {
      q: "Does Pure Marketing require long-term contracts?",
      a: "No. All Pure Marketing services are month-to-month. You can cancel any time. We believe in earning your business through results every month, not locking you into a 12-month commitment.",
    },
  ],
};

export default function TorontoPage() {
  return (
    <>
      <script id="city-schema-toronto" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(CITY_SCHEMA) }} />
      <script id="breadcrumb-toronto" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script id="faq-toronto" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <CityPageTemplate config={config} />
    </>
  );
}
