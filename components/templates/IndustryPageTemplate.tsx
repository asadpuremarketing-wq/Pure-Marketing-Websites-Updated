"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import {
  Globe,
  TrendingUp,
  Star,
  Video,
  MapPin,
  Phone,
  CheckCircle,
  ArrowRight,
  Play,
} from "lucide-react";
import CTABanner from "@/components/sections/CTABanner";

const BASE = "https://puremarketing.ca";

const ICON_MAP: Record<string, React.ElementType> = {
  Globe,
  TrendingUp,
  Star,
  Video,
  MapPin,
  Phone,
  CheckCircle,
  ArrowRight,
};

const REVIEWS = [
  {
    name: "Dennis Aboagye",
    text: "Excellent social media management service! Very professional, creative, and always responsive. Highly recommend.",
    stars: 5,
  },
  {
    name: "Unnati Oza",
    badge: "Local Guide",
    text: "I have been dealing with Pure marketing from past 5-6 months. Asad has been handling my social media page and he has been very professional and very easy to work with. Results have been great and I would highly recommend Pure Marketing.",
    stars: 5,
  },
  {
    name: "Benard Yeboah",
    text: "Asad does an excellent job managing my social media across multiple platforms. Reliable, and easy to work with.",
    stars: 5,
  },
];

export interface IndustryConfig {
  industry: string;
  badge: string;
  headline: string;
  headlineAccent: string;
  subheadline: string;
  heroStats: { value: string; label: string }[];
  heroWins: { client: string; result: string }[];
  bandStats: { value: string; label: string }[];
  services: { icon: string; name: string; description: string; result: string }[];
  resultQuote: string;
  resultClient: string;
  resultCompany: string;
  resultStat: string;
  resultStatLabel: string;
}

interface Props {
  config: IndustryConfig;
}

export default function IndustryPageTemplate({ config }: Props) {
  const {
    badge,
    headline,
    headlineAccent,
    subheadline,
    heroStats,
    heroWins,
    bandStats,
    services,
    industry,
    resultQuote,
    resultClient,
    resultCompany,
    resultStat,
    resultStatLabel,
  } = config;

  const slug = industry.toLowerCase().replace(/\s+/g, "-");
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE}/#organization`,
    name: "Pure Marketing",
    url: `${BASE}/industries/${slug}`,
    telephone: "+16479512786",
    email: "info@puremarketing.ca",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hamilton",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    description: `Pure Marketing provides specialized digital marketing services for ${industry.toLowerCase()} businesses across Canada, including Google Ads, lead generation, and web design.`,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Digital Marketing Services for ${industry}`,
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, description: s.description },
      })),
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Script
        id={`local-business-schema-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {/* ── SECTION 1: HERO ────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#111]">
        {/* Background layers */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#111] to-[#0a0a0a]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_70%_50%,_rgba(240,100,40,0.12),_transparent)]" />
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: "radial-gradient(#F06428 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        <div className="max-w-[1200px] w-full mx-auto px-6 relative z-10 py-20 pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Left col */}
            <div className="flex flex-col items-start space-y-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-accent-primary/10 border border-accent-primary/30 rounded-full px-4 py-1.5"
              >
                <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
                <span className="text-accent-primary text-xs font-semibold uppercase tracking-widest">
                  {badge}
                </span>
              </motion.div>

              <motion.h1
                className="text-[38px] md:text-[56px] leading-[1.1] font-bold text-white tracking-tight"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                {headline}
                <br />
                <span className="text-accent-primary">{headlineAccent}</span>
              </motion.h1>

              <motion.p
                className="text-[17px] text-[#aaa] max-w-[500px] leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {subheadline}
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-start gap-3 pt-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-accent-primary text-white rounded-lg px-7 py-4 font-bold text-[15px] hover:bg-[#D9531E] transition-colors duration-300 shadow-lg shadow-accent-primary/30"
                >
                  Get a Free Marketing Plan
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+16479512786"
                  className="inline-flex items-center gap-2 border border-white/20 text-white/80 rounded-lg px-6 py-4 hover:border-white/40 hover:text-white transition-all duration-300 text-sm"
                >
                  <Phone className="w-4 h-4" />
                  +1 647-951-2786
                </a>
              </motion.div>

              <motion.p
                className="text-sm text-[#666] pt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                No contracts · Results in 30 days · Free strategy call
              </motion.p>
            </div>

            {/* Right col - desktop only */}
            <motion.div
              className="hidden lg:flex flex-col gap-4"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <p className="text-xs text-[#666] uppercase tracking-widest font-medium mb-5">
                  {industry} Results at a Glance
                </p>
                <div className="grid grid-cols-2 gap-5 mb-6">
                  {heroStats.map(({ value, label }) => (
                    <div key={label} className="flex flex-col items-center text-center gap-1">
                      <span className="text-[28px] font-bold text-white">{value}</span>
                      <span className="text-xs text-[#666]">{label}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/10 pt-5 space-y-3">
                  <p className="text-xs text-[#666] uppercase tracking-widest font-medium mb-3">
                    Recent Wins
                  </p>
                  {heroWins.map(({ client, result }) => (
                    <div key={client} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-sm font-semibold text-white">{client}</span>
                        <span className="text-sm text-[#888]"> - {result}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mini CTA card */}
              <div className="bg-gradient-to-r from-accent-primary to-[#d8612a] rounded-2xl p-5 flex items-center justify-between">
                <div>
                  <p className="text-white font-bold text-[15px]">Free Marketing Audit</p>
                  <p className="text-white/75 text-sm mt-0.5">No commitment. 30-minute call.</p>
                </div>
                <Link
                  href="/contact"
                  className="bg-white text-accent-primary text-sm font-bold rounded-xl px-4 py-2 hover:bg-white/90 transition-colors flex-shrink-0 ml-4"
                >
                  Book Now →
                </Link>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
            <motion.div
              className="w-1.5 h-1.5 bg-accent-primary rounded-full"
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>

      {/* ── SECTION 2: VIDEO ───────────────────────────────────── */}
      <section className="bg-background-secondary py-20">
        <div className="max-w-[900px] mx-auto px-6 flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-accent-primary text-xs font-semibold uppercase tracking-widest mb-4 text-center"
          >
            See It In Action
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-[28px] md:text-[38px] font-bold text-text-primary text-center leading-tight mb-4"
          >
            How We Grow {industry} Businesses
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-[17px] text-text-secondary text-center max-w-[580px] mb-10"
          >
            Watch this short overview to see exactly how we generate leads for {industry.toLowerCase()} and why our clients get results within 30 days.
          </motion.p>

          {/* Video placeholder - replace src="" with YouTube/Vimeo embed URL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full aspect-video bg-[#111] rounded-2xl border border-border shadow-2xl relative flex flex-col items-center justify-center overflow-hidden mb-10 group cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="w-20 h-20 bg-accent-primary rounded-full flex items-center justify-center mb-4 z-10"
            >
              <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
            </motion.div>
            <span className="text-white/60 text-sm font-medium z-10">2 min overview</span>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{ backgroundImage: "radial-gradient(#F06428 1px, transparent 1px)", backgroundSize: "28px 28px" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {["Proven Lead Systems", "Industry Specialists", "Results in 30 Days"].map((pill) => (
              <div key={pill} className="bg-background-card border border-border rounded-full px-5 py-2.5 text-sm text-text-secondary font-medium shadow-sm">
                {pill}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 3: STATS BAND ──────────────────────────────── */}
      <section className="bg-[#111] py-16 border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {bandStats.map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-[48px] md:text-[56px] font-bold text-white leading-none mb-2">
                  {value}
                </div>
                <div className="text-[#666] text-sm font-medium">{label}</div>
                <div className="w-8 h-0.5 bg-accent-primary mx-auto mt-4 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: SERVICES ────────────────────────────────── */}
      <section className="bg-background-secondary py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col items-start mb-12">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-accent-primary text-xs font-semibold uppercase tracking-widest mb-3"
            >
              Our Services
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-[28px] md:text-[38px] font-bold text-text-primary tracking-tight leading-tight"
            >
              What We Do For {industry}
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const Icon = ICON_MAP[service.icon] ?? Globe;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative group bg-background-card border border-border rounded-2xl p-7 hover:border-accent-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col gap-4"
                >
                  {/* Hover expand circle */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-0 h-0 rounded-full bg-accent-primary/[0.06] group-hover:w-[300px] group-hover:h-[300px] transition-all duration-500 ease-out" />
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 w-11 h-11 rounded-xl bg-accent-primary/10 group-hover:bg-accent-primary/20 flex items-center justify-center transition-colors duration-300 flex-shrink-0">
                    <Icon className="w-5 h-5 text-accent-primary" />
                  </div>

                  {/* Text */}
                  <div className="relative z-10">
                    <h3 className="text-[18px] font-bold text-text-primary mb-2">{service.name}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{service.description}</p>
                  </div>

                  {/* Result pill */}
                  <div className="relative z-10 mt-auto flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 bg-accent-primary/10 text-accent-primary text-xs font-semibold rounded-full px-3 py-1">
                      {service.result}
                    </span>
                    <Link
                      href="/contact"
                      className="text-sm font-semibold text-accent-primary inline-flex items-center gap-1 hover:gap-2 transition-all duration-200"
                    >
                      Learn more <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: HOW IT WORKS ────────────────────────────── */}
      <section className="bg-background-primary py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-accent-primary text-xs font-semibold uppercase tracking-widest mb-3"
            >
              Our Process
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-[28px] md:text-[38px] font-bold text-text-primary tracking-tight"
            >
              Simple. Proven. Effective.
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-8 left-[calc(16.67%+16px)] right-[calc(16.67%+16px)] h-0.5 bg-border z-0" />

            {[
              {
                step: "01",
                title: "Free Audit",
                desc: "We review your current marketing, website, and Google presence. No cost, no obligation - just a clear picture of where you stand and where the opportunities are.",
              },
              {
                step: "02",
                title: "We Build & Launch",
                desc: "We build your campaigns, ads, and content - everything optimized for your industry and city. From first draft to live in as little as 7 days.",
              },
              {
                step: "03",
                title: "Leads Start Coming In",
                desc: "Within 30 days your phone starts ringing with qualified leads. We track everything, report weekly, and keep optimizing to grow your results month over month.",
              },
            ].map(({ step, title, desc }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative z-10 flex flex-col items-center text-center gap-4"
              >
                {/* Number circle */}
                <div className="w-16 h-16 rounded-full bg-accent-primary flex items-center justify-center text-white text-[22px] font-bold shadow-lg shadow-accent-primary/30">
                  {step}
                </div>
                <h3 className="text-[20px] font-bold text-text-primary">{title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed max-w-[280px]">{desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="mt-14 text-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent-primary text-white rounded-lg px-8 py-4 font-bold text-[15px] hover:bg-[#D9531E] transition-colors duration-300 shadow-lg shadow-accent-primary/30"
            >
              Start With a Free Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 6: RESULTS CALLOUT ─────────────────────────── */}
      <section className="bg-[#111] py-24">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-accent-primary text-xs font-semibold uppercase tracking-widest mb-6"
          >
            Real Results
          </motion.p>

          <motion.blockquote
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[22px] md:text-[30px] text-white font-medium leading-relaxed mb-10 italic"
          >
            &ldquo;{resultQuote}&rdquo;
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col items-center gap-2 mb-10"
          >
            <span className="text-[72px] md:text-[96px] font-bold text-accent-primary leading-none">
              {resultStat}
            </span>
            <span className="text-[#666] text-sm font-medium uppercase tracking-widest">{resultStatLabel}</span>
            <span className="text-white font-semibold text-lg mt-2">{resultClient}</span>
            <span className="text-[#888] text-sm">{resultCompany}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent-primary text-white rounded-lg px-8 py-4 font-bold text-[15px] hover:bg-[#D9531E] transition-colors duration-300 shadow-lg shadow-accent-primary/30"
            >
              Get Results Like This
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 7: REVIEWS ─────────────────────────────────── */}
      <section className="bg-background-primary py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-accent-primary text-xs font-semibold uppercase tracking-widest mb-3"
            >
              Google Reviews
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-[28px] md:text-[38px] font-bold text-text-primary tracking-tight"
            >
              What Our Clients Say
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((review, i) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-background-card border border-border rounded-2xl p-7 flex flex-col gap-4 hover:border-accent-primary/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: review.stars }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent-primary text-accent-primary" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-sm text-text-secondary leading-relaxed flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Attribution */}
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <div>
                    <p className="text-sm font-bold text-text-primary">{review.name}</p>
                    {review.badge && (
                      <p className="text-xs text-text-muted">{review.badge}</p>
                    )}
                  </div>
                  <span className="text-xs text-text-muted font-medium">Posted on Google</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: CTA BANNER ──────────────────────────────── */}
      <CTABanner />
    </div>
  );
}
