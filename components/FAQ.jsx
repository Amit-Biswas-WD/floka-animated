"use client";
import { useState } from "react";
import Image from "next/image";
import { HiPlus, HiMinus } from "react-icons/hi";

const faqData = [
  {
    id: 1,
    title: "User Interface & Experience Design",
    description:
      "From brand strategy to immersive digital experiences, we offer end-to-end creative solutions...",
    tags: ["BRANDING", "MAGAZINE", "PRODUCT"],
    image: "/image/faq/image1.webp",
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "From brand strategy to immersive digital experiences, we offer end-to-end creative solutions...",
    tags: ["BRANDING", "MODULE", "PRODUCT", "UX"],
    image: "/image/faq/image2.webp",
  },
  {
    id: 3,
    title: "Search Engine Optimization",
    description:
      "From brand strategy to immersive digital experiences, we offer end-to-end creative solutions...",
    tags: ["BRANDING", "PRODUCT", "UX"],
    image: "/image/faq/image3.webp",
  },
  {
    id: 4,
    title: "Low-Code Development",
    description:
      "From brand strategy to immersive digital experiences, we offer end-to-end creative solutions...",
    tags: ["BRANDING", "UX"],
    image: "/image/faq/image4.webp",
  },
];

export default function FAQSection() {
  const [activeId, setActiveId] = useState(2);

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto border-t border-zinc-800">
        {faqData.map((item) => (
          <div key={item.id} className="border-b border-zinc-800">
            <button
              onClick={() => setActiveId(activeId === item.id ? null : item.id)}
              className="w-full py-8 flex items-center gap-6 group text-left transition-all outline-none"
            >
              {/* Icon Circle - No white background on active */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center bg-transparent overflow-hidden">
                <div className="relative w-6 h-6 flex items-center justify-center">
                  {/* Plus Icon: Active হলে rotate হয়ে অদৃশ্য হবে */}
                  <HiPlus
                    className={`absolute text-2xl transition-all duration-500 ease-in-out ${
                      activeId === item.id
                        ? "rotate-90 opacity-0 scale-0"
                        : "rotate-0 opacity-100 scale-100"
                    }`}
                  />
                  {/* Minus Icon: Active হলে rotate হয়ে সামনে আসবে */}
                  <HiMinus
                    className={`absolute text-2xl transition-all duration-500 ease-in-out ${
                      activeId === item.id
                        ? "rotate-0 opacity-100 scale-100"
                        : "-rotate-90 opacity-0 scale-0"
                    }`}
                  />
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-medium tracking-tight">
                {item.title}
              </h3>
            </button>

            {/* Accordion Content */}
            <div
              className={`grid transition-all duration-500 ease-in-out ${
                activeId === item.id
                  ? "grid-rows-[1fr] opacity-100 pb-12"
                  : "grid-rows-[0fr] opacity-0 overflow-hidden"
              }`}
            >
              <div className="overflow-hidden">
                <div className="flex flex-col lg:flex-row items-start gap-10 pl-16">
                  <div className="flex-1 space-y-6">
                    <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full text-[10px] font-bold tracking-widest text-zinc-300 uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="w-full lg:w-[400px] relative aspect-video rounded-2xl overflow-hidden bg-zinc-900 shadow-2xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      sizes="(max-width: 768px) 100vw, 400px"
                      priority={item.id === 2}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
