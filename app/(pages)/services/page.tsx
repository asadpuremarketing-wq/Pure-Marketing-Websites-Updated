"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe, TrendingUp, Video, Share2, BarChart2,
  Check, ChevronDown, ChevronRight, MapPin, ArrowRight, Phone,
  Users, Award, Zap, Star,
  Plug, Droplets, Wind, PaintbrushIcon, UtensilsCrossed, Building2, KeyRound, HardHat,
} from "lucide-react";
import Link from "next/link";
import CTABanner from "@/components/sections/CTABanner";
import PageHero from "@/components/ui/PageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";

/* ─── Data ─────────────────────────────────────────────────── */

const TRUST_STATS = [
  { value: "150+", label: "Businesses Served", icon: Users },
  { value: "$2M+", label: "Ad Spend Managed", icon: Award },
  { value: "7–14", label: "Days to First Lead", icon: Zap },
  { value: "4.9★", label: "Client Rating", icon: Star },
];

const SERVICES_DETAILED = [
  {
    icon: Globe,
    title: "Web Development",
    tag: "Foundation",
    description:
      "High-converting websites built from scratch for local service businesses. Every design element, every page, every form is optimized to turn visitors into leads and customers. Mobile-first, fast-loading, SEO-ready.",
    features: [
      "Custom responsive design",
      "Lead capture forms and CTA optimization",
      "Mobile optimization and page speed",
      "SEO technical foundation",
      "Google Analytics and conversion tracking",
      "30 days of revisions and support",
    ],
    result: "Avg. 3× more contact form submissions vs. DIY sites",
    href: "/contact?service=web-development",
  },
  {
    icon: TrendingUp,
    title: "Lead Generation System",
    tag: "Most Popular",
    description:
      "A complete done-for-you lead generation engine. Google Local Service Ads, Google Ads, Meta Ads, and organic social all working together — managed, optimized, and reported every month.",
    features: [
      "Google Local Service Ads setup and management",
      "Google Search Ads strategy and optimization",
      "Meta Ads (Facebook and Instagram) campaign creation",
      "Keyword research and targeting",
      "Monthly performance reports and optimization",
      "Dedicated account manager",
    ],
    result: "Clients average 40–80 qualified leads per month",
    href: "/contact?service=lead-generation",
  },
  {
    icon: Video,
    title: "Video Production",
    tag: "Brand Building",
    description:
      "Professional video production for your business. From 30-second social media clips to full brand story videos to property tours and food content. Content that drives engagement and leads.",
    features: [
      "Professional video shoots (multiple formats)",
      "Concept development and scripting",
      "Professional editing and color grading",
      "Multi-format delivery (social, web, ads)",
      "Stock music and motion graphics",
      "Unlimited revisions until satisfied",
    ],
    result: "Video content gets 4× more reach than static posts",
    href: "/contact?service=video-production",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    tag: "Stay Top of Mind",
    description:
      "We own your social media so you do not have to. Daily content creation, posting across all platforms, community engagement, and growth strategy — keeping your business top of mind locally.",
    features: [
      "Daily content creation and posting",
      "Multi-platform management (Instagram, Facebook, TikTok, LinkedIn)",
      "Community engagement and response management",
      "Monthly content calendar and strategy",
      "Growth and analytics reporting",
      "Quarterly strategy reviews",
    ],
    result: "Average 2× follower growth in the first 90 days",
    href: "/contact?service=social-media",
  },
  {
    icon: BarChart2,
    title: "Google and Meta Ads",
    tag: "Paid Traffic",
    description:
      "Specialized paid advertising management for local businesses. Every dollar spent is tied to leads, calls, bookings, or revenue. Continuous testing and optimization every single week.",
    features: [
      "Campaign strategy and setup",
      "Keyword research and audience targeting",
      "Ad copy and creative development",
      "Bid management and budget optimization",
      "Weekly performance monitoring",
      "Monthly detailed reporting and recommendations",
    ],
    result: "Average 5–8× return on ad spend for local clients",
    href: "/contact?service=google-meta-ads",
  },
];

const PACKAGES = [
  {
    title: "Build Your Own",
    subtext: "Pick the services you need",
    price: "From $1,500",
    period: "/month",
    roi: "Ideal for businesses testing one channel first",
    features: [
      "Choose any single service",
      "No minimum contract",
      "Month-to-month",
      "Dedicated support",
    ],
    button: "Start With One Service",
    href: "/contact?service=custom",
    popular: false,
  },
  {
    title: "Growth Package",
    subtext: "The complete lead system",
    price: "$4,500",
    period: "/month",
    roi: "Clients typically see 6–10× ROI within 90 days",
    features: [
      "Custom website",
      "Full lead generation system",
      "Daily social media management",
      "One video shoot per month",
      "Monthly reporting",
      "Dedicated account manager",
    ],
    button: "Start Growing Now",
    href: "/contact?service=growth-package",
    popular: true,
  },
  {
    title: "Premium System",
    subtext: "Full service and concierge",
    price: "Custom",
    period: " pricing",
    roi: "Built around your specific growth targets",
    features: [
      "Everything in Growth Package",
      "Three video shoots per month",
      "Advanced analytics and reporting",
      "Monthly strategy calls",
      "Priority support",
      "Custom integrations",
    ],
    button: "Schedule Consultation",
    href: "/contact?service=premium",
    popular: false,
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Free Audit and Strategy",
    description:
      "We review your marketing, analyze competitors, and identify gaps. No obligations. We show you exactly what we would do and what results are realistic.",
  },
  {
    num: "02",
    title: "Campaign Design",
    description:
      "We design your complete marketing system — website, ads, social, video. Everything mapped out and approved by you before any work starts.",
  },
  {
    num: "03",
    title: "Launch and Optimize",
    description:
      "We build and launch your campaigns. First two weeks we monitor closely and optimize. Focused on getting you results fast.",
  },
  {
    num: "04",
    title: "Ongoing Growth",
    description:
      "Monthly reporting, continuous optimization, strategy calls. We do not set it and forget it. Your growth is our only focus.",
  },
];

const INDUSTRIES = [
  { label: "Electricians",        tagline: "More service calls & panel jobs",    icon: Plug,              href: "/industries/electricians" },
  { label: "Plumbers",            tagline: "Emergency leads & booked installs",  icon: Droplets,          href: "/industries/plumbers" },
  { label: "HVAC",                tagline: "Seasonal campaigns that convert",    icon: Wind,              href: "/industries/hvac" },
  { label: "Painters",            tagline: "Residential & commercial projects",  icon: PaintbrushIcon,    href: "/industries/painters" },
  { label: "Restaurants",         tagline: "Fill tables & grow delivery orders", icon: UtensilsCrossed,   href: "/industries/restaurants" },
  { label: "Real Estate",         tagline: "Listings, leads & agent branding",   icon: Building2,         href: "/industries/real-estate" },
  { label: "Locksmiths",          tagline: "24/7 emergency call capture",        icon: KeyRound,          href: "/industries/locksmiths" },
  { label: "General Contractors", tagline: "Renovations, builds & bids",         icon: HardHat,           href: "/industries/general-contractors" },
];

const FAQS = [
  {
    q: "How long before we see results?",
    a: "Most clients see their first leads within 7–14 days of campaign launch. Significant growth typically happens in 30–60 days. We focus on quality leads that convert, not vanity metrics.",
  },
  {
    q: "Do you have contracts or can we cancel anytime?",
    a: "No long-term contracts. You can pause or cancel anytime. We earn your business every month. That said, we recommend a minimum 90 days to see real results from any marketing system.",
  },
  {
    q: "What if we only want one service, not the full package?",
    a: "Absolutely. We offer all services individually. Many clients start with one service and add more as they see results. No pressure to buy everything at once.",
  },
  {
    q: "How do you measure success?",
    a: "We measure what matters: leads, phone calls, bookings, revenue. Every report shows exactly how much business came from each campaign and the ROI.",
  },
  {
    q: "What industries do you work with?",
    a: "We specialize in local service businesses like electricians, plumbers, HVAC, painters, skilled trades, restaurants, and real estate. We focus on these because we understand them deeply.",
  },
  {
    q: "Can you guarantee results?",
    a: "We cannot guarantee specific numbers, but we guarantee we will optimize and iterate every single day to get you the best results possible. Our reputation is built on delivering real business growth.",
  },
];

/* ─── Accordion ─────────────────────────────────────────────── */

function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-background-card border border-border rounded-xl mb-3 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className="font-semibold text-[16px] text-text-primary group-hover:text-accent-primary transition-colors">
          {question}
        </span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-5 h-5 text-text-muted flex-shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-6 pb-5 text-sm text-text-secondary leading-relaxed border-t border-border pt-4"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Variants ──────────────────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

/* ─── Page ──────────────────────────────────────────────────── */

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0);
  const service = SERVICES_DETAILED[activeService];

  return (
    <div className="flex flex-col min-h-screen">

      {/* HERO */}
      <PageHero
        label="Services"
        title="Complete Marketing Solutions"
        titleAccent="for Local Businesses"
        subtitle="We build integrated marketing systems where every piece works together — bringing you consistent leads and growth in Hamilton, the GTA, and beyond."
        breadcrumbs={[{ label: "Services" }]}
        fadeToColor="#111111"
      />

      {/* TRUST STATS BAR */}
      <section className="bg-[#111] py-16 border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {TRUST_STATS.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={i} variants={fadeUp} custom={i} className="flex flex-col items-center gap-2">
                  <Icon className="w-5 h-5 text-accent-primary opacity-70" />
                  <div className="text-[42px] md:text-[50px] font-bold text-white leading-none">{s.value}</div>
                  <div className="text-sm text-[#666] font-medium">{s.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* SERVICES DETAILED — tab panel */}
      <section className="bg-background-secondary py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-4">
              <SectionLabel>What We Offer</SectionLabel>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-[32px] md:text-[38px] font-bold text-text-primary leading-tight mb-4">
              Here Is Everything We Offer
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-[17px] text-text-secondary max-w-[540px]">
              From websites to ads to video to social — we handle every part of your marketing strategy under one roof.
            </motion.p>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="bg-background-card border border-border rounded-2xl overflow-hidden shadow-sm flex flex-col lg:flex-row"
          >
            {/* Left: service tabs */}
            <div className="lg:w-[300px] flex-shrink-0 border-b lg:border-b-0 lg:border-r border-border flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible">
              {SERVICES_DETAILED.map((s, i) => {
                const Icon = s.icon;
                const isActive = activeService === i;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveService(i)}
                    className={`flex items-center gap-3 px-5 py-4 text-left w-full flex-shrink-0 border-b border-border last:border-b-0 transition-all duration-200 relative ${
                      isActive
                        ? "bg-accent-primary/5 lg:border-l-[3px] lg:border-l-accent-primary"
                        : "hover:bg-background-secondary"
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                      isActive ? "bg-accent-primary/20" : "bg-background-secondary"
                    }`}>
                      <Icon className={`w-4 h-4 transition-colors ${isActive ? "text-accent-primary" : "text-text-muted"}`} />
                    </div>
                    <div className="min-w-0">
                      <p className={`text-sm font-semibold leading-tight transition-colors ${isActive ? "text-text-primary" : "text-text-secondary"}`}>
                        {s.title}
                      </p>
                      <p className="text-[11px] text-accent-primary mt-0.5">{s.tag}</p>
                    </div>
                    {isActive && <ChevronRight className="w-4 h-4 text-accent-primary ml-auto flex-shrink-0 hidden lg:block" />}
                  </button>
                );
              })}
            </div>

            {/* Right: detail pane */}
            <div className="flex-1 p-8 lg:p-10 min-h-[420px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.2 }}
                  className="h-full flex flex-col"
                >
                  <span className="text-xs font-semibold text-accent-primary bg-accent-primary/10 px-3 py-1 rounded-full w-fit mb-4">
                    {service.tag}
                  </span>
                  <h3 className="text-[24px] font-bold text-text-primary mb-3">{service.title}</h3>
                  <p className="text-[15px] text-text-secondary leading-relaxed mb-5">{service.description}</p>

                  <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-3 py-1.5 w-fit mb-7">
                    <TrendingUp className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                    <span className="text-xs text-green-700 font-medium">{service.result}</span>
                  </div>

                  <p className="text-xs text-text-muted uppercase tracking-widest font-semibold mb-3">What&apos;s Included</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8 flex-grow">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-accent-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mt-auto">
                    <Link href={service.href} className="btn-primary text-sm inline-flex items-center gap-2 group/btn">
                      Get a Free Quote
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                    <Link href="/services" className="text-sm text-text-secondary hover:text-accent-primary transition-colors">
                      See all services →
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INDUSTRY CALLOUT */}
      <section className="bg-background-primary py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-4">
              <SectionLabel>Your Industry</SectionLabel>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-[32px] md:text-[38px] font-bold text-text-primary leading-tight mb-4">
              We Specialize in Your Specific Industry
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-[17px] text-text-secondary max-w-[560px]">
              We do not use generic strategies. Every campaign is built around how your type of business actually wins customers.
            </motion.p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            {INDUSTRIES.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <motion.div key={i} variants={fadeUp} custom={i}>
                  <Link
                    href={ind.href}
                    className="flex flex-col gap-3 bg-background-card border border-border rounded-2xl p-5 hover:border-accent-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent-primary/10 flex items-center justify-center group-hover:bg-accent-primary/20 transition-colors flex-shrink-0">
                      <Icon className="w-5 h-5 text-accent-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-[14px] text-text-primary group-hover:text-accent-primary transition-colors leading-tight">
                        {ind.label}
                      </p>
                      <p className="text-[12px] text-text-muted mt-0.5 leading-snug">{ind.tagline}</p>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-text-muted group-hover:text-accent-primary group-hover:translate-x-0.5 transition-all mt-auto" />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mt-8">
            <MapPin className="w-4 h-4 text-accent-primary" />
            <span className="text-sm text-text-secondary font-medium">
              Serving Hamilton, Burlington, Oakville, Mississauga, and the Greater Toronto Area
            </span>
          </motion.div>
        </div>
      </section>

      {/* PACKAGES / PRICING */}
      <section className="bg-background-secondary py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-4">
              <SectionLabel>Pricing</SectionLabel>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-[32px] md:text-[38px] font-bold text-text-primary leading-tight mb-4">
              How to Work With Us
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-[17px] text-text-secondary max-w-[560px]">
              A la carte services, popular packages, or a fully custom solution. No lock-in. No surprises.
            </motion.p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
          >
            {PACKAGES.map((pkg, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className={`bg-background-card rounded-2xl p-8 flex flex-col h-full border relative ${
                  pkg.popular
                    ? "border-accent-primary shadow-xl lg:-translate-y-4"
                    : "border-border"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent-primary text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap">
                    Most Popular
                  </div>
                )}

                <h3 className="text-[22px] font-bold text-text-primary mb-1">{pkg.title}</h3>
                <p className="text-sm text-text-muted mb-5">{pkg.subtext}</p>

                <div className="mb-2">
                  <span className="text-[36px] font-bold text-accent-primary">{pkg.price}</span>
                  <span className="text-text-muted text-sm">{pkg.period}</span>
                </div>

                <div className="flex items-start gap-2 bg-green-50 border border-green-200 rounded-lg px-3 py-2 mb-6">
                  <TrendingUp className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-green-700 font-medium leading-snug">{pkg.roi}</span>
                </div>

                <ul className="space-y-3 mb-6 flex-grow">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-accent-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={pkg.href}
                  className={`w-full py-3 rounded-lg text-center font-medium transition-colors duration-300 ${
                    pkg.popular
                      ? "bg-accent-primary text-white hover:bg-accent-hover"
                      : "bg-transparent border border-border text-text-primary hover:border-accent-primary hover:text-accent-primary"
                  }`}
                >
                  {pkg.button}
                </Link>
                <p className="text-xs text-text-muted text-center mt-3">
                  Not sure yet?{" "}
                  <Link href="/contact" className="text-accent-primary hover:underline">
                    Speak to us first — it&apos;s free.
                  </Link>
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-background-primary py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-4">
              <SectionLabel>Our Process</SectionLabel>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-[32px] md:text-[38px] font-bold text-text-primary leading-tight mb-4">
              How We Work With You
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-[17px] text-text-secondary max-w-[540px]">
              From initial consultation to ongoing growth — here is exactly what to expect.
            </motion.p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="relative bg-background-card border border-border border-l-4 border-l-accent-primary rounded-2xl p-6 text-left flex flex-col shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Connector arrow (desktop only) */}
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 bg-background-card border border-border rounded-full items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-accent-primary" />
                  </div>
                )}
                {/* Mobile connector */}
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="lg:hidden absolute -bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
                    <div className="w-px h-4 bg-border" />
                  </div>
                )}

                <span className="text-[13px] font-bold text-accent-primary uppercase tracking-widest block mb-3">{step.num}</span>
                <h3 className="font-semibold text-[17px] text-text-primary mb-3">{step.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background-secondary py-20">
        <div className="max-w-[700px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-4">
              <SectionLabel>FAQ</SectionLabel>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-[32px] md:text-[38px] font-bold text-text-primary leading-tight">
              Frequently Asked Questions
            </motion.h2>
          </div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {FAQS.map((faq, i) => (
              <motion.div key={i} variants={fadeUp} custom={i}>
                <AccordionItem question={faq.q} answer={faq.a} />
              </motion.div>
            ))}
          </motion.div>

          {/* Lead-in before CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 bg-background-card border border-border rounded-2xl p-7 text-center"
          >
            <p className="font-semibold text-text-primary text-[17px] mb-2">Still have questions?</p>
            <p className="text-text-secondary text-sm mb-5">
              We are happy to answer anything before you commit to anything. No sales pressure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/contact" className="btn-primary flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4" />
                Talk to Our Team
              </Link>
              <Link href="/contact" className="text-sm text-text-secondary hover:text-accent-primary transition-colors">
                or send us a message →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
