import IndustryPageTemplate from "@/components/templates/IndustryPageTemplate";

export const metadata = {
  title: "Marketing for Restaurants | Pure Marketing",
  description:
    "From social media content to Google Ads and reservation systems - we build the marketing engine that fills your restaurant week after week.",
};

export default function RestaurantsPage() {
  return (
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
  );
}
