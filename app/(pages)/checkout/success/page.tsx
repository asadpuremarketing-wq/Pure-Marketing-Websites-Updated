"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Calendar, Phone, Star, MessageSquare } from "lucide-react";
import Link from "next/link";

const PLAN_NAMES: Record<string, { name: string; total: string }> = {
  "1-month": { name: "Month-to-Month Plan", total: "$1,499" },
  "3-month": { name: "3-Month Package",     total: "$3,597" },
  "6-month": { name: "6-Month Package",     total: "$5,394" },
};

const NEXT_STEPS = [
  { icon: Phone,        title: "We call you within 1 business day", desc: "Our team reaches out to schedule your onboarding call at a time that works for you." },
  { icon: MessageSquare, title: "Brand intake & strategy session",   desc: "We learn your brand voice, target audience, and content goals." },
  { icon: Calendar,     title: "Content calendar sent for approval", desc: "Review and approve your first month of posts before anything goes live." },
  { icon: Star,         title: "We go live!",                        desc: "Daily posting begins — sit back and watch your audience grow." },
];

function SuccessContent() {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan") ?? "1-month";
  const planInfo = PLAN_NAMES[plan] ?? PLAN_NAMES["1-month"];

  return (
    <div className="min-h-screen bg-background-secondary flex flex-col items-center px-6 py-16 pt-[84px]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[620px]"
      >

        {/* Main card */}
        <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden mb-6">

          {/* Dark header */}
          <div className="bg-[#111] px-8 py-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(#F06428 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 220, delay: 0.15 }}
                className="w-20 h-20 rounded-full bg-green-500/20 border-2 border-green-500/30 flex items-center justify-center mx-auto mb-5"
              >
                <CheckCircle2 className="w-10 h-10 text-green-400" />
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                className="text-[26px] font-extrabold text-white mb-2"
              >
                Payment Confirmed!
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
                className="text-white/50 text-[14px]"
              >
                Welcome to Pure Marketing — you&apos;re officially on board.
              </motion.p>
            </div>
          </div>

          {/* Plan summary */}
          <div className="px-8 py-5 border-b border-border bg-accent-primary/[0.03]">
            <p className="text-[10px] font-bold text-accent-primary uppercase tracking-widest mb-1">Your Package</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[17px] font-bold text-text-primary">{planInfo.name}</p>
                <p className="text-sm text-text-secondary">Social Media Management · Pure Marketing</p>
              </div>
              <span className="text-[22px] font-extrabold text-accent-primary">{planInfo.total}</span>
            </div>
          </div>

          {/* Confirmation note */}
          <div className="px-8 py-5 border-b border-border">
            <p className="text-[13px] text-text-secondary leading-relaxed">
              A <strong className="text-text-primary">payment confirmation</strong> has been sent to your email along with a Stripe receipt. Our team will be in touch within <strong className="text-text-primary">1 business day</strong> to schedule your onboarding call.
            </p>
          </div>

          {/* CTAs */}
          <div className="px-8 py-6 flex flex-col sm:flex-row gap-3">
            <Link href="/" className="flex-1 flex items-center justify-center gap-2 bg-accent-primary hover:bg-accent-hover text-white font-semibold py-3 rounded-xl text-sm transition-all duration-200">
              Back to Home <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+16479512786"
              className="flex-1 flex items-center justify-center gap-2 border border-border rounded-xl py-3 text-sm font-semibold text-text-primary hover:border-accent-primary hover:text-accent-primary transition-all duration-200"
            >
              <Phone className="w-4 h-4" /> Call Us Now
            </a>
          </div>
        </div>

        {/* What happens next */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="bg-white border border-border rounded-2xl p-7 mb-6"
        >
          <h2 className="text-[16px] font-bold text-text-primary mb-6">What Happens Next</h2>
          <div className="space-y-5">
            {NEXT_STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.45 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-9 h-9 rounded-xl bg-accent-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-accent-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary text-sm mb-0.5">
                      <span className="text-accent-primary mr-2">{String(i + 1).padStart(2, "0")}.</span>
                      {step.title}
                    </p>
                    <p className="text-[13px] text-text-secondary">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
          className="text-center text-[13px] text-text-muted"
        >
          Questions? Email{" "}
          <a href="mailto:info@puremarketing.ca" className="text-accent-primary hover:underline">info@puremarketing.ca</a>
          {" "}or call{" "}
          <a href="tel:+16479512786" className="text-accent-primary hover:underline">+1 (647) 951-2786</a>
        </motion.p>

      </motion.div>
    </div>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-accent-primary border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
