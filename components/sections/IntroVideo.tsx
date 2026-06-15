"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Calendar, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";

const BookCallModal = dynamic(() => import("@/components/ui/BookCallModal"), { ssr: false });

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

const VIDEO_ID = "dCJCZmdhcNM";

export default function IntroVideo() {
  const [playing, setPlaying] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const dates = getNextFiveWeekdays();

  return (
    <>
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
              <div className="relative aspect-video rounded-2xl border border-black/10 shadow-2xl overflow-hidden">
                {playing ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&playsinline=1`}
                    title="How We Help Local Businesses Generate More Leads"
                    allow="autoplay; fullscreen; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                ) : (
                  <button
                    onClick={() => setPlaying(true)}
                    className="absolute inset-0 w-full h-full group focus:outline-none"
                    aria-label="Play video"
                  >
                    <Image
                      src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                      alt="How We Help Local Businesses Generate More Leads"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-200" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 12 }}
                        className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl"
                      >
                        <Play className="w-8 h-8 text-accent-primary ml-1" fill="currentColor" />
                      </motion.div>
                    </div>
                  </button>
                )}
              </div>

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

            {/* RIGHT: Booking card */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
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
                  onClick={() => setBookingOpen(true)}
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
        </div>
      </section>

      <BookCallModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
