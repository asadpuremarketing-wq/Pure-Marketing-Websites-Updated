import type { Metadata } from "next";

const BASE = "https://puremarketing.ca";

export const metadata: Metadata = {
  title: "Digital Marketing Services | Pure Marketing Hamilton",
  description:
    "Web design, Google Ads, Meta Ads, lead generation, video production, and social media management for local service businesses in Hamilton and across Canada. Get a free audit.",
  keywords: [
    "digital marketing services Hamilton",
    "Google Ads agency Hamilton",
    "web design Hamilton Ontario",
    "lead generation Hamilton",
    "Meta Ads agency Hamilton",
    "social media marketing Hamilton",
  ],
  alternates: { canonical: `${BASE}/services` },
  openGraph: {
    url: `${BASE}/services`,
    title: "Digital Marketing Services | Pure Marketing Hamilton",
    description:
      "Full-service digital marketing for local businesses: Google Ads, Meta Ads, web design, lead generation, video production. Based in Hamilton, Ontario.",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
