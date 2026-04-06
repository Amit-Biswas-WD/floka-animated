"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import React, { useRef } from "react";

const SectionHeading = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const text = typeof children === "string" ? children : "";

  return (
    <h2
      ref={ref}
      className={`lg:text-5xl md:text-[40px] sm:text-[34px] text-3xl text-[#0A0A0A] font-normal leading-tight tracking-tight ${className}`}
    >
      <div className="flex flex-wrap justify-center">
        <AnimatePresence>
          {text.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>
    </h2>
  );
};

export default SectionHeading;
