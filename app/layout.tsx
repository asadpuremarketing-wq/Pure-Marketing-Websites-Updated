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
    default: "Pure Marketing | Digital Marketing Agency Hamilton, Ontario",
    template: "%s | Pure Marketing",
  },
  description:
    "Pure Marketing is a Hamilton, Ontario digital marketing agency specializing in Google Ads, Meta Ads, web design, and lead generation for local service businesses across Canada.",
  keywords: [
    "marketing agency Hamilton",
    "digital marketing Hamilton Ontario",
    "Google Ads Hamilton",
    "lead generation Hamilton",
    "web design Hamilton",
    "SEO agency Hamilton Ontario",
    "local service business marketing",
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
    title: "Pure Marketing | Digital Marketing Agency Hamilton, Ontario",
    description:
      "Hamilton-based digital marketing agency helping local service businesses get more leads with Google Ads, Meta Ads, and conversion-focused web design.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Pure Marketing - Digital Marketing Agency Hamilton Ontario",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pure Marketing | Digital Marketing Agency Hamilton, Ontario",
    description:
      "Hamilton-based digital marketing agency helping local service businesses get more leads.",
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
  "@type": "MarketingAgency",
  "@id": `${BASE}/#organization`,
  name: "Pure Marketing",
  url: BASE,
  logo: `${BASE}/favicon.svg`,
  image: `${BASE}/opengraph-image`,
  description:
    "Pure Marketing is a Hamilton, Ontario digital marketing agency specializing in Google Ads, Meta Ads, lead generation, and web design for local service businesses across Canada.",
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
    "Google Ads",
    "Meta Ads",
    "Lead Generation",
    "Local SEO",
    "Web Design",
    "Social Media Marketing",
    "Video Production",
    "Digital Marketing for Local Businesses",
  ],
  slogan: "Strategy. Systems. Growth.",
  priceRange: "$$",
  sameAs: [
    "https://www.instagram.com/puremarketing0",
    "https://www.facebook.com/profile.php?id=61576684511407",
    "https://www.linkedin.com/company/pure-marketing0/",
    "https://maps.app.goo.gl/a1Rx6gwFfTPTayaN9",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Ads Management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Meta Ads Management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Design & Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lead Generation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Local SEO" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Video Production" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "8",
    bestRating: "5",
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
    "Google Ads",
    "Meta Ads",
    "Lead Generation for Local Businesses",
    "Social Media Marketing",
    "Web Design",
    "Video Production",
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
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
