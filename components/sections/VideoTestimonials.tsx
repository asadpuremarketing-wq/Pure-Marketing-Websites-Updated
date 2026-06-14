"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Star } from "lucide-react";
import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";

const VIDEO_TESTIMONIALS = [
  {
    name: "Dennis Aboagye",
    business: "Locksmith, Hamilton",
    result: "Went from 0 Calls to 50 Calls in just a month",
    videoId: "fCHwZNf4mLY",
  },
  {
    name: "Gravity Contractors",
    business: "General Contractor, Hamilton",
    result: "Getting Consistent Leads for 1.5 Years",
    videoId: "Q2CR_qQNTes",
  },
  {
    name: "Rahat Bakers",
    business: "Bakery Shop, Niagara Falls",
    result: "Consistent Social Media Growth",
    videoId: "77k6wuoo13A",
  },
];

function VideoCard({
  video,
  index,
}: {
  video: (typeof VIDEO_TESTIMONIALS)[0];
  index: number;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-background-card border border-border rounded-2xl overflow-hidden hover:border-accent-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      {/* Video area */}
      <div className="relative aspect-video bg-[#111] overflow-hidden">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.videoId}?autoplay=1&rel=0&playsinline=1`}
            title={`${video.name} testimonial`}
            allow="autoplay; fullscreen; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 w-full h-full group focus:outline-none"
            aria-label={`Play ${video.name} testimonial video`}
          >
            {/* Thumbnail */}
            <Image
              src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
              alt={`${video.name} thumbnail`}
              fill
              className="object-cover"
              unoptimized
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors duration-200" />
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.12 }}
                transition={{ type: "spring", stiffness: 400, damping: 12 }}
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl"
              >
                <Play className="w-6 h-6 text-accent-primary ml-1" fill="currentColor" />
              </motion.div>
            </div>
          </button>
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
  );
}

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
            <VideoCard key={video.videoId} video={video} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
