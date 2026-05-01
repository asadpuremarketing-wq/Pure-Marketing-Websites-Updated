"use client";

import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import Link from "next/link";

const GOOGLE_REVIEWS = [
  {
    initials: "DA",
    name: "Dennis Aboagye",
    badge: "",
    time: "a month ago",
    text: "Excellent social media management service! Very professional, creative, and always responsive. Highly recommend for anyone looking to grow their online presence.",
  },
  {
    initials: "UO",
    name: "Unnati Oza",
    badge: "Local Guide",
    time: "a month ago",
    text: "I have been dealing with Pure marketing from past 5-6 months. Asad has been handling my social media page and he has been very professional and easy to contact and connect when needed. I would recommend his service 100%.",
  },
  {
    initials: "BY",
    name: "Benard Yeboah",
    badge: "",
    time: "a month ago",
    text: "Asad does an excellent job managing my social media across multiple platforms. Reliable, and easy to work with.",
  },
  {
    initials: "WB",
    name: "Wade Beattie",
    badge: "",
    time: "7 months ago",
    text: "Great communication, and pricing.",
  },
  {
    initials: "EW",
    name: "Eleanor Wilson",
    badge: "",
    time: "4 months ago",
    text: "Gravity contractors referred me to them and they do a very good job.",
  },
  {
    initials: "JR",
    name: "John Riadhh",
    badge: "Local Guide",
    time: "4 months ago",
    text: "Asad was very professional in helping, definitely recommend their marketing team.",
  },
  {
    initials: "JW",
    name: "John Williamson",
    badge: "",
    time: "14 hours ago",
    text: "Fantastic business first class.",
  },
  {
    initials: "N2",
    name: "Negril 25",
    badge: "",
    time: "9 months ago",
    text: "Asad was very professional and patient while working with me. He helped me to create my Website for my healthcare business. He also helped with creating business cards and pamphlets. I am very happy with the outcome and I will continue to use him for Social Media services. I highly recommend him.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Reviews() {
  return (
    <section className="bg-background-primary py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <SectionLabel>Client Reviews</SectionLabel>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[28px] md:text-[40px] font-bold text-text-primary leading-tight mb-4"
          >
            Real Results From Real Businesses
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[17px] text-text-secondary max-w-[560px]"
          >
            Do not take our word for it. Hear directly from the local business owners we have helped grow.
          </motion.p>
        </div>

        {/* Overall Google Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="flex items-center space-x-4 mb-2">
            <span className="text-[56px] font-bold text-text-primary leading-none">5.0</span>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} className="w-6 h-6 text-accent-primary" fill="currentColor" />
              ))}
            </div>
          </div>
          <p className="text-sm text-text-muted mb-2">Based on verified Google reviews</p>
          <div className="flex items-center justify-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-primary"></span>
            <span className="text-sm text-text-muted font-medium">Google</span>
          </div>
        </motion.div>

        {/* Google Review Cards Grid - 3 cards only */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {GOOGLE_REVIEWS.slice(0, 3).map((review, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="bg-background-card border border-border rounded-2xl p-6 flex flex-col h-full hover:border-accent-primary/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-accent-primary/15 text-accent-primary flex items-center justify-center font-medium text-sm flex-shrink-0">
                    {review.initials}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-text-primary font-medium text-sm">{review.name}</span>
                    {review.badge && <span className="text-text-muted text-xs">{review.badge}</span>}
                  </div>
                </div>
                <div className="flex space-x-0.5">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 text-accent-primary" fill="currentColor" />
                  ))}
                </div>
              </div>

              <div className="flex-grow mb-4">
                <p className="text-text-secondary text-sm leading-relaxed">
                  {review.text}
                </p>
              </div>

              <div className="flex items-center space-x-2 text-xs text-text-muted mt-auto">
                <span>Google</span>
                <span className="w-1 h-1 rounded-full bg-text-muted/50"></span>
                <span>{review.time}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <Link href="/portfolio#reviews" className="btn-primary inline-flex items-center gap-2">
            View All Reviews
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
