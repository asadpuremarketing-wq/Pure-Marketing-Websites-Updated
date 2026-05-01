import type { Metadata } from "next";
import Script from "next/script";
import IndustryPageTemplate from "@/components/templates/IndustryPageTemplate";

const BASE = "https://puremarketing.ca";

export const metadata: Metadata = {
  title: "Marketing for HVAC Companies | Google Ads & Lead Gen - Pure Marketing",
  description:
    "We help HVAC companies get AC tune-ups, furnace installs, and emergency heating calls year-round with Google Ads and Local Service Ads. 267% avg lead increase.",
  keywords: [
    "HVAC marketing Canada",
    "Google Ads for HVAC companies",
    "HVAC lead generation Ontario",
    "marketing for HVAC Hamilton",
    "HVAC website design",
    "furnace AC marketing",
  ],
  alternates: { canonical: `${BASE}/industries/hvac` },
  openGraph: {
    url: `${BASE}/industries/hvac`,
    title: "Marketing for HVAC Companies | 267% More Leads - Pure Marketing",
    description:
      "Pure Marketing keeps HVAC companies busy year-round with seasonal Google Ads and lead generation. Book a free audit.",
  },
};

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Marketing for HVAC Companies",
  provider: { "@id": `${BASE}/#organization` },
  serviceType: "Digital Marketing",
  areaServed: { "@type": "Country", name: "Canada" },
  description:
    "Specialized Google Ads, seasonal campaigns, web design, and lead generation for HVAC companies across Canada. Average 267% lead increase.",
  url: `${BASE}/industries/hvac`,
};

export default function HvacPage() {
  return (
    <>
      <Script id="service-schema-hvac" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <IndustryPageTemplate
        config={{
          industry: "HVAC",
          badge: "Marketing for HVAC Companies",
          headline: "Year-Round Leads for",
          headlineAccent: "HVAC Installs & Service.",
          subheadline:
            "AC tune-ups in summer, furnace installs in fall, emergency heating calls all winter. We build marketing systems that keep HVAC companies busy all year.",
          heroStats: [
            { value: "267%", label: "Lead increase" },
            { value: "19+", label: "Service calls/month" },
            { value: "90", label: "Days to scale" },
            { value: "4.8★", label: "Google rating" },
          ],
          heroWins: [
            { client: "Climate Control Pro", result: "267% lead increase, $36K in 90 days" },
            { client: "Comfort Systems HVAC", result: "19 service calls/month" },
            { client: "Arctic Air HVAC", result: "Fully booked summer season" },
          ],
          bandStats: [
            { value: "267%", label: "Avg lead increase" },
            { value: "19+", label: "Service calls/month" },
            { value: "4.8★", label: "Avg Google rating" },
            { value: "$36K", label: "Revenue 90 days" },
          ],
          services: [
            {
              icon: "Globe",
              name: "HVAC Website",
              description:
                "Fast, mobile-first website with seasonal service pages, financing options, and emergency CTA buttons. Built to convert on any device.",
              result: "2x more bookings",
            },
            {
              icon: "TrendingUp",
              name: "Seasonal Google Ads",
              description:
                "We scale your ad spend up in summer and winter peaks, down in shoulder seasons. Smart budgeting that maximizes your ROI year-round.",
              result: "3x qualified leads",
            },
            {
              icon: "Star",
              name: "Google Business Profile",
              description:
                "Fully optimized GBP with photos, service areas, Q&A, and review management. Dominate the local map pack for HVAC searches.",
              result: "#1 local rankings",
            },
          ],
          resultQuote:
            "Summer used to be our only busy season. Now we get leads for furnace installs and maintenance all year long.",
          resultClient: "James K.",
          resultCompany: "Owner, Climate Control Pro",
          resultStat: "267%",
          resultStatLabel: "More leads",
        }}
      />
    </>
  );
}
