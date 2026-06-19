"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VIDEO_INDUSTRIES, type VideoItem } from "@/lib/video-portfolio";

function VideoCard({ v, onPlay }: { v: VideoItem; onPlay: (key: string) => void }) {
  return (
    <motion.button
      onClick={() => onPlay(v.id + "|" + v.platform)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group relative rounded-2xl overflow-hidden border border-border hover:border-accent-primary hover:shadow-xl transition-all duration-300 aspect-[9/16] w-full"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={v.thumbnail} alt={v.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
          <svg className="w-6 h-6 text-accent-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
        <p className="text-white text-[13px] font-semibold leading-tight">{v.title}</p>
        <p className="text-white/60 text-[11px]">{v.client}</p>
      </div>
    </motion.button>
  );
}

export default function VideoPortfolio() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const close = useCallback(() => setActiveVideo(null), []);

  const industries = VIDEO_INDUSTRIES.filter((ind) => ind.videos.length > 0);
  if (industries.length === 0) return null;

  const embedUrl = (key: string) => {
    const [id, platform] = key.split("|");
    return platform === "youtube"
      ? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`
      : `https://player.vimeo.com/video/${id}?autoplay=1`;
  };

  return (
    <>
      {industries.map((industry, idx) => (
        <section
          key={industry.label}
          className={`py-20 ${idx % 2 === 0 ? "bg-background-primary" : "bg-background-secondary"}`}
        >
          <div className="max-w-[1200px] mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
            >
              <div>
                <p className="text-accent-primary text-xs font-semibold uppercase tracking-widest mb-3">Video Portfolio</p>
                <h2 className="text-[28px] md:text-[36px] font-bold text-text-primary leading-tight mb-2">
                  {industry.label}
                </h2>
                <p className="text-[15px] text-text-secondary max-w-[480px]">{industry.description}</p>
              </div>
              <span className="text-[13px] text-text-muted shrink-0">{industry.videos.slice(0, 6).length} videos</span>
            </motion.div>

            <div className={`grid gap-4 grid-cols-2 ${
              industry.videos.length <= 4
                ? "sm:grid-cols-2 md:grid-cols-4"
                : "sm:grid-cols-3 lg:grid-cols-6"
            }`}>
              {industry.videos.slice(0, 6).map((v, i) => (
                <VideoCard key={i} v={v} onPlay={setActiveVideo} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Lightbox */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={close}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[360px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl"
            >
              <iframe
                src={embedUrl(activeVideo)}
                allow="autoplay; fullscreen"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </motion.div>
            <button onClick={close} className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
