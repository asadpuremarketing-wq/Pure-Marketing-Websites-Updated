import IndustryPageTemplate from "@/components/templates/IndustryPageTemplate";

export const metadata = {
  title: "Marketing for General Contractors | Pure Marketing",
  description:
    "Renovations, additions, new builds, commercial construction - we build marketing systems that bring high-value projects to general contractors consistently.",
};

export default function GeneralContractorsPage() {
  return (
    <IndustryPageTemplate
      config={{
        industry: "General Contractors",
        badge: "Marketing for General Contractors",
        headline: "Land Bigger Projects.",
        headlineAccent: "Build a Stronger Pipeline.",
        subheadline:
          "Renovations, additions, new builds, commercial construction - we build marketing systems that bring high-value projects to general contractors consistently.",
        heroStats: [
          { value: "250%+", label: "Lead increase" },
          { value: "10+", label: "Qualified leads/month" },
          { value: "90", label: "Days to scale" },
          { value: "$80K+", label: "Avg project value" },
        ],
        heroWins: [
          { client: "Gravity Contractors", result: "Top Google rankings in Hamilton" },
          { client: "BuildRight Construction", result: "250% more qualified inquiries" },
          { client: "Summit General Contracting", result: "Fully booked 3 months out" },
        ],
        bandStats: [
          { value: "250%+", label: "Avg lead increase" },
          { value: "10+", label: "Leads per month" },
          { value: "$80K+", label: "Avg project value" },
          { value: "90", label: "Days to results" },
        ],
        services: [
          {
            icon: "Globe",
            name: "Contractor Website",
            description:
              "Portfolio-forward website that showcases your best projects, earns trust, and turns visitors into booked consultations. Built for high-ticket buyers.",
            result: "2x more consultations",
          },
          {
            icon: "TrendingUp",
            name: "Google Ads",
            description:
              "Target homeowners and property managers searching for renovation and construction services in your area. We focus your budget on high-value keywords.",
            result: "3x qualified leads",
          },
          {
            icon: "Video",
            name: "Project Showcases",
            description:
              "Professional before/after photos and video walkthroughs of your completed projects. Build authority and close more high-value jobs.",
            result: "5x engagement",
          },
        ],
        resultQuote:
          "We used to find clients through referrals only. Now we get 10+ qualified inquiries a month from Google and our website.",
        resultClient: "Ahmed R.",
        resultCompany: "Owner, Gravity Contractors",
        resultStat: "250%+",
        resultStatLabel: "More leads",
      }}
    />
  );
}
