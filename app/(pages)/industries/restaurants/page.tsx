import type { Metadata } from "next";
import Script from "next/script";
import IndustryPageTemplate from "@/components/templates/IndustryPageTemplate";

const BASE = "https://puremarketing.ca";

export const metadata: Metadata = {
  title: "Marketing for Restaurants | Social Media & Google Ads - Pure Marketing",
  description:
    "We help restaurants fill seats with social media content, Google Ads, and review management. 89% more reservations on average. Based in Hamilton, Ontario.",
  keywords: [
    "restaurant marketing Canada",
    "Google Ads for restaurants",
    "restaurant social media marketing",
    "restaurant lead generation Ontario",
    "marketing for restaurants Hamilton",
    "food photography marketing",
  ],
  alternates: { canonical: `${BASE}/industries/restaurants` },
  openGraph: {
    url: `${BASE}/industries/restaurants`,
    title: "Marketing for Restaurants | 89% More Reservations - Pure Marketing",
    description:
      "Pure Marketing helps restaurants fill seats with social media content, Google Ads, and review management. Book a free audit.",
  },
};

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Marketing for Restaurants",
  provider: { "@id": `${BASE}/#organization` },
  serviceType: "Digital Marketing",
  areaServed: { "@type": "Country", name: "Canada" },
  description:
    "Specialized social media marketing, Google Ads, food content creation, and review management for restaurants across Canada.",
  url: `${BASE}/industries/restaurants`,
};

export default function RestaurantsPage() {
  return (
    <>
      <Script id="service-schema-restaurants" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <IndustryPageTemplate
        config={{
          industry: "Restaurants",
          badge: "Marketing for Restaurants",
          headline: "More Covers. More Orders.",
          headlineAccent: "More Revenue.",
          subheadline:
            "From social media content to Google Ads and reservation systems - we build the marketing engine that fills your restaurant week after week.",
          heroStats: [
            { value: "89%", label: "More reservations" },
            { value: "62%", label: "More foot traffic" },
            { value: "30", label: "Days to results" },
            { value: "$68K", label: "Revenue 6 months" },
          ],
          heroWins: [
            { client: "Casa Grande Restaurant", result: "89% more reservations, $68K in 6 months" },
            { client: "Urban Kitchen", result: "62% more traffic, $52K in 6 months" },
            { client: "Moussas Shawarma", result: "Fully booked weekends" },
          ],
          bandStats: [
            { value: "89%", label: "More reservations" },
            { value: "62%", label: "More foot traffic" },
            { value: "$68K", label: "Revenue 6 months" },
            { value: "30", label: "Days to results" },
          ],
          services: [
            {
              icon: "Video",
              name: "Food & Brand Content",
              description:
                "Mouth-watering food photography, chef story videos, and daily social content that builds a hungry following and drives walk-ins.",
              result: "5x engagement",
            },
            {
              icon: "TrendingUp",
              name: "Meta & Google Ads",
              description:
                "Instagram and Facebook ads targeting food lovers in your neighbourhood. Google Ads for 'restaurants near me' and cuisine-specific searches.",
              result: "3x more bookings",
            },
            {
              icon: "Star",
              name: "Review Management",
              description:
                "Grow your Google and Yelp ratings, respond to every review, and build the social proof that fills seats on slow nights.",
              result: "4.8★ avg rating",
            },
          ],
          resultQuote:
            "Our weekends are fully booked every week now. The content they create makes people want to visit before they even read the menu.",
          resultClient: "Maria S.",
          resultCompany: "Owner, Casa Grande Restaurant",
          resultStat: "89%",
          resultStatLabel: "More reservations",
        }}
      />
    </>
  );
}
