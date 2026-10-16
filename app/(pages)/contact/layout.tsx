import type { Metadata } from "next";

const BASE = "https://puremarketing.ca";

export const metadata: Metadata = {
  title: "Contact Us | Free Local Growth Assessment - Pure Marketing Hamilton",
  description:
    "Get a free local growth assessment from Pure Marketing. We serve local businesses in Hamilton, Ontario and across Canada. Call +1 647-951-2786 or email info@puremarketing.ca.",
  keywords: [
    "contact Pure Marketing",
    "local lead generation agency Hamilton contact",
    "free local growth assessment Hamilton",
    "book strategy call Hamilton",
  ],
  alternates: { canonical: `${BASE}/contact` },
  openGraph: {
    url: `${BASE}/contact`,
    title: "Contact Us | Free Local Growth Assessment - Pure Marketing",
    description:
      "Get a free local growth assessment from Pure Marketing. We help Hamilton-area businesses get more calls, estimates, and local jobs.",
  },
};

const CONTACT_PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${BASE}/contact#webpage`,
  url: `${BASE}/contact`,
  name: "Contact Pure Marketing | Get a Free Local Growth Assessment",
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
      name: "What does the free local growth assessment include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We review your current online presence, including Google Business Profile, search visibility, and website conversion, and discuss where you may be losing customer inquiries. We'll walk you through recommended scope and budget based on your market and goals.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you get me leads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on your market, competition, and starting point, so we don't promise a fixed timeline. Paid campaigns can go live within days; local search and AI discoverability improvements build over a longer period.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with businesses outside of local services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specialize in local service businesses: contractors, painters, roofers, electricians, plumbers, HVAC companies, and similar trades. If you're in another industry, we can discuss whether we're the right fit.",
      },
    },
    {
      "@type": "Question",
      name: "Can I change or cancel my service at any time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. No long-term contracts. You can pause, modify, or cancel anytime. We prefer to earn your business every month rather than lock you in.",
      },
    },
    {
      "@type": "Question",
      name: "How do you report on results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reports cover leads, calls, and inquiries where tracking data is available, so you can see what's working.",
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
