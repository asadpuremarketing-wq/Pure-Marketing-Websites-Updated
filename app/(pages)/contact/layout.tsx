import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Pure Marketing",
  description: "Get in touch with Pure Marketing. Book a free marketing audit and find out how we can help your local business get more leads and revenue.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
