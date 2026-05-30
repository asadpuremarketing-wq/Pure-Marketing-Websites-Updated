import type { Metadata } from "next";
import Script from "next/script";
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

export default function GeneralContractorsPage() {
  return (
    <>
      <Script
        id="service-schema-general-contractors"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <GeneralContractorsContent />
    </>
  );
}
