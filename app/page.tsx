import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";

const IntroVideo = dynamic(() => import("@/components/sections/IntroVideo"));
const Services = dynamic(() => import("@/components/sections/Services"));
const HowItWorks = dynamic(() => import("@/components/sections/HowItWorks"));
const StatsSection = dynamic(() => import("@/components/sections/StatsSection"));
const VideoTestimonials = dynamic(() => import("@/components/sections/VideoTestimonials"));
const ClientsCarousel = dynamic(() => import("@/components/sections/ClientsCarousel"));
const Reviews = dynamic(() => import("@/components/sections/Reviews"));
const ContactSection = dynamic(() => import("@/components/sections/ContactSection"));
const CTABanner = dynamic(() => import("@/components/sections/CTABanner"));

const BASE = "https://puremarketing.ca";

export const metadata: Metadata = {
  title: "Local Lead Generation for Canadian Service Businesses | Pure Marketing",
  description:
    "Pure Marketing helps Canadian local service businesses get more calls, estimates, and booked jobs through local lead generation: paid advertising, Google Maps visibility, AI search discoverability, and lead conversion. Get a free local growth assessment.",
  alternates: { canonical: BASE },
  openGraph: {
    url: BASE,
    title: "Local Lead Generation for Canadian Service Businesses | Pure Marketing",
    description:
      "We help Canadian contractors and local service companies attract more customers through a complete local lead generation system.",
  },
};

const WEBPAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${BASE}/#webpage`,
  url: BASE,
  name: "Pure Marketing - Local Lead Generation for Canadian Service Businesses",
  isPartOf: { "@id": `${BASE}/#website` },
  about: { "@id": `${BASE}/#organization` },
  description:
    "Pure Marketing helps Canadian local service businesses generate more qualified customer inquiries, calls, and job opportunities through a complete local lead generation system.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    ],
  },
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE}/#website`,
  url: BASE,
  name: "Pure Marketing",
  publisher: { "@id": `${BASE}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${BASE}/blog?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${BASE}/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Pure Marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pure Marketing is a Canadian local lead generation and customer acquisition specialist based in Hamilton, Ontario. We help local service businesses, contractors, painters, roofers, electricians, plumbers, HVAC companies, and similar trades, generate more qualified calls, estimates, and job opportunities through one coordinated system.",
      },
    },
    {
      "@type": "Question",
      name: "What does Pure Marketing's lead generation system include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our system combines paid customer acquisition (Google Search Ads, Google Local Services Ads, and Meta Ads), Google Maps and local search visibility, AI search discoverability, and lead capture and conversion. These are not separate services you buy individually: they're components of one system, with scope tailored to each client.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Pure Marketing located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pure Marketing is based in Hamilton, Ontario, Canada, and serves local service businesses across Canada. Office hours are Monday to Friday, 8 AM to 8 PM Eastern Time.",
      },
    },
    {
      "@type": "Question",
      name: "Does Pure Marketing require long-term contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Pure Marketing operates on a month-to-month basis with no long-term contracts. You can cancel at any time.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get a free local growth assessment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Submit the contact form at puremarketing.ca or book a free call. We'll review your current online presence and discuss where you may be losing customer inquiries. You can also email info@puremarketing.ca or call +1 647-951-2786.",
      },
    },
    {
      "@type": "Question",
      name: "What types of businesses does Pure Marketing work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specialize in local service businesses: painting companies, roofing contractors, general contractors, renovation companies, electrical contractors, plumbers, HVAC companies, garage door companies, siding and exterior contractors, and landscaping companies.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to see results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Timelines vary by market, competition, and starting point, so we don't promise a fixed number of leads or a guaranteed date. Paid campaigns can go live within days; local search and AI discoverability improvements build over a longer period.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need an existing website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not necessarily, but your site needs to be able to convert visitors into inquiries. If your current site isn't converting, we'll tell you upfront as part of the assessment.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script id="webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="website-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }} />
      <script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <Hero />
      <IntroVideo />
      <Services />
      <HowItWorks />
      <VideoTestimonials />
      <StatsSection />
      <ClientsCarousel />
      <Reviews />
      <ContactSection />
      <CTABanner />
    </>
  );
}
