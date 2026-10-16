import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const BASE = "https://puremarketing.ca";

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "Local Lead Generation for Canadian Service Businesses | Pure Marketing",
    template: "%s | Pure Marketing",
  },
  description:
    "Pure Marketing helps Canadian local service businesses generate more qualified customer inquiries, calls, and job opportunities through a complete local lead generation system.",
  keywords: [
    "local lead generation",
    "lead generation for contractors",
    "lead generation for local businesses",
    "home service lead generation",
    "contractor marketing",
    "local customer acquisition",
    "Google Maps optimization for contractors",
    "local SEO for service businesses",
    "Google Ads for contractors",
    "electrician marketing",
    "plumber marketing",
    "HVAC marketing",
    "Pure Marketing",
  ],
  authors: [{ name: "Pure Marketing", url: BASE }],
  creator: "Pure Marketing",
  publisher: "Pure Marketing",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: BASE,
    siteName: "Pure Marketing",
    title: "Local Lead Generation for Canadian Service Businesses | Pure Marketing",
    description:
      "We help Canadian contractors and local service businesses get more calls, estimates, and booked jobs through local lead generation.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Pure Marketing - Local Lead Generation for Canadian Service Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Local Lead Generation for Canadian Service Businesses | Pure Marketing",
    description:
      "We help Canadian contractors and local service businesses get more calls, estimates, and booked jobs.",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: BASE,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION ?? "",
  },
};

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MarketingAgency"],
  "@id": `${BASE}/#organization`,
  name: "Pure Marketing",
  url: BASE,
  logo: `${BASE}/favicon.svg`,
  image: `${BASE}/opengraph-image`,
  description:
    "Pure Marketing is a Hamilton, Ontario based local lead generation and customer acquisition specialist, helping Canadian local service businesses get more calls, estimates, and booked jobs.",
  telephone: "+16479512786",
  email: "info@puremarketing.ca",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hamilton",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.2557,
    longitude: -79.8711,
  },
  areaServed: [
    { "@type": "City", name: "Hamilton", addressRegion: "ON" },
    { "@type": "City", name: "Toronto", addressRegion: "ON" },
    { "@type": "City", name: "Mississauga", addressRegion: "ON" },
    { "@type": "City", name: "Brampton", addressRegion: "ON" },
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "United States" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "20:00",
    },
  ],
  founder: {
    "@type": "Person",
    "@id": `${BASE}/#founder`,
    name: "Asad",
    jobTitle: "Founder & Digital Marketing Specialist",
    worksFor: { "@id": `${BASE}/#organization` },
    url: BASE,
  },
  knowsAbout: [
    "Local Lead Generation",
    "Local Customer Acquisition",
    "Google Ads for Contractors",
    "Google Local Services Ads",
    "Meta Ads for Home Services",
    "Local SEO",
    "Google Maps Optimization",
    "AI Search Discoverability",
  ],
  sameAs: [
    "https://www.instagram.com/puremarketing0",
    "https://www.facebook.com/profile.php?id=61576684511407",
    "https://www.linkedin.com/company/pure-marketing0/",
    "https://maps.app.goo.gl/a1Rx6gwFfTPTayaN9",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Local Lead Generation System",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Local Lead Generation & Customer Acquisition" } },
    ],
  },
};

const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BASE}/#founder`,
  name: "Asad",
  jobTitle: "Founder & Digital Marketing Specialist",
  worksFor: { "@id": `${BASE}/#organization` },
  url: BASE,
  knowsAbout: [
    "Local Lead Generation",
    "Google Ads for Contractors",
    "Local Customer Acquisition",
    "Local SEO",
  ],
  sameAs: [
    "https://www.linkedin.com/company/pure-marketing0/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.youtube-nocookie.com" />
        <link rel="dns-prefetch" href="https://img.youtube.com" />
        <link rel="dns-prefetch" href="https://tracker.metricool.com" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-background-primary text-text-primary min-h-screen flex flex-col`}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-00Y9QWYSJJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-00Y9QWYSJJ');
          `}
        </Script>
        <script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
        />
        <script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_SCHEMA) }}
        />
        {/* Metricool */}
        <Script id="metricool" strategy="afterInteractive">
          {`function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"5a37a45ea1e90be624523d5e245e75b0"})});`}
        </Script>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
