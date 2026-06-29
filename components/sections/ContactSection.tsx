"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.55, delay },
});

export default function ContactSection() {
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
    <section className="bg-white py-24">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="text-center mb-14">
          <SectionLabel className="mb-4 block">Get In Touch</SectionLabel>
          <h2 className="text-[30px] md:text-[38px] font-black text-[#080808] leading-tight mb-4">
            Ready to Get More Leads?
          </h2>
          <p className="text-[17px] text-[#555] max-w-[560px] mx-auto">
            Tell us about your business and we will put together a free strategy for you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Form */}
          <motion.div {...fadeUp(0)} className="w-full lg:w-[60%]">
            <div className="bg-white border-2 border-[#0d0d0d] rounded-2xl p-8 shadow-2xl relative overflow-hidden">
              <h3 className="text-[22px] font-black text-[#080808] mb-6">Send Us a Message</h3>

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
                  <label htmlFor="section-industry" className="text-sm text-[#333] font-medium block mb-2">Type of Business</label>
                  <select
                    required
                    name="industry"
                    id="section-industry"
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
                    rows={5}
                    placeholder="What are you looking to achieve with your marketing?"
                    className="w-full bg-white border border-[#ddd] rounded-xl px-4 py-3.5 text-base text-[#080808] focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 transition-all resize-none"
                  />
                </div>

                <div className="flex items-center mt-2">
                  <input
                    type="checkbox"
                    name="strategy_call"
                    id="strategy-section"
                    className="w-4 h-4 text-accent-primary border-[#ddd] rounded focus:ring-accent-primary"
                  />
                  <label htmlFor="strategy-section" className="text-sm text-[#555] ml-2 cursor-pointer">
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

          {/* Contact Info */}
          <div className="w-full lg:w-[40%] flex flex-col space-y-4">
            <motion.a
              {...fadeUp(0.1)}
              href="tel:+16479512786"
              className="bg-[#0d0d0d] border border-white/10 rounded-2xl p-6 hover:border-accent-primary/30 transition-colors block"
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

            <motion.a
              {...fadeUp(0.2)}
              href="mailto:info@puremarketing.ca"
              className="bg-[#0d0d0d] border border-white/10 rounded-2xl p-6 hover:border-accent-primary/30 transition-colors block"
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

            <motion.a
              {...fadeUp(0.3)}
              href="https://maps.google.com/?q=870+Queenston+Rd,+Stoney+Creek,+ON+L8G+0B9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0d0d0d] border border-white/10 rounded-2xl p-6 hover:border-accent-primary/30 transition-colors block"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent-primary" />
                </div>
                <div>
                  <span className="text-[10px] font-black text-accent-primary uppercase tracking-widest">Office</span>
                  <p className="text-[18px] font-bold text-white mt-0.5">870 Queenston Rd</p>
                  <p className="text-sm text-[#666] mt-0.5">Stoney Creek, ON L8G 0B9</p>
                </div>
              </div>
            </motion.a>

            {/* Trust signals */}
            <motion.div {...fadeUp(0.4)} className="bg-background-secondary border border-border rounded-2xl p-6 space-y-3">
              {[
                "No long-term contracts",
                "First leads within 7-14 days",
                "Free strategy audit included",
                "Dedicated account manager",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-text-secondary">
                  <svg className="w-4 h-4 text-accent-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
