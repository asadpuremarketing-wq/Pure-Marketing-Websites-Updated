import type { Metadata } from "next";
import Script from "next/script";
import IndustryPageTemplate from "@/components/templates/IndustryPageTemplate";

const BASE = "https://puremarketing.ca";

export const metadata: Metadata = {
  title: "Marketing for Painters | Google Ads & Lead Gen - Pure Marketing",
  description:
    "We help painting companies book more residential and commercial projects with Google Ads, Meta Ads, and before/after video content. 324% avg project increase.",
  keywords: [
    "painter marketing Canada",
    "Google Ads for painters",
    "painting company lead generation Ontario",
    "marketing for painters Hamilton",
    "painting website design",
    "Meta Ads painters",
  ],
  alternates: { canonical: `${BASE}/industries/painters` },
  openGraph: {
    url: `${BASE}/industries/painters`,
    title: "Marketing for Painters | 324% More Projects - Pure Marketing",
    description:
      "Pure Marketing helps painting companies book 12+ projects per month with Google Ads, Meta Ads, and visual content. Book a free audit.",
  },
};

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Marketing for Painters",
  provider: { "@id": `${BASE}/#organization` },
  serviceType: "Digital Marketing",
  areaServed: { "@type": "Country", name: "Canada" },
  description:
    "Specialized Google Ads, Meta Ads, before/after content, and lead generation for painting companies across Canada.",
  url: `${BASE}/industries/painters`,
};

export default function PaintersPage() {
  return (
    <>
      <Script id="service-schema-painters" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <IndustryPageTemplate
        config={{
          industry: "Painters",
          badge: "Marketing for Painters",
          headline: "Book More Residential",
          headlineAccent: "& Commercial Projects.",
          subheadline:
            "Interior, exterior, cabinet painting, commercial coatings - we put your painting company in front of homeowners ready to hire right now.",
          heroStats: [
            { value: "324%", label: "Project increase" },
            { value: "12+", label: "Projects/month" },
            { value: "75", label: "Days to scale" },
            { value: "$52K", label: "Revenue 90 days" },
          ],
          heroWins: [
            { client: "Premier Painting Solutions", result: "324% project increase, $52K in 90 days" },
            { client: "Artisan Painters", result: "12 projects/month, $38K in 75 days" },
            { client: "ProPaint Hamilton", result: "Booked 8 weeks out" },
          ],
          bandStats: [
            { value: "324%", label: "Avg project increase" },
            { value: "12+", label: "Projects per month" },
            { value: "75", label: "Days to scale" },
            { value: "$52K", label: "Revenue 90 days" },
          ],
          services: [
            {
              icon: "Globe",
              name: "Painter Website",
              description:
                "Before/after gallery, quote request forms, and service area pages. A website that shows your work and books consultations automatically.",
              result: "2x more quotes",
            },
            {
              icon: "TrendingUp",
              name: "Google & Meta Ads",
              description:
                "Target homeowners in your service area on Google when they search and on Facebook/Instagram when they browse. Double your inbound leads.",
              result: "3x more projects",
            },
            {
              icon: "Video",
              name: "Before & After Content",
              description:
                "Professional photo and video of your work for social media and ads. Visual content is the #1 driver for painting leads.",
              result: "5x engagement",
            },
          ],
          resultQuote:
            "The before/after video content they created for us generates leads on its own. Best marketing investment we ever made.",
          resultClient: "David P.",
          resultCompany: "Owner, Premier Painting Solutions",
          resultStat: "324%",
          resultStatLabel: "More projects",
        }}
      />
    </>
  );
}
