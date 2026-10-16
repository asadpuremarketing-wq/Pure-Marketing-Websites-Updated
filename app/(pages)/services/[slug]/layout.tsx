import type { Metadata } from "next";

const BASE = "https://puremarketing.ca";

// Only the flagship, canonical service has a schema block. The other 4 slugs
// redirect to /services/lead-generation at the routing layer (see next.config.mjs)
// and are no longer marketed as standalone services, so no pricing/offer schema
// is published for them.
const SERVICE_SCHEMAS: Record<string, object> = {
  "lead-generation": {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE}/services/lead-generation#service`,
    name: "Local Lead Generation for Canadian Service Businesses",
    url: `${BASE}/services/lead-generation`,
    description:
      "A complete local lead generation system combining paid advertising, Google Maps and local search visibility, AI search discoverability, and lead capture and conversion to help local service businesses get more calls, estimates, and booked jobs.",
    provider: { "@id": `${BASE}/#organization` },
    areaServed: { "@type": "Country", name: "Canada" },
    serviceType: "Local Lead Generation",
    category: "Local Customer Acquisition",
  },
};

const SERVICE_META: Record<string, { title: string; description: string; keywords: string[] }> = {
  "web-development": {
    title: "Web Design & Development for Local Businesses | Pure Marketing",
    description:
      "Custom websites built to turn visitors into leads. Fast, mobile-first web design for local service businesses across Canada. Free audit included.",
    keywords: [
      "web design Hamilton Ontario",
      "website development local business",
      "conversion website design Canada",
      "local business website Hamilton",
    ],
  },
  "lead-generation": {
    title: "Local Lead Generation for Canadian Service Businesses | Pure Marketing",
    description:
      "A complete local lead generation system for Canadian contractors and service businesses: paid advertising, Google Maps visibility, AI search discoverability, and lead conversion. No long-term contracts. Get a free assessment.",
    keywords: [
      "local lead generation",
      "lead generation for contractors",
      "lead generation for local businesses",
      "home service lead generation",
      "local customer acquisition",
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const meta = SERVICE_META[params.slug];
  if (!meta) return {};

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: { canonical: `${BASE}/services/${params.slug}` },
    openGraph: {
      url: `${BASE}/services/${params.slug}`,
      title: meta.title,
      description: meta.description,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}

const SERVICE_DISPLAY_NAMES: Record<string, string> = {
  "lead-generation": "Lead Generation",
  "google-meta-ads": "Google Ads & Meta Ads",
  "web-development": "Web Design & Development",
  "social-media-management": "Social Media Management",
  "video-production": "Video Production",
};

export default function ServiceSlugLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  const schema = SERVICE_SCHEMAS[params.slug];
  const displayName = SERVICE_DISPLAY_NAMES[params.slug] ?? params.slug;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Services", item: `${BASE}/services` },
      { "@type": "ListItem", position: 3, name: displayName, item: `${BASE}/services/${params.slug}` },
    ],
  };
  return (
    <>
      {schema && (
        <script
          id={`service-schema-${params.slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <script
        id={`breadcrumb-schema-${params.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
