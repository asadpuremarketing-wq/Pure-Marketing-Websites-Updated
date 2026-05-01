import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve | Pure Marketing",
  description: "Pure Marketing specializes in digital marketing for electricians, plumbers, HVAC companies, painters, real estate agents, and restaurants.",
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
