import type { Metadata } from "next";
import Script from "next/script";
import CityPageTemplate, { type CityConfig } from "@/components/templates/CityPageTemplate";

const BASE = "https://puremarketing.ca";

export const metadata: Metadata = {
  title: "Digital Marketing Agency Hamilton | Google Ads & Lead Generation - Pure Marketing",
  description:
    "Pure Marketing is based in Hamilton, Ontario. We help Hamilton local service businesses get more leads with Google Ads, Meta Ads, web design, and lead generation. No contracts. Book a free strategy call.",
  keywords: [
    "digital marketing agency Hamilton",
    "Google Ads Hamilton Ontario",
    "lead generation Hamilton",
    "marketing agency Hamilton Ontario",
    "local business marketing Hamilton",
    "Meta Ads agency Hamilton",
    "web design Hamilton local business",
    "social media management Hamilton",
    "SEO Hamilton Ontario",
  ],
  alternates: { canonical: `${BASE}/locations/hamilton` },
  openGraph: {
    url: `${BASE}/locations/hamilton`,
    title: "Digital Marketing Agency Hamilton | Pure Marketing",
    description:
      "Pure Marketing is Hamilton-based. We help Hamilton local service businesses get more qualified leads with Google Ads, Meta Ads, and conversion-focused web design. No contracts.",
  },
};

const CITY_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE}/locations/hamilton#localbusiness`,
  name: "Pure Marketing - Digital Marketing Agency Hamilton",
  url: `${BASE}/locations/hamilton`,
  telephone: "+16479512786",
  email: "info@puremarketing.ca",
  description:
    "Pure Marketing is a Hamilton, Ontario digital marketing agency specializing in Google Ads, Meta Ads, lead generation, web design, and social media management for local service businesses.",
  areaServed: { "@type": "City", name: "Hamilton", addressRegion: "ON", addressCountry: "CA" },
  parentOrganization: { "@id": `${BASE}/#organization` },
  sameAs: [`${BASE}/#organization`],
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Locations", item: `${BASE}/locations` },
    { "@type": "ListItem", position: 3, name: "Hamilton", item: `${BASE}/locations/hamilton` },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Pure Marketing based in Hamilton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Pure Marketing is headquartered in Hamilton, Ontario. We serve Hamilton businesses across all neighbourhoods including the downtown core, Ancaster, Dundas, Stoney Creek, Waterdown, and Flamborough. Our team is local and available for in-person strategy sessions.",
      },
    },
    {
      "@type": "Question",
      name: "What digital marketing services does Pure Marketing offer in Hamilton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pure Marketing offers Google Ads management, Meta Ads (Facebook and Instagram), lead generation systems, web design and development, social media management, and video production for Hamilton local service businesses. All services are month-to-month with no long-term contracts.",
      },
    },
    {
      "@type": "Question",
      name: "How much does digital marketing cost for a Hamilton business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pure Marketing Hamilton pricing: lead generation from $1,499/month, Google Ads and Meta Ads management from $500/month, social media management from $899/month, video production from $699. Web design is custom-quoted. All services are month-to-month with no contracts.",
      },
    },
    {
      "@type": "Question",
      name: "What industries does Pure Marketing serve in Hamilton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pure Marketing works with Hamilton electricians, plumbers, HVAC companies, painting contractors, general contractors, locksmiths, landscapers, restaurants, and real estate agents. We specialize exclusively in local service businesses, not e-commerce or national brands.",
      },
    },
  ],
};

const config: CityConfig = {
  city: "Hamilton",
  province: "Ontario",
  slug: "hamilton",
  region: "Greater Hamilton Area",
  nearbyAreas: ["Ancaster", "Dundas", "Stoney Creek", "Waterdown", "Burlington", "Grimsby"],
  localContext:
    "Hamilton&apos;s growing economy and strong trades community make it one of the best markets for local service businesses in Ontario. Pure Marketing is based here, which means we understand Hamilton&apos;s neighbourhoods, competition, and search behaviour better than any agency operating remotely.",
  faq: [
    {
      q: "Is Pure Marketing based in Hamilton?",
      a: "Yes. Pure Marketing is headquartered in Hamilton, Ontario. We serve businesses across all Hamilton neighbourhoods including Ancaster, Dundas, Stoney Creek, Waterdown, and Flamborough. Local, available, and familiar with your market.",
    },
    {
      q: "What digital marketing services are available in Hamilton?",
      a: "Google Ads, Meta Ads (Facebook and Instagram), lead generation systems, web design, social media management, and video production for Hamilton local service businesses. All month-to-month, no contracts.",
    },
    {
      q: "How quickly will a Hamilton business see leads from digital marketing?",
      a: "Most Hamilton clients start seeing qualified leads within 7-14 days of Google Ads and Local Service Ads launching. Full optimization typically takes 30-60 days. We average 40-80 qualified leads per month per client.",
    },
    {
      q: "What industries does Pure Marketing serve in Hamilton?",
      a: "Electricians, plumbers, HVAC companies, painters, general contractors, locksmiths, landscapers, restaurants, and real estate agents. We only work with local service businesses, not e-commerce or national brands.",
    },
  ],
};

export default function HamiltonPage() {
  return (
    <>
      <Script id="city-schema-hamilton" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(CITY_SCHEMA) }} />
      <Script id="breadcrumb-hamilton" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <Script id="faq-hamilton" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <CityPageTemplate config={config} />
    </>
  );
}
