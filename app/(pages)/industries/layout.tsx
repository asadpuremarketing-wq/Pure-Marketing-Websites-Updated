import type { Metadata } from "next";

const BASE = "https://puremarketing.ca";

export const metadata: Metadata = {
  title: "Industries We Serve | Pure Marketing Hamilton",
  description:
    "Pure Marketing specializes in digital marketing for electricians, plumbers, HVAC companies, painters, restaurants, real estate agents, locksmiths, and general contractors in Canada.",
  keywords: [
    "marketing for trades Hamilton",
    "electrician marketing Canada",
    "plumber marketing Ontario",
    "HVAC marketing Hamilton",
    "contractor marketing agency",
    "restaurant marketing Hamilton",
  ],
  alternates: { canonical: `${BASE}/industries` },
  openGraph: {
    url: `${BASE}/industries`,
    title: "Industries We Serve | Pure Marketing Hamilton",
    description:
      "Specialized digital marketing for local service businesses. We know your industry and build campaigns that actually convert.",
  },
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
