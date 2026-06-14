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
    tag: "Foundation",
    title: "Web Development",
    desc: "High-converting websites and landing pages designed to build trust and generate leads.",
    popular: false,
    href: "/services/web-development",
  },
  {
    num: "02",
    icon: TrendingUp,
    tag: "Lead Generation",
    title: "Lead Generation System",
    desc: "Consistent, high-quality leads every week through proven ads, targeting and conversion systems.",
    popular: true,
    href: "/services/lead-generation",
  },
  {
    num: "03",
    icon: Video,
    tag: "Brand Building",
    title: "Video Production",
    desc: "Scroll-stopping video content that builds authority, showcases your work and drives more inquiries.",
    popular: false,
    href: "/services/video-production",
  },
  {
    num: "04",
    icon: Share2,
    tag: "Social Growth",
    title: "Social Media Management",
    desc: "Consistent content, strategy and engagement that grows your brand and keeps you top of mind.",
    popular: false,
    href: "/services/social-media-management",
  },
  {
    num: "05",
    icon: BarChart2,
    tag: "Paid Advertising",
    title: "Google & Meta Ads",
    desc: "Strategic ad campaigns that deliver measurable results and a strong return on ad spend.",
    popular: false,
    href: "/services/google-meta-ads",
  },
];

const TRUST_ITEMS = [
  { icon: Check,   label: "Custom Strategy", desc: "Tailored systems for your business and goals." },
  { icon: BarChart, label: "Proven Results",  desc: "Data-driven strategies that deliver real ROI." },
  { icon: Clock,   label: "Done For You",     desc: "We handle it all so you can focus on running your business." },
  { icon: Users,   label: "Long-Term Growth", desc: "Sustainable growth through systems and consistency." },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.55, delay },
});

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function ServiceCard({ s }: { s: (typeof SERVICES)[0] }) {
  const Icon = s.icon;
  return (
    <motion.div variants={cardVariant} className="relative h-full">
      {s.popular && (
        <div className="absolute -top-3.5 left-6 z-10 flex items-center gap-1.5 bg-accent-primary text-white text-[10px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-lg shadow-accent-primary/30">
          <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
          Most Popular
        </div>
      )}
      <Link
        href={s.href}
        className={`group flex flex-col h-full rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
          s.popular
            ? "border-accent-primary bg-white shadow-[0_8px_32px_rgba(240,100,40,0.14)] hover:shadow-[0_16px_40px_rgba(240,100,40,0.22)]"
            : "border-[#e8e8e8] bg-white hover:border-accent-primary/30 hover:shadow-xl"
        }`}
      >
        {/* Top accent line */}
        <div className={`h-[3px] flex-shrink-0 ${
          s.popular
            ? "bg-accent-primary"
            : "bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent"
        }`} />

        <div className="p-6 flex flex-col flex-grow">
          {/* Icon + tag */}
          <div className="flex items-start justify-between mb-5">
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${
              s.popular
                ? "bg-accent-primary shadow-md shadow-accent-primary/30"
                : "bg-accent-primary/10 border border-accent-primary/20"
            }`}>
              <Icon className={`w-5 h-5 ${s.popular ? "text-white" : "text-accent-primary"}`} />
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#bbb] border border-[#ebebeb] rounded-full px-3 py-1 mt-0.5">
              {s.tag}
            </span>
          </div>

          <h3 className="text-[17px] font-black text-[#0d0d0d] leading-snug mb-2.5">
            {s.title}
          </h3>
          <p className="text-sm text-[#666] leading-relaxed flex-grow mb-5">
            {s.desc}
          </p>

          <div className="flex items-center gap-1.5 text-[13px] font-bold text-accent-primary group-hover:gap-2.5 transition-all duration-200 pt-4 border-t border-[#f0f0f0]">
            Learn more <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="text-center mb-14">
          <motion.p {...fadeUp(0)} className="text-accent-primary text-xs font-semibold uppercase tracking-widest mb-4">
            Our Services
          </motion.p>
          <motion.h2 {...fadeUp(0.1)} className="text-[32px] md:text-[44px] font-black text-[#0d0d0d] leading-tight">
            Everything You Need to Grow
          </motion.h2>
          <motion.p {...fadeUp(0.2)} className="text-[16px] text-[#666] max-w-[520px] mx-auto mt-4 leading-relaxed">
            Done-for-you marketing systems that attract, convert, and retain customers so you can focus on running your business.
          </motion.p>
        </div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
            {SERVICES.slice(0, 3).map((s) => <ServiceCard key={s.num} s={s} />)}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {SERVICES.slice(3).map((s) => <ServiceCard key={s.num} s={s} />)}
          </div>
        </motion.div>

        <motion.div {...fadeUp(0.3)} className="mt-10 text-center">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-accent-primary hover:gap-3 transition-all duration-200">
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14 border-t border-[#f0f0f0] pt-10"
        >
          {TRUST_ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={i} variants={cardVariant} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-primary/10 border border-accent-primary/15 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-accent-primary" strokeWidth={2} />
                </div>
                <div>
                  <p className="font-black text-[13px] text-[#0d0d0d] leading-tight mb-0.5">{item.label}</p>
                  <p className="text-[12px] text-[#666] leading-snug">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
