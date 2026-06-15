"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Calendar, Check, Loader2 } from "lucide-react";

const DAYS_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const TIME_SLOTS = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
];

function getWeekdays(): Date[] {
  const result: Date[] = [];
  const d = new Date();
  d.setDate(d.getDate() + 1);
  while (result.length < 14) {
    if (d.getDay() !== 0 && d.getDay() !== 6) result.push(new Date(d));
    d.setDate(d.getDate() + 1);
  }
  return result;
}

function fmtDate(d: Date) {
  return `${DAYS_SHORT[d.getDay()]}, ${MONTHS_SHORT[d.getMonth()]} ${d.getDate()}`;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookCallModal({ isOpen, onClose }: Props) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [offset, setOffset] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [fetchingSlots, setFetchingSlots] = useState(false);
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const dates = getWeekdays();
  const visible = dates.slice(offset, offset + 5);

  const close = useCallback(() => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setSelectedDate(null);
      setSelectedTime(null);
      setOffset(0);
      setForm({ name: "", email: "", phone: "" });
      setBookedSlots([]);
      setError(null);
    }, 300);
  }, [onClose]);

  async function selectDate(d: Date) {
    setSelectedDate(d);
    setSelectedTime(null);
    setBookedSlots([]);
    setFetchingSlots(true);
    try {
      const res = await fetch(`/api/book-call/slots?date=${encodeURIComponent(fmtDate(d))}`);
      const data = await res.json();
      setBookedSlots(data.booked ?? []);
    } catch {
      setBookedSlots([]);
    } finally {
      setFetchingSlots(false);
    }
  }

  async function submit() {
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/book-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          date: selectedDate ? fmtDate(selectedDate) : "",
          time: selectedTime,
        }),
      });

      if (res.status === 409) {
        // Slot was taken between selection and submission — refresh and go back
        const slotsRes = await fetch(`/api/book-call/slots?date=${encodeURIComponent(selectedDate ? fmtDate(selectedDate) : "")}`);
        const slotsData = await slotsRes.json();
        setBookedSlots(slotsData.booked ?? []);
        setSelectedTime(null);
        setStep(2);
        setError("That slot was just taken. Please choose a different time.");
        return;
      }

      if (!res.ok) throw new Error();
      setStep(4);
    } catch {
      setError("Something went wrong. Please try again or call us at +1 647-951-2786.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          onClick={close}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[480px] bg-[#0d0d0d] border border-white/[0.10] rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Close */}
            <button
              onClick={close}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/[0.12] flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-white/50" />
            </button>

            {/* Header */}
            <div className="px-7 pt-7 pb-5 border-b border-white/[0.07]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#F06428] flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-[18px] h-[18px] text-white" />
                </div>
                <div>
                  <p className="text-white font-bold text-[16px] leading-tight">Book a Free 30-Min Call</p>
                  <p className="text-white/35 text-[11px]">With Asad · Pure Marketing · Google Meet</p>
                </div>
              </div>
              {step < 4 && (
                <div className="flex gap-1.5">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={`h-[3px] flex-1 rounded-full transition-all duration-300 ${
                        s <= step ? "bg-[#F06428]" : "bg-white/[0.07]"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            <AnimatePresence mode="wait">
              {/* ── Step 1: Date ── */}
              {step === 1 && (
                <motion.div
                  key="s1"
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.18 }}
                  className="px-7 py-6"
                >
                  <p className="text-white/35 text-[11px] font-semibold uppercase tracking-widest mb-5">
                    Step 1 of 3 · Choose a date
                  </p>

                  <div className="flex items-center justify-between mb-3">
                    <button
                      onClick={() => setOffset(Math.max(0, offset - 5))}
                      disabled={offset === 0}
                      className="w-7 h-7 rounded-full border border-white/[0.08] flex items-center justify-center disabled:opacity-25 hover:border-white/25 transition-colors"
                    >
                      <ChevronLeft className="w-3.5 h-3.5 text-white/50" />
                    </button>
                    <span className="text-white/25 text-[11px]">
                      {MONTHS_SHORT[dates[offset]?.getMonth()]} {dates[offset]?.getDate()} —{" "}
                      {MONTHS_SHORT[dates[Math.min(offset + 4, dates.length - 1)]?.getMonth()]}{" "}
                      {dates[Math.min(offset + 4, dates.length - 1)]?.getDate()}
                    </span>
                    <button
                      onClick={() => setOffset(Math.min(dates.length - 5, offset + 5))}
                      disabled={offset + 5 >= dates.length}
                      className="w-7 h-7 rounded-full border border-white/[0.08] flex items-center justify-center disabled:opacity-25 hover:border-white/25 transition-colors"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-white/50" />
                    </button>
                  </div>

                  <div className="grid grid-cols-5 gap-2 mb-6">
                    {visible.map((d, i) => {
                      const sel = selectedDate?.toDateString() === d.toDateString();
                      return (
                        <button
                          key={i}
                          onClick={() => selectDate(d)}
                          className={`flex flex-col items-center py-3 rounded-2xl border transition-all duration-200 ${
                            sel
                              ? "bg-[#F06428] border-[#F06428] shadow-lg shadow-[#F06428]/20"
                              : "border-white/[0.07] bg-white/[0.02] hover:border-[#F06428]/40"
                          }`}
                        >
                          <span className={`text-[9px] font-bold uppercase tracking-wider ${sel ? "text-white/75" : "text-white/25"}`}>
                            {DAYS_SHORT[d.getDay()]}
                          </span>
                          <span className={`text-[20px] font-black mt-0.5 leading-none ${sel ? "text-white" : "text-white/65"}`}>
                            {d.getDate()}
                          </span>
                          <span className={`text-[9px] mt-0.5 ${sel ? "text-white/65" : "text-white/22"}`}>
                            {MONTHS_SHORT[d.getMonth()]}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <button
                    onClick={() => selectedDate && setStep(2)}
                    disabled={!selectedDate || fetchingSlots}
                    className="w-full bg-[#F06428] hover:bg-[#D9531E] text-white rounded-xl py-3.5 font-semibold text-[14px] disabled:opacity-35 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                  >
                    {fetchingSlots ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Checking availability...
                      </>
                    ) : (
                      "Continue"
                    )}
                  </button>
                </motion.div>
              )}

              {/* ── Step 2: Time ── */}
              {step === 2 && (
                <motion.div
                  key="s2"
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.18 }}
                  className="px-7 py-6"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <button onClick={() => { setStep(1); setError(null); }} className="text-white/25 hover:text-white/60 transition-colors">
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <p className="text-white/35 text-[11px] font-semibold uppercase tracking-widest">
                      Step 2 of 3 · Choose a time
                    </p>
                  </div>
                  <p className="text-[#F06428] text-[12px] font-semibold mb-4 ml-6">
                    {selectedDate ? fmtDate(selectedDate) : ""} · All times EST
                  </p>

                  {error && (
                    <p className="text-amber-400 text-[12px] mb-3 bg-amber-400/10 border border-amber-400/20 rounded-lg px-3 py-2">
                      {error}
                    </p>
                  )}

                  <div className="grid grid-cols-2 gap-2 mb-6 max-h-[220px] overflow-y-auto">
                    {TIME_SLOTS.map((slot) => {
                      const sel = selectedTime === slot;
                      const taken = bookedSlots.includes(slot);
                      return (
                        <button
                          key={slot}
                          onClick={() => !taken && setSelectedTime(slot)}
                          disabled={taken}
                          className={`py-2.5 rounded-xl border text-[13px] font-medium transition-all duration-150 ${
                            taken
                              ? "border-white/[0.04] text-white/15 cursor-not-allowed bg-white/[0.01] line-through"
                              : sel
                              ? "bg-[#F06428] border-[#F06428] text-white shadow-md"
                              : "border-white/[0.07] text-white/50 hover:border-[#F06428]/40 hover:text-white/80 bg-white/[0.02]"
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    onClick={() => { setError(null); if (selectedTime) setStep(3); }}
                    disabled={!selectedTime}
                    className="w-full bg-[#F06428] hover:bg-[#D9531E] text-white rounded-xl py-3.5 font-semibold text-[14px] disabled:opacity-35 disabled:cursor-not-allowed transition-colors"
                  >
                    Continue
                  </button>
                </motion.div>
              )}

              {/* ── Step 3: Details ── */}
              {step === 3 && (
                <motion.div
                  key="s3"
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.18 }}
                  className="px-7 py-6"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <button onClick={() => { setStep(2); setError(null); }} className="text-white/25 hover:text-white/60 transition-colors">
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <p className="text-white/35 text-[11px] font-semibold uppercase tracking-widest">
                      Step 3 of 3 · Your details
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5 bg-white/[0.03] border border-white/[0.07] rounded-xl px-4 py-3 mb-5 mt-3">
                    <Calendar className="w-3.5 h-3.5 text-[#F06428] flex-shrink-0" />
                    <span className="text-white/50 text-[12px]">
                      {selectedDate ? fmtDate(selectedDate) : ""} at {selectedTime} EST
                    </span>
                  </div>

                  <div className="space-y-3 mb-4">
                    {[
                      { label: "Full Name", key: "name" as const, type: "text", placeholder: "Your name" },
                      { label: "Email", key: "email" as const, type: "email", placeholder: "your@email.com" },
                      { label: "Phone", key: "phone" as const, type: "tel", placeholder: "+1 (647) 000-0000" },
                    ].map(({ label, key, type, placeholder }) => (
                      <div key={key}>
                        <label className="text-white/30 text-[10px] uppercase tracking-widest font-semibold block mb-1.5">
                          {label}
                        </label>
                        <input
                          type={type}
                          placeholder={placeholder}
                          value={form[key]}
                          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                          className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-2.5 text-white placeholder-white/20 text-[14px] focus:outline-none focus:border-[#F06428]/50 transition-colors"
                        />
                      </div>
                    ))}
                  </div>

                  {error && (
                    <p className="text-red-400 text-[12px] mb-3">{error}</p>
                  )}

                  <button
                    onClick={submit}
                    disabled={loading}
                    className="w-full bg-[#F06428] hover:bg-[#D9531E] text-white rounded-xl py-3.5 font-semibold text-[14px] disabled:opacity-60 transition-colors flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Booking your slot...
                      </>
                    ) : (
                      "Confirm My Booking"
                    )}
                  </button>
                  <p className="text-white/20 text-[11px] text-center mt-2.5">
                    We&apos;ll confirm and send your Google Meet link within 2 hours.
                  </p>
                </motion.div>
              )}

              {/* ── Step 4: Success ── */}
              {step === 4 && (
                <motion.div
                  key="s4"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.22 }}
                  className="px-7 py-8 text-center"
                >
                  <div className="w-14 h-14 bg-[#F06428]/10 border border-[#F06428]/25 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <Check className="w-7 h-7 text-[#F06428]" />
                  </div>
                  <h3 className="text-[22px] font-bold text-white mb-2">You&apos;re booked!</h3>
                  <p className="text-white/50 text-[14px] mb-1">
                    {selectedDate ? fmtDate(selectedDate) : ""} at {selectedTime} EST
                  </p>
                  <p className="text-white/30 text-[12px] mb-6">
                    Confirmation sent to {form.email}
                  </p>
                  <div className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-4 mb-6 text-left space-y-2.5">
                    {[
                      "30-min video call via Google Meet",
                      "A full audit of your current marketing",
                      "Your top growth opportunities identified",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <Check className="w-3.5 h-3.5 text-[#F06428] mt-0.5 flex-shrink-0" />
                        <span className="text-white/55 text-[12px]">{item}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={close}
                    className="w-full border border-white/[0.10] text-white/50 rounded-xl py-3 text-sm hover:border-white/25 hover:text-white/80 transition-colors"
                  >
                    Close
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
