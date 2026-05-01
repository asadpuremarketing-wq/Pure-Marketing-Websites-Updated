import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Pure Marketing",
  description: "Learn about Pure Marketing - a premium digital marketing agency helping local businesses in Canada grow with proven marketing systems.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
