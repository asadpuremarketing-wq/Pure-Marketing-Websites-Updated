"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "350+", label: "Projects Completed" },
  { value: "92%", label: "Client Retention Rate" },
  { value: "4.2x", label: "Average ROI Increase" },
  { value: "8+", label: "Years of Experience" },
];

export default function StatsSection() {
  return (
    <section className="relative bg-[#080808] py-20 overflow-hidden border-t-2 border-[#F06428]">

      {/* Ambient glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(240,100,40,0.07) 0%, transparent 60%)",
        }}
      />
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.04,
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-[#F06428] text-xs font-bold uppercase tracking-widest mb-3">
            By The Numbers
          </p>
          <h2 className="text-white text-[28px] md:text-[38px] font-black tracking-tight">
            Results That Speak for Themselves
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {STATS.map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Number */}
              <div className="text-[52px] md:text-[64px] font-black text-white leading-none mb-3 tabular-nums">
                {value}
              </div>

              {/* Label */}
              <div className="text-[#666] text-sm font-medium leading-snug mb-4 max-w-[120px]">
                {label}
              </div>

              {/* Orange underline */}
              <div
                className="h-[2px] rounded-full bg-[#F06428] transition-all duration-500"
                style={{ width: "32px" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
