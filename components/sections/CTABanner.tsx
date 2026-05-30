"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const TRUST_PILLS = ["No contracts", "Results guaranteed", "Local business specialists"];

export default function CTABanner() {
  return (
    <section className="relative bg-[#080808] py-24 w-full overflow-hidden">

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.04,
        }}
      />

      {/* Left orange glow blob */}
      <div
        className="absolute -left-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(240,100,40,0.15) 0%, rgba(240,100,40,0.04) 50%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      {/* Right subtle glow */}
      <div
        className="absolute -right-20 top-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(240,100,40,0.07) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65 }}
          className="flex flex-col items-center"
        >
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-[#F06428] uppercase tracking-widest text-xs font-bold mb-6"
          >
            Ready To Grow
          </motion.span>

          {/* Headline */}
          <h2 className="font-black text-[36px] md:text-[52px] text-white leading-[1.05] tracking-tight mb-5 max-w-[820px]">
            Let Us Build You a Marketing System{" "}
            <span className="text-[#F06428]">That Works While You Work</span>
          </h2>

          {/* Subtext */}
          <p className="text-[17px] text-[#666] max-w-[540px] mb-10 leading-relaxed">
            Book a free 30-minute strategy call. We will review your current
            marketing, identify the gaps, and show you exactly what we would do
            to grow your business.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 w-full sm:w-auto">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#F06428] text-white rounded-xl px-8 py-4 font-bold text-[15px] hover:bg-[#D9531E] transition-colors duration-300 shadow-xl shadow-[#F06428]/30 w-full sm:w-auto justify-center"
            >
              Book a Free Strategy Call
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 border border-white/20 text-white rounded-xl px-8 py-4 font-bold text-[15px] hover:border-white/45 hover:bg-white/5 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              View Our Portfolio
            </Link>
          </div>

          {/* Trust pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-[#555]">
            {TRUST_PILLS.map((pill, i) => (
              <span key={pill} className="flex items-center gap-3">
                {i > 0 && (
                  <span className="w-1 h-1 rounded-full bg-[#333] flex-shrink-0" />
                )}
                <span
                  className="border border-white/10 rounded-full px-4 py-1.5 text-[#666] text-xs font-medium"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  {pill}
                </span>
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
