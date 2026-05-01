import type { Metadata } from "next";
import Script from "next/script";
import IndustryPageTemplate from "@/components/templates/IndustryPageTemplate";

const BASE = "https://puremarketing.ca";

export const metadata: Metadata = {
  title: "Marketing for Real Estate Agents | Property Videos & Lead Gen - Pure Marketing",
  description:
    "We help real estate agents in Canada sell faster with property tour videos, agent websites, and targeted lead generation campaigns. 4.2x faster sales on average.",
  keywords: [
    "real estate marketing Canada",
    "real estate agent marketing Ontario",
    "property tour video Hamilton",
    "real estate lead generation",
    "marketing for realtors Hamilton",
    "real estate website design",
  ],
  alternates: { canonical: `${BASE}/industries/real-estate` },
  openGraph: {
    url: `${BASE}/industries/real-estate`,
    title: "Marketing for Real Estate Agents | 4.2x Faster Sales - Pure Marketing",
    description:
      "Pure Marketing helps real estate agents sell faster with property videos, agent branding, and lead gen campaigns. Book a free audit.",
  },
};

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Marketing for Real Estate Agents",
  provider: { "@id": `${BASE}/#organization` },
  serviceType: "Digital Marketing",
  areaServed: { "@type": "Country", name: "Canada" },
  description:
    "Property tour videos, agent websites, Facebook/Instagram lead gen campaigns for real estate agents across Canada.",
  url: `${BASE}/industries/real-estate`,
};

export default function RealEstatePage() {
  return (
    <>
      <Script id="service-schema-real-estate" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <IndustryPageTemplate
        config={{
          industry: "Real Estate",
          badge: "Marketing for Real Estate Agents",
          headline: "More Listings. More Buyers.",
          headlineAccent: "More Referrals.",
          subheadline:
            "Property tours, agent branding, lead gen campaigns - we help real estate agents in Canada build a personal brand that attracts clients consistently.",
          heroStats: [
            { value: "4.2x", label: "Faster sales" },
            { value: "35%", label: "More buyer leads" },
            { value: "8%", label: "Higher selling price" },
            { value: "2.3x", label: "Website traffic" },
          ],
          heroWins: [
            { client: "Sarah Mitchell Real Estate", result: "4.2x faster sales, 8% higher price" },
            { client: "Lakefront Realty Team", result: "2.3x website traffic, 35% more leads" },
            { client: "Rocket AMG - Roger Singh", result: "Dominant social presence built" },
          ],
          bandStats: [
            { value: "4.2x", label: "Faster sales" },
            { value: "35%", label: "More buyer leads" },
            { value: "8%", label: "Higher selling price" },
            { value: "2.3x", label: "More website traffic" },
          ],
          services: [
            {
              icon: "Video",
              name: "Property Tour Videos",
              description:
                "Cinematic listing videos and virtual walkthroughs that sell properties faster and at higher prices. Stand out in every MLS listing.",
              result: "4x more showings",
            },
            {
              icon: "Globe",
              name: "Agent Website & Brand",
              description:
                "Personal agent website that builds your brand, captures buyer and seller leads, and showcases your listing portfolio 24/7.",
              result: "2x more leads",
            },
            {
              icon: "TrendingUp",
              name: "Lead Gen Campaigns",
              description:
                "Facebook and Instagram ads targeting buyers and sellers in your market. Geo-targeted campaigns that build your pipeline month over month.",
              result: "35% more leads",
            },
          ],
          resultQuote:
            "The video content and online presence Pure Marketing built for me changed my business. Clients now come to me already knowing my brand.",
          resultClient: "Roger Singh",
          resultCompany: "Realtor, Rocket AMG",
          resultStat: "4.2x",
          resultStatLabel: "Faster sales",
        }}
      />
    </>
  );
}
