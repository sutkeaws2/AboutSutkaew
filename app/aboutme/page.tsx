"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Code2, BrainIcon, Music, Globe } from "lucide-react";
import FadeIn from "@/components/FadeIn";
const skills = [
  "TypeScript", "React", "Next.js", "Node.js","Python", "Tailwind CSS", "PostgreSQL", "Docker","Assembly","C++","C#","Php","Java","Lua"
];

const interests = [
  { icon: Code2, label: "Coding" },
  { icon: Globe, label: "Gaming" },
  { icon: BrainIcon, label: "AI" },
  { icon: Music, label: "Piano" },
];

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 pt-28 pb-20">
      <FadeIn>
        <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">
          About Me
        </p>
        <h1 className="font-display text-4xl sm:text-5xl text-text mb-6">
          สวัสดีผม
          <span className="sutkaew"style={{ fontWeight: 'bold' }}> สิทธินนท์ สุดแก้ว</span>
        </h1>
        <p className="text-subtext leading-relaxed max-w-xl mb-10">
          ผมเป็น Backend Developer & Game Developer ปัจจุบันอยู่ชั้นมัธยมปลายปีที่ 4 ที่โรงเรียนนครไทย ปัจจุบันกำลังศึกษาและพัฒนาทักษะด้าน Full-Stack Development & Game Development ด้วย Unity และ Unreal Engine แต่จะชอบ Roblox มากกว่า นอกจากการเขียนโค้ดแล้วผมชอบเล่นเกม
        </p>
      </FadeIn>

      {/* Skills */}
      <FadeIn delay={0.1}>
        <div className="mb-10">
          <h2 className="text-xs font-mono text-subtext uppercase tracking-widest mb-4">
            Tech Stack & Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full bg-surface border border-border text-sm text-text font-mono hover:border-accent/40 hover:text-accent transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Interests */}
      <FadeIn delay={0.2}>
        <div className="mb-10">
          <h2 className="text-xs font-mono text-subtext uppercase tracking-widest mb-4">
            Interests
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {interests.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 p-3 rounded-lg bg-surface border border-border text-sm text-subtext"
              >
                <Icon size={14} className="text-accent" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Sub pages */}
      <FadeIn delay={0.3}>
        <h2 className="text-xs font-mono text-subtext uppercase tracking-widest mb-4">
          Read more
        </h2>
        <div className="flex flex-col gap-2">
          {[
            { href: "/aboutme/name", title: "ที่มาของชื่อ", desc: "ใครเป็นคนตั้งชื่อให้แล้วชอบมั้ย?" },
            { href: "/aboutme/whydev", title: "ทำไมถึงเป็นนักพัฒนา?", desc: "อะไรที่ทำให้ผมสนใจการเขียนโปรแกรม?" },
            { href: "/aboutme/goal", title: "เป้าหมายในอนาคต", desc: "ผมอยากเป็นอะไรในอนาคต?" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center justify-between p-4 rounded-xl bg-surface border border-border hover:border-accent/40 hover:bg-accent/5 transition-all duration-200"
            >
              <div>
                <p className="text-sm font-medium text-text group-hover:text-accent transition-colors">
                  {item.title}
                </p>
                <p className="text-xs text-muted">{item.desc}</p>
              </div>
              <ArrowUpRight
                size={14}
                className="text-muted opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </Link>
          ))}
        </div>
      </FadeIn>
    </div>
  );
}
