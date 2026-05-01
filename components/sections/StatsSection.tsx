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
    <section className="bg-[#1a1a1a] py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-accent-primary text-sm font-semibold uppercase tracking-widest mb-3">By The Numbers</p>
          <h2 className="text-white text-[28px] md:text-[36px] font-bold tracking-tight">
            Results That Speak for Themselves
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-[48px] md:text-[56px] font-bold text-white leading-none mb-2">
                {value}
              </div>
              <div className="text-[#666] text-sm font-medium">{label}</div>
              <div className="w-8 h-0.5 bg-accent-primary mx-auto mt-4 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
