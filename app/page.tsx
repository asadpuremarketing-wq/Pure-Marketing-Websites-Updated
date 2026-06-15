import type { Metadata } from "next";
import Script from "next/script";
import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import IntroVideo from "@/components/sections/IntroVideo";
import StatsSection from "@/components/sections/StatsSection";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import CTABanner from "@/components/sections/CTABanner";

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

export default function Home() {
  return (
    <>
      <Script id="webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <Script id="website-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }} />
      <Hero />
      <IntroVideo />
      <Services />
      <HowItWorks />
      <VideoTestimonials />
      <StatsSection />
      <ClientsCarousel />
      <Reviews />
      <CTABanner />
    </>
  );
}
