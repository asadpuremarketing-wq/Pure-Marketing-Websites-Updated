import { MetadataRoute } from "next";

const BASE = "https://puremarketing.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { url: BASE, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE}/services`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE}/industries`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/portfolio`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${BASE}/about`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE}/contact`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE}/blog`, priority: 0.7, changeFrequency: "weekly" as const },
  ];

  const industryPages = [
    "electricians",
    "plumbers",
    "hvac",
    "painters",
    "restaurants",
    "real-estate",
    "locksmiths",
    "general-contractors",
  ].map((slug) => ({
    url: `${BASE}/industries/${slug}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
    lastModified: now,
  }));

  return [
    ...staticPages.map((p) => ({ ...p, lastModified: now })),
    ...industryPages,
  ];
}
