import type { Metadata } from "next";

const BASE = "https://puremarketing.ca";

export const metadata: Metadata = {
  title: "Marketing Blog | Tips for Local Businesses - Pure Marketing",
  description:
    "Marketing tips, Google Ads strategies, web design guides, and lead generation tactics for local service businesses. Written by the Pure Marketing team in Hamilton, Ontario.",
  keywords: [
    "local business marketing tips",
    "Google Ads tips for trades",
    "lead generation for contractors",
    "digital marketing blog Hamilton",
    "marketing for electricians plumbers HVAC",
  ],
  alternates: { canonical: `${BASE}/blog` },
  openGraph: {
    url: `${BASE}/blog`,
    title: "Marketing Blog | Local Business Tips - Pure Marketing",
    description:
      "Actionable marketing strategies for local service businesses - Google Ads, lead generation, web design, and more.",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
