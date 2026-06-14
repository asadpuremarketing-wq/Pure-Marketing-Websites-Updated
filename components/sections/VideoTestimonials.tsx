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

// YouTube thumbnail sizes from best to worst quality
const YT_SIZES = ["hqdefault", "mqdefault"];

function VideoCard({
  video,
  index,
  isPlaying,
  onPlay,
}: {
  video: (typeof VIDEO_TESTIMONIALS)[0];
  index: number;
  isPlaying: boolean;
  onPlay: () => void;
}) {
  const [sizeIndex, setSizeIndex] = useState(0);
  const [usePlaceholder, setUsePlaceholder] = useState(false);

  // Use custom thumbnail if provided, otherwise try YouTube sizes in order
  const imgSrc =
    "thumbnail" in video && video.thumbnail
      ? video.thumbnail
      : `https://img.youtube.com/vi/${video.videoId}/${YT_SIZES[sizeIndex]}.jpg`;

  const handleImgError = () => {
    if ("thumbnail" in video && video.thumbnail) {
      // Custom thumbnail failed — fall through to YouTube
      setUsePlaceholder(true);
      return;
    }
    const next = sizeIndex + 1;
    if (next < YT_SIZES.length) {
      setSizeIndex(next);
    } else {
      setUsePlaceholder(true);
    }
  };

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
        {isPlaying ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.videoId}?autoplay=1&rel=0&playsinline=1`}
            title={`${video.name} testimonial`}
            allow="autoplay; fullscreen; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <button
            onClick={onPlay}
            className="absolute inset-0 w-full h-full group focus:outline-none"
            aria-label={`Play ${video.name} testimonial video`}
          >
            {/* Thumbnail or branded placeholder */}
            {usePlaceholder ? (
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1107] to-[#0d0d0d] flex items-center justify-center">
                <div className="text-center px-4">
                  <div className="w-14 h-14 rounded-full bg-accent-primary/20 border border-accent-primary/30 flex items-center justify-center mx-auto mb-3">
                    <span className="text-accent-primary text-xl font-black">
                      {video.name.charAt(0)}
                    </span>
                  </div>
                  <p className="text-white font-bold text-sm">{video.name}</p>
                  <p className="text-white/50 text-xs mt-1">{video.business}</p>
                </div>
              </div>
            ) : (
              <Image
                src={imgSrc}
                alt={`${video.name} thumbnail`}
                fill
                className="object-cover"
                unoptimized
                onError={handleImgError}
              />
            )}

            {/* Overlay */}
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
  const [playingId, setPlayingId] = useState<string | null>(null);

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
            <VideoCard
              key={video.videoId}
              video={video}
              index={i}
              isPlaying={playingId === video.videoId}
              onPlay={() => setPlayingId(video.videoId)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
