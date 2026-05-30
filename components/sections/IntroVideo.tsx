"use client";

import { motion } from "framer-motion";
import { Play, Check } from "lucide-react";
import Link from "next/link";

const CHECKPOINTS = [
  "We audit your local market and competitors",
  "We build campaigns tailored to your trade",
  "Your phone starts ringing within 30 days",
  "We report weekly and keep optimizing",
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.55, delay },
});

export default function IntroVideo() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">

          {/* LEFT: Video player */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            {/* Dark video container */}
            <div className="relative bg-[#0d0d0d] aspect-video rounded-2xl border border-black/10 shadow-2xl overflow-hidden cursor-pointer group">
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 12 }}
                  className="w-20 h-20 bg-accent-primary rounded-full flex items-center justify-center shadow-2xl shadow-accent-primary/40"
                >
                  <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                </motion.div>
              </div>

              {/* Subtle dot pattern */}
              <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(#F06428 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
            </div>

            {/* Bottom bar */}
            <div className="mt-4 flex items-center gap-3 bg-[#f7f7f7] border border-[#ebebeb] rounded-xl px-5 py-3">
              <div className="w-8 h-8 rounded-full bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center flex-shrink-0">
                <Play className="w-3.5 h-3.5 text-accent-primary ml-0.5" fill="currentColor" />
              </div>
              <div>
                <p className="text-sm font-black text-[#0d0d0d]">How We Grow Local Businesses</p>
                <p className="text-xs text-[#999]">2 min overview · No fluff</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Copy */}
          <div className="flex flex-col gap-6">
            <motion.p {...fadeUp(0)} className="text-accent-primary text-xs font-semibold uppercase tracking-widest">
              See It In Action
            </motion.p>

            <motion.h2
              {...fadeUp(0.1)}
              className="text-[28px] md:text-[38px] font-black text-[#0d0d0d] leading-tight"
            >
              Watch How We Help Local Businesses Generate More Leads
            </motion.h2>

            <motion.p {...fadeUp(0.2)} className="text-[16px] text-[#666] leading-relaxed">
              We work exclusively with local service businesses across Canada. Watch this short video to see our exact process and why clients see results within 30 days.
            </motion.p>

            {/* Checkpoints */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="flex flex-col gap-3"
            >
              {CHECKPOINTS.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-accent-primary" strokeWidth={2.5} />
                  </span>
                  <span className="text-sm text-[#444] leading-snug">{point}</span>
                </li>
              ))}
            </motion.ul>

            {/* CTA */}
            <motion.div {...fadeUp(0.35)}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent-primary text-white rounded-xl px-7 py-4 font-bold text-[15px] hover:bg-[#D9531E] transition-colors duration-300 shadow-lg shadow-accent-primary/30"
              >
                Get a Free Marketing Plan →
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
