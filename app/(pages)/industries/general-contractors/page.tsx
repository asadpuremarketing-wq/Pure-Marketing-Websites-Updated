import type { Metadata } from "next";
import GeneralContractorsContent from "./GeneralContractorsContent";

const BASE = "https://puremarketing.ca";

export const metadata: Metadata = {
  title: "Local Lead Generation for General Contractors | Pure Marketing",
  description:
    "Local lead generation for Canadian general contractors: website, Google Ads, Google Maps visibility, Meta Ads, and lead capture built to fill your estimate calendar.",
  keywords: [
    "general contractor marketing Canada",
    "Google Ads for contractors",
    "contractor lead generation Ontario",
    "marketing for general contractors",
    "renovation contractor website design",
    "construction marketing Canada",
    "contractor lead generation system",
  ],
  alternates: { canonical: `${BASE}/industries/general-contractors` },
  openGraph: {
    url: `${BASE}/industries/general-contractors`,
    title: "Local Lead Generation for General Contractors | Pure Marketing",
    description:
      "We help Canadian general contractors generate more estimate requests through Google visibility, paid advertising, and lead capture. Book a free local growth assessment.",
  },
};

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Local Lead Generation for General Contractors",
  provider: { "@id": `${BASE}/#organization` },
  serviceType: "Local Lead Generation",
  areaServed: { "@type": "Country", name: "Canada" },
  description:
    "Website, Google Ads, Google Maps visibility, Meta Ads, follow-up automation, and lead capture for general contractors across Canada.",
  url: `${BASE}/industries/general-contractors`,
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Industries", item: `${BASE}/industries` },
    { "@type": "ListItem", position: 3, name: "General Contractors", item: `${BASE}/industries/general-contractors` },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do general contractors get more residential projects?",
      acceptedAnswer: { "@type": "Answer", text: "Google Ads targeting renovation and contracting searches, a portfolio website showcasing past projects, and social media with before/after content are the most effective channels. Pure Marketing's one lead generation system combines these into a single coordinated approach to deliver consistent renovation and construction leads." },
    },
    {
      "@type": "Question",
      name: "What digital marketing works best for general contractors?",
      acceptedAnswer: { "@type": "Answer", text: "A full-funnel approach: Google Ads for high-intent renovation searches, Meta Ads for brand awareness and estimate requests, a professional portfolio website, Google Maps visibility, and follow-up automation to convert every inquiry. Pure Marketing builds this as one system for general contractors." },
    },
    {
      "@type": "Question",
      name: "How long does it take for contractor marketing to generate leads?",
      acceptedAnswer: { "@type": "Answer", text: "It depends on your market, competition, and starting point, so we don't promise a fixed timeline. Paid campaigns can go live within days; local search and AI discoverability improvements build over a longer period." },
    },
    {
      "@type": "Question",
      name: "How much does marketing for general contractors cost?",
      acceptedAnswer: { "@type": "Answer", text: "Scope and ad spend depend on your market and goals. We'll walk you through recommendations on a free local growth assessment rather than publishing blanket pricing. No long-term contracts." },
    },
  ],
};

export default function GeneralContractorsPage() {
  return (
    <>
      <script
        id="service-schema-general-contractors"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <script
        id="faq-schema-general-contractors"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        id="breadcrumb-schema-general-contractors"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <GeneralContractorsContent />
    </>
  );
}
