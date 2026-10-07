import type { Metadata } from "next";

const BASE = "https://puremarketing.ca";

export const metadata: Metadata = {
  title: "Digital Marketing Services for Local Businesses | Pure Marketing",
  description:
    "Web design, lead generation, video production, social media management, and Google & Meta Ads for local service businesses across Canada. No long-term contracts.",
  keywords: [
    "digital marketing services Hamilton Ontario",
    "marketing agency services Canada",
    "web design lead generation local business",
    "Pure Marketing services",
  ],
  alternates: { canonical: `${BASE}/services` },
  openGraph: {
    url: `${BASE}/services`,
    title: "Digital Marketing Services for Local Businesses | Pure Marketing",
    description:
      "Everything local service businesses need to grow: websites, lead generation, video, social media, and paid ads.",
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
