"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="bg-[#1A1714] py-20 w-full overflow-hidden relative">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          {/* Section Label */}
          <span className="text-accent-primary uppercase tracking-widest text-sm font-medium mb-6">
            Ready To Grow
          </span>

          {/* Headline */}
          <h2 className="font-serif text-[30px] md:text-[44px] text-white leading-tight mb-4 max-w-[800px]">
            Let Us Build You a Marketing System That Works While You Work
          </h2>

          {/* Subtext */}
          <p className="text-[17px] text-[#9E9892] max-w-[540px] mb-10 leading-relaxed">
            Book a free 30 minute strategy call. We will review your current marketing, identify the gaps, and show you exactly what we would do to grow your business.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 w-full sm:w-auto">
            <Link
              href="/contact"
              className="bg-accent-primary text-white rounded-lg px-8 py-4 font-medium hover:bg-accent-hover transition-colors duration-300 w-full sm:w-auto text-center"
            >
              Book a Free Strategy Call
            </Link>
            <Link
              href="/portfolio"
              className="bg-transparent border border-white/20 text-white rounded-lg px-8 py-4 font-medium hover:border-white/50 transition-colors duration-300 w-full sm:w-auto text-center"
            >
              View Our Portfolio
            </Link>
          </div>

          {/* Trust Items */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-white/60">
            <span>No contracts</span>
            <span className="w-1 h-1 rounded-full bg-white/40"></span>
            <span>Results guaranteed</span>
            <span className="w-1 h-1 rounded-full bg-white/40"></span>
            <span>Local business specialists</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
