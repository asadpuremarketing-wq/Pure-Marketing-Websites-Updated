import IndustryPageTemplate from "@/components/templates/IndustryPageTemplate";

export const metadata = {
  title: "Marketing for HVAC Companies | Pure Marketing",
  description:
    "AC tune-ups in summer, furnace installs in fall, emergency heating calls all winter. We keep HVAC companies busy all year.",
};

export default function HvacPage() {
  return (
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
  );
}
