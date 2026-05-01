import type { Metadata } from "next";

const BASE = "https://puremarketing.ca";

export const metadata: Metadata = {
  title: "About Us | Pure Marketing - Hamilton Digital Marketing Agency",
  description:
    "Pure Marketing is a Hamilton, Ontario digital marketing agency founded to help local service businesses compete and win online. Learn about our team, values, and approach.",
  keywords: [
    "about Pure Marketing",
    "Hamilton marketing agency",
    "digital marketing team Hamilton",
    "local business marketing Ontario",
  ],
  alternates: { canonical: `${BASE}/about` },
  openGraph: {
    url: `${BASE}/about`,
    title: "About Pure Marketing | Hamilton Digital Marketing Agency",
    description:
      "Meet the team behind Pure Marketing - Hamilton's digital marketing specialists for local service businesses.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
