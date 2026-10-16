import { MetadataRoute } from "next";
import { ALL_POSTS } from "@/lib/blog-posts";

const BASE = "https://puremarketing.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { url: BASE,                          priority: 1.0,  changeFrequency: "weekly"  as const },
    { url: `${BASE}/about`,               priority: 0.8,  changeFrequency: "monthly" as const },
    { url: `${BASE}/results`,             priority: 0.85, changeFrequency: "monthly" as const },
    { url: `${BASE}/portfolio`,           priority: 0.8,  changeFrequency: "weekly"  as const },
    { url: `${BASE}/services`,            priority: 0.85, changeFrequency: "monthly" as const },
    { url: `${BASE}/contact`,             priority: 0.9,  changeFrequency: "monthly" as const },
    { url: `${BASE}/blog`,                priority: 0.7,  changeFrequency: "weekly"  as const },
    { url: `${BASE}/privacy-policy`,      priority: 0.3,  changeFrequency: "yearly"  as const },
    { url: `${BASE}/terms-of-service`,    priority: 0.3,  changeFrequency: "yearly"  as const },
  ];

  const servicePages = [
    "lead-generation",
  ].map((slug) => ({
    url: `${BASE}/services/${slug}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
    lastModified: now,
  }));

  const industryPages = [
    "electricians",
    "plumbers",
    "hvac",
    "painters",
    "roofing",
    "exterior-services",
    "locksmiths",
    "general-contractors",
  ].map((slug) => ({
    url: `${BASE}/industries/${slug}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
    lastModified: now,
  }));

  const locationPages = [
    "hamilton",
    "toronto",
    "mississauga",
    "brampton",
    "burlington",
    "oakville",
  ].map((slug) => ({
    url: `${BASE}/locations/${slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
    lastModified: now,
  }));

  const blogPages = ALL_POSTS.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
    lastModified: now,
  }));

  return [
    ...staticPages.map((p) => ({ ...p, lastModified: now })),
    ...servicePages,
    ...industryPages,
    ...locationPages,
    ...blogPages,
  ];
}
