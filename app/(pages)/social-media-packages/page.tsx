"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Check, Star, Shield, TrendingUp, Clock, Users,
  Globe2, ArrowRight, Sparkles, Calendar,
  BarChart2, MessageSquare, Camera,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import PageHero from "@/components/ui/PageHero";
import CTABanner from "@/components/sections/CTABanner";

/* ─── Data ─────────────────────────────────────────────────── */

const PACKAGES = [
  {
    id: "1-month",
    badge: null,
    name: "Month-to-Month",
    tagline: "Start With No Commitment",
    price: 1499,
    billingNote: "Billed monthly",
    savingsNote: null,
    totalNote: "$1,499 / month",
    popular: false,
    color: "border-border",
    accentBg: "bg-background-secondary",
    features: [
      "Full social media management",
      "Instagram & Facebook posting (daily)",
      "Custom content creation",
      "Community engagement & replies",
      "Monthly analytics report",
      "Content calendar planning",
      "Dedicated account manager",
      "Cancel anytime",
    ],
    cta: "Get Started",
    href: "/checkout?plan=1-month",
  },
  {
    id: "3-month",
    badge: "Best Value",
    name: "3-Month Package",
    tagline: "Save $900 — Paid Once",
    price: 1199,
    billingNote: "per month · $3,597 total",
    savingsNote: "You save $300 vs month-to-month",
    totalNote: "$3,597 billed once",
    popular: true,
    color: "border-accent-primary",
    accentBg: "bg-accent-primary/5",
    features: [
      "Everything in Month-to-Month",
      "Priority content production",
      "TikTok & LinkedIn included",
      "Bi-weekly strategy check-ins",
      "Competitor analysis report",
      "Story & Reel creation",
      "Ad creative templates",
      "3-month growth roadmap",
    ],
    cta: "Start 3-Month Plan",
    href: "/checkout?plan=3-month",
  },
  {
    id: "6-month",
    badge: "Maximum Savings",
    name: "6-Month Package",
    tagline: "Save $3,600 — Paid Once",
    price: 899,
    billingNote: "per month · $5,394 total",
    savingsNote: "You save $3,600 vs month-to-month",
    totalNote: "$5,394 billed once",
    popular: false,
    color: "border-border",
    accentBg: "bg-background-secondary",
    features: [
      "Everything in 3-Month Package",
      "Full platform management (all channels)",
      "Weekly strategy calls",
      "Monthly video content (2 Reels)",
      "Influencer outreach support",
      "Custom brand voice guide",
      "Priority 24/7 support",
      "Guaranteed account growth report",
    ],
    cta: "Start 6-Month Plan",
    href: "/checkout?plan=6-month",
  },
];

const WHATS_INCLUDED = [
  {
    icon: Globe2,
    title: "Multi-Platform Posting",
    desc: "Instagram, Facebook, TikTok, LinkedIn — we manage it all from one place.",
  },
  {
    icon: Camera,
    title: "Original Content Creation",
    desc: "Custom graphics, captions, Reels, Stories — built around your brand voice.",
  },
  {
    icon: MessageSquare,
    title: "Community Management",
    desc: "We respond to comments, DMs, and reviews to keep your audience engaged.",
  },
  {
    icon: BarChart2,
    title: "Analytics & Reporting",
    desc: "Monthly performance breakdowns: reach, engagement, follower growth, and more.",
  },
  {
    icon: Calendar,
    title: "Content Calendar",
    desc: "A full month planned in advance — so you always know what goes out.",
  },
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    desc: "Every post is built with a purpose — follower growth, leads, or brand awareness.",
  },
];

const RESULTS = [
  { value: "2×", label: "Average follower growth in 90 days" },
  { value: "150+", label: "Businesses served across Canada" },
  { value: "4.9★", label: "Average client rating" },
  { value: "30 days", label: "Typical time to first visible results" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

/* ─── Page ──────────────────────────────────────────────────── */

export default function SocialMediaPackagesPage() {
  return (
    <div className="flex flex-col min-h-screen">

      <PageHero
        label="Social Media Management"
        title="Grow Your Brand,"
        titleAccent="We Handle Everything"
        subtitle="Professional social media management that keeps your business top-of-mind locally. Choose the commitment level that works for you — the longer you stay, the more you save."
        breadcrumbs={[{ label: "Social Media Packages" }]}
        fadeToColor="#F8FAFC"
      />

      {/* RESULTS BAR */}
      <section className="bg-background-secondary py-14 border-t border-border">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {RESULTS.map((r, i) => (
              <motion.div key={i} variants={fadeUp} custom={i} className="flex flex-col items-center gap-1">
                <div className="text-[42px] md:text-[48px] font-bold text-accent-primary leading-none">{r.value}</div>
                <div className="text-sm text-text-secondary font-medium">{r.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="bg-background-primary py-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-14">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-4">
              <SectionLabel>What You Get</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-[32px] md:text-[38px] font-bold text-text-primary leading-tight mb-4"
            >
              Full-Service Social Media, Done For You
            </motion.h2>
            <motion.p
              variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-[17px] text-text-secondary max-w-[540px]"
            >
              Every package includes our complete social media management suite — so you can focus on running your business.
            </motion.p>
          </div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {WHATS_INCLUDED.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i} variants={fadeUp} custom={i}
                  className="bg-background-card border border-border rounded-2xl p-6 hover:border-accent-primary hover:shadow-md transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-accent-primary" />
                  </div>
                  <h3 className="font-semibold text-[15px] text-text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* PRICING PACKAGES */}
      <section className="bg-background-secondary py-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-4">
              <SectionLabel>Pricing</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-[32px] md:text-[40px] font-bold text-text-primary leading-tight mb-4"
            >
              Simple, Transparent Pricing
            </motion.h2>
            <motion.p
              variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-[17px] text-text-secondary max-w-[560px]"
            >
              The longer you commit, the more you save. All packages include the full suite of social media services.
            </motion.p>
          </div>

          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
          >
            {PACKAGES.map((pkg, i) => (
              <motion.div
                key={pkg.id}
                variants={fadeUp}
                custom={i}
                className={`relative bg-background-card rounded-2xl border flex flex-col h-full ${pkg.color} ${
                  pkg.popular ? "shadow-2xl lg:-translate-y-4 ring-2 ring-accent-primary/20" : "shadow-sm"
                }`}
              >
                {pkg.badge && (
                  <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap ${
                    pkg.popular ? "bg-accent-primary text-white" : "bg-text-primary text-white"
                  }`}>
                    {pkg.badge}
                  </div>
                )}

                {/* Header */}
                <div className={`${pkg.accentBg} rounded-t-2xl px-8 pt-8 pb-6 border-b border-border`}>
                  <p className="text-xs font-bold text-accent-primary uppercase tracking-widest mb-1">{pkg.tagline}</p>
                  <h3 className="text-[22px] font-bold text-text-primary mb-5">{pkg.name}</h3>

                  <div className="flex items-end gap-2 mb-1">
                    <span className="text-[14px] font-semibold text-text-muted mt-1">$</span>
                    <span className="text-[52px] font-bold text-text-primary leading-none">{pkg.price.toLocaleString()}</span>
                    <span className="text-[14px] text-text-muted mb-2">/mo</span>
                  </div>
                  <p className="text-sm text-text-muted mb-3">{pkg.billingNote}</p>

                  {pkg.savingsNote && (
                    <div className="inline-flex items-center gap-1.5 bg-green-50 border border-green-200 rounded-lg px-3 py-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-green-600" />
                      <span className="text-xs text-green-700 font-semibold">{pkg.savingsNote}</span>
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="px-8 pt-6 pb-4 flex-grow">
                  <p className="text-[11px] font-bold text-text-muted uppercase tracking-widest mb-4">What&apos;s Included</p>
                  <ul className="space-y-3">
                    {pkg.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-accent-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-accent-primary" />
                        </div>
                        <span className="text-sm text-text-secondary leading-snug">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="px-8 pb-8 pt-4">
                  <div className="bg-background-secondary rounded-xl p-3 mb-4 text-center">
                    <p className="text-[13px] font-semibold text-text-primary">{pkg.totalNote}</p>
                  </div>
                  <Link
                    href={pkg.href}
                    className={`w-full py-3.5 rounded-xl text-center font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 group/btn ${
                      pkg.popular
                        ? "bg-accent-primary text-white hover:bg-accent-hover shadow-lg shadow-accent-primary/20"
                        : "bg-text-primary text-white hover:bg-text-primary/90"
                    }`}
                  >
                    {pkg.cta}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                  <p className="text-xs text-text-muted text-center mt-3">
                    Questions?{" "}
                    <Link href="/contact" className="text-accent-primary hover:underline">
                      Talk to us first — it&apos;s free.
                    </Link>
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Comparison note */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="mt-12 bg-background-card border border-border rounded-2xl p-7 text-center max-w-[700px] mx-auto"
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <Shield className="w-5 h-5 text-accent-primary" />
              <p className="font-semibold text-text-primary text-[16px]">Our Commitment to You</p>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              Every package includes a full onboarding call, access to your content calendar, and a dedicated account manager. 
              We treat your brand like our own — and your results are our reputation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TRUST SIGNALS */}
      <section className="bg-background-primary py-16">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Clock,
                title: "Results in 30 Days",
                desc: "You&apos;ll see measurable growth in reach, engagement, and followers within your first month.",
              },
              {
                icon: Users,
                title: "Your Dedicated Team",
                desc: "A content strategist, designer, and copywriter all focused on your brand from day one.",
              },
              {
                icon: Star,
                title: "4.9★ Rated Service",
                desc: "Our clients love us. Read their stories and see why businesses across Canada choose Pure Marketing.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i} variants={fadeUp} custom={i}
                  className="flex gap-4 p-6 bg-background-card border border-border rounded-2xl"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-accent-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">{item.title}</h3>
                    <p
                      className="text-sm text-text-secondary leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: item.desc }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
