import type { Metadata } from "next";

const BASE = "https://puremarketing.ca";

export const metadata: Metadata = {
  title: "Marketing Blog | Tips for Local Businesses - Pure Marketing",
  description:
    "Local lead generation tips, Google Ads strategies, and customer acquisition tactics for local service businesses. Written by the Pure Marketing team in Hamilton, Ontario.",
  keywords: [
    "local business marketing tips",
    "Google Ads tips for trades",
    "lead generation for contractors",
    "local lead generation blog Hamilton",
    "marketing for electricians plumbers HVAC",
  ],
  alternates: { canonical: `${BASE}/blog` },
  openGraph: {
    url: `${BASE}/blog`,
    title: "Marketing Blog | Local Business Tips - Pure Marketing",
    description:
      "Actionable local lead generation strategies for local service businesses - Google Ads, Google Maps visibility, and more.",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
