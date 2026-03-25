"use client";

import Link from "next/link";
import { Github, Mail, Instagram, MessageCircle, ArrowUpRight,Facebook } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const contacts = [
  {
    href: "https://www.instagram.com/horizon_castrol/",
    icon: Instagram,
    label: "Instagram",
    handle: "สามารถทักมาได้ตลอดครับ",
  },
  {
    href: "https://www.facebook.com/sitthinon.sutkeaw",
    icon: Facebook,
    label: "Facebook",
    handle: "เล่นน้อยมากแต่ถ้าอยากคุยเรื่องอื่นๆก็ทักมาได้ครับ",
  },
  {
    href: "https://github.com/waektus",
    icon: Github,
    label: "GitHub",
    handle: "waektus",  
  },
  {
    href: "https://discord.com/users/1228447356735983719",
    icon: MessageCircle,
    label: "Discord",
    handle: "ส่วนใหญ่จะออนไลน์ตอนเย็นๆ",
  },
  {
    href: "mailto:actcementmajor@gmail.com",
    icon: Mail,
    label: "Email",
    handle: "ติดต่อโดยตรงถ้าว่างจะอ่านครับ",
  },
];

export default function ContactsPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 pt-28 pb-20">
      <FadeIn>
        <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">
          Contact
        </p>
        <h1 className="font-display text-4xl sm:text-5xl text-text mb-4">
          ติดต่อผม
        </h1>
        <p className="text-subtext leading-relaxed max-w-lg mb-12">
          ยินดีรับทุก DM ครับ ไม่ว่าจะเรื่องงานหรือเรื่องทั่วไป ถ้าอยากคุยอะไรก็ทักมาได้เลยครับ
        </p>
      </FadeIn>

      <div className="grid sm:grid-cols-2 gap-3">
        {contacts.map((c, i) => (
          <FadeIn key={c.label} delay={i * 0.08}>
            <Link
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 rounded-xl bg-surface border border-border hover:border-accent/40 hover:bg-accent/5 transition-all duration-200"
            >
              <div className="p-2.5 rounded-lg bg-bg border border-border group-hover:border-accent/30 transition-colors">
                <c.icon size={16} className="text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-text group-hover:text-accent transition-colors">
                  {c.label}
                </p>
                <p className="text-xs font-mono text-muted truncate">{c.handle}</p>
              </div>
              <ArrowUpRight
                size={13}
                className="text-muted opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
              />
            </Link>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
