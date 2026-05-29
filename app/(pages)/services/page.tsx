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
    gradient: "from-blue-500/15 to-transparent",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
    title: "Web Development",
    tag: "Foundation",
    popular: false,
    result: "Avg. 3× more contact form submissions vs. DIY sites",
    href: "/services/web-development",
  },
  {
    icon: TrendingUp,
    gradient: "from-accent-primary/20 to-transparent",
    iconBg: "bg-accent-primary/15",
    iconColor: "text-accent-primary",
    title: "Lead Generation System",
    tag: "Most Popular",
    popular: true,
    result: "Clients average 40–80 qualified leads per month",
    href: "/services/lead-generation",
  },
  {
    icon: Video,
    gradient: "from-purple-500/15 to-transparent",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-500",
    title: "Video Production",
    tag: "Brand Building",
    popular: false,
    result: "Video content gets 4× more reach than static posts",
    href: "/services/video-production",
  },
  {
    icon: Share2,
    gradient: "from-pink-500/15 to-transparent",
    iconBg: "bg-pink-500/10",
    iconColor: "text-pink-500",
    title: "Social Media Management",
    tag: "Stay Top of Mind",
    popular: false,
    result: "Average 2× follower growth in the first 90 days",
    href: "/services/social-media-management",
  },
  {
    icon: BarChart2,
    gradient: "from-emerald-500/15 to-transparent",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-500",
    title: "Google and Meta Ads",
    tag: "Paid Traffic",
    popular: false,
    result: "Average 5–8× return on ad spend for local clients",
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
      <section className="bg-[#111] py-16 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(#F06428 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
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
                  <div className="text-sm text-white/40 font-medium">{s.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* SERVICES DETAILED — card grid */}
      <section className="bg-background-secondary py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-14">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-4">
              <SectionLabel>What We Offer</SectionLabel>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-[32px] md:text-[42px] font-bold text-text-primary leading-tight mb-4">
              Everything Under One Roof
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-[17px] text-text-secondary max-w-[540px]">
              From websites to ads to video — every channel managed, integrated, and optimized by one team.
            </motion.p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {SERVICES_DETAILED.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={i} variants={fadeUp} custom={i} className="relative">
                  {s.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 bg-accent-primary text-white text-[11px] font-bold uppercase tracking-widest px-4 py-1 rounded-full whitespace-nowrap shadow-md">
                      Most Popular
                    </div>
                  )}
                  <Link
                    href={s.href}
                    className={`group bg-white rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 shadow-[0_2px_16px_rgba(0,0,0,0.08)] hover:-translate-y-1 border-2 ${
                      s.popular
                        ? "border-accent-primary shadow-[0_4px_24px_rgba(240,100,40,0.15)]"
                        : "border-transparent hover:border-accent-primary/40"
                    }`}
                  >
                    {/* Icon area with gradient */}
                    <div className={`relative h-36 w-full bg-gradient-to-br ${s.gradient} flex items-center justify-center`}>
                      <div className={`w-16 h-16 rounded-2xl ${s.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-8 h-8 ${s.iconColor}`} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow border-t border-border">
                      <p className="text-[11px] font-semibold uppercase tracking-widest text-text-muted mb-2">{s.tag}</p>
                      <h3 className="text-[19px] font-bold text-text-primary leading-tight mb-3">{s.title}</h3>
                      <p className="text-[13px] text-text-secondary leading-relaxed flex-grow mb-5">{s.result}</p>

                      <div className={`flex items-center gap-2 rounded-lg px-4 py-2.5 transition-all duration-300 ${
                        s.popular
                          ? "bg-accent-primary text-white group-hover:bg-accent-hover"
                          : "bg-accent-primary/5 text-accent-primary border border-accent-primary/20 group-hover:bg-accent-primary group-hover:text-white group-hover:border-accent-primary"
                      }`}>
                        <span className="text-sm font-semibold flex-1">Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>


      {/* PACKAGES / PRICING */}
      <section className="bg-[#111] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(#F06428 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-accent-primary border border-accent-primary/30 rounded-full px-4 py-1.5">
                Pricing
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-[32px] md:text-[42px] font-bold text-white leading-tight mb-4">
              How to Work With Us
            </motion.h2>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start"
          >
            {PACKAGES.map((pkg, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className={`rounded-2xl p-8 flex flex-col h-full border relative ${
                  pkg.popular
                    ? "bg-white/[0.06] border-accent-primary shadow-[0_0_40px_rgba(240,100,40,0.12)] lg:-translate-y-4"
                    : "bg-white/[0.03] border-white/10"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent-primary text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap">
                    Most Popular
                  </div>
                )}

                <h3 className="text-[22px] font-bold text-white mb-1">{pkg.title}</h3>
                <p className="text-sm text-white/40 mb-6">{pkg.subtext}</p>

                <div className="mb-3">
                  <span className="text-[36px] font-bold text-white">{pkg.price}</span>
                  <span className="text-white/40 text-sm">{pkg.period}</span>
                </div>

                <div className="flex items-start gap-2 bg-accent-primary/10 border border-accent-primary/20 rounded-lg px-3 py-2 mb-7">
                  <TrendingUp className="w-4 h-4 text-accent-primary flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-accent-primary font-medium leading-snug">{pkg.roi}</span>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-accent-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-white/60">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={pkg.href}
                  className={`w-full py-3 rounded-lg text-center font-medium transition-colors duration-300 ${
                    pkg.popular
                      ? "bg-accent-primary text-white hover:bg-accent-hover"
                      : "bg-transparent border border-white/20 text-white hover:border-accent-primary hover:text-accent-primary"
                  }`}
                >
                  {pkg.button}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-background-primary py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-4">
              <SectionLabel>Our Process</SectionLabel>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-[32px] md:text-[42px] font-bold text-text-primary leading-tight mb-4">
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
                className="relative bg-background-card border border-border rounded-2xl p-6 text-left flex flex-col hover:border-accent-primary hover:shadow-lg transition-all duration-300 group"
              >
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 bg-background-card border border-border rounded-full items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-accent-primary" />
                  </div>
                )}
                <span className="text-[13px] font-bold text-accent-primary/50 uppercase tracking-widest block mb-4 group-hover:text-accent-primary transition-colors">{step.num}</span>
                <div className="w-1 h-8 bg-accent-primary/20 rounded-full mb-4 group-hover:bg-accent-primary/60 transition-colors" />
                <h3 className="font-bold text-[17px] text-text-primary mb-3">{step.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background-secondary py-24">
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

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 bg-background-card border border-border rounded-2xl p-8 text-center"
          >
            <p className="font-bold text-text-primary text-[18px] mb-2">Still have questions?</p>
            <p className="text-text-secondary text-sm mb-6">
              We are happy to answer anything before you commit. No pressure.
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
