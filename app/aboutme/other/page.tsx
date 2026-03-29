"use client";

import { motion } from "framer-motion";

export default function NameArticle() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center px-4 bg-black text-accent font-mono"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-full max-w-2xl border border-gray-800 p-6 shadow-lg relative bg-black"
      >
        {/* Linux-style terminal dots (classic red, yellow, green) */}
        <div className="flex gap-2 absolute top-3 left-3">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>

        <h1 className="text-lg font-bold mb-4 mt-2">$ cat other.txt</h1>
        <pre className="whitespace-pre-wrap">
{`วันนี้เป็นวันที่ 30/3/2026 ผมได้อัพเดทพอร์ตโฟลิโอของผมและเพิ่มหน้าใหม่ที่ชื่อว่า..เรื่องอื่นๆที่อยากแบ่งปันในหน้านี้ผมจะเขียนเกี่ยวกับเรื่องราวต่างๆ ที่ไม่เกี่ยวข้องกับการเขียนโปรแกรมโดยตรง แต่เป็นสิ่งที่ผมสนใจและอยากแบ่งปันให้ทุกคนได้รู้จักกันมากขึ้น เช่น งานอดิเรกที่ผมชอบทำในเวลาว่าง เดี๋ยวค่อยมาปรับ UI ใหม่รอหาย ขก. ก่อน` }
        </pre>
        <p className="mt-4">$</p>
      </motion.div>
    </motion.div>
  );
}