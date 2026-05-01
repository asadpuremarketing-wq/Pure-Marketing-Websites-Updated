"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, ChevronDown, Briefcase, Globe, Camera } from "lucide-react";
import CTABanner from "@/components/sections/CTABanner";
import PageHero from "@/components/ui/PageHero";

const FAQS = [
  {
    q: "What is the cost to get started?",
    a: "Costs vary depending on what you need. Website alone starts at $2,500. Lead generation starts at $1,500/month. We offer a free audit to discuss your specific needs and provide an accurate quote."
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

function AccordionItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="bg-background-card border border-border rounded-xl mb-3 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
      >
        <span className="font-semibold text-[16px] text-text-primary">{question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-5 h-5 text-text-muted" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-6 pb-4 text-sm text-text-secondary leading-relaxed"
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
      />

      {/* SECTION 2 - TWO COLUMN CONTACT LAYOUT */}
      <section className="bg-background-secondary py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* LEFT COLUMN - CONTACT FORM */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="w-full lg:w-3/5">
              <div className="bg-background-card border border-border rounded-2xl p-8 shadow-sm relative overflow-hidden">
                <h2 className="text-[24px] font-bold text-text-primary mb-6">Send Us a Message</h2>
                
                {/* Form uses HTML form submission OR integrate with EmailJS/Formspree API */}
                <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm text-text-primary font-medium block mb-2">Your Name</label>
                      <input required name="name" type="text" placeholder="First and last name" className="w-full bg-white border border-border rounded-lg px-4 py-3 text-base text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors" />
                    </div>
                    <div>
                      <label className="text-sm text-text-primary font-medium block mb-2">Phone Number</label>
                      <input required name="phone" type="tel" placeholder="(647) 555-0100" className="w-full bg-white border border-border rounded-lg px-4 py-3 text-base text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm text-text-primary font-medium block mb-2">Email Address</label>
                    <input required name="email" type="email" placeholder="you@example.com" className="w-full bg-white border border-border rounded-lg px-4 py-3 text-base text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors" />
                  </div>

                  <div>
                    <label className="text-sm text-text-primary font-medium block mb-2">Type of Business</label>
                    <select required name="industry" defaultValue="" className="w-full bg-white border border-border rounded-lg px-4 py-3 text-base text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors appearance-none">
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
                    <label className="text-sm text-text-primary font-medium block mb-2">Tell us about your goals</label>
                    <textarea required name="message" rows={6} placeholder="What are you looking to achieve with your marketing?" className="w-full bg-white border border-border rounded-lg px-4 py-3 text-base text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors resize-none"></textarea>
                  </div>

                  <div className="flex items-center mt-2">
                    <input type="checkbox" name="strategy_call" id="strategy" className="w-4 h-4 text-accent-primary border-border rounded focus:ring-accent-primary" />
                    <label htmlFor="strategy" className="text-sm text-text-secondary ml-2 cursor-pointer">
                      I am interested in booking a free strategy call
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full bg-accent-primary text-white rounded-lg px-6 py-3 hover:bg-accent-hover text-base font-medium transition-colors duration-300 mt-6 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formStatus === "submitting" ? "Sending..." : formStatus === "error" ? "Something went wrong - try again" : "Send Message"}
                  </button>

                  <p className="text-xs text-text-muted mt-3 text-center">
                    We typically respond within 2 hours during business hours.
                  </p>
                </form>

                {/* Success Message Overlay */}
                <AnimatePresence>
                  {formStatus === "success" && (
                    <motion.div 
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-background-card/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-8"
                    >
                      <div className="w-16 h-16 bg-accent-primary/20 text-accent-primary rounded-full flex items-center justify-center mb-4">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <h3 className="text-[24px] font-bold text-text-primary mb-2">Thanks for reaching out!</h3>
                      <p className="text-text-secondary text-sm">We have received your message and will be in touch soon.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* RIGHT COLUMN - CONTACT INFORMATION */}
            <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }} initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-full lg:w-2/5 flex flex-col space-y-6">
              
              <motion.a variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} href="tel:+16479512786" className="bg-background-card border border-border rounded-2xl p-6 text-center hover:border-accent-primary transition-colors group block">
                <div className="w-16 h-16 mx-auto bg-accent-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8 text-accent-primary" />
                </div>
                <span className="text-sm text-text-muted uppercase tracking-wider font-semibold">Phone</span>
                <p className="text-[20px] font-bold text-text-primary mt-2">+1 647-951-2786</p>
                <p className="text-sm text-text-secondary mt-2">Monday to Friday, 9am to 6pm EST</p>
              </motion.a>

              <motion.a variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} href="mailto:info@puremarketing.ca" className="bg-background-card border border-border rounded-2xl p-6 text-center hover:border-accent-primary transition-colors group block">
                <div className="w-16 h-16 mx-auto bg-accent-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-accent-primary" />
                </div>
                <span className="text-sm text-text-muted uppercase tracking-wider font-semibold">Email</span>
                <p className="text-[20px] font-bold text-text-primary mt-2">info@puremarketing.ca</p>
                <p className="text-sm text-text-secondary mt-2">We reply to all emails within 24 hours</p>
              </motion.a>

              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="bg-background-card border border-border rounded-2xl p-6 text-center">
                <div className="w-16 h-16 mx-auto bg-accent-primary/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 text-accent-primary" />
                </div>
                <span className="text-sm text-text-muted uppercase tracking-wider font-semibold">Office</span>
                <p className="text-[20px] font-bold text-text-primary mt-2">Hamilton, Ontario</p>
                <p className="text-sm text-text-secondary mt-2">Serving all of Canada and US</p>
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-center mt-8">
                <span className="text-sm text-text-muted">Follow us on social</span>
                <div className="flex justify-center gap-4 mt-3">
                  {/* Note: lucide-react removed brand icons, using approximations */}
                  <a href="#" title="LinkedIn" className="w-10 h-10 rounded-full bg-background-card border border-border flex items-center justify-center text-text-muted hover:text-accent-primary hover:border-accent-primary transition-colors">
                    <Briefcase className="w-5 h-5" />
                  </a>
                  <a href="#" title="Facebook" className="w-10 h-10 rounded-full bg-background-card border border-border flex items-center justify-center text-text-muted hover:text-accent-primary hover:border-accent-primary transition-colors">
                    <Globe className="w-5 h-5" />
                  </a>
                  <a href="#" title="Instagram" className="w-10 h-10 rounded-full bg-background-card border border-border flex items-center justify-center text-text-muted hover:text-accent-primary hover:border-accent-primary transition-colors">
                    <Camera className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - FAQ SECTION */}
      <section className="bg-background-primary py-20">
        <div className="max-w-[700px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-[38px] font-bold text-text-primary leading-tight mb-4">
              Common Questions
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="text-[17px] text-text-secondary max-w-[540px]">
              Did not find what you are looking for? Check our FAQ or reach out to us directly.
            </motion.p>
          </div>

          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {FAQS.map((faq, i) => (
              <motion.div key={i} variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.3 } } }}>
                <AccordionItem question={faq.q} answer={faq.a} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 - CTA BANNER */}
      <CTABanner />

    </div>
  );
}
