import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Pure Marketing",
  description: "Web development, lead generation, video production, social media management, and Google & Meta Ads - everything local businesses need to dominate their market.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
