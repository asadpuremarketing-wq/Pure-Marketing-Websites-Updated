import type { Metadata } from "next";

const BASE = "https://puremarketing.ca";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | Pure Marketing Hamilton",
  description:
    "See real results from Pure Marketing clients. Web design, Google Ads, and lead generation case studies for electricians, plumbers, contractors, and local businesses across Canada.",
  keywords: [
    "marketing agency portfolio Hamilton",
    "web design portfolio Ontario",
    "Google Ads case studies Canada",
    "local business marketing results",
    "Pure Marketing portfolio",
  ],
  alternates: { canonical: `${BASE}/portfolio` },
  openGraph: {
    url: `${BASE}/portfolio`,
    title: "Portfolio & Case Studies | Pure Marketing Hamilton",
    description:
      "Real results from real businesses. See how Pure Marketing has helped local service businesses grow with digital marketing.",
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
