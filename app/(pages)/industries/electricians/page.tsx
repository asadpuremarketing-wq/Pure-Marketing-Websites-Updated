import type { Metadata } from "next";
import Script from "next/script";
import IndustryPageTemplate from "@/components/templates/IndustryPageTemplate";

const BASE = "https://puremarketing.ca";

export const metadata: Metadata = {
  title: "Marketing for Electricians | Google Ads & Lead Gen - Pure Marketing",
  description:
    "We help electricians across Canada get more emergency calls, panel upgrades, and residential jobs with Google Ads, Local Service Ads, and conversion-focused websites. 312% avg lead increase.",
  keywords: [
    "electrician marketing Canada",
    "Google Ads for electricians",
    "electrician lead generation Ontario",
    "marketing for electricians Hamilton",
    "electrician website design",
    "Local Service Ads electricians",
  ],
  alternates: { canonical: `${BASE}/industries/electricians` },
  openGraph: {
    url: `${BASE}/industries/electricians`,
    title: "Marketing for Electricians | 312% More Leads - Pure Marketing",
    description:
      "Pure Marketing helps electricians get 18+ qualified leads per week with Google Ads, LSA, and conversion websites. Book a free audit.",
  },
};

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Marketing for Electricians",
  provider: { "@id": `${BASE}/#organization` },
  serviceType: "Digital Marketing",
  areaServed: { "@type": "Country", name: "Canada" },
  description:
    "Specialized Google Ads, Local Service Ads, web design, and lead generation for electricians across Canada. Average 312% lead increase in 90 days.",
  url: `${BASE}/industries/electricians`,
};

export default function ElectriciansPage() {
  return (
    <>
      <Script id="service-schema-electricians" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <IndustryPageTemplate
        config={{
          industry: "Electricians",
          badge: "Marketing for Electricians",
          headline: "More Service Calls.",
          headlineAccent: "More Booked Jobs.",
          subheadline:
            "We help electricians in Canada get a predictable flow of emergency calls, panel upgrades, and residential jobs - without relying on referrals or word of mouth.",
          heroStats: [
            { value: "18+", label: "Avg leads/week" },
            { value: "312%", label: "Lead increase" },
            { value: "30", label: "Days to first lead" },
            { value: "5★", label: "Google rating" },
          ],
          heroWins: [
            { client: "Bright Spark Electric", result: "+340% more leads in 60 days" },
            { client: "Premier Electrical", result: "18 jobs/week, $28K in 90 days" },
            { client: "GTA Electric", result: "Fully booked 4 weeks out" },
          ],
          bandStats: [
            { value: "312%", label: "Avg lead increase" },
            { value: "18+", label: "Leads per week" },
            { value: "90", label: "Days to scale" },
            { value: "$34K", label: "Avg revenue 90 days" },
          ],
          services: [
            {
              icon: "Globe",
              name: "Electrician Website",
              description:
                "Mobile-first, fast-loading website built to convert visitors into calls. Emergency call buttons, service pages, and local SEO built in.",
              result: "2x more calls",
            },
            {
              icon: "TrendingUp",
              name: "Google Ads & LSA",
              description:
                "Google Local Service Ads and Search Ads targeting homeowners searching for electricians near you. Pay only for real leads.",
              result: "3x qualified leads",
            },
            {
              icon: "Star",
              name: "Reviews & Reputation",
              description:
                "We manage your Google Business Profile, get you more 5-star reviews, and keep you visible in local search.",
              result: "5★ avg rating",
            },
          ],
          resultQuote:
            "We went from 3 leads a week to over 18. Pure Marketing built us a real system - not just a website.",
          resultClient: "Mike D.",
          resultCompany: "Owner, Bright Spark Electric",
          resultStat: "312%",
          resultStatLabel: "Increase in leads",
        }}
      />
    </>
  );
}
