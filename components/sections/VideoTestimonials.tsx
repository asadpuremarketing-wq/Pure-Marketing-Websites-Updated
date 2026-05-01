"use client";

import { motion } from "framer-motion";
import { Play, Star } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const VIDEO_TESTIMONIALS = [
  {
    name: "Client Name",
    business: "Business Type, City",
    result: "Add result here",
    // Replace src with your video URL (YouTube embed, Vimeo, or direct MP4)
    src: "",
  },
  {
    name: "Client Name",
    business: "Business Type, City",
    result: "Add result here",
    src: "",
  },
  {
    name: "Client Name",
    business: "Business Type, City",
    result: "Add result here",
    src: "",
  },
];

export default function VideoTestimonials() {
  return (
    <section className="bg-background-secondary py-20">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-4"
          >
            <SectionLabel>Video Testimonials</SectionLabel>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-[28px] md:text-[38px] font-bold text-text-primary tracking-tight leading-tight"
          >
            Hear It Directly From Our Clients
          </motion.h2>
        </div>

        {/* 3 Video Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VIDEO_TESTIMONIALS.map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-background-card border border-border rounded-2xl overflow-hidden hover:border-accent-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Video area */}
              <div className="relative aspect-video bg-[#111] flex items-center justify-center group cursor-pointer overflow-hidden">
                {video.src ? (
                  <iframe
                    src={video.src}
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="w-14 h-14 bg-accent-primary rounded-full flex items-center justify-center z-10"
                    >
                      <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 left-4 z-10">
                      <p className="text-white font-semibold text-sm">{video.name}</p>
                      <p className="text-white/70 text-xs">{video.business}</p>
                    </div>
                  </>
                )}
              </div>

              {/* Card body */}
              <div className="p-5">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 text-accent-primary" fill="currentColor" />
                  ))}
                </div>
                <p className="text-text-primary font-semibold text-sm">{video.name}</p>
                <p className="text-text-muted text-xs mt-0.5">{video.business}</p>
                {video.result && (
                  <span className="inline-flex items-center mt-3 bg-accent-primary/10 text-accent-primary text-xs font-semibold rounded-full px-3 py-1">
                    {video.result}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
