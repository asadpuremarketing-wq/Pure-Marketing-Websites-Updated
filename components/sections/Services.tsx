"use client";

import { motion } from "framer-motion";
import { Globe, TrendingUp, Video, Share2, BarChart2, ArrowRight } from "lucide-react";
import Link from "next/link";

const SERVICES = [
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

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } }),
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

export default function Services() {
  return (
    <section className="bg-background-secondary py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-accent-primary text-xs font-semibold uppercase tracking-widest mb-3"
            >
              What We Offer
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-[28px] md:text-[38px] font-bold text-text-primary tracking-tight leading-tight"
            >
              Marketing That Gets Results
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent-primary hover:gap-3 transition-all duration-200 whitespace-nowrap"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((s, i) => {
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
                  <div className={`relative h-36 w-full bg-gradient-to-br ${s.gradient} flex items-center justify-center`}>
                    <div className={`w-16 h-16 rounded-2xl ${s.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 ${s.iconColor}`} />
                    </div>
                  </div>

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
  );
}
