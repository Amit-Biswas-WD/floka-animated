"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    text: "10/10 well recommanded",
    image: "/images/user1.png",
  },
  {
    text: "Super speedy website designer",
    image: "/images/user2.png",
  },
  {
    text: "Great in UI/UX",
    image: "/images/user3.png",
  },
  {
    text: "Best design communicator",
    image: "/images/user4.png",
  },
];

const TestimonialMarquee = () => {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="relative flex w-full overflow-hidden bg-black py-10">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          ease: "linear",
          duration: 25,
          repeat: Infinity,
        }}
      >
        {duplicatedTestimonials.map((item, index) => (
          <div key={index} className="flex items-center gap-4 px-12">
            {/* Next.js Image Component */}
            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/10">
              <Image
                src={item.image}
                alt="Client testimonial"
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>

            <span className="text-xl font-medium text-white/90">
              “ {item.text} ”
            </span>
          </div>
        ))}
      </motion.div>

      {/* Side Fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black via-black/80 to-transparent z-10"></div>
    </div>
  );
};

export default TestimonialMarquee;
