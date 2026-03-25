"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;   
  title?: string;
  type?: "youtube" | "file";
}

function getYouTubeEmbed(url: string) {
  // รองรับทั้ง youtu.be และ youtube.com
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([^&?/]+)/
  );
  return match ? `https://www.youtube.com/embed/${match[1]}?autoplay=1` : url;
}

export default function VideoModal({
  isOpen,
  onClose,
  src,
  title,
  type = "youtube",
}: VideoModalProps) {
  // ปิดด้วย Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  // ล็อค scroll เมื่อ modal เปิด
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="relative w-full max-w-3xl pointer-events-auto">
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                {title && (
                  <p className="text-sm font-medium text-text truncate pr-4">
                    {title}
                  </p>
                )}
                <button
                  onClick={onClose}
                  className="ml-auto flex items-center justify-center w-8 h-8 rounded-full bg-surface border border-border text-subtext hover:text-text hover:border-accent/40 transition-all"
                  aria-label="Close video"
                >
                  <X size={15} />
                </button>
              </div>

              {/* Video */}
              <div className="relative w-full rounded-xl overflow-hidden bg-black border border-border"
                style={{ aspectRatio: "16/9" }}
              >
                {type === "youtube" ? (
                  <iframe
                    src={getYouTubeEmbed(src)}
                    title={title ?? "Video"}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                ) : (
                  <video
                    src={src}
                    controls
                    autoPlay
                    className="absolute inset-0 w-full h-full"
                  />
                )}
              </div>

              {/* Hint */}
              <p className="text-center text-xs text-muted mt-3 font-mono">
                กด ESC หรือคลิกด้านนอกเพื่อปิด
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
