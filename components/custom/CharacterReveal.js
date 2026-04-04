// components/CharacterReveal.js
"use client";
import { motion } from "framer-motion";

export default function CharacterReveal({ text }) {
  // টেক্সটকে অক্ষরে ভাগ করছি
  const letters = text.split("");

  return (
    <div className="flex flex-wrap text-4xl md:text-6xl font-extrabold overflow-hidden justify-start">
      {letters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, x: 50 }} // ডান দিক থেকে শুরু হবে (x: 50)
          whileInView={{ opacity: 1, x: 0 }} // নিজের জায়গায় আসবে
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            // index অনুযায়ী ডিলে দিচ্ছি যাতে প্রথম অক্ষর থেকে শুরু হয়
            delay: index * 0.03,
            ease: "easeOut",
          }}
          className={char === " " ? "w-[1ch]" : ""}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
}
