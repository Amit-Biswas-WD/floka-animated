import Image from "next/image";
import React from "react";
import { FaPlus } from "react-icons/fa";
import SectionHeading from "./ui/Section_Heading";
import Container from "./common/Container";

const Portfolio = () => {
  return (
    <Container className="lg:py-20 md:py-16 sm:py-12 py-8 my-16">
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-0">
        <div className="lg:col-span-1 lg:mr-20">
          <div className="relative w-full max-w-[500px] h-[400px] md:h-[600px] rounded-2xl overflow-hidden mx-auto lg:mx-0">
            <Image
              src="/image/image.png"
              alt="Client testimonial"
              fill
              className="object-cover"
              sizes="(100vw)"
            />
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="text-center lg:text-left">
            <p className="text-sm text-[#0A0A0A] font-normal uppercase">
              portfolio
            </p>
            <SectionHeading>
              Consistently delivering impactful results through a perfect blend
              of design and functionality.
            </SectionHeading>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full">
              <div className="flex flex-col gap-4 md:sticky md:top-4">
                <div className="bg-white p-8 rounded-2xl flex justify-between items-center shadow-sm">
                  <p className="text-[#666666] text-lg font-normal leading-tight">
                    Successful projects completed
                  </p>
                  <h2 className="text-[40px] font-normal text-[#0A0A0A] pl-1">
                    2k<span className="text-gray-300 font-light">+</span>
                  </h2>
                </div>

                <div className="bg-[#0f0f0f] p-8 rounded-3xl flex flex-col justify-between h-[400px] md:h-[450px] relative overflow-hidden">
                  <div className="relative h-44 mt-6">
                    <div
                      className="absolute left-4 z-10 w-[90px] h-[130px] rounded-xl overflow-hidden border-2 border-white/10 shadow-xl"
                      style={{ transform: "rotate(-12deg)" }}
                    >
                      <Image
                        src="/image/facts/image1.webp"
                        alt="Project 1"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div
                      className="absolute left-20 z-20 w-[90px] h-[130px] rounded-xl overflow-hidden border-2 border-white/10 shadow-xl"
                      style={{ transform: "rotate(-4deg)" }}
                    >
                      <Image
                        src="/image/facts/image2.webp"
                        alt="Project 2"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div
                      className="absolute left-40 z-30 w-[90px] h-[130px] rounded-xl overflow-hidden border-2 border-white/10 shadow-xl"
                      style={{ transform: "rotate(8deg)" }}
                    >
                      <Image
                        src="/image/facts/image3.webp"
                        alt="Project 3"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="mt-auto">
                    <p className="text-[#666666] text-xl font-normal leading-relaxed">
                      More than 2k+ projects completed—each crafted to deliver
                      real-world results for ambitious brands.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="bg-white p-8 rounded-3xl shadow-sm flex flex-col flex-1">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-6 h-6 text-orange-500 fill-orange-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  <h1 className="text-6xl md:text-7xl font-normal text-[#0A0A0A] tracking-tighter leading-none">
                    4.9/5
                  </h1>

                  <hr className="my-4 border-gray-100" />

                  <p className="text-[#666666] text-xl font-normal leading-relaxed mb-8">
                    We offer end-to-end creative solutions that make brands
                    unforgettable.
                  </p>

                  <button className="flex items-center gap-4 group mt-auto w-fit">
                    <div className="bg-black text-white p-4 rounded-full transition-transform duration-300 group-hover:rotate-90">
                      <FaPlus size={16} />
                    </div>
                    <span className="font-bold text-sm tracking-widest uppercase text-gray-900">
                      Hire Us Now
                    </span>
                  </button>
                </div>

                <div className="relative h-32 rounded-3xl overflow-hidden">
                  <Image
                    src="/image/facts/image3.webp"
                    alt="Worldwide background"
                    fill
                    className="object-cover brightness-[0.4]"
                  />
                  <div className="relative z-10 p-4 flex justify-between gap-2 items-center h-full text-white">
                    <p className="text-lg font-medium leading-tight">
                      Worldwide base around the world
                    </p>
                    <h2 className="text-5xl font-light">5+</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Portfolio;
