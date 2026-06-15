"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import BookCallModal from "@/components/ui/BookCallModal";

const DAYS_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const PREVIEW_TIMES = ["9:00 AM", "10:30 AM", "2:00 PM", "3:30 PM"];

function getNextFiveWeekdays() {
  const result: Date[] = [];
  const d = new Date();
  d.setDate(d.getDate() + 1);
  while (result.length < 5) {
    if (d.getDay() !== 0 && d.getDay() !== 6) result.push(new Date(d));
    d.setDate(d.getDate() + 1);
  }
  return result;
}

export default function BookingSection() {
  const [open, setOpen] = useState(false);
  const dates = getNextFiveWeekdays();

  return (
    <>
      <section className="bg-[#080808] py-16 pb-20">
        <div className="max-w-[680px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#111] border border-white/[0.08] rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Card header */}
            <div className="px-7 py-5 border-b border-white/[0.07] flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#F06428] flex items-center justify-center flex-shrink-0">
                <Calendar className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-white text-[15px] font-bold leading-tight">Book a Free Strategy Call</p>
                <p className="text-white/30 text-[11px]">30 min · Google Meet · Mon–Fri</p>
              </div>
            </div>

            <div className="px-7 pt-6 pb-7">
              {/* Date strip */}
              <p className="text-white/30 text-[10px] uppercase tracking-widest font-semibold mb-3 flex items-center gap-1.5">
                <Calendar className="w-3 h-3" /> Available this week
              </p>
              <div className="grid grid-cols-5 gap-2 mb-6">
                {dates.map((d, i) => (
                  <div
                    key={i}
                    className={`flex flex-col items-center py-3 rounded-2xl border ${
                      i === 0
                        ? "bg-[#F06428] border-[#F06428]"
                        : "border-white/[0.07] bg-white/[0.02]"
                    }`}
                  >
                    <span className={`text-[9px] font-bold uppercase tracking-wider ${i === 0 ? "text-white/75" : "text-white/20"}`}>
                      {DAYS_SHORT[d.getDay()]}
                    </span>
                    <span className={`text-[20px] font-black mt-0.5 leading-none ${i === 0 ? "text-white" : "text-white/55"}`}>
                      {d.getDate()}
                    </span>
                    <span className={`text-[9px] mt-0.5 ${i === 0 ? "text-white/65" : "text-white/20"}`}>
                      {MONTHS_SHORT[d.getMonth()]}
                    </span>
                  </div>
                ))}
              </div>

              {/* Time previews */}
              <p className="text-white/30 text-[10px] uppercase tracking-widest font-semibold mb-3 flex items-center gap-1.5">
                <Clock className="w-3 h-3" /> Available times · EST
              </p>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {PREVIEW_TIMES.map((t, i) => (
                  <div
                    key={i}
                    className={`py-2.5 rounded-xl border text-[13px] font-medium text-center ${
                      i === 0
                        ? "border-[#F06428]/40 text-[#F06428]"
                        : "border-white/[0.07] text-white/30"
                    }`}
                  >
                    {t}
                  </div>
                ))}
              </div>

              <button
                onClick={() => setOpen(true)}
                className="w-full bg-[#F06428] hover:bg-[#D9531E] text-white rounded-xl py-4 font-bold text-[15px] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#F06428]/20"
              >
                Pick Your Time
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-white/20 text-[11px] text-center mt-3">
                Free · No credit card · Cancel any time
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <BookCallModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
