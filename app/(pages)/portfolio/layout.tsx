import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Pure Marketing",
  description: "See the real results we've delivered for electricians, plumbers, HVAC companies, restaurants, and real estate agents across Canada.",
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
