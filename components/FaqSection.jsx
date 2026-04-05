"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import SectionHeading from "./ui/Section_Heading";

const faqData = [
  {
    id: 1,
    question: "What is artificial intelligence (AI)?",
    answer:
      "Explore how we transform ideas into extraordinary digital experiences. Each case study is a testament to our design thinking, strategic approach, and creative execution.",
    image: "/image/faq1.webp",
  },
  {
    id: 2,
    question: "How does AI improve business efficiency?",
    answer:
      "Explore how we transform ideas into extraordinary digital experiences. Each case study is a testament to our design thinking, strategic approach, and creative execution.",
    image: "/image/faq1.webp",
  },
  {
    id: 3,
    question: "How long does AI implementation take?",
    answer:
      "Explore how we transform ideas into extraordinary digital experiences. Each case study is a testament to our design thinking, strategic approach, and creative execution.",
    image: "/image/faq3.jpg",
  },
  {
    id: 4,
    question: "What industries can benefit from AI?",
    answer:
      "Explore how we transform ideas into extraordinary digital experiences. Each case study is a testament to our design thinking, strategic approach, and creative execution.",
    image: "/image/faq4.jpg",
  },
  {
    id: 5,
    question: "What are the costs of AI solutions?",
    answer:
      "Explore how we transform ideas into extraordinary digital experiences. Each case study is a testament to our design thinking, strategic approach, and creative execution.",
    image: "/image/faq5.jpg",
  },
];

const FaqSection = () => {
  const [activeId, setActiveId] = useState(1);

  const toggleFaq = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="">
      <p className="text-sm text-[#0A0A0A] font-normal uppercase border-b border-gray-200 w-full pb-4">
        faq & get answer
      </p>
      <SectionHeading className="w-[780px] ml-auto text-left my-6">
        Have more questions? We’ve answers.
      </SectionHeading>
      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-1">
          <p className="text-[#666666] text-lg font-normal pb-5 max-w-[300px]">
            Don’t found anything yet. Feel free to ask anything. Let’s Talk
          </p>
          <div className="relative">
            <Image
              src="/image/faq_left.png"
              alt="Approach Image"
              width={300}
              height={300}
              className="object-contain rounded-2xl"
            />
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex flex-col gap-2">
            {faqData.map((item) => (
              <div
                key={item.id}
                className="bg-[#ffffff] rounded-2xl border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <h3
                    className="font-normal leading-tight"
                    style={{ color: "#0A0A0A", fontSize: "20px" }}
                  >
                    {item.question}
                  </h3>

                  <motion.div
                    animate={{ rotate: activeId === item.id ? 180 : 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    className="bg-black text-white p-2.5 rounded-full shrink-0"
                  >
                    {activeId === item.id ? (
                      <FaMinus size={14} />
                    ) : (
                      <FaPlus size={14} />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {activeId === item.id && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 flex flex-col md:flex-row items-start gap-8">
                        <div className="relative w-full md:w-[320px] h-[210px] shrink-0 overflow-hidden rounded-xl">
                          <Image
                            src={item.image}
                            alt={item.question}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 320px"
                            priority={item.id === 1}
                          />
                        </div>

                        <div className="flex flex-col gap-6 pt-2">
                          <p
                            className="font-normal leading-relaxed max-w-xl"
                            style={{ color: "#666666", fontSize: "18px" }}
                          >
                            {item.answer}
                          </p>

                          <motion.button
                            whileHover="hover"
                            className="flex items-center gap-4 w-fit cursor-pointer"
                          >
                            <motion.div
                              variants={{
                                hover: { rotate: 90 },
                              }}
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 15,
                              }}
                              className="bg-black text-white p-3 rounded-full shadow-md flex items-center justify-center"
                            >
                              <FaPlus size={14} />
                            </motion.div>
                            <span
                              className="text-sm font-medium uppercase tracking-widest"
                              style={{ color: "#0A0A0A" }}
                            >
                              Get In Touch
                            </span>
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
