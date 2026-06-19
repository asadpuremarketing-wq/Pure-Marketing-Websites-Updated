import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import IntroVideo from "@/components/sections/IntroVideo";
import StatsSection from "@/components/sections/StatsSection";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import CTABanner from "@/components/sections/CTABanner";
import ContactSection from "@/components/sections/ContactSection";

const VideoTestimonials = dynamic(() => import("@/components/sections/VideoTestimonials"));
const ClientsCarousel = dynamic(() => import("@/components/sections/ClientsCarousel"));
const Reviews = dynamic(() => import("@/components/sections/Reviews"));

const BASE = "https://puremarketing.ca";

export const metadata: Metadata = {
  title: "Pure Marketing | Digital Marketing Agency Hamilton, Ontario",
  description:
    "Pure Marketing is Hamilton's top digital marketing agency. We help local service businesses get more leads with Google Ads, Meta Ads, web design, and local SEO. Book a free strategy call.",
  alternates: { canonical: BASE },
  openGraph: {
    url: BASE,
    title: "Pure Marketing | Digital Marketing Agency Hamilton, Ontario",
    description:
      "Hamilton-based digital marketing agency helping electricians, plumbers, HVAC companies, and local businesses get more qualified leads.",
  },
};

const WEBPAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${BASE}/#webpage`,
  url: BASE,
  name: "Pure Marketing - Digital Marketing Agency Hamilton, Ontario",
  isPartOf: { "@id": `${BASE}/#website` },
  about: { "@id": `${BASE}/#organization` },
  description:
    "Pure Marketing helps local service businesses in Hamilton and across Canada get more leads with Google Ads, Meta Ads, web design, and conversion-focused marketing.",
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

const VIDEO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "@id": `${BASE}/#intro-video`,
  name: "How Pure Marketing Helps Local Businesses Generate More Leads",
  description:
    "A 2-minute overview of the exact system Pure Marketing uses to help local service businesses get consistent, qualified leads with Google Ads, Meta Ads, and conversion-focused web design.",
  thumbnailUrl: "https://img.youtube.com/vi/dCJCZmdhcNM/maxresdefault.jpg",
  uploadDate: "2024-01-15T00:00:00+00:00",
  duration: "PT2M",
  contentUrl: "https://www.youtube.com/watch?v=dCJCZmdhcNM",
  embedUrl: "https://www.youtube.com/embed/dCJCZmdhcNM",
  publisher: { "@id": `${BASE}/#organization` },
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
        text: "Pure Marketing is a digital marketing agency based in Hamilton, Ontario, Canada. Founded by Asad, the agency specializes in helping local service businesses get consistent, qualified leads through Google Ads, Meta Ads, web design, social media management, lead generation, and video production.",
      },
    },
    {
      "@type": "Question",
      name: "What services does Pure Marketing offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pure Marketing offers six core services: Lead Generation (clients average 40-80 qualified leads/month, starting from $1,499/mo); Google Ads and Meta Ads management (average 5-8x return on ad spend, from $500/mo); Conversion-focused web design and development; Social media management on Instagram, Facebook, and TikTok (from $899/mo); Professional video production including reels and testimonials (from $699); and Local SEO to improve Google Maps and search rankings.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Pure Marketing located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pure Marketing is located in Hamilton, Ontario, Canada. The agency serves clients throughout the Greater Toronto Area (Mississauga, Brampton, Burlington, Oakville), across Ontario, and provides remote digital marketing services to businesses across Canada and the United States. Office hours are Monday to Friday, 8 AM to 8 PM Eastern Time.",
      },
    },
    {
      "@type": "Question",
      name: "How much does Pure Marketing charge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pure Marketing pricing: Lead generation from $1,499/month; Google Ads and Meta Ads management from $500/month; social media management from $899/month; video production from $699 per project. Web design is custom-quoted. All services are month-to-month with no long-term contracts required.",
      },
    },
    {
      "@type": "Question",
      name: "Does Pure Marketing require long-term contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Pure Marketing operates on a month-to-month basis with no long-term contracts. You can cancel any service at any time. The agency believes in earning ongoing business through results.",
      },
    },
    {
      "@type": "Question",
      name: "How do I book a free strategy call with Pure Marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Book a free 30-minute strategy call at puremarketing.ca. Calls are conducted via Google Meet, available Monday to Friday, 8 AM to 8 PM Eastern Time. You can also email info@puremarketing.ca or call +1 647-951-2786.",
      },
    },
    {
      "@type": "Question",
      name: "What industries does Pure Marketing work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pure Marketing specializes in local service businesses including electricians, plumbers, HVAC companies, landscapers, roofers, general contractors, painting companies, real estate agents, and cleaning services. The agency focuses on businesses that depend on local leads rather than e-commerce.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can Pure Marketing generate leads for my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With Google Ads and Meta Ads, most clients start seeing qualified leads within 7-14 days of campaign launch. Clients typically reach 40-80 qualified leads per month once campaigns are fully optimized, usually within 30-60 days.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script id="webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script id="website-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }} />
      <script id="video-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(VIDEO_SCHEMA) }} />

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
