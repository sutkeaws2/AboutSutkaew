"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Github,
  Mail,
  Instagram,
  MapPin,
  ArrowUpRight,
  Sparkles,
  Wrench,
  User,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import DiscordStatus from "@/components/DiscordStatus";

const socialLinks = [
  { href: "https://github.com/waektus", icon: Github, label: "GitHub" },
  { href: "mailto:actcementmajor@gmail.com", icon: Mail, label: "Email" },
  {
    href: "https://instagram.com/horizon_castrol",
    icon: Instagram,
    label: "Instagram",
  },
];

const aboutCards = [
  {
    href: "/aboutme/name",
    title: "ทำไมถึงใช้ชื่อนี้?",
    desc: "ที่มาของชื่อที่ผมใช้บนอินเตอร์เน็ต",
    icon: "✦",
  },
  {
    href: "/aboutme/fav",
    title: "ศิลปินคนโปรด",
    desc: "แน่นอนว่าจะเป็นใครไปไม่ได้",
    icon: "✜",
  },
  {
    href: "/aboutme",
    title: "เกี่ยวกับผม",
    desc: "ดูข้อมูลเพิ่มเติม",
    icon: "◈",
  },
];

const tools = [
  {
    href: "#",
    title: "Personal Website",
    desc: "เว็บไซต์ส่วนตัวที่กำลังเปิดอยู่นี้",
    badge: "live",
  },
  {
    href: "https://morse-code-translator-sepia.vercel.app",
    title: "Morse Code Translator",
    desc: "แปลงข้อความเป็นรหัสมอร์สและกลับกัน",
    badge: "live",
  },
];

export default function HomePage() {
  return (
    <div className="max-w-3xl mx-auto px-5 pt-32 pb-20">
      {/* Hero Section */}
      <section className="mb-20">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border text-xs font-mono text-subtext mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow" />
          Backend Developer & Game Developer
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="font-display text-5xl sm:text-5xl text-text mb-4 leading-tight"
        >
          สิทธินนท์ สุดแก้ว (แพลงก์ตอน)
          <span className="text-accent text-glow">.</span>
        </motion.h1>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-subtext text-base leading-relaxed max-w-lg mb-6"
        >
          สวัสดีครับ ผมเป็น Backend Developer & Game Developer ยินดีที่ได้รู้จักครับ
          กำลังศึกษาอยู่ชั้นมัธยมปลายปีที่ 4 ที่โรงเรียนนครไทย 
        </motion.p>

        {/* Location + handle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap items-center gap-4 mb-8 text-sm font-mono text-muted"
        >
          <span className="flex items-center gap-1.5">
            <MapPin size={13} />
            Bangkok, TH
          </span>
          <span className="text-border">|</span>
          <span className="text-subtext">@waektus</span>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-2"
        >
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface border border-border text-subtext hover:text-text hover:border-accent/50 hover:bg-accent/5 transition-all duration-200 text-sm"
            >
              <Icon size={14} />
              <span className="hidden sm:inline">{label}</span>
            </Link>
          ))}
        </motion.div>

        {/* Discord Status */}
        <div className="mt-3">
          <DiscordStatus />
        </div>
              {/* Divider */}
              <br />
      <FadeIn className="mb-12">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <span className="text-muted font-mono text-xs">STATUS</span>
          <div className="h-px flex-1 bg-border" />
        </div>
        <div className="mt-4 px-4 py-3 rounded-lg bg-surface border border-border">
          <p className="text-subtext text-sm font-mono">
            <span className="text-accent">🟢</span> ยังคงพัฒนาเว็บไซต์นี้อยู่เรื่อยๆ 
          </p>
        </div>
      </FadeIn>
      </section>



      {/* About Cards */}
      <section className="mb-16">
        <FadeIn>
          <div className="flex items-center gap-2 mb-5">
            <User size={15} className="text-accent" />
            <h2 className="text-sm font-semibold text-subtext uppercase tracking-widest font-mono">
              About me
            </h2>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-3 gap-3">
          {aboutCards.map((card, i) => (
            <FadeIn key={card.href} delay={i * 0.08}>
              <Link
                href={card.href}
                className="group relative flex flex-col gap-2 p-4 rounded-xl bg-surface border border-border hover:border-accent/40 hover:bg-accent/5 transition-all duration-200 overflow-hidden"
              >
                <span className="text-2xl">{card.icon}</span>
                <div>
                  <p className="text-sm font-medium text-text group-hover:text-accent transition-colors">
                    {card.title}
                  </p>
                  <p className="text-xs text-muted mt-0.5">{card.desc}</p>
                </div>
                <ArrowUpRight
                  size={14}
                  className="absolute top-3 right-3 text-muted opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section>
        <FadeIn>
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <Wrench size={15} className="text-accent" />
              <h2 className="text-sm font-semibold text-subtext uppercase tracking-widest font-mono">
                Tools
              </h2>
            </div>
            <Link
              href="/tools"
              className="text-xs text-subtext hover:text-accent transition-colors font-mono flex items-center gap-1"
            >
              ดูทั้งหมด <ArrowUpRight size={12} />
            </Link>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-2">
          {tools.map((tool, i) => (
            <FadeIn key={tool.href} delay={i * 0.08}>
              <Link
                href={tool.href}
                className="group flex items-center justify-between p-4 rounded-xl bg-surface border border-border hover:border-accent/40 hover:bg-accent/5 transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <Sparkles
                    size={15}
                    className="text-muted group-hover:text-accent transition-colors"
                  />
                  <div>
                    <p className="text-sm font-medium text-text group-hover:text-accent transition-colors">
                      {tool.title}
                    </p>
                    <p className="text-xs text-muted">{tool.desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-mono ${
                      tool.badge === "live"
                        ? "bg-accent/10 text-accent"
                        : "bg-surface text-muted border border-border"
                    }`}
                  >
                    {tool.badge}
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="text-muted opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
