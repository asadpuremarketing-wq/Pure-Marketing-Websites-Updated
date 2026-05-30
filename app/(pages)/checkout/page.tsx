"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check, Lock, CreditCard, User, Mail, Phone, Building2,
  ChevronDown, ArrowRight, AlertCircle, Shield, TrendingUp, Share2,
} from "lucide-react";
import Link from "next/link";

/* ── product types ────────────────────────────────────────── */
const PRODUCT_TYPES = [
  {
    key: "social-media",
    icon: Share2,
    title: "Social Media Management",
    desc: "Daily content, community engagement, and platform growth across Instagram, Facebook, TikTok & more.",
  },
  {
    key: "growth-system",
    icon: TrendingUp,
    title: "90-Day Growth System",
    desc: "Complete lead generation system: website, Google Ads, Meta Ads, SEO, automation, and more.",
  },
];

/* ── plans per product ─────────────────────────────────────── */
const SOCIAL_PLANS = [
  {
    key: "1-month",
    name: "Monthly",
    price: 1499,
    label: "$1,499/mo",
    billing: "Billed monthly · Cancel anytime",
    cancellation: null,
    savings: null,
    badge: null,
    features: [
      "Instagram and Facebook",
      "Daily content creation",
      "Community engagement",
      "Monthly analytics report",
      "Cancel anytime",
    ],
  },
  {
    key: "3-month",
    name: "3 Months",
    price: 1199,
    label: "$1,199/mo",
    billing: "Billed monthly for 3 months",
    cancellation: "25% cancellation fee if cancelled early",
    savings: "Save $900",
    badge: "Most Popular",
    features: [
      "Everything in Monthly",
      "TikTok and LinkedIn",
      "Bi-weekly check-ins",
      "Competitor analysis",
      "Story and Reel creation",
    ],
  },
  {
    key: "6-month",
    name: "6 Months",
    price: 899,
    label: "$899/mo",
    billing: "Billed monthly for 6 months",
    cancellation: "25% cancellation fee if cancelled early",
    savings: "Save $3,600",
    badge: "Best Value",
    features: [
      "Everything in 3 Months",
      "All platforms",
      "Weekly strategy calls",
      "2 Reels per month",
      "Priority support",
    ],
  },
];

const GROWTH_PLANS = [
  {
    key: "growth-system",
    name: "90-Day Growth System",
    price: 1500,
    label: "$1,500 CAD/mo",
    billing: "Billed monthly · 3 payments · Auto-cancels after 3 months",
    cancellation: null,
    savings: "Total: $4,500 CAD",
    badge: null,
    features: [
      "High-converting website",
      "Google & Meta Ads setup",
      "SEO & geo growth foundation",
      "Reputation & review system",
      "Monthly content creation",
      "Follow-up automation & CRM",
      "Retargeting campaigns",
      "Payment info saved — charged automatically each month",
    ],
  },
];

const INDUSTRIES = [
  "Electricians", "Plumbers", "HVAC", "Painters", "Restaurants",
  "Real Estate", "Locksmiths", "General Contractors", "Retail",
  "Healthcare", "Fitness", "Law Firm", "Other",
];

type FormState = {
  firstName: string; lastName: string; email: string; phone: string;
  businessName: string; industry: string; message: string; plan: string;
};

/* ── field component ───────────────────────────────────────── */
function Field({ label, id, type = "text", placeholder, value, onChange, required = false, icon: Icon }: {
  label: string; id: string; type?: string; placeholder: string; value: string;
  onChange: (v: string) => void; required?: boolean; icon?: React.ElementType;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[13px] font-medium text-text-primary">
        {label}{required && <span className="text-accent-primary ml-0.5">*</span>}
      </label>
      <div className="relative">
        {Icon && <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />}
        <input
          id={id} type={type} required={required} placeholder={placeholder} value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full border border-border rounded-xl bg-white px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all ${Icon ? "pl-10" : ""}`}
        />
      </div>
    </div>
  );
}

/* ── main checkout ─────────────────────────────────────────── */
function CheckoutContent() {
  const searchParams = useSearchParams();
  const wasCancelled = searchParams.get("cancelled") === "true";
  const urlProduct = searchParams.get("product");

  const [productType, setProductType] = useState<"social-media" | "growth-system">(
    urlProduct === "growth-system" ? "growth-system" : "social-media"
  );
  const [form, setForm] = useState<FormState>({
    firstName: "", lastName: "", email: "", phone: "",
    businessName: "", industry: "", message: "",
    plan: productType === "growth-system" ? "growth-system" : "1-month",
  });
  const [status, setStatus] = useState<"idle" | "redirecting" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const update = (key: keyof FormState) => (val: string) =>
    setForm((prev) => ({ ...prev, [key]: val }));

  const switchProduct = (type: "social-media" | "growth-system") => {
    setProductType(type);
    setForm((prev) => ({
      ...prev,
      plan: type === "growth-system" ? "growth-system" : "1-month",
    }));
  };

  const plans = productType === "growth-system" ? GROWTH_PLANS : SOCIAL_PLANS;
  const selected = plans.find((p) => p.key === form.plan) ?? plans[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("redirecting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/stripe/create-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, productType }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) throw new Error(data.error ?? "Something went wrong");
      window.location.href = data.url;
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-[1100px] mx-auto px-6 py-12">

      <AnimatePresence>
        {wasCancelled && (
          <motion.div
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="mb-8 flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-xl px-5 py-4"
          >
            <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
            <p className="text-sm text-amber-800">Your payment was not charged. Try again below.</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Step 1: Choose service ── */}
      <div className="mb-10">
        <p className="text-[13px] font-semibold text-text-muted uppercase tracking-widest mb-4">Step 1 — Select a Service</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PRODUCT_TYPES.map(({ key, icon: Icon, title, desc }) => {
            const isSelected = productType === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => switchProduct(key as "social-media" | "growth-system")}
                className={`relative text-left rounded-2xl border-2 p-6 transition-all duration-200 focus:outline-none ${
                  isSelected
                    ? "border-accent-primary bg-white shadow-lg shadow-accent-primary/10"
                    : "border-border bg-background-card hover:border-accent-primary/40"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${isSelected ? "bg-accent-primary" : "bg-accent-primary/10"}`}>
                    <Icon className={`w-5 h-5 ${isSelected ? "text-white" : "text-accent-primary"}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-bold text-[15px] text-text-primary">{title}</p>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${isSelected ? "border-accent-primary bg-accent-primary" : "border-border"}`}>
                        {isSelected && <Check className="w-3 h-3 text-white" />}
                      </div>
                    </div>
                    <p className="text-[13px] text-text-secondary mt-1 leading-relaxed">{desc}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 items-start">
        {/* LEFT */}
        <div className="space-y-6">

          {/* ── Step 2: Choose plan ── */}
          <div>
            <p className="text-[13px] font-semibold text-text-muted uppercase tracking-widest mb-4">
              Step 2 — {productType === "growth-system" ? "Payment Overview" : "Select a Plan"}
            </p>
            <AnimatePresence mode="wait">
              {productType === "growth-system" ? (
                /* Growth System — single fixed plan, shown as info card */
                <motion.div
                  key="growth-info"
                  initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-2xl border-2 border-accent-primary bg-white shadow-md p-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div>
                      <p className="font-black text-[18px] text-text-primary">90-Day Growth System</p>
                      <p className="text-[13px] text-text-secondary mt-0.5">$1,500 CAD/month × 3 months — auto-cancels after final payment</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-[28px] font-extrabold text-accent-primary leading-none">$1,500</p>
                      <p className="text-[11px] text-text-muted">CAD / month</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 bg-green-50 border border-green-200 text-green-700 text-[11px] font-semibold px-3 py-1 rounded-md">
                      <Check className="w-3 h-3" /> Total: $4,500 CAD
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-semibold px-3 py-1 rounded-md">
                      <Shield className="w-3 h-3" /> Payment info saved — charged automatically
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-orange-50 border border-orange-200 text-orange-700 text-[11px] font-semibold px-3 py-1 rounded-md">
                      <Lock className="w-3 h-3" /> Subscription ends after 3 payments
                    </span>
                  </div>
                </motion.div>
              ) : (
                /* Social Media — plan selector */
                <motion.div
                  key={productType}
                  initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-3"
                >
                  {plans.map((plan) => {
                    const isSelected = form.plan === plan.key;
                    return (
                      <button
                        key={plan.key}
                        type="button"
                        onClick={() => update("plan")(plan.key)}
                        className={`relative text-left rounded-2xl border-2 p-5 transition-all duration-200 focus:outline-none ${
                          isSelected
                            ? "border-accent-primary bg-white shadow-md"
                            : "border-border bg-background-card hover:border-accent-primary/30"
                        }`}
                      >
                        {plan.badge && (
                          <span className="absolute -top-2.5 left-4 bg-accent-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-0.5 rounded-full">
                            {plan.badge}
                          </span>
                        )}
                        <div className="flex items-center justify-between mb-3 mt-1">
                          <p className="font-bold text-[14px] text-text-primary">{plan.name}</p>
                          <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${isSelected ? "border-accent-primary bg-accent-primary" : "border-border"}`}>
                            {isSelected && <Check className="w-2.5 h-2.5 text-white" />}
                          </div>
                        </div>
                        <div className="flex items-baseline gap-1 mb-1">
                          <span className="text-[22px] font-extrabold text-text-primary">{plan.label}</span>
                        </div>
                        <p className="text-[11px] text-text-muted mb-2">{plan.billing}</p>
                        {plan.savings && (
                          <span className="inline-block bg-green-50 border border-green-200 text-green-700 text-[11px] font-semibold px-2 py-0.5 rounded-md">
                            {plan.savings}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── Step 3: Details form ── */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="bg-white border border-border rounded-2xl overflow-hidden"
          >
            <div className="px-6 py-5 border-b border-border bg-background-secondary">
              <p className="text-[13px] font-semibold text-text-muted uppercase tracking-widest">Step 3 — Your Details</p>
            </div>

            {/* Contact */}
            <div className="px-6 py-6 border-b border-border">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="First Name" id="firstName" placeholder="Jane" value={form.firstName} onChange={update("firstName")} required icon={User} />
                <Field label="Last Name" id="lastName" placeholder="Smith" value={form.lastName} onChange={update("lastName")} required />
                <Field label="Email" id="email" type="email" placeholder="jane@business.com" value={form.email} onChange={update("email")} required icon={Mail} />
                <Field label="Phone" id="phone" type="tel" placeholder="+1 (647) 555-0100" value={form.phone} onChange={update("phone")} required icon={Phone} />
              </div>
            </div>

            {/* Business */}
            <div className="px-6 py-6 border-b border-border">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Business Name" id="businessName" placeholder="Smith Electric Inc." value={form.businessName} onChange={update("businessName")} required icon={Building2} />
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="industry" className="text-[13px] font-medium text-text-primary">
                    Industry<span className="text-accent-primary ml-0.5">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="industry" required value={form.industry}
                      onChange={(e) => update("industry")(e.target.value)}
                      className="w-full appearance-none border border-border rounded-xl bg-white px-4 py-3 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary transition-all cursor-pointer"
                    >
                      <option value="" disabled>Select industry</option>
                      {INDUSTRIES.map((ind) => <option key={ind} value={ind}>{ind}</option>)}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                  </div>
                </div>
                <div className="sm:col-span-2 flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[13px] font-medium text-text-primary">
                    Notes <span className="text-text-muted font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="message" rows={3}
                    placeholder="Anything useful for us to know before we start"
                    value={form.message} onChange={(e) => update("message")(e.target.value)}
                    className="w-full border border-border rounded-xl bg-white px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary transition-all resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Error */}
            <AnimatePresence>
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
                  className="px-6 py-4 bg-red-50 border-b border-red-200"
                >
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-red-700">{errorMsg}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit */}
            <div className="px-6 py-6">
              <button
                type="submit"
                disabled={status === "redirecting"}
                className="w-full bg-accent-primary hover:bg-accent-hover text-white font-bold py-4 rounded-xl text-[15px] flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed group/btn shadow-[0_4px_20px_rgba(240,100,40,0.25)]"
              >
                {status === "redirecting" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Redirecting to Stripe...
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    Pay {selected.label} Securely
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </>
                )}
              </button>
              <div className="flex items-center justify-center gap-5 mt-4">
                <div className="flex items-center gap-1.5 text-text-muted">
                  <Lock className="w-3 h-3" />
                  <span className="text-[11px]">SSL Encrypted</span>
                </div>
                <div className="flex items-center gap-1.5 text-text-muted">
                  <Shield className="w-3 h-3" />
                  <span className="text-[11px]">Powered by Stripe</span>
                </div>
                <div className="flex items-center gap-1.5 text-text-muted">
                  <CreditCard className="w-3 h-3" />
                  <span className="text-[11px]">Visa, Mastercard, Amex</span>
                </div>
              </div>
            </div>
          </motion.form>
        </div>

        {/* RIGHT — Order Summary */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}
          className="space-y-4"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`${productType}-${form.plan}`}
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-[#111] rounded-2xl overflow-hidden text-white sticky top-24"
            >
              <div className="px-6 py-5 border-b border-white/10">
                <p className="text-[10px] font-bold text-accent-primary uppercase tracking-widest mb-1">Order Summary</p>
                <p className="text-[16px] font-bold">
                  {productType === "growth-system" ? "90-Day Growth System" : "Social Media Management"}
                </p>
                <p className="text-sm text-white/40 mt-0.5">{selected.name}</p>
              </div>

              <div className="px-6 py-5 border-b border-white/10">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-white/50">Amount due</span>
                  <span className="text-[20px] font-extrabold text-accent-primary">{selected.label}</span>
                </div>
                <p className="text-[11px] text-white/30 mb-2">{selected.billing}</p>
                {selected.savings && (
                  <p className="text-[12px] text-green-400 font-medium">{selected.savings} vs monthly rate</p>
                )}
                {productType === "growth-system" && (
                  <p className="text-[11px] text-white/30 mt-2">3 monthly payments of $1,500 · Subscription ends automatically</p>
                )}
              </div>

              <div className="px-6 py-5">
                <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-3">Included</p>
                <ul className="space-y-2">
                  {selected.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <Check className="w-3.5 h-3.5 text-accent-primary flex-shrink-0" />
                      <span className="text-[13px] text-white/60">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="bg-white border border-border rounded-2xl p-5 text-center">
            <p className="text-[13px] text-text-secondary mb-3">Need a different service or custom quote?</p>
            <Link
              href="/contact"
              className="block text-sm font-semibold text-accent-primary border border-accent-primary/30 rounded-xl py-2.5 hover:bg-accent-primary hover:text-white transition-all duration-200"
            >
              Contact Us First →
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background-secondary">
      <div className="bg-[#111] pt-[68px]">
        <div className="max-w-[1100px] mx-auto px-6 py-10">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <p className="text-accent-primary text-xs font-bold uppercase tracking-widest mb-2">Secure Checkout</p>
            <h1 className="text-[28px] md:text-[32px] font-extrabold text-white leading-tight">
              Complete Your Order
            </h1>
            <p className="text-white/40 text-sm mt-1">Choose your service and plan below — all payments processed securely via Stripe.</p>
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
