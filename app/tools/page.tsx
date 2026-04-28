"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { 
  ArrowUpRight, 
  BrainCircuit, 
  Globe, 
  Sparkles, 
  Play, 
  Clock, 
  Braces, 
  BringToFront, 
  X, 
  RefreshCw 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import VideoModal from "@/components/VideoModal";

const tools = [
  {
    id: "personal-website",
    icon: Globe,
    title: "Personal Website",
    desc: "เว็บไซต์ส่วนตัวที่ทำด้วย Next.js + Tailwind CSS",
    tags: ["NEXT.JS", "TYPESCRIPT"],
    status: "live" as const,
    type: "internal" as const,
  },
  {
    id: "typing-speed",
    icon: BrainCircuit,
    title: "Typing Speed Test",
    desc: "ทดสอบความเร็วในการพิมพ์ของคุณ",
    tags: ["JAVASCRIPT", "HTML", "CSS"],
    status: "live" as const,
    type: "iframe" as const,
    url: "https://type-speed-inky.vercel.app",
  },
  {
    id: "morse-code",
    icon: Braces,
    title: "Morse Code Translator",
    desc: "แปลงข้อความเป็นรหัสมอร์สและกลับกัน",
    tags: ["HTML", "JAVASCRIPT", "CSS"],
    status: "live" as const,
    type: "iframe" as const,
    url: "https://morse-code-translator-sepia.vercel.app",
  },
  {
    id: "code-to-image",
    icon: BringToFront,
    title: "Code to image conversion",
    desc: "แปลง code เป็น visual content 9:16",
    tags: ["HTML", "JAVASCRIPT", "CSS"],
    status: "live" as const,
    type: "iframe" as const,
    url: "https://code-to-image-conversion.vercel.app/",
  },
  {
    id: "ai-summarize",
    icon: Sparkles,
    title: "AI Summarize",
    desc: "สรุปบทความและเนื้อหายาวๆ ด้วย AI",
    tags: ["Next.js", "TypeScript", "OpenAI API"],
    status: "wip" as const,
    type: "coming-soon" as const,
  },
];

const videos = [
  {
    id: 1,
    title: "Pika Ai Chatbot (Demo)",
    desc: "Pika Ai Chatbot ที่ผมสร้างขึ้นมาเพื่อทดลองใช้ OpenAI API",
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

const statusStyle: Record<string, string> = {
  live: "bg-accent/10 text-accent",
  wip: "bg-yellow-500/10 text-yellow-400",
};

export default function ToolsPage() {
  const router = useRouter();
  const [activeTool, setActiveTool] = useState<(typeof tools)[0] | null>(null);
  const [activeVideo, setActiveVideo] = useState<(typeof videos)[0] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleOpenTool = (tool: (typeof tools)[0]) => {
    if (tool.type === "internal") {
      router.push("/");      
      return;
    }
    setActiveTool(tool);
    setIsLoading(true);
  };

  const closeModal = () => {
    setActiveTool(null);
    setIsLoading(false);
  };

  const refreshIframe = () => {
    if (iframeRef.current && activeTool?.url) {
      setIsLoading(true);
      iframeRef.current.src = activeTool.url;
    }
  };

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
          <FadeIn key={tool.id} delay={i * 0.08}>
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.985 }}
              onClick={() => handleOpenTool(tool)}
              className="group w-full flex items-start gap-4 p-5 rounded-xl bg-surface border border-border hover:border-accent/40 hover:bg-accent/5 transition-all duration-200 text-left"
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
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-bg text-xs font-mono text-muted border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <ArrowUpRight
                size={14}
                className="mt-1 text-muted opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
              />
            </motion.button>
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
              <div className="relative w-full bg-bg flex items-center justify-center" style={{ aspectRatio: "16/9" }}>
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />

                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 border border-accent/40 group-hover:bg-accent/30 group-hover:scale-110 transition-all duration-200">
                  <Play size={18} className="text-accent ml-0.5" fill="currentColor" />
                </div>

                {video.duration && (
                  <span className="absolute bottom-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded bg-black/60 text-xs font-mono text-white/80">
                    <Clock size={10} />
                    {video.duration}
                  </span>
                )}
              </div>

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

      <AnimatePresence>
        {activeTool && activeTool.type !== "internal" && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 40 }}
              transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
              className="bg-surface border border-border rounded-3xl w-full max-w-7xl h-[84vh] overflow-hidden flex flex-col shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-border flex-shrink-0">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-bg border border-border rounded-2xl">
                    <activeTool.icon size={24} className="text-accent" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-medium text-text">{activeTool.title}</h2>
                    <p className="text-sm text-muted">{activeTool.desc}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {/* ปุ่ม Refresh */}
                  <button
                    onClick={refreshIframe}
                    className="p-3 hover:bg-accent/10 rounded-2xl transition-colors"
                    title="Refresh"
                  >
                    <RefreshCw size={20} />
                  </button>

                  {/* ปุ่มปิด */}
                  <button
                    onClick={closeModal}
                    className="p-3 hover:bg-red-500/10 hover:text-red-400 rounded-2xl transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-1 relative bg-bg overflow-hidden">
                {activeTool.type === "iframe" && activeTool.url && (
                  <>
                    {isLoading && (
                      <div className="absolute inset-0 z-20 flex items-center justify-center bg-surface">
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 border-4 border-accent/30 border-t-accent rounded-full animate-spin mb-4" />
                          <p className="text-sm text-muted">กำลังโหลดเครื่องมือ...</p>
                        </div>
                      </div>
                    )}

                    <iframe
                      ref={iframeRef}
                      src={activeTool.url}
                      className="w-full h-full"
                      onLoad={() => setIsLoading(false)}
                      allow="clipboard-write"
                    />
                  </>
                )}

                {activeTool.type === "coming-soon" && (
                  <div className="flex flex-col items-center justify-center h-full text-center p-10">
                    <Sparkles size={80} className="text-yellow-400 mb-8" />
                    <p className="text-2xl font-medium">AI Summarize</p>
                    <p className="text-muted mt-4 max-w-md">
                      เครื่องมือนี้อยู่ในช่วงพัฒนา<br />
                      จะเปิดให้ใช้งานในเร็วๆ นี้
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

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
