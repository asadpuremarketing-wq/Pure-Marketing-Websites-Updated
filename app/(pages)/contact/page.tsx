"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import CTABanner from "@/components/sections/CTABanner";
import PageHero from "@/components/ui/PageHero";
import { SectionLabel } from "@/components/ui/SectionLabel";

/* ─── Social icon SVGs ─────────────────────────────────────── */
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const FAQS = [
  {
    q: "What is the cost to get started?",
    a: "Costs vary depending on what you need. Lead generation starts at $1,499/month. Video production starts at $699. We offer a free audit to discuss your specific needs and provide an accurate quote."
  },
  {
    q: "How quickly can you get me leads?",
    a: "We can have campaigns live within 7-10 days. Most clients see their first leads within 2-3 weeks. Significant results typically come in 30-60 days as campaigns optimize."
  },
  {
    q: "What if I am not happy with the results?",
    a: "We offer a 30-day results guarantee. If you are not seeing progress, we will either optimize your campaigns or refund your month's fees. Your success is our success."
  },
  {
    q: "Do you work with businesses outside of local services?",
    a: "We specialize in local service businesses, restaurants, and real estate. We understand these industries deeply. If you are in another industry, we can discuss if we are the right fit."
  },
  {
    q: "Can I change or cancel my service at any time?",
    a: "Yes. No long-term contracts. You can pause, modify, or cancel anytime. We prefer to earn your business every month rather than lock you in."
  },
  {
    q: "How do you report on results?",
    a: "Monthly reports via email showing leads, calls, bookings, revenue, and ROI from each campaign. You have a dedicated account manager for questions."
  }
];

/* ─── Animation helper ──────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.55, delay },
});

function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`bg-white/[0.04] border rounded-xl mb-3 overflow-hidden transition-colors duration-200 ${isOpen ? "border-accent-primary/30" : "border-white/10 hover:border-accent-primary/30"}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
      >
        <span className="font-semibold text-[16px] text-white">{question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-5 h-5 text-[#666]" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-6 pb-5 text-sm text-[#888] leading-relaxed"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      industry: (form.elements.namedItem("industry") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      strategyCall: (form.elements.namedItem("strategy_call") as HTMLInputElement).checked,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setFormStatus("success");
        form.reset();
        setTimeout(() => setFormStatus("idle"), 6000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 5000);
      }
    } catch {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">

      <PageHero
        label="Contact"
        title="Let's Talk About"
        titleAccent="Your Business"
        subtitle="Whether you have questions about our services, want to discuss your specific needs, or are ready to get started, we would love to hear from you."
        breadcrumbs={[{ label: "Contact" }]}
        fadeToColor="#F8FAFC"
      />

      {/* ── 1. CONTACT SECTION ── white bg */}
      <section className="bg-white py-24">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* LEFT — Contact Form */}
            <motion.div
              {...fadeUp(0)}
              className="w-full lg:w-[60%]"
            >
              <div className="bg-white border-2 border-[#0d0d0d] rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                <h2 className="text-[24px] font-black text-[#080808] mb-6">Send Us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm text-[#333] font-medium block mb-2">Your Name</label>
                      <input
                        required
                        name="name"
                        type="text"
                        placeholder="First and last name"
                        className="w-full bg-white border border-[#ddd] rounded-xl px-4 py-3.5 text-base text-[#080808] focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-[#333] font-medium block mb-2">Phone Number</label>
                      <input
                        required
                        name="phone"
                        type="tel"
                        placeholder="(647) 555-0100"
                        className="w-full bg-white border border-[#ddd] rounded-xl px-4 py-3.5 text-base text-[#080808] focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm text-[#333] font-medium block mb-2">Email Address</label>
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full bg-white border border-[#ddd] rounded-xl px-4 py-3.5 text-base text-[#080808] focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-[#333] font-medium block mb-2">Type of Business</label>
                    <select
                      required
                      name="industry"
                      defaultValue=""
                      className="w-full bg-white border border-[#ddd] rounded-xl px-4 py-3.5 text-base text-[#080808] focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-all appearance-none"
                    >
                      <option value="" disabled>Select your industry...</option>
                      <option value="Electrician">Electrician</option>
                      <option value="Plumber">Plumber</option>
                      <option value="HVAC">HVAC</option>
                      <option value="Painter">Painter</option>
                      <option value="Other Trade">Other Trade</option>
                      <option value="Real Estate">Real Estate</option>
                      <option value="Restaurant">Restaurant</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm text-[#333] font-medium block mb-2">Tell us about your goals</label>
                    <textarea
                      required
                      name="message"
                      rows={6}
                      placeholder="What are you looking to achieve with your marketing?"
                      className="w-full bg-white border border-[#ddd] rounded-xl px-4 py-3.5 text-base text-[#080808] focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-all resize-none"
                    />
                  </div>

                  <div className="flex items-center mt-2">
                    <input
                      type="checkbox"
                      name="strategy_call"
                      id="strategy"
                      className="w-4 h-4 text-accent-primary border-[#ddd] rounded focus:ring-accent-primary"
                    />
                    <label htmlFor="strategy" className="text-sm text-[#555] ml-2 cursor-pointer">
                      I am interested in booking a free strategy call
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full bg-accent-primary text-white rounded-xl px-6 py-4 font-bold text-base hover:bg-accent-hover transition-colors duration-300 mt-6 shadow-xl shadow-accent-primary/20 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formStatus === "submitting"
                      ? "Sending..."
                      : formStatus === "error"
                      ? "Something went wrong — try again"
                      : "Send Message"}
                  </button>

                  <p className="text-xs text-[#999] mt-3 text-center">
                    We typically respond within 2 hours during business hours.
                  </p>
                </form>

                {/* Success Overlay */}
                <AnimatePresence>
                  {formStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-[#0d0d0d]/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-8 rounded-2xl"
                    >
                      <div className="w-16 h-16 bg-accent-primary rounded-full flex items-center justify-center mb-4 shadow-xl shadow-accent-primary/30">
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-[24px] font-black text-white mb-2">Thanks for reaching out!</h3>
                      <p className="text-[#aaa] text-sm">We have received your message and will be in touch soon.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* RIGHT — Contact Info cards */}
            <div className="w-full lg:w-[40%] flex flex-col space-y-4">
              {/* Phone */}
              <motion.a
                {...fadeUp(0.1)}
                href="tel:+16479512786"
                className="bg-[#0d0d0d] border border-white/10 rounded-2xl p-6 hover:border-accent-primary/30 transition-colors group block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent-primary" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-accent-primary uppercase tracking-widest">Phone</span>
                    <p className="text-[18px] font-bold text-white mt-0.5">+1 647-951-2786</p>
                    <p className="text-sm text-[#666] mt-0.5">Monday to Friday, 9am to 6pm EST</p>
                  </div>
                </div>
              </motion.a>

              {/* Email */}
              <motion.a
                {...fadeUp(0.2)}
                href="mailto:info@puremarketing.ca"
                className="bg-[#0d0d0d] border border-white/10 rounded-2xl p-6 hover:border-accent-primary/30 transition-colors group block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent-primary" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-accent-primary uppercase tracking-widest">Email</span>
                    <p className="text-[18px] font-bold text-white mt-0.5">info@puremarketing.ca</p>
                    <p className="text-sm text-[#666] mt-0.5">We reply to all emails within 24 hours</p>
                  </div>
                </div>
              </motion.a>

              {/* Address */}
              <motion.a
                {...fadeUp(0.3)}
                href="https://maps.google.com/?q=870+Queenston+Rd,+Stoney+Creek,+ON+L8G+0B9"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0d0d0d] border border-white/10 rounded-2xl p-6 hover:border-accent-primary/30 transition-colors group block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent-primary" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-accent-primary uppercase tracking-widest">Office</span>
                    <p className="text-[18px] font-bold text-white mt-0.5">870 Queenston Rd</p>
                    <p className="text-sm text-[#666] mt-0.5">Stoney Creek, ON L8G 0B9</p>
                    <p className="text-sm text-accent-primary mt-1 group-hover:underline">View on Google Maps →</p>
                  </div>
                </div>
              </motion.a>

              {/* Social icons */}
              <motion.div {...fadeUp(0.4)} className="pt-2">
                <p className="text-sm text-[#666] mb-3">Follow us on social</p>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/company/pure-marketing0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                    className="w-10 h-10 rounded-full bg-[#0d0d0d] border border-white/10 flex items-center justify-center text-[#666] hover:text-accent-primary hover:border-accent-primary/30 transition-colors"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61576684511407"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Facebook"
                    className="w-10 h-10 rounded-full bg-[#0d0d0d] border border-white/10 flex items-center justify-center text-[#666] hover:text-accent-primary hover:border-accent-primary/30 transition-colors"
                  >
                    <FacebookIcon className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/puremarketing0"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Instagram"
                    className="w-10 h-10 rounded-full bg-[#0d0d0d] border border-white/10 flex items-center justify-center text-[#666] hover:text-accent-primary hover:border-accent-primary/30 transition-colors"
                  >
                    <InstagramIcon className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. MAP SECTION ── #f5f5f5 bg */}
      <section className="bg-[#f5f5f5] py-12">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="rounded-2xl border border-[#e8e8e8] shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2904.5!2d-79.7214!3d43.2157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9b2c2c2c2c2d%3A0x0!2s870+Queenston+Rd%2C+Stoney+Creek%2C+ON+L8G+0B9!5e0!3m2!1sen!2sca!4v1700000000000"
              width="100%"
              height="380"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pure Marketing Office Location"
            />
          </div>
        </div>
      </section>

      {/* ── 3. FAQ SECTION ── #0d0d0d bg */}
      <section className="bg-[#0d0d0d] py-24 relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accent-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[760px] mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-12">
            <motion.div {...fadeUp(0)} className="mb-3">
              <SectionLabel>FAQ</SectionLabel>
            </motion.div>
            <motion.h2
              {...fadeUp(0.1)}
              className="text-[34px] md:text-[42px] font-black text-white leading-tight mb-4"
            >
              Common Questions
            </motion.h2>
            <motion.p
              {...fadeUp(0.2)}
              className="text-[17px] text-[#666] max-w-[540px]"
            >
              Did not find what you are looking for? Check our FAQ or reach out to us directly.
            </motion.p>
          </div>

          <motion.div {...fadeUp(0.25)}>
            {FAQS.map((faq, i) => (
              <AccordionItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </div>
  );
}
