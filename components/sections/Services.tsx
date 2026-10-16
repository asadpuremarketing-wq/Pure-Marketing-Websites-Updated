"use client";

import { motion } from "framer-motion";
import {
  Megaphone, MapPin, Sparkles, PhoneCall,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const CAPABILITIES = [
  {
    num: "01",
    icon: Megaphone,
    title: "Paid Customer Acquisition",
    desc: "Google Search Ads, Google Local Services Ads, and Facebook/Instagram Ads that put your business in front of local customers actively looking for your service.",
  },
  {
    num: "02",
    icon: MapPin,
    title: "Google Maps & Local Search Visibility",
    desc: "Google Business Profile optimization, local SEO, and review strategy so nearby searchers can find and trust you.",
  },
  {
    num: "03",
    icon: Sparkles,
    title: "AI Search Discoverability",
    desc: "Clear, structured, helpful content so your business is easier to find and recommend across traditional and AI-powered search.",
  },
  {
    num: "04",
    icon: PhoneCall,
    title: "Lead Capture & Conversion",
    desc: "High-converting forms, click-to-call, and tracking that turn inquiries into booked estimates and jobs.",
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
  visible: { opacity: 1, transition: { staggerChildren: 0.09 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="text-center mb-14">
          <motion.p {...fadeUp(0)} className="text-accent-primary text-xs font-semibold uppercase tracking-widest mb-4">
            Our One Solution
          </motion.p>
          <motion.h2 {...fadeUp(0.1)} className="text-[32px] md:text-[44px] font-black text-[#0d0d0d] leading-tight">
            One Complete System Designed to Generate More Local Business
          </motion.h2>
          <motion.p {...fadeUp(0.2)} className="text-[16px] text-[#666] max-w-[560px] mx-auto mt-4 leading-relaxed">
            Not four separate services. One coordinated system that combines paid advertising, local search visibility,
            AI search discoverability, and lead conversion to help you get more calls, estimates, and booked jobs.
          </motion.p>
        </div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CAPABILITIES.map((c) => {
              const Icon = c.icon;
              return (
                <motion.div key={c.num} variants={cardVariant} className="h-full">
                  <div className="group flex flex-col h-full rounded-2xl border border-[#e8e8e8] bg-white hover:border-accent-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                    <div className="h-[3px] flex-shrink-0 bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent" />
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="w-11 h-11 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center flex-shrink-0 mb-5 transition-transform duration-300 group-hover:scale-110">
                        <Icon className="w-5 h-5 text-accent-primary" />
                      </div>
                      <h3 className="text-[16px] font-black text-[#0d0d0d] leading-snug mb-2.5">
                        {c.title}
                      </h3>
                      <p className="text-sm text-[#666] leading-relaxed flex-grow">
                        {c.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div {...fadeUp(0.3)} className="mt-10 text-center">
          <Link href="/services/lead-generation" className="inline-flex items-center gap-2 bg-accent-primary text-white text-sm font-bold rounded-xl px-6 py-3.5 hover:bg-accent-hover transition-all duration-200">
            Explore Our Lead Generation System
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
