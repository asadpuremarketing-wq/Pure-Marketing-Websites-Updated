import type { Metadata } from "next";

const BASE = "https://puremarketing.ca";

const SERVICE_SCHEMAS: Record<string, object> = {
  "lead-generation": {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE}/services/lead-generation#service`,
    name: "Lead Generation for Local Service Businesses",
    url: `${BASE}/services/lead-generation`,
    description:
      "Done-for-you lead generation using Google Ads, Meta Ads, and Local Service Ads. Clients average 40-80 qualified leads per month. No long-term contracts.",
    provider: { "@id": `${BASE}/#organization` },
    areaServed: { "@type": "Country", name: "Canada" },
    serviceType: "Lead Generation",
    category: "Digital Marketing",
    offers: {
      "@type": "Offer",
      priceCurrency: "CAD",
      price: "1499",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "1499",
        priceCurrency: "CAD",
        unitText: "MONTH",
        description: "Starting from $1,499/month. No contracts.",
      },
      availability: "https://schema.org/InStock",
      url: `${BASE}/services/lead-generation`,
    },
  },
  "google-meta-ads": {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE}/services/google-meta-ads#service`,
    name: "Google Ads and Meta Ads Management",
    url: `${BASE}/services/google-meta-ads`,
    description:
      "Expert Google and Meta (Facebook/Instagram) ad management for local businesses. Average 5-8x return on ad spend. Transparent monthly reporting. No contracts.",
    provider: { "@id": `${BASE}/#organization` },
    areaServed: { "@type": "Country", name: "Canada" },
    serviceType: "Pay-Per-Click Advertising",
    category: "Digital Marketing",
    offers: {
      "@type": "Offer",
      priceCurrency: "CAD",
      price: "500",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "500",
        priceCurrency: "CAD",
        unitText: "MONTH",
        description: "Management fee from $500/month. Ad spend billed separately.",
      },
      availability: "https://schema.org/InStock",
      url: `${BASE}/services/google-meta-ads`,
    },
  },
  "web-development": {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE}/services/web-development#service`,
    name: "Web Design and Development for Local Businesses",
    url: `${BASE}/services/web-development`,
    description:
      "Conversion-optimized custom websites for local service businesses. Mobile-first, fast-loading, designed to turn visitors into leads and booked calls.",
    provider: { "@id": `${BASE}/#organization` },
    areaServed: { "@type": "Country", name: "Canada" },
    serviceType: "Web Design",
    category: "Web Development",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: `${BASE}/services/web-development`,
      description: "Custom quote. Contact for pricing.",
    },
  },
  "social-media-management": {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE}/services/social-media-management#service`,
    name: "Social Media Management for Local Businesses",
    url: `${BASE}/services/social-media-management`,
    description:
      "Full social media management on Instagram, Facebook, and TikTok. Includes content creation, daily posting, engagement management, and growth strategy. No content from the client required.",
    provider: { "@id": `${BASE}/#organization` },
    areaServed: { "@type": "Country", name: "Canada" },
    serviceType: "Social Media Management",
    category: "Digital Marketing",
    offers: {
      "@type": "Offer",
      priceCurrency: "CAD",
      price: "899",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "899",
        priceCurrency: "CAD",
        unitText: "MONTH",
        description: "Starting from $899/month. No contracts.",
      },
      availability: "https://schema.org/InStock",
      url: `${BASE}/services/social-media-management`,
    },
  },
  "video-production": {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE}/services/video-production#service`,
    name: "Video Production for Local Businesses",
    url: `${BASE}/services/video-production`,
    description:
      "Professional video content for local businesses including social media reels, brand story videos, customer testimonials, and property tours. Scripted, filmed, and fully edited.",
    provider: { "@id": `${BASE}/#organization` },
    areaServed: { "@type": "AdministrativeArea", name: "Ontario", addressCountry: "CA" },
    serviceType: "Video Production",
    category: "Content Marketing",
    offers: {
      "@type": "Offer",
      priceCurrency: "CAD",
      price: "699",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "699",
        priceCurrency: "CAD",
        unitText: "PROJECT",
        description: "Starting from $699 per project.",
      },
      availability: "https://schema.org/InStock",
      url: `${BASE}/services/video-production`,
    },
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
    title: "Lead Generation for Local Service Businesses | Pure Marketing",
    description:
      "Done-for-you lead generation using Google Ads, Meta Ads, and Local Service Ads. Clients average 40–80 qualified leads per month. No contracts. Starting from $1,499/mo.",
    keywords: [
      "lead generation Hamilton Ontario",
      "Google Ads local business Canada",
      "local service ads management",
      "paid leads electricians plumbers HVAC",
    ],
  },
  "video-production": {
    title: "Video Production for Local Businesses | Pure Marketing Hamilton",
    description:
      "Professional video content that builds trust and drives leads for local businesses. Social reels, brand story videos, testimonials, and property tours. Starting from $699.",
    keywords: [
      "video production Hamilton Ontario",
      "social media video local business",
      "brand video production Canada",
      "Instagram reels production Hamilton",
    ],
  },
  "social-media-management": {
    title: "Social Media Management for Local Businesses | Pure Marketing",
    description:
      "Full social media management — daily content creation, posting, engagement, and growth strategy on Instagram, Facebook, and TikTok. Starting from $899/mo.",
    keywords: [
      "social media management Hamilton",
      "Instagram management local business Ontario",
      "Facebook marketing local business Canada",
      "social media agency Hamilton",
    ],
  },
  "google-meta-ads": {
    title: "Google Ads & Meta Ads Management for Local Businesses | Pure Marketing",
    description:
      "Expert Google and Meta ad management for local businesses. Average 5–8× return on ad spend. Transparent reporting. No contracts. $500/mo management fee.",
    keywords: [
      "Google Ads management Hamilton Ontario",
      "Meta Ads agency Canada",
      "Facebook ads local business Hamilton",
      "PPC management local service business",
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
