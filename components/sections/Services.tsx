"use client";

import { motion } from "framer-motion";
import {
  Globe, TrendingUp, Video, Share2, BarChart2,
  ArrowRight, Check, BarChart, Clock, Users,
} from "lucide-react";
import Link from "next/link";

const SERVICES = [
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

const TRUST_ITEMS = [
  {
    icon: Check,
    label: "Custom Strategy",
    desc: "Tailored systems for your business and goals.",
  },
  {
    icon: BarChart,
    label: "Proven Results",
    desc: "Data-driven strategies that deliver real ROI.",
  },
  {
    icon: Clock,
    label: "Done For You",
    desc: "We handle it all so you can focus on what you do best.",
  },
  {
    icon: Users,
    label: "Long-Term Growth",
    desc: "Sustainable growth through systems and consistency.",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.55, delay },
});

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

function ServiceCard({ s }: { s: (typeof SERVICES)[0]; i?: number }) {
  const Icon = s.icon;
  return (
    <motion.div variants={cardVariant} className="relative">
      {s.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 bg-accent-primary text-white text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap shadow-lg shadow-accent-primary/30">
          <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
          Most Popular
        </div>
      )}
      <Link
        href={s.href}
        className={`group relative flex flex-col h-full bg-white rounded-2xl p-7 border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden ${
          s.popular
            ? "border-accent-primary shadow-[0_4px_20px_rgba(240,100,40,0.14)]"
            : "border-[#ebebeb] hover:border-accent-primary"
        }`}
      >
        {/* Ghost number top-right */}
        <span className="absolute top-4 right-5 text-[48px] font-black text-[#ebebeb] leading-none select-none pointer-events-none">
          {s.num}
        </span>

        {/* Icon container */}
        <div className="relative z-10 w-12 h-12 rounded-2xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center mb-5 group-hover:bg-accent-primary/15 transition-colors duration-300">
          <Icon className="w-5 h-5 text-accent-primary" />
        </div>

        {/* Tag */}
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#999] mb-2 relative z-10">
          {s.tag}
        </p>

        {/* Title */}
        <h3 className="text-[18px] font-black text-[#0d0d0d] leading-snug mb-3 relative z-10">
          {s.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#666] leading-relaxed flex-grow mb-5 relative z-10">
          {s.desc}
        </p>

        {/* Learn more */}
        <div className="flex items-center gap-1.5 text-accent-primary font-semibold text-[13px] group-hover:gap-3 transition-all duration-200 relative z-10">
          Learn more →
        </div>
      </Link>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            {...fadeUp(0)}
            className="text-accent-primary text-xs font-semibold uppercase tracking-widest mb-4"
          >
            Our Services
          </motion.p>
          <motion.h2
            {...fadeUp(0.1)}
            className="text-[32px] md:text-[44px] font-black text-[#0d0d0d] leading-tight"
          >
            Everything You Need to Grow
          </motion.h2>
          <motion.p
            {...fadeUp(0.2)}
            className="text-[16px] text-[#666] max-w-[520px] mx-auto mt-4 leading-relaxed"
          >
            We build done-for-you marketing systems that attract, convert, and retain customers — so you can focus on running your business.
          </motion.p>
        </div>

        {/* Cards grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Row 1: 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
            {SERVICES.slice(0, 3).map((s, i) => (
              <ServiceCard key={s.num} s={s} i={i} />
            ))}
          </div>
          {/* Row 2: 2 wider cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {SERVICES.slice(3).map((s, i) => (
              <ServiceCard key={s.num} s={s} i={i + 3} />
            ))}
          </div>
        </motion.div>

        {/* View all link */}
        <motion.div
          {...fadeUp(0.3)}
          className="mt-10 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-primary hover:gap-3 transition-all duration-200"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14 border-t-2 border-[#ebebeb] pt-10"
        >
          {TRUST_ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariant}
                className="flex items-start gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-accent-primary" strokeWidth={2} />
                </div>
                <div>
                  <p className="font-black text-[13px] text-[#0d0d0d] leading-tight mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-[12px] text-[#666] leading-snug">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
