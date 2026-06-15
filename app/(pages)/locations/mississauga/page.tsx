import type { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate, { type CityConfig } from "@/components/templates/CityPageTemplate";

const BASE = "https://puremarketing.ca";

export const metadata: Metadata = {
  title: "Digital Marketing Agency Mississauga | Google Ads & Lead Gen - Pure Marketing",
  description:
    "Pure Marketing helps Mississauga local service businesses get more qualified leads with Google Ads, Meta Ads, and web design. Month-to-month. No contracts. Book a free strategy call.",
  keywords: [
    "digital marketing agency Mississauga",
    "Google Ads Mississauga",
    "lead generation Mississauga",
    "marketing agency Mississauga Ontario",
    "local business marketing Mississauga",
    "Meta Ads Mississauga",
    "web design Mississauga",
    "social media management Mississauga",
  ],
  alternates: { canonical: `${BASE}/locations/mississauga` },
  openGraph: {
    url: `${BASE}/locations/mississauga`,
    title: "Digital Marketing Agency Mississauga | Pure Marketing",
    description:
      "Pure Marketing helps Mississauga local service businesses get more qualified leads with Google Ads, Meta Ads, and conversion-focused web design. No contracts.",
  },
};

const CITY_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE}/locations/mississauga#localbusiness`,
  name: "Pure Marketing - Digital Marketing Agency Mississauga",
  url: `${BASE}/locations/mississauga`,
  telephone: "+16479512786",
  email: "info@puremarketing.ca",
  description:
    "Pure Marketing is a digital marketing agency serving Mississauga and the Greater Toronto Area. Specializing in Google Ads, Meta Ads, lead generation, and web design for local service businesses.",
  areaServed: { "@type": "City", name: "Mississauga", addressRegion: "ON", addressCountry: "CA" },
  parentOrganization: { "@id": `${BASE}/#organization` },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Locations", item: `${BASE}/locations` },
    { "@type": "ListItem", position: 3, name: "Mississauga", item: `${BASE}/locations/mississauga` },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does Pure Marketing serve Mississauga businesses?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Pure Marketing serves Mississauga businesses throughout the Greater Toronto Area. We help local service businesses in Mississauga get more leads with Google Ads, Meta Ads, web design, social media management, lead generation, and video production. All services are month-to-month." },
    },
    {
      "@type": "Question",
      name: "How do Mississauga local businesses get more leads?",
      acceptedAnswer: { "@type": "Answer", text: "For Mississauga local service businesses, the most effective lead generation combines Google Ads targeting high-intent local searches, Local Service Ads for emergency services, Google Business Profile optimization, and a conversion-optimized website. Most clients start seeing leads within 7-14 days of launch." },
    },
    {
      "@type": "Question",
      name: "How much does digital marketing cost for Mississauga businesses?",
      acceptedAnswer: { "@type": "Answer", text: "Pure Marketing Mississauga pricing: lead generation from $1,499/month, Google and Meta Ads management from $500/month, social media management from $899/month, video production from $699. All month-to-month with no long-term contracts." },
    },
    {
      "@type": "Question",
      name: "What industries does Pure Marketing serve in Mississauga?",
      acceptedAnswer: { "@type": "Answer", text: "Pure Marketing serves local service businesses in Mississauga including electricians, plumbers, HVAC companies, landscapers, general contractors, painters, real estate agents, cleaning services, roofers, and locksmiths." },
    },
  ],
};

const config: CityConfig = {
  city: "Mississauga",
  province: "Ontario",
  slug: "mississauga",
  region: "Greater Toronto Area",
  nearbyAreas: ["Brampton", "Oakville", "Toronto", "Etobicoke", "Streetsville"],
  localContext:
    "Mississauga&apos;s rapidly growing population creates massive demand for local service businesses. Pure Marketing helps Mississauga businesses dominate local search and generate consistent, qualified leads every month.",
  faq: [
    {
      q: "Does Pure Marketing serve Mississauga businesses?",
      a: "Yes. Pure Marketing serves Mississauga businesses throughout the Greater Toronto Area. We help local service businesses get more leads with Google Ads, Meta Ads, web design, social media management, and video production.",
    },
    {
      q: "How do Mississauga local businesses get more leads?",
      a: "The most effective approach combines Google Ads targeting local searches, Local Service Ads for emergency services, Google Business Profile optimization, and a conversion-optimized website. Most Mississauga clients start seeing leads within 7-14 days.",
    },
    {
      q: "How much does digital marketing cost for Mississauga businesses?",
      a: "Lead generation from $1,499/month. Google and Meta Ads from $500/month. Social media management from $899/month. Video production from $699. All month-to-month, no contracts.",
    },
    {
      q: "Does Pure Marketing require long-term contracts?",
      a: "No. All services are month-to-month. Cancel any time. We earn your business through results every month.",
    },
  ],
};

export default function MississaugaPage() {
  return (
    <>
      <Script id="city-schema-mississauga" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(CITY_SCHEMA) }} />
      <Script id="breadcrumb-mississauga" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <Script id="faq-mississauga" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <CityPageTemplate config={config} />
    </>
  );
}
