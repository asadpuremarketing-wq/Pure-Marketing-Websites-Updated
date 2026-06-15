import type { Metadata } from "next";

const BASE = "https://puremarketing.ca";

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

export default function ServiceSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
