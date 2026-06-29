"use client";

import { motion } from "framer-motion";
import { Users, RefreshCw, TrendingUp, Award } from "lucide-react";

const STATS = [
  { value: "150+", label: "Clients Served",        icon: Users,      detail: "Across Canada" },
  { value: "92%",  label: "Client Retention Rate", icon: RefreshCw,  detail: "Stay with us long-term" },
  { value: "4.2x", label: "Average ROI Increase",  icon: TrendingUp, detail: "Across all campaigns" },
  { value: "5+",   label: "Years of Experience",   icon: Award,      detail: "Helping local businesses" },
];

export default function StatsSection() {
  return (
    <section className="relative bg-[#080808] py-20 overflow-hidden border-t border-white/[0.06]">

      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F06428] to-transparent" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(240,100,40,0.07) 0%, transparent 65%)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)", backgroundSize: "28px 28px", opacity: 0.04 }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-[#F06428] text-xs font-bold uppercase tracking-widest mb-3">By The Numbers</p>
          <h2 className="text-white text-[28px] md:text-[38px] font-black tracking-tight">
            The Numbers Behind Our Growth
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map(({ value, label, icon: Icon, detail }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 flex flex-col items-center text-center hover:bg-white/[0.07] hover:border-white/[0.14] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent rounded-t-2xl" />

              <div className="w-10 h-10 rounded-xl bg-accent-primary/10 border border-accent-primary/15 flex items-center justify-center mb-4">
                <Icon className="w-4 h-4 text-accent-primary" strokeWidth={2} />
              </div>

              <div className="text-[44px] md:text-[52px] font-black text-white leading-none mb-1.5 tabular-nums">
                {value}
              </div>

              <div className="text-[#aaa] text-sm font-semibold mb-1">{label}</div>
              <div className="text-[#999] text-[11px]">{detail}</div>

              <div className="mt-4 h-[2px] w-8 rounded-full bg-accent-primary group-hover:w-12 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
