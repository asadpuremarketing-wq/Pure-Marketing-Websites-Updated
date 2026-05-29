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

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.07 },
  }),
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

function ServiceCard({ s, i }: { s: (typeof SERVICES)[0]; i: number }) {
  const Icon = s.icon;
  return (
    <motion.div variants={fadeUp} custom={i} className="relative">
      {s.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 bg-[#1a1a1a] text-white text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap shadow-lg border border-white/10">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-primary inline-block" />
          Most Popular
        </div>
      )}
      <Link
        href={s.href}
        className={`group flex flex-col h-full bg-white rounded-2xl p-6 border-2 transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] ${
          s.popular
            ? "border-accent-primary shadow-[0_4px_20px_rgba(240,100,40,0.12)]"
            : "border-transparent hover:border-accent-primary/30"
        }`}
      >
        {/* Number + Icon row */}
        <div className="flex items-start justify-between mb-5">
          <span className="text-[13px] font-bold text-accent-primary/60 tracking-widest">
            {s.num}
          </span>
          <div className="w-11 h-11 rounded-xl bg-accent-primary/10 flex items-center justify-center group-hover:bg-accent-primary/15 transition-colors duration-300">
            <Icon className="w-5 h-5 text-accent-primary" />
          </div>
        </div>

        {/* Tag */}
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-text-muted mb-2">
          {s.tag}
        </p>

        {/* Title */}
        <h3 className="text-[18px] font-bold text-text-primary leading-snug mb-3">
          {s.title}
        </h3>

        {/* Description */}
        <p className="text-[13px] text-text-secondary leading-relaxed flex-grow mb-5">
          {s.desc}
        </p>

        {/* Learn More */}
        <div className="flex items-center gap-1.5 text-accent-primary font-semibold text-[13px] group-hover:gap-3 transition-all duration-200">
          Learn More
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </Link>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section className="bg-[#f7f7f5] py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Two-column layout: Left info + Right cards */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 xl:gap-16 mb-10">

          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-start pt-2"
          >
            <p className="text-accent-primary text-xs font-semibold uppercase tracking-widest mb-4">
              What We Offer
            </p>
            <h2 className="text-[30px] md:text-[36px] font-bold text-text-primary leading-tight mb-4">
              Marketing That Gets{" "}
              <span className="text-accent-primary">Results</span>
            </h2>
            <p className="text-[14px] text-text-secondary leading-relaxed mb-8">
              We build done-for-you marketing systems that attract, convert, and retain customers — so you can focus on running your business.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent-primary hover:gap-3 transition-all duration-200"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Right cards grid — 3 on top, 2 on bottom */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Row 1: 3 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              {SERVICES.slice(0, 3).map((s, i) => (
                <ServiceCard key={s.num} s={s} i={i} />
              ))}
            </div>
            {/* Row 2: 2 wider cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SERVICES.slice(3).map((s, i) => (
                <ServiceCard key={s.num} s={s} i={i + 3} />
              ))}
            </div>
          </motion.div>

        </div>

        {/* Trust bar */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 border-t border-border pt-8"
        >
          {TRUST_ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="flex items-start gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#1a1a1a] flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Icon className="w-4.5 h-4.5 text-white" strokeWidth={2} />
                </div>
                <div>
                  <p className="font-bold text-[13px] text-text-primary leading-tight mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-[12px] text-text-secondary leading-snug">
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
