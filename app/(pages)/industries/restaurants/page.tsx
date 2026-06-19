import type { Metadata } from "next";
import IndustryFullPageTemplate, { type IndustryFullConfig } from "@/components/templates/IndustryFullPageTemplate";
import VideoPortfolio from "@/components/sections/VideoPortfolio";

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

const config: IndustryFullConfig = {
  industry: "Restaurants",
  badge: "90-Day Restaurant Growth System",
  headline: "More Covers. More Orders.",
  headlineAccent: "A Full Restaurant Every Night.",
  subheadline:
    "Food content, Google, Social Media, Ads, Automation & Reviews — one system that fills your restaurant week after week with loyal, hungry customers.",
  heroCheckmarks: ["More Walk-Ins & Reservations", "Stronger Local Reputation", "Consistent Revenue Every Week"],
  dashboard: {
    url: "casagranderestaurant.ca",
    headline: "Authentic Flavours.",
    headlineAccent: "Unforgettable Experience.",
    tagline: "Dine in, take out & catering. Reserve your table today.",
    cta: "Reserve a Table →",
    sources: [
      { label: "Google", val: "96" },
      { label: "Instagram", val: "74" },
      { label: "Facebook", val: "48" },
      { label: "Maps", val: "31" },
    ],
  },
  heroMetrics: [
    { label: "Reservations", val: "+89%", chg: "+89%" },
    { label: "Foot Traffic", val: "+62%", chg: "+62%" },
    { label: "Revenue", val: "$68K", chg: "+6mo" },
  ],
  bandStats: [
    { value: "89%", label: "More reservations" },
    { value: "62%", label: "More foot traffic" },
    { value: "$68K", label: "Revenue 6 months" },
    { value: "30", label: "Days to results" },
  ],
  problemHeadline: "Why Great Restaurants Struggle to Fill Seats Consistently",
  problemSubtext:
    "Incredible food keeps people coming back. But without a marketing system, new customers never find you in the first place.",
  painPoints: [
    {
      icon: "RefreshCw",
      title: "Inconsistent Covers Week to Week",
      desc: "Some nights are slammed, others are half-empty. Without a consistent marketing system, you can't predict or control how many covers you're doing.",
    },
    {
      icon: "MapPin",
      title: "Invisible to Local Diners",
      desc: "Hungry customers search Google and Instagram before they decide where to eat. Without strong presence on both, you're losing tables to restaurants with worse food.",
    },
    {
      icon: "Star",
      title: "Reviews Going Unanswered",
      desc: "A bad review left unanswered, or 50 5-star reviews never requested — both cost you tables. Most restaurants have no system for managing their reputation online.",
    },
  ],
  videoLabel: "How We Grow Restaurant Revenue",
  videoTitle: "Watch How We Help Restaurants Fill Seats and Build Loyal Regulars",
  videoDesc:
    "A 2-minute breakdown of the content, ads, and reputation system that drives consistent walk-ins, reservations, and repeat customers for restaurants across Canada.",
  videoBullets: [
    "Why most restaurants lose new customers to competitors with better online presence",
    "The role of food content and social media in driving walk-ins and reservations",
    "How Google Ads and Meta ads bring diners who've never heard of you to your door",
    "What to expect in your first 30 days — and how reviews compound over time",
  ],
  growthSteps: [
    { num: "01", icon: "Globe",      title: "Restaurant Website",         desc: "Menu showcase, online reservation integration, and location pages built to convert hungry visitors into seated guests." },
    { num: "02", icon: "MapPin",     title: "Google Business Profile",    desc: "Fully optimized GBP with menu links, photos, and review strategy to rank for 'restaurants near me' searches." },
    { num: "03", icon: "Star",       title: "Review Management",          desc: "Respond to every review, collect new 5-star ratings, and build the social proof that fills tables on slow nights." },
    { num: "04", icon: "BarChart2",  title: "Reservation Tracking",       desc: "Track where every reservation and walk-in comes from — so ad spend goes to the channels that fill seats." },
    { num: "05", icon: "Video",      title: "Food & Brand Content",       desc: "Mouth-watering food photography, chef stories, and daily social posts that build a loyal following and drive walk-ins." },
    { num: "06", icon: "TrendingUp", title: "Google Ads",                 desc: "Search campaigns for cuisine-specific and 'near me' queries — capturing diners who are ready to book right now." },
    { num: "07", icon: "Share2",     title: "Meta Ads",                   desc: "Instagram and Facebook ads with high-quality food visuals targeting food lovers in your neighbourhood." },
    { num: "08", icon: "Zap",        title: "Promotions & Automation",    desc: "Automated specials, event announcements, and loyalty follow-ups that keep past diners coming back regularly." },
    { num: "09", icon: "Search",     title: "Local SEO & Geo Growth",     desc: "Cuisine and neighbourhood pages that drive consistent organic traffic from food-related searches in your city." },
  ],
  resultsHeadline: "Hear It From Our Restaurant Clients",
  results: [
    { metric: "89%", label: "More Reservations",    client: "Casa Grande Restaurant", detail: "From inconsistent covers to fully booked weekends every week within 30 days." },
    { metric: "$68K", label: "Revenue in 6 Months", client: "Urban Kitchen",          detail: "62% more foot traffic and $68K in tracked additional revenue in 6 months." },
    { metric: "100%", label: "Weekend Occupancy",   client: "Moussas Shawarma",       detail: "Fully booked every Friday and Saturday — with a waitlist on busy nights." },
  ],
  videoReviews: [
    { name: "Maria S.", company: "Casa Grande Restaurant", result: "89%+ More Reservations", dur: "1:41" },
    { name: "Alex K.",  company: "Urban Kitchen",          result: "Fully Booked Weekends",  dur: "2:05" },
    { name: "Ahmed M.", company: "Moussas Shawarma",       result: "Top Local Rankings",     dur: "1:52" },
  ],
  ctaHeadline: "Empty Tables Cost You\nMoney Every Night.",
  ctaSubtext:
    "Let's build your restaurant growth system and make sure hungry customers in your area find you first — before they book somewhere else.",
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do restaurants get more customers with digital marketing?",
      acceptedAnswer: { "@type": "Answer", text: "Social media content showcasing food and atmosphere builds desire and drives reservations. Google Ads target people searching for restaurants in your area. Review management builds trust and improves Google Maps rankings. Pure Marketing clients average 89% more reservations after implementing this combined approach." },
    },
    {
      "@type": "Question",
      name: "What social media platform is best for restaurants?",
      acceptedAnswer: { "@type": "Answer", text: "Instagram and TikTok for visual food content — short-form videos of dishes, kitchen prep, and atmosphere perform especially well. Facebook works for local community engagement, event promotion, and reaching older demographics. Pure Marketing creates and manages all content for restaurant clients, including photography and video." },
    },
    {
      "@type": "Question",
      name: "Should restaurants use Google Ads?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, especially targeting hungry people nearby searching for specific cuisine or 'restaurants near me'. Combined with Google Business Profile optimization, Google Ads put your restaurant in front of people actively deciding where to eat. Pure Marketing manages restaurant Google Ads from $500/month." },
    },
    {
      "@type": "Question",
      name: "How much does restaurant marketing cost?",
      acceptedAnswer: { "@type": "Answer", text: "Restaurant social media management with Pure Marketing starts from $899/month (includes content creation, daily posting, and engagement). Google Ads management starts from $500/month. Most restaurant clients see positive results within 30-60 days. No long-term contracts required." },
    },
  ],
};

export default function RestaurantsPage() {
  return (
    <>
      <script
        id="service-schema-restaurants"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <script
        id="faq-schema-restaurants"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <IndustryFullPageTemplate config={config} />
      <VideoPortfolio filterLabel="Restaurants" />
    </>
  );
}
