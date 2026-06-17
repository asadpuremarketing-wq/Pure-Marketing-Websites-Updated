import type { Metadata } from "next";
import GeneralContractorsContent from "./GeneralContractorsContent";

const BASE = "https://puremarketing.ca";

export const metadata: Metadata = {
  title: "General Contractor Growth System | 90-Day Marketing & Lead Generation - Pure Marketing",
  description:
    "A complete 90-day marketing and lead generation system for general contractors. 10 proven systems: website, Google Ads, SEO, Meta Ads, follow-up automation and more. $4,500 CAD.",
  keywords: [
    "general contractor marketing Canada",
    "Google Ads for contractors",
    "contractor lead generation Ontario",
    "marketing for general contractors",
    "renovation contractor website design",
    "construction marketing Canada",
    "90 day contractor growth system",
    "contractor lead generation system",
  ],
  alternates: { canonical: `${BASE}/industries/general-contractors` },
  openGraph: {
    url: `${BASE}/industries/general-contractors`,
    title: "General Contractor Growth System | 90-Day Marketing - Pure Marketing",
    description:
      "Pure Marketing's 90-Day Growth System for general contractors. 10 proven systems to generate consistent leads, build your brand, and scale your business.",
  },
};

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "90-Day Marketing & Lead Generation System for General Contractors",
  provider: { "@id": `${BASE}/#organization` },
  serviceType: "Digital Marketing",
  areaServed: { "@type": "Country", name: "Canada" },
  description:
    "A complete 10-system 90-day marketing program for general contractors including website development, Google Ads, SEO, Meta Ads, follow-up automation, and retargeting.",
  url: `${BASE}/industries/general-contractors`,
  offers: {
    "@type": "Offer",
    price: "4500",
    priceCurrency: "CAD",
    name: "90-Day General Contractor Growth System",
  },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do general contractors get more residential projects?",
      acceptedAnswer: { "@type": "Answer", text: "Google Ads targeting renovation and contracting searches, a portfolio website showcasing past projects, and social media with before/after video content are the most effective channels. Pure Marketing&apos;s 90-day contractor growth system builds all 10 of these components to deliver consistent renovation and construction leads." },
    },
    {
      "@type": "Question",
      name: "What digital marketing works best for general contractors?",
      acceptedAnswer: { "@type": "Answer", text: "A full-funnel approach: Google Ads for high-intent renovation searches, Meta Ads for brand awareness and estimate requests, a professional portfolio website, social media showcasing completed projects, and follow-up automation to convert every inquiry. Pure Marketing builds this entire system for general contractors." },
    },
    {
      "@type": "Question",
      name: "How long does it take for contractor marketing to generate leads?",
      acceptedAnswer: { "@type": "Answer", text: "Google Ads campaigns go live within 7-10 days and most contractor clients see their first qualified estimate requests within 2-3 weeks. Full results with SEO and organic traffic build over 90 days. Pure Marketing&apos;s 90-day growth system is specifically designed around this timeline." },
    },
    {
      "@type": "Question",
      name: "How much does marketing for general contractors cost?",
      acceptedAnswer: { "@type": "Answer", text: "General contractor lead generation with Pure Marketing starts from $1,499/month. The complete 90-Day Contractor Growth System is $4,500 and includes website development, Google Ads, Local SEO, Meta Ads, content creation, and follow-up automation. No long-term contracts." },
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
      <GeneralContractorsContent />
    </>
  );
}
