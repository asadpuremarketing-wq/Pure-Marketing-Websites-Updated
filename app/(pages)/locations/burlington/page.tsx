import type { Metadata } from "next";
import CityPageTemplate, { type CityConfig } from "@/components/templates/CityPageTemplate";

const BASE = "https://puremarketing.ca";

export const metadata: Metadata = {
  title: "Digital Marketing Agency Burlington | Google Ads & Lead Gen - Pure Marketing",
  description:
    "Pure Marketing helps Burlington local service businesses get more qualified leads with Google Ads, Meta Ads, and web design. Close to Hamilton. No contracts. Book a free strategy call.",
  keywords: [
    "digital marketing agency Burlington",
    "Google Ads Burlington Ontario",
    "lead generation Burlington",
    "marketing agency Burlington Ontario",
    "local business marketing Burlington",
    "web design Burlington",
    "social media management Burlington",
  ],
  alternates: { canonical: `${BASE}/locations/burlington` },
  openGraph: {
    url: `${BASE}/locations/burlington`,
    title: "Digital Marketing Agency Burlington | Pure Marketing",
    description:
      "Pure Marketing helps Burlington local service businesses get more qualified leads. Based nearby in Hamilton. No contracts. Book a free strategy call.",
  },
};

const CITY_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE}/locations/burlington#localbusiness`,
  name: "Pure Marketing - Digital Marketing Agency Burlington",
  url: `${BASE}/locations/burlington`,
  telephone: "+16479512786",
  email: "info@puremarketing.ca",
  description:
    "Pure Marketing is a digital marketing agency based in Hamilton, serving Burlington and the Golden Horseshoe. We help local service businesses get more leads with Google Ads and web design.",
  areaServed: { "@type": "City", name: "Burlington", addressRegion: "ON", addressCountry: "CA" },
  parentOrganization: { "@id": `${BASE}/#organization` },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Locations", item: `${BASE}/locations` },
    { "@type": "ListItem", position: 3, name: "Burlington", item: `${BASE}/locations/burlington` },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does Pure Marketing serve Burlington businesses?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Pure Marketing is based in nearby Hamilton and serves Burlington businesses throughout the Golden Horseshoe. We help local service businesses in Burlington get more leads with Google Ads, Meta Ads, web design, social media management, lead generation, and video production." },
    },
    {
      "@type": "Question",
      name: "How do Burlington local businesses get more leads?",
      acceptedAnswer: { "@type": "Answer", text: "Google Ads and Local Service Ads are the fastest channels for Burlington local service businesses. Combined with Google Business Profile optimization and a conversion-focused website, most Burlington clients start seeing qualified leads within 7-14 days of campaign launch." },
    },
    {
      "@type": "Question",
      name: "How much does digital marketing cost for Burlington businesses?",
      acceptedAnswer: { "@type": "Answer", text: "Pure Marketing Burlington pricing: lead generation from $1,499/month, Google and Meta Ads management from $500/month, social media management from $899/month, video production from $699. All month-to-month with no long-term contracts." },
    },
    {
      "@type": "Question",
      name: "What industries does Pure Marketing serve in Burlington?",
      acceptedAnswer: { "@type": "Answer", text: "Pure Marketing helps local service businesses in Burlington including electricians, plumbers, HVAC companies, landscapers, general contractors, painters, real estate agents, cleaning services, roofers, and locksmiths." },
    },
  ],
};

const config: CityConfig = {
  city: "Burlington",
  province: "Ontario",
  slug: "burlington",
  region: "Golden Horseshoe",
  nearbyAreas: ["Hamilton", "Oakville", "Milton", "Mississauga", "Waterdown"],
  localContext:
    "Burlington&apos;s mix of residential growth and thriving small businesses makes it an ideal market for local service providers. Pure Marketing helps Burlington businesses build a dominant online presence and generate consistent leads.",
  faq: [
    {
      q: "Does Pure Marketing serve Burlington businesses?",
      a: "Yes. Pure Marketing is based in nearby Hamilton and serves Burlington throughout the Golden Horseshoe. We offer Google Ads, Meta Ads, web design, lead generation, social media management, and video production.",
    },
    {
      q: "How do Burlington local businesses get more leads?",
      a: "Google Ads and Local Service Ads targeting high-intent local searches produce the fastest results. Combined with Google Business Profile optimization and a conversion-focused website, most Burlington clients start seeing leads within 7-14 days.",
    },
    {
      q: "How much does digital marketing cost for Burlington businesses?",
      a: "Lead generation from $1,499/month. Google and Meta Ads from $500/month. Social media management from $899/month. Video production from $699. All month-to-month, no contracts.",
    },
    {
      q: "Does Pure Marketing require long-term contracts?",
      a: "No. All services are month-to-month. Cancel any time. We earn your business through results every month, not long-term commitments.",
    },
  ],
};

export default function BurlingtonPage() {
  return (
    <>
      <script id="city-schema-burlington" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(CITY_SCHEMA) }} />
      <script id="breadcrumb-burlington" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script id="faq-burlington" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <CityPageTemplate config={config} />
    </>
  );
}
