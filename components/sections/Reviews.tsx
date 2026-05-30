"use client";

import { motion } from "framer-motion";
import { Star, Quote, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const GOOGLE_REVIEWS = [
  { name: "Dennis Aboagye", badge: "", time: "a month ago", photo: "https://randomuser.me/api/portraits/men/32.jpg", text: "Excellent social media management service! Very professional, creative, and always responsive. Highly recommend for anyone looking to grow their online presence." },
  { name: "Unnati Oza", badge: "Local Guide", time: "a month ago", photo: "https://randomuser.me/api/portraits/women/44.jpg", text: "I have been dealing with Pure marketing from past 5-6 months. Asad has been handling my social media page and he has been very professional and easy to contact and connect when needed. I would recommend his service 100%." },
  { name: "Benard Yeboah", badge: "", time: "a month ago", photo: "https://randomuser.me/api/portraits/men/75.jpg", text: "Asad does an excellent job managing my social media across multiple platforms. Reliable, and easy to work with." },
  { name: "Wade Beattie", badge: "", time: "7 months ago", photo: "https://randomuser.me/api/portraits/men/52.jpg", text: "Great communication, and pricing." },
  { name: "Eleanor Wilson", badge: "", time: "4 months ago", photo: "https://randomuser.me/api/portraits/women/68.jpg", text: "Gravity contractors referred me to them and they do a very good job." },
  { name: "John Riadhh", badge: "Local Guide", time: "4 months ago", photo: "https://randomuser.me/api/portraits/men/41.jpg", text: "Asad was very professional in helping, definitely recommend their marketing team." },
  { name: "John Williamson", badge: "", time: "14 hours ago", photo: "https://randomuser.me/api/portraits/men/60.jpg", text: "Fantastic business first class." },
  { name: "Negril 25", badge: "", time: "9 months ago", photo: "https://randomuser.me/api/portraits/men/88.jpg", text: "Asad was very professional and patient while working with me. He helped me to create my Website for my healthcare business. He also helped with creating business cards and pamphlets. I am very happy with the outcome and I will continue to use him for Social Media services. I highly recommend him." },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.55, delay },
});

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Google "G" logo SVG
function GoogleG() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

export default function Reviews() {
  return (
    <section className="bg-[#f5f5f5] py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.p {...fadeUp(0)} className="text-accent-primary text-xs font-semibold uppercase tracking-widest mb-4">
            Google Reviews
          </motion.p>
          <motion.h2
            {...fadeUp(0.1)}
            className="text-[32px] md:text-[44px] font-black text-[#0d0d0d] leading-tight mb-4"
          >
            What Our Clients Say
          </motion.h2>

          {/* 5-star + rating */}
          <motion.div {...fadeUp(0.2)} className="flex flex-col items-center gap-2 mt-2">
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-accent-primary" fill="currentColor" />
              ))}
              <span className="text-[22px] font-black text-[#0d0d0d] ml-2">5.0</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#666]">
              <GoogleG />
              <span>5.0 on Google</span>
              <span className="text-[#ccc]">·</span>
              <span>Based on verified reviews</span>
            </div>
          </motion.div>
        </div>

        {/* Review Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {GOOGLE_REVIEWS.slice(0, 3).map((review, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              className="bg-white border border-[#e8e8e8] rounded-2xl p-6 flex flex-col hover:border-accent-primary/20 hover:shadow-lg transition-all duration-300"
            >
              {/* Large quote icon */}
              <Quote className="w-10 h-10 text-accent-primary/20 mb-4 flex-shrink-0" fill="currentColor" />

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-accent-primary" fill="currentColor" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-sm text-[#444] leading-relaxed flex-grow mb-6">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Bottom: photo + name + badge + time + Google G */}
              <div className="border-t border-[#ebebeb] pt-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0 bg-accent-primary/10">
                    <Image
                      src={review.photo}
                      alt={review.name}
                      width={36}
                      height={36}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-[#0d0d0d] truncate">{review.name}</p>
                    <p className="text-xs text-[#999] truncate">
                      {review.badge ? `${review.badge} · ` : ""}{review.time}
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <GoogleG />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          {...fadeUp(0.4)}
          className="mt-10 text-center"
        >
          <Link
            href="/portfolio#reviews"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-primary hover:gap-3 transition-all duration-200"
          >
            View All Reviews
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
