"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, TrendingUp, Video, Share2, BarChart2, Check, ChevronDown } from "lucide-react";
import Link from "next/link";
import CTABanner from "@/components/sections/CTABanner";
import PageHero from "@/components/ui/PageHero";

const SERVICES_DETAILED = [
  {
    icon: Globe,
    title: "Web Development",
    description: "High-converting websites built from scratch for local service businesses. Every design element, every page, every form is optimized to turn visitors into leads and customers. Mobile-first, fast-loading, SEO-ready.",
    features: [
      "Custom responsive design",
      "Lead capture forms and CTA optimization",
      "Mobile optimization and page speed",
      "SEO technical foundation",
      "Google Analytics and conversion tracking",
      "30 days of revisions and support"
    ]
  },
  {
    icon: TrendingUp,
    title: "Lead Generation System",
    description: "A complete done-for-you lead generation engine. We do not just set up campaigns and leave you. We manage, optimize, and report on every aspect of your lead flow. Google Local Service Ads, Google Ads, Meta Ads, and organic social all working together.",
    features: [
      "Google Local Service Ads setup and management",
      "Google Search Ads strategy and optimization",
      "Meta Ads (Facebook and Instagram) campaign creation",
      "Keyword research and targeting",
      "Monthly performance reports and optimization",
      "Dedicated account manager"
    ]
  },
  {
    icon: Video,
    title: "Video Production",
    description: "Professional video production for your business. From 30-second social media clips to full brand story videos to property tours to food content. Our videographers and editors create content that drives engagement and leads.",
    features: [
      "Professional video shoots (multiple formats)",
      "Concept development and scripting",
      "Professional editing and color grading",
      "Multi-format delivery (social, web, ads)",
      "Stock music and motion graphics",
      "Unlimited revisions until satisfied"
    ]
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "We own your social media so you do not have to. Daily content creation. Posting across all platforms. Community engagement. Growth strategy. We keep your business top of mind with your local audience.",
    features: [
      "Daily content creation and posting",
      "Multi-platform management (Instagram, Facebook, TikTok, LinkedIn)",
      "Community engagement and response management",
      "Monthly content calendar and strategy",
      "Growth and analytics reporting",
      "Quarterly strategy reviews"
    ]
  },
  {
    icon: BarChart2,
    title: "Google and Meta Ads",
    description: "Specialized paid advertising management for local businesses. We do not believe in wasting money on clicks. Every dollar spent is tied to leads, calls, bookings, or revenue. Continuous testing and optimization.",
    features: [
      "Campaign strategy and setup",
      "Keyword research and audience targeting",
      "Ad copy and creative development",
      "Bid management and budget optimization",
      "Weekly performance monitoring",
      "Monthly detailed reporting and recommendations"
    ]
  }
];

const PACKAGES = [
  {
    title: "Build Your Own",
    subtext: "Pick the services you need",
    price: "Starting at $1,500/month",
    description: "",
    features: [
      "Choose any single service",
      "No minimum contract",
      "Month-to-month",
      "Dedicated support"
    ],
    button: "Start With One Service",
    popular: false
  },
  {
    title: "Growth Package",
    subtext: "The complete lead system",
    price: "$4,500/month",
    description: "Includes: Website, Lead Gen System, Social Media, Monthly Video Content",
    features: [
      "Custom website",
      "Full lead generation system",
      "Daily social media management",
      "One video shoot per month",
      "Monthly reporting",
      "Dedicated account manager"
    ],
    button: "Start Growing Now",
    popular: true
  },
  {
    title: "Premium System",
    subtext: "Full service and concierge",
    price: "Custom pricing",
    description: "Everything in Growth Package plus: Additional video shoots, advanced analytics, strategy consulting",
    features: [
      "Everything in Growth Package",
      "Three video shoots per month",
      "Advanced analytics and reporting",
      "Monthly strategy calls",
      "Priority support",
      "Custom integrations"
    ],
    button: "Schedule Consultation",
    popular: false
  }
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Free Audit and Strategy",
    description: "We review your current marketing, analyze competitors, and identify gaps. No obligations. We show you exactly what we would do and what results are possible."
  },
  {
    num: "02",
    title: "Campaign Design",
    description: "If you want to move forward, we design your complete marketing system. Website. Ads. Social. Video. Everything mapped out and approved by you before any work starts."
  },
  {
    num: "03",
    title: "Launch and Optimization",
    description: "We build and launch your campaigns. First two weeks we monitor closely and optimize. We are focused on getting results fast."
  },
  {
    num: "04",
    title: "Ongoing Growth",
    description: "Monthly reporting. Continuous optimization. Strategy calls. We do not set it and forget it. Your growth is our only focus."
  }
];

const FAQS = [
  {
    q: "How long before we see results?",
    a: "Most clients see their first leads within 7-14 days of campaign launch. Significant growth typically happens in 30-60 days. We focus on quality leads that convert, not vanity metrics."
  },
  {
    q: "Do you have contracts or can we cancel anytime?",
    a: "No long-term contracts. You can pause or cancel anytime. We earn your business every month. That said, we recommend a minimum 90 days to see real results from any marketing system."
  },
  {
    q: "What if we only want one service, not the full package?",
    a: "Absolutely. We offer all services individually. Many clients start with one service and add more as they see results. No pressure to buy everything at once."
  },
  {
    q: "How do you measure success?",
    a: "We measure what matters: leads, phone calls, bookings, revenue. Every report shows exactly how much business came from each campaign and the ROI."
  },
  {
    q: "What industries do you work with?",
    a: "We specialize in local service businesses like electricians, plumbers, HVAC, painters, skilled trades, restaurants, and real estate. We focus on these because we understand them deeply."
  },
  {
    q: "Can you guarantee results?",
    a: "We cannot guarantee specific numbers, but we guarantee we will optimize and iterate every single day to get you the best results possible. Our reputation is built on delivering real business growth."
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

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <PageHero
        label="Services"
        title="Complete Marketing Solutions"
        titleAccent="for Local Businesses"
        subtitle="We do not just offer individual services. We build integrated marketing systems where every piece works together to bring you consistent leads and growth."
        breadcrumbs={[{ label: "Services" }]}
      />

      {/* SECTION 2 - ALL SERVICES DETAILED */}
      <section className="bg-background-secondary py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-[38px] font-bold text-text-primary leading-tight mb-4">
              Here Is Everything We Offer
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="text-[17px] text-text-secondary max-w-[540px]">
              From websites to ads to video to social, we handle every part of your marketing strategy.
            </motion.p>
          </div>

          <div className="flex flex-col space-y-6">
            {SERVICES_DETAILED.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-background-card border border-border rounded-2xl overflow-hidden p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    
                    <div className="lg:w-1/4 flex flex-col items-start">
                      <div className="w-14 h-14 rounded-xl bg-accent-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-8 h-8 text-accent-primary" />
                      </div>
                      <h3 className="text-[22px] font-bold text-text-primary">{service.title}</h3>
                    </div>
                    
                    <div className="lg:w-2/4">
                      <p className="text-[16px] text-text-secondary leading-relaxed h-full flex items-center">
                        {service.description}
                      </p>
                    </div>
                    
                    <div className="lg:w-1/4 flex flex-col">
                      <span className="text-sm text-text-muted uppercase tracking-wider font-semibold mb-4 block">What&apos;s Included</span>
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-accent-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-text-secondary">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link href="/contact" className="text-accent-primary text-sm font-medium hover:underline mt-auto inline-flex items-center">
                        Learn More
                      </Link>
                    </div>
                    
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3 - SERVICE PACKAGES */}
      <section className="bg-background-primary py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-[38px] font-bold text-text-primary leading-tight mb-4">
              How to Work With Us
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="text-[17px] text-text-secondary max-w-[560px]">
              Choose how you want to work with us. A la carte services, popular packages, or a fully custom solution.
            </motion.p>
          </div>

          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {PACKAGES.map((pkg, i) => (
              <motion.div key={i} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className={`bg-background-card rounded-2xl p-8 flex flex-col h-full border ${pkg.popular ? 'border-accent-primary relative shadow-xl transform lg:-translate-y-4' : 'border-border'}`}>
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent-primary text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-[24px] font-bold text-text-primary mb-1">{pkg.title}</h3>
                <p className="text-sm text-text-muted mb-6">{pkg.subtext}</p>
                
                <div className="mb-6">
                  <span className="text-[32px] font-bold text-accent-primary font-bold">{pkg.price}</span>
                </div>
                
                {pkg.description && (
                  <p className="text-sm text-text-primary font-medium mb-6">{pkg.description}</p>
                )}
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-accent-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href="/contact" className={`w-full py-3 rounded-lg text-center font-medium transition-colors duration-300 mt-auto ${pkg.popular ? 'bg-accent-primary text-white hover:bg-accent-hover' : 'bg-transparent border border-border text-text-primary hover:border-border-hover'}`}>
                  {pkg.button}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 - PROCESS / HOW WE WORK */}
      <section className="bg-background-secondary py-20 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-[38px] font-bold text-text-primary leading-tight mb-4">
              Our Process
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="text-[17px] text-text-secondary max-w-[540px]">
              From initial consultation to ongoing growth, here is how we work with you.
            </motion.p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-[40px] left-0 w-full h-px bg-border z-0"></div>
            
            <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {PROCESS_STEPS.map((step, i) => (
                <motion.div key={i} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="bg-background-card border border-border rounded-2xl p-6 text-center flex flex-col items-center shadow-sm">
                  <span className="text-[48px] font-bold text-accent-primary/20 leading-none mb-4">{step.num}</span>
                  <h3 className="font-semibold text-[18px] text-text-primary mb-3">{step.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - FAQ */}
      <section className="bg-background-primary py-20">
        <div className="max-w-[700px] mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-[38px] font-bold text-text-primary text-center leading-tight mb-12">
            Frequently Asked Questions
          </motion.h2>

          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {FAQS.map((faq, i) => (
              <motion.div key={i} variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.3 } } }}>
                <AccordionItem question={faq.q} answer={faq.a} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 6 - CTA BANNER */}
      <CTABanner />

    </div>
  );
}
