import type { Metadata } from "next";

const BASE = "https://puremarketing.ca";

export const metadata: Metadata = {
  title: "Local Lead Generation System | Pure Marketing",
  description:
    "One complete local lead generation system for Canadian service businesses: paid advertising, Google Maps visibility, AI search discoverability, and lead capture & conversion. No long-term contracts.",
  keywords: [
    "local lead generation Hamilton Ontario",
    "customer acquisition agency Canada",
    "lead generation system local business",
    "Pure Marketing lead generation",
  ],
  alternates: { canonical: `${BASE}/services` },
  openGraph: {
    url: `${BASE}/services`,
    title: "Local Lead Generation System | Pure Marketing",
    description:
      "One coordinated system that helps local service businesses get more calls, estimates, and booked jobs.",
  },
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Services", item: `${BASE}/services` },
  ],
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        id="breadcrumb-schema-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      {children}
    </>
  );
}
