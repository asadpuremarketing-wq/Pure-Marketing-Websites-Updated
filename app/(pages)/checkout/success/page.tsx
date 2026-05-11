"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Calendar, Phone, Mail, Star } from "lucide-react";
import Link from "next/link";

const PLAN_NAMES: Record<string, { name: string; next: string }> = {
  "1-month": {
    name: "Month-to-Month Plan",
    next: "Our team will reach out within 1 business day to schedule your onboarding call.",
  },
  "3-month": {
    name: "3-Month Package",
    next: "Our team will reach out within 1 business day to schedule your kickoff call and begin your brand intake.",
  },
  "6-month": {
    name: "6-Month Package",
    next: "Our team will reach out within 1 business day to schedule your dedicated onboarding session and strategy session.",
  },
};

const NEXT_STEPS = [
  {
    icon: Calendar,
    title: "Onboarding Call Scheduled",
    desc: "We'll reach out within 1 business day to book your kickoff call at a time that works for you.",
  },
  {
    icon: Star,
    title: "Brand Intake & Strategy",
    desc: "We learn your brand voice, audience, and goals — then build your first content calendar.",
  },
  {
    icon: Mail,
    title: "Content Calendar Sent to You",
    desc: "Review and approve your first month of posts before anything goes live.",
  },
  {
    icon: ArrowRight,
    title: "We Go Live!",
    desc: "Daily posting begins. You sit back and watch your audience grow.",
  },
];

function SuccessContent() {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan") ?? "1-month";
  const planInfo = PLAN_NAMES[plan] ?? PLAN_NAMES["1-month"];

  return (
    <div className="min-h-screen bg-background-secondary flex flex-col items-center justify-center px-6 py-20 pt-[88px]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-[680px] w-full"
      >
        {/* Success card */}
        <div className="bg-background-card border border-border rounded-2xl shadow-xl overflow-hidden mb-8">
          {/* Green header */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 px-8 py-10 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4"
            >
              <CheckCircle2 className="w-11 h-11 text-white" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-[28px] font-bold text-white mb-2"
            >
              Payment Confirmed!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="text-green-100 text-[15px]"
            >
              Welcome to Pure Marketing — you&apos;re officially on board.
            </motion.p>
          </div>

          {/* Plan info */}
          <div className="px-8 py-6 border-b border-border bg-accent-primary/[0.03]">
            <p className="text-xs font-bold text-accent-primary uppercase tracking-widest mb-1">
              Your Package
            </p>
            <p className="text-[18px] font-bold text-text-primary">{planInfo.name}</p>
            <p className="text-sm text-text-secondary mt-1">Social Media Management · Pure Marketing</p>
          </div>

          {/* Confirmation note */}
          <div className="px-8 py-6 border-b border-border">
            <p className="text-sm text-text-secondary leading-relaxed">
              A <strong className="text-text-primary">payment confirmation</strong> has been sent to your email. 
              A receipt from Stripe will also arrive separately. {planInfo.next}
            </p>
          </div>

          {/* CTA buttons */}
          <div className="px-8 py-6 flex flex-col sm:flex-row gap-3">
            <Link href="/" className="btn-primary flex-1 flex items-center justify-center gap-2 text-sm">
              Back to Home
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+16479512786"
              className="flex-1 flex items-center justify-center gap-2 border border-border rounded-xl py-3 text-sm font-semibold text-text-primary hover:border-accent-primary hover:text-accent-primary transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              Call Us Now
            </a>
          </div>
        </div>

        {/* What happens next */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-background-card border border-border rounded-2xl p-8"
        >
          <h2 className="text-[18px] font-bold text-text-primary mb-6">What Happens Next</h2>
          <div className="space-y-5">
            {NEXT_STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.55 + i * 0.1 }}
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
                    <p className="text-sm text-text-secondary">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Contact note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-center text-sm text-text-muted mt-6"
        >
          Questions? Email us at{" "}
          <a href="mailto:info@puremarketing.ca" className="text-accent-primary hover:underline">
            info@puremarketing.ca
          </a>{" "}
          or call{" "}
          <a href="tel:+16479512786" className="text-accent-primary hover:underline">
            +1 (647) 951-2786
          </a>
        </motion.p>
      </motion.div>
    </div>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-accent-primary border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
