"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

export default function IntroVideo() {
  return (
    <section className="bg-background-secondary py-20">
      <div className="max-w-[900px] mx-auto px-6 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <SectionLabel>Who We Are</SectionLabel>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-serif text-[32px] md:text-[40px] text-text-primary text-center leading-tight mb-6"
        >
          See How We Help Local Businesses Dominate Their Market
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[17px] text-text-secondary text-center max-w-[600px] mb-12"
        >
          Watch this short video to understand our approach and why local businesses across Canada trust us to grow their revenue.
        </motion.p>

        {/* Video Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full aspect-video bg-[#1A1714] rounded-2xl border border-border shadow-2xl relative flex flex-col items-center justify-center overflow-hidden mb-12 group cursor-pointer"
        >
          {/* Replace this placeholder with actual video embed (YouTube or Vimeo iframe) */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="w-20 h-20 bg-accent-primary rounded-full flex items-center justify-center mb-4"
          >
            <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
          </motion.div>
          <span className="text-white/70 text-sm font-medium">2 min overview</span>
          
          {/* Subtle gradient overlay to make it look nicer */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
        </motion.div>

        {/* Feature Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {["Proven Lead Systems", "Local Market Experts", "Results in 90 Days"].map((feature, i) => (
            <div
              key={i}
              className="bg-background-card border border-border rounded-full px-5 py-2.5 text-sm text-text-secondary font-medium shadow-sm"
            >
              {feature}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
