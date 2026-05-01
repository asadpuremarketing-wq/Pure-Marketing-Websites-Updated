import type { Metadata } from "next";
import Script from "next/script";
import IndustryPageTemplate from "@/components/templates/IndustryPageTemplate";

const BASE = "https://puremarketing.ca";

export const metadata: Metadata = {
  title: "Marketing for Plumbers | Google Ads & Lead Gen - Pure Marketing",
  description:
    "We help plumbers across Canada get emergency calls, drain cleanings, and water heater installs with Google Ads and Local Service Ads. 289% avg lead increase. Book a free audit.",
  keywords: [
    "plumber marketing Canada",
    "Google Ads for plumbers",
    "plumber lead generation Ontario",
    "marketing for plumbers Hamilton",
    "plumbing website design",
    "emergency plumber ads",
  ],
  alternates: { canonical: `${BASE}/industries/plumbers` },
  openGraph: {
    url: `${BASE}/industries/plumbers`,
    title: "Marketing for Plumbers | 289% More Leads - Pure Marketing",
    description:
      "Pure Marketing helps plumbers get 22+ qualified calls per week with Google Ads and conversion websites. Book a free audit.",
  },
};

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Marketing for Plumbers",
  provider: { "@id": `${BASE}/#organization` },
  serviceType: "Digital Marketing",
  areaServed: { "@type": "Country", name: "Canada" },
  description:
    "Specialized Google Ads, Local Service Ads, web design, and lead generation for plumbers across Canada. Average 289% lead increase in 90 days.",
  url: `${BASE}/industries/plumbers`,
};

export default function PlumbersPage() {
  return (
    <>
      <Script id="service-schema-plumbers" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <IndustryPageTemplate
        config={{
          industry: "Plumbers",
          badge: "Marketing for Plumbers",
          headline: "Fill Your Schedule With",
          headlineAccent: "Qualified Plumbing Jobs.",
          subheadline:
            "Emergency calls, drain cleanings, water heater installs, bathroom renos - we build the marketing system that keeps plumbers booked solid.",
          heroStats: [
            { value: "22+", label: "Calls per week" },
            { value: "289%", label: "Lead increase" },
            { value: "14", label: "Days to first call" },
            { value: "$41K", label: "Revenue 90 days" },
          ],
          heroWins: [
            { client: "Blue Wave Plumbing", result: "289% more leads, $41K in 90 days" },
            { client: "Reliable Plumbers Inc", result: "22 calls/week, fully booked" },
            { client: "Hamilton Plumbing Co", result: "Booked 6 weeks in advance" },
          ],
          bandStats: [
            { value: "289%", label: "Avg lead increase" },
            { value: "22+", label: "Calls per week" },
            { value: "14", label: "Days to first lead" },
            { value: "$41K", label: "Revenue 90 days" },
          ],
          services: [
            {
              icon: "Globe",
              name: "Plumbing Website",
              description:
                "Conversion-optimized website with emergency call buttons, service area pages, and trust signals that turn visitors into booked jobs.",
              result: "2x more bookings",
            },
            {
              icon: "TrendingUp",
              name: "Emergency Plumbing Ads",
              description:
                "Google Ads and Local Service Ads that capture homeowners the moment they search for emergency plumbers. 24/7 lead flow.",
              result: "3x more calls",
            },
            {
              icon: "MapPin",
              name: "Local SEO",
              description:
                "Rank at the top of Google Maps and local search for every plumbing service in your city. Organic leads that cost nothing.",
              result: "Top 3 rankings",
            },
          ],
          resultQuote:
            "We used to rely on word of mouth. Now we get 22 qualified calls every week from Google alone.",
          resultClient: "Sarah T.",
          resultCompany: "Owner, Blue Wave Plumbing",
          resultStat: "289%",
          resultStatLabel: "More leads",
        }}
      />
    </>
  );
}
