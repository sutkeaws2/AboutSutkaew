"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, BrainCircuit, Globe, Sparkles, Play, Clock, Braces} from "lucide-react";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import VideoModal from "@/components/VideoModal";
import { BracesIcon } from "lucide-react";

const tools = [
  {
    href: "/",
    icon: Globe,
    title: "Personal Website",
    desc: "เว็บไซต์ส่วนตัวที่ทำด้วย Next.js + Tailwind CSS",
    tags: ["Next.js", "TypeScript"],
    status: "live",
  },
  {
    href: "https://type-speed-inky.vercel.app",
    icon: BrainCircuit,
    title: "Typing Speed Test",
    desc: "ทดสอบความเร็วในการพิมพ์ของคุณ",
    tags: ["JavaScript", "HTML", "CSS"],
    status: "live",
  },
  {
    href: "https://morse-code-translator-sepia.vercel.app",
    icon: Braces,
    title: "Morse Code Translator",
    desc: "แปลงข้อความเป็นรหัสมอร์สและกลับกัน",
    tags: ["html", "javascript", "css"],
    status: "live",
  },
  {
    href: "#",
    icon: Sparkles,
    title: "AI Summarize(อยู่ในช่วงพัฒนา)",
    desc: "สรุปบทความและเนื้อหายาวๆ ด้วย AI",
    tags: ["Next.js", "TypeScript", "OpenAI API"],
    status: "wip",
  },
];

const videos = [
  {
    id: 1,
    title: "Pika Ai Chatbot (Demo)",
    desc: "Pika Ai Chatbot ที่ผมสร้างขึ้นมาเพื่อทดลองใช้ OpenAI API ในการสร้างแชทบอทที่สามารถตอบคำถามและสนทนาได้อย่างเป็นธรรมชาติ(มั้ง)",
    src: "https://youtu.be/DD20J8xRRzk",
    type: "youtube" as const,
    duration: "1:00",
    thumbnail: null,
  },
  {
    id: 2,
    title: "#",
    src: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    type: "youtube" as const,
    duration: "3:33",
    thumbnail: null,
  },
];
// ==============================

const statusStyle: Record<string, string> = {
  live: "bg-accent/10 text-accent",
  tool: "bg-surface text-subtext border border-border",
  wip: "bg-yellow-500/10 text-yellow-400",
};

export default function ToolsPage() {
  const [activeVideo, setActiveVideo] = useState<(typeof videos)[0] | null>(null);

  return (
    <div className="max-w-3xl mx-auto px-5 pt-28 pb-20">
      <FadeIn>
        <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">
          Tools
        </p>
        <h1 className="font-display text-4xl sm:text-5xl text-text mb-4">
          สิ่งที่ผมสร้าง
        </h1>
        <p className="text-subtext leading-relaxed max-w-lg mb-12">
          เครื่องมือและโปรเจกต์ต่างๆ ที่ผมสร้างขึ้นมา บางอันก็เป็นโปรเจกต์เล็กๆ ที่ทำเพื่อเรียนรู้ บางอันก็เป็นเครื่องมือที่ผมใช้เองอยู่บ่อยๆ
        </p>
      </FadeIn>

      {/* Tools List */}
      <div className="flex flex-col gap-3 mb-16">
        {tools.map((tool, i) => (
          <FadeIn key={tool.title} delay={i * 0.08}>
            <Link
              href={tool.href} target="_blank"
              className="group flex items-start gap-4 p-5 rounded-xl bg-surface border border-border hover:border-accent/40 hover:bg-accent/5 transition-all duration-200"
            >
              <div className="mt-0.5 p-2 rounded-lg bg-bg border border-border group-hover:border-accent/30 transition-colors">
                <tool.icon size={16} className="text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-sm font-medium text-text group-hover:text-accent transition-colors">
                    {tool.title}
                  </p>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-mono ${statusStyle[tool.status]}`}>
                    {tool.status}
                  </span>
                </div>
                <p className="text-xs text-muted mb-3">{tool.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {tool.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded bg-bg text-xs font-mono text-muted border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <ArrowUpRight size={14} className="mt-1 text-muted opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
            </Link>
          </FadeIn>
        ))}
      </div>

      {/* Video Section */}
      <FadeIn>
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1 bg-border" />
          <div className="flex items-center gap-2">
            <Play size={13} className="text-accent" />
            <span className="text-xs font-mono text-subtext uppercase tracking-widest">Videos</span>
          </div>
          <div className="h-px flex-1 bg-border" />
        </div>
      </FadeIn>

      <div className="grid sm:grid-cols-2 gap-3">
        {videos.map((video, i) => (
          <FadeIn key={video.id} delay={i * 0.08}>
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => setActiveVideo(video)}
              className="group w-full text-left rounded-xl bg-surface border border-border hover:border-accent/40 overflow-hidden transition-all duration-200"
            >
              {/* Thumbnail area */}
              <div className="relative w-full bg-bg flex items-center justify-center" style={{ aspectRatio: "16/9" }}>
                {video.thumbnail ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
                )}

                {/* Play button */}
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 border border-accent/40 group-hover:bg-accent/30 group-hover:scale-110 transition-all duration-200">
                  <Play size={18} className="text-accent ml-0.5" fill="currentColor" />
                </div>

                {/* Duration badge */}
                {video.duration && (
                  <span className="absolute bottom-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded bg-black/60 text-xs font-mono text-white/80">
                    <Clock size={10} />
                    {video.duration}
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="p-4">
                <p className="text-sm font-medium text-text group-hover:text-accent transition-colors mb-1">
                  {video.title}
                </p>
                <p className="text-xs text-muted leading-relaxed">{video.desc}</p>
              </div>
            </motion.button>
          </FadeIn>
        ))}
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={!!activeVideo}
        onClose={() => setActiveVideo(null)}
        src={activeVideo?.src ?? ""}
        title={activeVideo?.title}
        type={activeVideo?.type}
      />
    </div>
  );
}
