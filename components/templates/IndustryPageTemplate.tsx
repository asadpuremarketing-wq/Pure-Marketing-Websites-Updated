"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import AutoCarousel from "@/components/ui/AutoCarousel";
import {
  Globe,
  TrendingUp,
  Star,
  Video,
  MapPin,
  Phone,
  CheckCircle,
  ArrowRight,
  Quote,
  FileText,
  Target,
  Share2,
  Settings,
  RefreshCw,
  Search,
  Monitor,
  BarChart2,
  Zap,
  ChevronRight,
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
  FileText,
  Target,
  Share2,
  Settings,
  RefreshCw,
  Search,
  Monitor,
  BarChart2,
  Zap,
  ChevronRight,
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

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.55, delay },
});

// Google "G" logo SVG
function GoogleG() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

export interface PainPoint {
  icon: string;
  title: string;
  desc: string;
}

export interface GrowthStep {
  num: string;
  icon: string;
  title: string;
  desc: string;
}

export interface IndustryConfig {
  industry: string;
  badge: string;
  headline: string;
  headlineAccent: string;
  subheadline: string;
  heroStats: { value: string; label: string }[];
  heroWins: { client: string; result: string }[];
  bandStats: { value: string; label: string }[];
  painPoints?: PainPoint[];
  growthSteps?: GrowthStep[];
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

const DEFAULT_GROWTH_STEPS: GrowthStep[] = [
  { num: "01", icon: "Globe",       title: "Website & Landing Page",     desc: "A high-converting, mobile-first website built to turn visitors into booked leads." },
  { num: "02", icon: "MapPin",      title: "Google Business Profile",    desc: "Fully optimized GBP so you dominate local map searches and get more calls." },
  { num: "03", icon: "Star",        title: "Reviews & Reputation",       desc: "Automated systems to earn 5-star reviews consistently after every job." },
  { num: "04", icon: "BarChart2",   title: "Tracking & Analytics",       desc: "Full visibility into where every lead comes from so we optimize what works." },
  { num: "05", icon: "Video",       title: "Monthly Content",            desc: "Project photos, short videos, and branded posts that build authority month after month." },
  { num: "06", icon: "TrendingUp",  title: "Google Ads & LSA",           desc: "High-intent search campaigns targeting customers ready to hire right now." },
  { num: "07", icon: "Share2",      title: "Meta Ads",                   desc: "Facebook & Instagram ads for awareness, retargeting, and consistent lead flow." },
  { num: "08", icon: "Zap",         title: "Follow-Up Automation",       desc: "Instant responses, missed-call texts, and email sequences so no lead goes cold." },
  { num: "09", icon: "TrendingUp",  title: "SEO & Geo Growth",           desc: "Long-term local SEO that compounds over time, bringing organic leads every month." },
];

const DEFAULT_PAIN_POINTS: PainPoint[] = [
  {
    icon: "TrendingUp",
    title: "No Consistent Lead Flow",
    desc: "Most businesses rely on word-of-mouth and referrals — unpredictable, seasonal, and impossible to scale.",
  },
  {
    icon: "Globe",
    title: "Invisible Online",
    desc: "Without a strong website and Google presence, you're losing customers to competitors every single day.",
  },
  {
    icon: "BarChart",
    title: "Wasted Ad Spend",
    desc: "Running ads without the right strategy means burning money on clicks that never convert into paying customers.",
  },
];

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

  const painPoints   = config.painPoints  ?? DEFAULT_PAIN_POINTS;
  const growthSteps  = config.growthSteps ?? DEFAULT_GROWTH_STEPS;

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

      {/* ── SECTION 1: HERO ─────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080808]">
        {/* Background layers */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#111] via-[#080808] to-[#050505]" />
          {/* Ambient orange glow blob */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-primary/10 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-accent-primary/5 blur-[100px] pointer-events-none" />
          {/* Dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.07]"
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
                className="text-[38px] md:text-[56px] leading-[1.1] font-black text-white tracking-tight"
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
                  className="inline-flex items-center gap-2 bg-accent-primary text-white rounded-xl px-7 py-4 font-black text-[15px] hover:bg-[#D9531E] transition-colors duration-300 shadow-lg shadow-accent-primary/30"
                >
                  Get a Free Marketing Plan
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+16479512786"
                  className="inline-flex items-center gap-2 border border-white/20 text-white/80 rounded-xl px-6 py-4 hover:border-white/40 hover:text-white transition-all duration-300 text-sm"
                >
                  <Phone className="w-4 h-4" />
                  +1 647-951-2786
                </a>
              </motion.div>

              <motion.p
                className="text-sm text-[#555]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                No contracts · Results in 30 days · Free strategy call
              </motion.p>
            </div>

            {/* Right col — dashboard card */}
            <motion.div
              className="hidden lg:flex flex-col gap-4"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Stats card */}
              <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <p className="text-xs text-[#555] uppercase tracking-widest font-semibold mb-5">
                  {industry} Results at a Glance
                </p>
                <div className="grid grid-cols-2 gap-5 mb-6">
                  {heroStats.map(({ value, label }) => (
                    <div key={label} className="flex flex-col items-center text-center gap-1">
                      <span className="text-[32px] font-black text-white leading-none">{value}</span>
                      <span className="text-xs text-[#555]">{label}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/[0.08] pt-5 space-y-3">
                  <p className="text-xs text-[#555] uppercase tracking-widest font-semibold mb-3">
                    Recent Wins
                  </p>
                  {heroWins.map(({ client, result }) => (
                    <div key={client} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-sm font-bold text-white">{client}</span>
                        <span className="text-sm text-[#777]"> — {result}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mini CTA card */}
              <div className="bg-gradient-to-r from-accent-primary to-[#d8612a] rounded-2xl p-5 flex items-center justify-between">
                <div>
                  <p className="text-white font-black text-[15px]">Free Marketing Audit</p>
                  <p className="text-white/75 text-sm mt-0.5">No commitment. 30-minute call.</p>
                </div>
                <Link
                  href="/contact"
                  className="bg-white text-accent-primary text-sm font-black rounded-xl px-4 py-2 hover:bg-white/90 transition-colors flex-shrink-0 ml-4"
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

      {/* ── SECTION 2: STATS BAND ───────────────────────────────── */}
      <section className="bg-accent-primary py-5">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {bandStats.map(({ value, label }, i) => (
              <div
                key={label}
                className={`text-center py-3 ${i < bandStats.length - 1 ? "border-r border-white/30" : ""}`}
              >
                <div className="text-[28px] md:text-[34px] font-black text-white leading-none mb-1">
                  {value}
                </div>
                <div className="text-white/80 text-xs font-semibold uppercase tracking-widest">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: PROBLEM / PAIN POINTS ───────────────────── */}
      <section className="bg-[#080808] py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <motion.p {...fadeUp(0)} className="text-accent-primary text-xs font-semibold uppercase tracking-widest mb-4">
              The Challenge
            </motion.p>
            <motion.h2
              {...fadeUp(0.1)}
              className="text-[28px] md:text-[40px] font-black text-white leading-tight max-w-[700px] mx-auto"
            >
              Why {industry} Businesses Struggle to Grow
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {painPoints.map((pt, i) => {
              const Icon = ICON_MAP[pt.icon] ?? Globe;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  className="group bg-white/[0.04] border border-white/10 rounded-2xl p-7 hover:border-accent-primary/30 hover:bg-white/[0.06] transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center mb-5 group-hover:bg-accent-primary/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-accent-primary" />
                  </div>
                  <h3 className="text-[17px] font-black text-white mb-3">{pt.title}</h3>
                  <p className="text-sm text-[#666] leading-relaxed">{pt.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: SERVICES ─────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <motion.p {...fadeUp(0)} className="text-accent-primary text-xs font-semibold uppercase tracking-widest mb-4">
              What We Do
            </motion.p>
            <motion.h2
              {...fadeUp(0.1)}
              className="text-[28px] md:text-[40px] font-black text-[#0d0d0d] leading-tight"
            >
              Built Specifically for {industry}
            </motion.h2>
          </div>

          <AutoCarousel
            perPage={3}
            interval={3500}
            items={services.map((service, i) => {
              const Icon = ICON_MAP[service.icon] ?? Globe;
              return (
                <div
                  key={i}
                  className="group relative bg-white border-2 border-[#ebebeb] rounded-2xl p-7 hover:border-accent-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col gap-4 h-full"
                >
                  <span className="absolute top-4 right-5 text-[48px] font-black text-[#ebebeb] leading-none select-none pointer-events-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="relative z-10 w-12 h-12 rounded-2xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center group-hover:bg-accent-primary/15 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-accent-primary" />
                  </div>
                  <div className="relative z-10 flex-grow">
                    <h3 className="text-[18px] font-black text-[#0d0d0d] mb-2">{service.name}</h3>
                    <p className="text-sm text-[#666] leading-relaxed">{service.description}</p>
                  </div>
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="inline-flex items-center bg-accent-primary/10 text-accent-primary text-xs font-semibold rounded-full px-3 py-1">
                      {service.result}
                    </span>
                    <Link href="/contact" className="text-sm font-semibold text-accent-primary inline-flex items-center gap-1 hover:gap-2 transition-all duration-200">
                      Learn more <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          />
        </div>
      </section>

      {/* ── SECTION 4b: 9-STEP GROWTH SYSTEM ───────────────────── */}
      <section className="bg-[#080808] py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent-primary/5 blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <motion.p {...fadeUp(0)} className="text-accent-primary text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
              The Solution
            </motion.p>
            <motion.h2 {...fadeUp(0.08)} className="text-[28px] md:text-[48px] font-black text-white leading-tight tracking-tight">
              The 9-Step {industry} Growth System
            </motion.h2>
            <motion.p {...fadeUp(0.14)} className="text-[#555] text-[15px] mt-4 max-w-[520px] mx-auto">
              Every component works together — one compounding system that brings in more leads every single month.
            </motion.p>
          </div>

          <AutoCarousel
            dark
            perPage={3}
            interval={3200}
            items={growthSteps.map(({ num, icon, title, desc }) => {
              const Icon = ICON_MAP[icon] ?? Globe;
              return (
                <div
                  key={num}
                  className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.03] p-7 hover:border-accent-primary/40 hover:bg-white/[0.06] transition-all duration-300 overflow-hidden cursor-default h-full"
                >
                  <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-accent-primary/0 group-hover:bg-accent-primary/[0.08] blur-2xl transition-all duration-500 pointer-events-none" />
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center group-hover:bg-accent-primary/20 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-accent-primary" />
                    </div>
                    <span className="text-[#252525] text-[40px] font-black leading-none select-none group-hover:text-[#333] transition-colors duration-300">
                      {num}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-[17px] mb-2">{title}</h3>
                  <p className="text-[#555] text-[13px] leading-relaxed">{desc}</p>
                  <div className="mt-5 pt-4 border-t border-white/5">
                    <span className="text-accent-primary text-[12px] font-semibold flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                      Included in your system <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          />
        </div>
      </section>

      {/* ── SECTION 5: HOW IT WORKS ─────────────────────────────── */}
      <section className="bg-[#0d0d0d] py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <motion.p {...fadeUp(0)} className="text-accent-primary text-xs font-semibold uppercase tracking-widest mb-4">
              Our Process
            </motion.p>
            <motion.h2
              {...fadeUp(0.1)}
              className="text-[28px] md:text-[38px] font-black text-white tracking-tight"
            >
              Simple. Proven. Effective.
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-8 left-[calc(16.67%+16px)] right-[calc(16.67%+16px)] h-px bg-white/10 z-0" />

            {[
              {
                step: "01",
                title: "Free Audit",
                desc: "We review your current marketing, website, and Google presence. No cost, no obligation — just a clear picture of where you stand and where the opportunities are.",
              },
              {
                step: "02",
                title: "Build & Launch",
                desc: "We build your campaigns, ads, and content — everything optimized for your industry and city. From first draft to live in as little as 7 days.",
              },
              {
                step: "03",
                title: "Leads Come In",
                desc: "Within 30 days your phone starts ringing with qualified leads. We track everything, report weekly, and keep optimizing to grow your results month over month.",
              },
            ].map(({ step, title, desc }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.15 }}
                className="relative z-10 flex flex-col items-center text-center gap-4"
              >
                {/* Numbered circle */}
                <div className="w-16 h-16 rounded-full bg-accent-primary flex items-center justify-center text-white text-[22px] font-black shadow-lg shadow-accent-primary/30">
                  {step}
                </div>
                <h3 className="text-[20px] font-black text-white">{title}</h3>
                <p className="text-sm text-[#666] leading-relaxed max-w-[280px]">{desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeUp(0.5)}
            className="mt-14 text-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent-primary text-white rounded-xl px-8 py-4 font-black text-[15px] hover:bg-[#D9531E] transition-colors duration-300 shadow-lg shadow-accent-primary/30"
            >
              Start With a Free Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 6: RESULTS CALLOUT ──────────────────────────── */}
      <section className="bg-[#080808] py-20">
        <div className="max-w-[860px] mx-auto px-6 text-center">
          <motion.p {...fadeUp(0)} className="text-accent-primary text-xs font-semibold uppercase tracking-widest mb-8">
            Real Results
          </motion.p>

          {/* Large quote */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative mb-10"
          >
            <Quote className="w-12 h-12 text-accent-primary/20 mx-auto mb-4" fill="currentColor" />
            <blockquote className="text-[22px] md:text-[28px] text-white font-black leading-relaxed italic">
              &ldquo;{resultQuote}&rdquo;
            </blockquote>
          </motion.div>

          {/* Big metric */}
          <motion.div
            {...fadeUp(0.2)}
            className="flex flex-col items-center gap-2 mb-10"
          >
            <span className="text-[72px] md:text-[96px] font-black text-accent-primary leading-none">
              {resultStat}
            </span>
            <span className="text-[#555] text-xs font-semibold uppercase tracking-widest">{resultStatLabel}</span>
            <span className="text-white font-black text-lg mt-2">{resultClient}</span>
            <span className="text-[#666] text-sm">{resultCompany}</span>
          </motion.div>

          <motion.div {...fadeUp(0.3)}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent-primary text-white rounded-xl px-8 py-4 font-black text-[15px] hover:bg-[#D9531E] transition-colors duration-300 shadow-lg shadow-accent-primary/30"
            >
              Get Results Like This
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 7: REVIEWS ──────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <motion.p {...fadeUp(0)} className="text-accent-primary text-xs font-semibold uppercase tracking-widest mb-4">
              Google Reviews
            </motion.p>
            <motion.h2
              {...fadeUp(0.1)}
              className="text-[28px] md:text-[38px] font-black text-[#0d0d0d] tracking-tight"
            >
              What Our Clients Say
            </motion.h2>
            <motion.div {...fadeUp(0.2)} className="flex items-center justify-center gap-1.5 mt-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-accent-primary" fill="currentColor" />
              ))}
              <span className="text-sm text-[#666] ml-1.5 flex items-center gap-1.5">
                <GoogleG /> 5.0 on Google
              </span>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((review, i) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="bg-white border border-[#e8e8e8] rounded-2xl p-7 flex flex-col gap-4 hover:border-accent-primary/20 hover:shadow-lg transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: review.stars }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent-primary text-accent-primary" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-sm text-[#444] leading-relaxed flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Attribution */}
                <div className="flex items-center justify-between pt-4 border-t border-[#ebebeb]">
                  <div>
                    <p className="text-sm font-black text-[#0d0d0d]">{review.name}</p>
                    {"badge" in review && review.badge && (
                      <p className="text-xs text-[#999]">{review.badge}</p>
                    )}
                  </div>
                  <GoogleG />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: CTA BANNER ───────────────────────────────── */}
      <CTABanner />
    </div>
  );
}
