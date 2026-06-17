import type { Metadata } from "next";

const BASE = "https://puremarketing.ca";

export const metadata: Metadata = {
  title: "Contact Us | Free Marketing Audit - Pure Marketing Hamilton",
  description:
    "Book a free strategy call with Pure Marketing. We serve local businesses in Hamilton, Ontario and across Canada. Call +1 647-951-2786 or email info@puremarketing.ca.",
  keywords: [
    "contact Pure Marketing",
    "marketing agency Hamilton contact",
    "free marketing audit Hamilton",
    "book strategy call Hamilton",
  ],
  alternates: { canonical: `${BASE}/contact` },
  openGraph: {
    url: `${BASE}/contact`,
    title: "Contact Us | Free Marketing Audit - Pure Marketing",
    description:
      "Get a free marketing audit from Pure Marketing. We help Hamilton-area businesses grow with Google Ads, web design, and lead generation.",
  },
};

const CONTACT_PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${BASE}/contact#webpage`,
  url: `${BASE}/contact`,
  name: "Contact Pure Marketing | Book a Free Strategy Call",
  description:
    "Contact Pure Marketing to book a free 30-minute strategy call. Reach us by phone at +1 647-951-2786, email info@puremarketing.ca, or fill out our contact form.",
  isPartOf: { "@id": `${BASE}/#website` },
  about: { "@id": `${BASE}/#organization` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Contact", item: `${BASE}/contact` },
    ],
  },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the cost to get started with Pure Marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Costs vary depending on what you need. A website alone starts at $2,500. Lead generation starts at $1,500/month. We offer a free audit to discuss your specific needs and provide an accurate quote.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can Pure Marketing get me leads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We can have campaigns live within 7-10 days. Most clients see their first leads within 2-3 weeks. Significant results typically come in 30-60 days as campaigns optimize.",
      },
    },
    {
      "@type": "Question",
      name: "What if I am not happy with the results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer a 30-day results guarantee. If you are not seeing progress, we will either optimize your campaigns or refund your month's fees.",
      },
    },
    {
      "@type": "Question",
      name: "Does Pure Marketing work with businesses outside of local services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specialize in local service businesses, restaurants, and real estate. If you are in another industry, we can discuss if we are the right fit.",
      },
    },
    {
      "@type": "Question",
      name: "Can I cancel my Pure Marketing service at any time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. No long-term contracts. You can pause, modify, or cancel anytime. We prefer to earn your business every month rather than lock you in.",
      },
    },
    {
      "@type": "Question",
      name: "How does Pure Marketing report on results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Monthly reports via email showing leads, calls, bookings, revenue, and ROI from each campaign. You have a dedicated account manager for questions.",
      },
    },
  ],
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script id="contact-page-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(CONTACT_PAGE_SCHEMA) }} />
      <script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      {children}
    </>
  );
}
