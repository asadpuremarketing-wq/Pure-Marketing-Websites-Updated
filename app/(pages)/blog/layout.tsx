import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Pure Marketing",
  description: "Marketing tips, strategies, and insights for local service businesses - from SEO and Google Ads to social media and lead generation.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
