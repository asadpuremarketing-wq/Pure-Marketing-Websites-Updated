"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Globe, TrendingUp, Video, Share2, BarChart2,
  Check, ChevronDown, ArrowRight, Phone,
  Users, Award, Zap, Star,
} from "lucide-react";
import Link from "next/link";
import CTABanner from "@/components/sections/CTABanner";
import PageHero from "@/components/ui/PageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import AutoCarousel from "@/components/ui/AutoCarousel";

/* ─── Data ─────────────────────────────────────────────────── */

const TRUST_STATS = [
  { value: "150+", label: "Businesses Served", icon: Users },
  { value: "$2M+", label: "Ad Spend Managed", icon: Award },
  { value: "7–14", label: "Days to First Lead", icon: Zap },
  { value: "4.9★", label: "Client Rating", icon: Star },
];

const SERVICES_DETAILED = [
  {
    num: "01",
    icon: Globe,
    tag: "FOUNDATION",
    title: "Web Development",
    desc: "High-converting websites and landing pages designed to build trust and generate leads.",
    popular: false,
    href: "/services/web-development",
  },
  {
    num: "02",
    icon: TrendingUp,
    tag: "LEAD GENERATION",
    title: "Lead Generation System",
    desc: "Get consistent, high-quality leads through proven ads, targeting and conversion systems.",
    popular: true,
    href: "/services/lead-generation",
  },
  {
    num: "03",
    icon: Video,
    tag: "BRAND BUILDING",
    title: "Video Production",
    desc: "Scroll-stopping video content that builds authority, showcases your work and drives more inquiries.",
    popular: false,
    href: "/services/video-production",
  },
  {
    num: "04",
    icon: Share2,
    tag: "SOCIAL GROWTH",
    title: "Social Media Management",
    desc: "Consistent content, strategy and engagement that grows your brand and keeps you top of mind.",
    popular: false,
    href: "/services/social-media-management",
  },
  {
    num: "05",
    icon: BarChart2,
    tag: "PAID ADVERTISING",
    title: "Google & Meta Ads",
    desc: "Strategic ad campaigns that deliver measurable results and a strong return on ad spend.",
    popular: false,
    href: "/services/google-meta-ads",
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
    <div className="bg-white/[0.04] border border-white/10 rounded-xl mb-3 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className="font-semibold text-[16px] text-white group-hover:text-accent-primary transition-colors">
          {question}
        </span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-5 h-5 text-white/40 flex-shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-6 pb-5 text-sm text-[#888] leading-relaxed border-t border-white/10 pt-4"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Helpers ───────────────────────────────────────────────── */

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.55, delay },
});

/* ─── Page ──────────────────────────────────────────────────── */

export default function ServicesPage() {
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

      {/* ── STATS BAND ── */}
      <section className="bg-accent-primary py-5">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-black/10">
            {TRUST_STATS.map((s, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.08)}
                className="flex flex-col items-center gap-1 py-3 px-4 text-center"
              >
                <div className="text-[36px] md:text-[42px] font-black text-black leading-none">{s.value}</div>
                <div className="text-xs font-bold uppercase tracking-wider text-black/70">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-14">
            <motion.div {...fadeUp(0)} className="mb-4">
              <SectionLabel>What We Offer</SectionLabel>
            </motion.div>
            <motion.h2
              {...fadeUp(0.1)}
              className="text-[32px] md:text-[46px] font-black text-[#0d0d0d] leading-tight mb-4"
            >
              Everything Under One Roof
            </motion.h2>
            <motion.p
              {...fadeUp(0.2)}
              className="text-[17px] text-[#666] max-w-[540px]"
            >
              From websites to ads to video — every channel managed, integrated, and optimized by one team.
            </motion.p>
          </div>

          <AutoCarousel
            perPage={3}
            interval={3500}
            items={SERVICES_DETAILED.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.num} className="relative h-full">
                  {s.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 bg-accent-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap shadow-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
                      Most Popular
                    </div>
                  )}
                  <Link
                    href={s.href}
                    className={`group flex flex-col h-full bg-white rounded-2xl p-7 border-2 transition-all duration-300 hover:-translate-y-1 ${
                      s.popular
                        ? "border-accent-primary shadow-xl shadow-accent-primary/15"
                        : "border-[#ebebeb] hover:border-accent-primary hover:shadow-xl"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-5">
                      <span className="text-[40px] font-black leading-none text-[#ebebeb]">{s.num}</span>
                      <div className="w-12 h-12 rounded-2xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-accent-primary" />
                      </div>
                    </div>
                    <span className="inline-block bg-accent-primary/[0.08] text-accent-primary text-[10px] font-bold uppercase rounded-full px-3 py-1 mb-3 w-fit">
                      {s.tag}
                    </span>
                    <h3 className="font-black text-[20px] text-[#0d0d0d] leading-snug mb-2">{s.title}</h3>
                    <p className="text-sm text-[#666] leading-relaxed flex-grow mb-5">{s.desc}</p>
                    <div className="flex items-center gap-1.5 text-accent-primary font-semibold text-[13px] group-hover:gap-3 transition-all duration-200">
                      Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </Link>
                </div>
              );
            })}
          />
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="bg-[#080808] py-24 relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#F06428 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <motion.div {...fadeUp(0)} className="mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-accent-primary border border-accent-primary/30 rounded-full px-4 py-1.5">
                Pricing
              </span>
            </motion.div>
            <motion.h2
              {...fadeUp(0.1)}
              className="text-[32px] md:text-[46px] font-black text-white leading-tight"
            >
              How to Work With Us
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {PACKAGES.map((pkg, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.12)}
                className={`rounded-2xl p-8 flex flex-col border relative ${
                  pkg.popular
                    ? "bg-white/[0.08] border-accent-primary shadow-[0_0_60px_rgba(240,100,40,0.15)] lg:-translate-y-6"
                    : "bg-white/[0.04] border-white/10"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap">
                    Most Popular
                  </div>
                )}

                <h3 className="text-[24px] font-black text-white mb-1">{pkg.title}</h3>
                <p className="text-sm text-white/40 mb-6">{pkg.subtext}</p>

                <div className="mb-3">
                  <span className="text-[42px] font-black text-white">{pkg.price}</span>
                  <span className="text-[#666] text-sm">{pkg.period}</span>
                </div>

                <div className="flex items-start gap-2 bg-accent-primary/10 border border-accent-primary/20 rounded-xl px-4 py-2.5 mb-7">
                  <TrendingUp className="w-4 h-4 text-accent-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-accent-primary font-medium leading-snug">{pkg.roi}</span>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-accent-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={pkg.href}
                  className={`w-full py-3.5 rounded-xl text-center font-bold transition-all duration-300 ${
                    pkg.popular
                      ? "bg-accent-primary text-white hover:bg-accent-primary/90"
                      : "border border-white/20 text-white hover:bg-white hover:text-[#0d0d0d]"
                  }`}
                >
                  {pkg.button}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="bg-[#f5f5f5] py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <motion.div {...fadeUp(0)} className="mb-4">
              <SectionLabel>Our Process</SectionLabel>
            </motion.div>
            <motion.h2
              {...fadeUp(0.1)}
              className="text-[32px] md:text-[46px] font-black text-[#0d0d0d] leading-tight mb-4"
            >
              How We Work With You
            </motion.h2>
            <motion.p {...fadeUp(0.2)} className="text-[17px] text-[#666] max-w-[540px]">
              From initial consultation to ongoing growth — here is exactly what to expect.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className="relative bg-white border border-[#ebebeb] rounded-2xl p-6 flex flex-col hover:border-accent-primary hover:shadow-lg transition-all duration-300 group"
              >
                {/* Arrow connector (desktop only) */}
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 bg-white border border-[#ebebeb] rounded-full items-center justify-center group-hover:border-accent-primary transition-colors">
                    <ArrowRight className="w-3 h-3 text-accent-primary" />
                  </div>
                )}
                {/* Ghost number top-right */}
                <span className="absolute top-4 right-5 text-[48px] font-black text-[#ebebeb] leading-none select-none">
                  {step.num}
                </span>
                {/* Orange badge */}
                <div className="w-10 h-10 rounded-full bg-accent-primary flex items-center justify-center mb-5">
                  <span className="text-white font-black text-sm">{step.num}</span>
                </div>
                <h3 className="font-black text-[18px] text-[#0d0d0d] mb-2 leading-snug">{step.title}</h3>
                <p className="text-sm text-[#666] leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#080808] py-24">
        <div className="max-w-[760px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <motion.div {...fadeUp(0)} className="mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-accent-primary border border-accent-primary/30 rounded-full px-4 py-1.5">
                FAQ
              </span>
            </motion.div>
            <motion.h2
              {...fadeUp(0.1)}
              className="text-[32px] md:text-[42px] font-black text-white leading-tight"
            >
              Frequently Asked Questions
            </motion.h2>
          </div>

          <motion.div {...fadeUp(0.15)}>
            {FAQS.map((faq, i) => (
              <AccordionItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </motion.div>

          {/* Bottom CTA card */}
          <motion.div
            {...fadeUp(0.2)}
            className="mt-10 bg-white/[0.04] border border-white/10 rounded-2xl p-8 text-center"
          >
            <h3 className="font-black text-white text-[22px] mb-2">Still have questions?</h3>
            <p className="text-[#666] text-sm mb-6">
              We are happy to answer anything before you commit. No pressure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent-primary text-white font-bold px-6 py-3 rounded-xl text-sm hover:bg-accent-primary/90 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Talk to Our Team
              </Link>
              <Link href="/contact" className="text-sm text-[#666] hover:text-accent-primary transition-colors">
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
