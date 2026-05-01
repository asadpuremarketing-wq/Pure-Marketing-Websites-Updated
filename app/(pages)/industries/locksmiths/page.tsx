import IndustryPageTemplate from "@/components/templates/IndustryPageTemplate";

export const metadata = {
  title: "Marketing for Locksmiths | Pure Marketing",
  description:
    "Lockouts, rekeying, commercial lock installation - we put your locksmith business at the top of Google the moment someone needs you.",
};

export default function LocksmithsPage() {
  return (
    <IndustryPageTemplate
      config={{
        industry: "Locksmiths",
        badge: "Marketing for Locksmiths",
        headline: "More Emergency Lockout Calls.",
        headlineAccent: "Around the Clock.",
        subheadline:
          "Lockouts, rekeying, commercial lock installation, safe opening - we put your locksmith business at the top of Google the moment someone needs you.",
        heroStats: [
          { value: "24/7", label: "Lead flow" },
          { value: "300%+", label: "Avg lead increase" },
          { value: "7", label: "Days to go live" },
          { value: "5★", label: "Google rating" },
        ],
        heroWins: [
          { client: "Rapid Lock & Key", result: "3x more emergency calls in 30 days" },
          { client: "City Locksmith", result: "Top 3 Google Maps ranking" },
          { client: "Pro Lock Solutions", result: "Fully booked residential jobs" },
        ],
        bandStats: [
          { value: "300%+", label: "Avg lead increase" },
          { value: "7", label: "Days to launch" },
          { value: "24/7", label: "Lead generation" },
          { value: "5★", label: "Avg Google rating" },
        ],
        services: [
          {
            icon: "Globe",
            name: "Locksmith Website",
            description:
              "Fast, mobile-first website with click-to-call buttons, service area pages, and emergency messaging that converts panicked visitors into customers.",
            result: "2x more calls",
          },
          {
            icon: "TrendingUp",
            name: "Emergency Google Ads",
            description:
              "Google Local Service Ads and Search Ads that put you at the top when someone searches 'locksmith near me' or 'locked out of car'. Instant visibility.",
            result: "3x more calls",
          },
          {
            icon: "MapPin",
            name: "Google Maps Domination",
            description:
              "Fully optimized Google Business Profile so you rank in the top 3 on Maps for every locksmith search in your service area.",
            result: "Top 3 rankings",
          },
        ],
        resultQuote:
          "I went from 2-3 calls a day to 8-10. Pure Marketing put me at the top of Google and the phone hasn't stopped ringing.",
        resultClient: "Tony M.",
        resultCompany: "Owner, City Locksmith",
        resultStat: "300%+",
        resultStatLabel: "More leads",
      }}
    />
  );
}
