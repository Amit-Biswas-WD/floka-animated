"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

export default function PortfolioCard({ className, category, title, image }) {
  const x = useMotionValue(50);
  const y = useMotionValue(50);

  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const transformOrigin = useTransform(
    [mouseX, mouseY],
    ([latestX, latestY]) => `${latestX}% ${latestY}%`,
  );

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set(((clientX - left) / width) * 100);
    y.set(((clientY - top) / height) * 100);
  }

  return (
    <div className="w-full">
      <div
        className={`group relative overflow-hidden rounded-xl w-full h-[550px] bg-[#f0f0f0] shadow-2xl ${className}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          x.set(50);
          y.set(50);
        }}
      >
        <motion.div
          className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
          style={{ transformOrigin }}
        >
          <Image
            src={image || "/image/portfolio/image1.png"}
            alt={title || "Portfolio Image"}
            fill
            sizes="100vw"
            priority
            className="object-cover object-center w-full h-full"
          />
        </motion.div>

        <div className="absolute top-6 left-8 text-white font-bold pointer-events-none z-10 drop-shadow-lg">
          {title ? title : "LOGOIPSUM"}
        </div>

        <div className="absolute -top-16 -right-16 transition-all duration-500 group-hover:top-4 group-hover:right-4 opacity-0 group-hover:opacity-100 z-10">
          <div className="bg-white p-3 rounded-full text-black shadow-lg">
            <FiArrowUpRight size={24} />
          </div>
        </div>

        <div className="absolute -bottom-16 left-6 transition-all duration-500 group-hover:bottom-6 opacity-0 group-hover:opacity-100 text-white text-[10px] font-medium tracking-[0.2em] z-10 uppercase">
          {category ? category : "BRANDING, UX"}
        </div>
      </div>
      <div className="flex items-center justify-between bg-white rounded-lg mt-4 px-6 py-5 shadow-sm border border-gray-100 w-full">
        <h3 className="text-[#0A0A0A] font-semibold uppercase tracking-wider text-sm">
          {"Aldan Branding"}
        </h3>
        <h3 className="text-[#999999] font-medium text-sm">2025</h3>
      </div>
    </div>
  );
}
