"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check, Shield, Lock, CreditCard, User, Mail,
  Phone, Building2, ChevronDown, ArrowRight, Sparkles,
  AlertCircle, Star,
} from "lucide-react";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";

/* ─── Package Data ──────────────────────────────────────────── */

const PLAN_DATA: Record<
  string,
  {
    name: string;
    price: number;
    billingLabel: string;
    total: number;
    savings: string | null;
    features: string[];
    badge: string | null;
  }
> = {
  "1-month": {
    name: "Month-to-Month Plan",
    price: 1499,
    billingLabel: "Billed monthly — cancel anytime",
    total: 1499,
    savings: null,
    badge: null,
    features: [
      "Full social media management",
      "Instagram & Facebook posting (daily)",
      "Custom content creation",
      "Community engagement & replies",
      "Monthly analytics report",
      "Dedicated account manager",
    ],
  },
  "3-month": {
    name: "3-Month Package",
    price: 1199,
    billingLabel: "Paid once — $3,597 total",
    total: 3597,
    savings: "You save $300 vs month-to-month",
    badge: "Best Value",
    features: [
      "Everything in Month-to-Month",
      "Priority content production",
      "TikTok & LinkedIn included",
      "Bi-weekly strategy check-ins",
      "Competitor analysis report",
      "Story & Reel creation",
    ],
  },
  "6-month": {
    name: "6-Month Package",
    price: 899,
    billingLabel: "Paid once — $5,394 total",
    total: 5394,
    savings: "You save $3,600 vs month-to-month",
    badge: "Maximum Savings",
    features: [
      "Everything in 3-Month Package",
      "All platforms (all channels)",
      "Weekly strategy calls",
      "Monthly video Reels (×2)",
      "Influencer outreach support",
      "Priority 24/7 support",
    ],
  },
};

const INDUSTRIES = [
  "Electricians", "Plumbers", "HVAC", "Painters", "Restaurants",
  "Real Estate", "Locksmiths", "General Contractors", "Retail",
  "Healthcare / Med Spa", "Fitness / Gym", "Law Firm", "Other",
];

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  businessName: string;
  industry: string;
  message: string;
  plan: string;
};

type SubmitStatus = "idle" | "redirecting" | "error";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

/* ─── Order Summary Sidebar ──────────────────────────────────── */

function OrderSummary({ planKey }: { planKey: string }) {
  const plan = PLAN_DATA[planKey] ?? PLAN_DATA["1-month"];

  return (
    <div className="bg-background-card border border-border rounded-2xl overflow-hidden shadow-sm sticky top-24">
      <div className="bg-accent-primary/5 border-b border-border px-6 py-5">
        <div className="flex items-center justify-between mb-1">
          <p className="text-xs font-bold text-accent-primary uppercase tracking-widest">Your Order</p>
          {plan.badge && (
            <span className="bg-accent-primary text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
              {plan.badge}
            </span>
          )}
        </div>
        <h3 className="text-[18px] font-bold text-text-primary">{plan.name}</h3>
        <p className="text-sm text-text-muted mt-0.5">Social Media Management</p>
      </div>

      <div className="px-6 py-5 border-b border-border">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm text-text-secondary">Monthly rate</span>
          <span className="font-semibold text-text-primary">${plan.price.toLocaleString()}/mo</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-text-secondary">Total charge</span>
          <span className="font-bold text-[18px] text-accent-primary">${plan.total.toLocaleString()}</span>
        </div>
        <p className="text-xs text-text-muted mt-2">{plan.billingLabel}</p>

        {plan.savings && (
          <div className="mt-3 flex items-center gap-1.5 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
            <Sparkles className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
            <span className="text-xs text-green-700 font-semibold">{plan.savings}</span>
          </div>
        )}
      </div>

      <div className="px-6 py-5 border-b border-border">
        <p className="text-[11px] font-bold text-text-muted uppercase tracking-widest mb-3">Included</p>
        <ul className="space-y-2.5">
          {plan.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <div className="w-4 h-4 rounded-full bg-accent-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-2.5 h-2.5 text-accent-primary" />
              </div>
              <span className="text-sm text-text-secondary">{f}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="px-6 py-4 space-y-1.5">
        <div className="flex items-center gap-2 text-text-muted">
          <Lock className="w-3.5 h-3.5" />
          <span className="text-[12px]">Secured by Stripe · 256-bit SSL</span>
        </div>
        <div className="flex items-center gap-2 text-text-muted">
          <Shield className="w-3.5 h-3.5" />
          <span className="text-[12px]">Your info is never shared or sold</span>
        </div>
        <div className="flex items-center gap-2 text-text-muted">
          <Star className="w-3.5 h-3.5" />
          <span className="text-[12px]">4.9★ rated · 150+ businesses served</span>
        </div>
      </div>

      {/* Stripe badge */}
      <div className="px-6 pb-5">
        <div className="flex items-center justify-center gap-2 bg-background-secondary rounded-xl py-2.5 px-3">
          <svg viewBox="0 0 60 25" className="h-4 w-auto opacity-60" fill="#635bff" xmlns="http://www.w3.org/2000/svg">
            <path d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04 1.26-.06 1.48zm-5.92-5.62c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.45.97V6.27h3.93l.2 1.04a4.58 4.58 0 0 1 3.28-1.27c2.9 0 5.62 2.6 5.62 7.17 0 5.13-2.7 7.09-5.66 7.09zM40 9.62c-.95 0-1.54.34-1.97.81l.03 6.26c.4.44.98.78 1.94.78 1.52 0 2.56-1.65 2.56-3.93C42.56 11.23 41.5 9.62 40 9.62zm-9.06-3.35h-4.44V20h4.44V6.27zm0-4.53h-4.44v3.68h4.44V1.74zM18.86 20l-.15-1.1c-.95 1.03-2.42 1.38-3.87 1.38-2.62 0-4.38-1.93-4.38-4.42 0-3.61 2.72-4.75 6.12-4.75h1.83v-.5c0-1.36-.64-2.03-2.38-2.03-1.42 0-2.83.45-3.97 1.11V6.27c1.2-.6 2.88-1.08 4.95-1.08 3.9 0 5.83 1.9 5.83 5.43V20h-3.98zm-.45-6.43h-1.23c-1.64 0-2.6.57-2.6 1.9 0 1.01.6 1.67 1.72 1.67.8 0 1.58-.3 2.11-.77v-2.8zm-8.8-7.3L6.5 20H2.06L0 6.27h4.54l1.3 9.2 2.3-9.2h3.47z"/>
          </svg>
          <span className="text-[11px] text-text-muted font-medium">Payments powered by Stripe</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Plan Selector ──────────────────────────────────────────── */

function PlanSelector({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
      {Object.entries(PLAN_DATA).map(([key, plan]) => (
        <button
          key={key}
          type="button"
          onClick={() => onChange(key)}
          className={`relative rounded-xl border p-4 text-left transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary ${
            value === key
              ? "border-accent-primary bg-accent-primary/5 shadow-sm"
              : "border-border bg-background-card hover:border-accent-primary/50"
          }`}
        >
          {plan.badge && (
            <span className="absolute -top-2.5 left-3 bg-accent-primary text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full whitespace-nowrap">
              {plan.badge}
            </span>
          )}
          <p className="font-semibold text-[13px] text-text-primary leading-tight mb-1 mt-1">{plan.name}</p>
          <p className="text-[22px] font-bold text-accent-primary leading-none">
            ${plan.price.toLocaleString()}
            <span className="text-[12px] text-text-muted font-normal">/mo</span>
          </p>
          {plan.savings && (
            <p className="text-[11px] text-green-600 font-medium mt-1">{plan.savings}</p>
          )}
          {value === key && (
            <div className="absolute top-3 right-3 w-4 h-4 rounded-full bg-accent-primary flex items-center justify-center">
              <Check className="w-2.5 h-2.5 text-white" />
            </div>
          )}
        </button>
      ))}
    </div>
  );
}

/* ─── Input Field ───────────────────────────────────────────── */

function Field({
  label, id, type = "text", placeholder, value, onChange, required = false, icon: Icon,
}: {
  label: string; id: string; type?: string; placeholder: string; value: string;
  onChange: (v: string) => void; required?: boolean; icon?: React.ElementType;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-text-primary">
        {label} {required && <span className="text-accent-primary">*</span>}
      </label>
      <div className="relative">
        {Icon && <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />}
        <input
          id={id} type={type} required={required} placeholder={placeholder} value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full border border-border rounded-xl bg-background-card px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all ${Icon ? "pl-10" : ""}`}
        />
      </div>
    </div>
  );
}

/* ─── Checkout Content ───────────────────────────────────────── */

function CheckoutContent() {
  const searchParams = useSearchParams();
  const initialPlan = searchParams.get("plan") ?? "1-month";
  const wasCancelled = searchParams.get("cancelled") === "true";

  const [form, setForm] = useState<FormState>({
    firstName: "", lastName: "", email: "", phone: "",
    businessName: "", industry: "", message: "",
    plan: PLAN_DATA[initialPlan] ? initialPlan : "1-month",
  });

  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const update = (key: keyof FormState) => (val: string) =>
    setForm((prev) => ({ ...prev, [key]: val }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("redirecting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/stripe/create-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.url) {
        throw new Error(data.error ?? "Failed to create checkout session");
      }

      // Redirect to Stripe Checkout
      window.location.href = data.url;
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or email us at info@puremarketing.ca"
      );
    }
  };

  const plan = PLAN_DATA[form.plan];

  return (
    <div className="max-w-[1100px] mx-auto px-6 py-16">
      {/* Cancelled banner */}
      <AnimatePresence>
        {wasCancelled && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-8 flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-xl px-5 py-4"
          >
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <p className="text-sm text-amber-800 font-medium">
              No worries — your payment was not charged. Review your order below and try again when ready.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-start">

        {/* LEFT — Form */}
        <div>
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <SectionLabel className="mb-3">Select Your Plan</SectionLabel>
            <PlanSelector value={form.plan} onChange={update("plan")} />
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            variants={fadeUp} custom={1} initial="hidden" animate="visible"
            className="bg-background-card border border-border rounded-2xl shadow-sm overflow-hidden"
          >
            {/* Your Information */}
            <div className="px-8 py-6 border-b border-border">
              <p className="font-semibold text-text-primary text-[15px] mb-5 flex items-center gap-2">
                <User className="w-4 h-4 text-accent-primary" />
                Your Information
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="First Name" id="firstName" placeholder="Jane"
                  value={form.firstName} onChange={update("firstName")} required icon={User} />
                <Field label="Last Name" id="lastName" placeholder="Smith"
                  value={form.lastName} onChange={update("lastName")} required />
                <Field label="Email Address" id="email" type="email" placeholder="jane@yourbusiness.com"
                  value={form.email} onChange={update("email")} required icon={Mail} />
                <Field label="Phone Number" id="phone" type="tel" placeholder="+1 (416) 555-0123"
                  value={form.phone} onChange={update("phone")} required icon={Phone} />
              </div>
            </div>

            {/* Business Details */}
            <div className="px-8 py-6 border-b border-border">
              <p className="font-semibold text-text-primary text-[15px] mb-5 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-accent-primary" />
                Business Details
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Business Name" id="businessName" placeholder="Smith Electric Inc."
                  value={form.businessName} onChange={update("businessName")} required icon={Building2} />

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="industry" className="text-sm font-medium text-text-primary">
                    Industry <span className="text-accent-primary">*</span>
                  </label>
                  <div className="relative">
                    <select id="industry" required value={form.industry}
                      onChange={(e) => update("industry")(e.target.value)}
                      className="w-full appearance-none border border-border rounded-xl bg-background-card px-4 py-3 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all cursor-pointer"
                    >
                      <option value="" disabled>Select your industry</option>
                      {INDUSTRIES.map((ind) => <option key={ind} value={ind}>{ind}</option>)}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                  </div>
                </div>

                <div className="sm:col-span-2 flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-text-primary">
                    Anything we should know? <span className="text-text-muted text-[12px]">(optional)</span>
                  </label>
                  <textarea id="message" rows={3}
                    placeholder="e.g. We currently have 500 followers on Instagram and post once a week..."
                    value={form.message} onChange={(e) => update("message")(e.target.value)}
                    className="w-full border border-border rounded-xl bg-background-card px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Payment info */}
            <div className="px-8 py-5 border-b border-border bg-background-secondary">
              <div className="flex items-start gap-3">
                <CreditCard className="w-5 h-5 text-accent-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-text-primary mb-1">
                    Secure Payment via Stripe
                  </p>
                  <p className="text-[13px] text-text-secondary leading-relaxed">
                    After clicking the button below, you&apos;ll be taken to Stripe&apos;s secure payment page.
                    We accept all major credit cards (Visa, Mastercard, Amex) and Apple Pay / Google Pay.
                    Your card details are never stored on our servers.
                  </p>
                </div>
              </div>
            </div>

            {/* Error */}
            <AnimatePresence>
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-8 py-4 bg-red-50 border-b border-red-200"
                >
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-red-700">{errorMsg}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit */}
            <div className="px-8 py-6">
              <button
                type="submit"
                disabled={status === "redirecting"}
                className="w-full btn-primary py-4 text-base flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group/submit"
              >
                {status === "redirecting" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Redirecting to Secure Payment...
                  </>
                ) : (
                  <>
                    <CreditCard className="w-5 h-5" />
                    Pay ${plan.total.toLocaleString()} CAD Securely
                    <ArrowRight className="w-5 h-5 transition-transform group-hover/submit:translate-x-1" />
                  </>
                )}
              </button>
              <div className="flex items-center justify-center gap-3 mt-3">
                <Lock className="w-3.5 h-3.5 text-text-muted" />
                <p className="text-xs text-text-muted text-center">
                  256-bit SSL encrypted · Powered by Stripe · No card stored on our servers
                </p>
              </div>
            </div>
          </motion.form>
        </div>

        {/* RIGHT — Order Summary */}
        <motion.div variants={fadeUp} custom={2} initial="hidden" animate="visible">
          <OrderSummary planKey={form.plan} />

          <div className="mt-6 bg-background-card border border-border rounded-2xl p-6">
            <p className="font-semibold text-text-primary text-sm mb-2">Have questions first?</p>
            <p className="text-[13px] text-text-secondary mb-4 leading-relaxed">
              No pressure at all. Talk to us before committing — it&apos;s completely free.
            </p>
            <Link
              href="/contact"
              className="block text-center text-sm font-medium text-accent-primary border border-accent-primary rounded-xl py-2.5 hover:bg-accent-primary hover:text-white transition-all duration-200"
            >
              Book a Free Call
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────────────── */

export default function CheckoutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background-secondary">
      <div className="bg-background-primary border-b border-border pt-[68px]">
        <div className="max-w-[1100px] mx-auto px-6 py-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <SectionLabel className="mb-3">Secure Checkout</SectionLabel>
            <h1 className="text-[30px] md:text-[36px] font-bold text-text-primary leading-tight mb-2">
              Get Started With Pure Marketing
            </h1>
            <p className="text-text-secondary text-[16px]">
              Complete your order below — you&apos;ll be redirected to Stripe&apos;s secure payment page.
            </p>
          </motion.div>
        </div>
      </div>

      <Suspense fallback={
        <div className="flex items-center justify-center py-24">
          <div className="w-8 h-8 border-2 border-accent-primary border-t-transparent rounded-full animate-spin" />
        </div>
      }>
        <CheckoutContent />
      </Suspense>
    </div>
  );
}
