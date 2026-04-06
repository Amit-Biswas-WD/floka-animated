import Image from "next/image";
import React from "react";
import Counter from "./ui/Counter";
import Container from "./common/Container";

const Straightforward = () => {
  return (
    <Container className="grid grid-cols-1 md:grid-cols-8 gap-3 font-normal text-[#0A0A0A] my-14">
      <div className="order-1 md:order-1 col-span-1 md:col-span-2 bg-white rounded-2xl p-7 !pt-4 flex flex-col h-full">
        <h1 className="text-[110px] font-medium leading-none tracking-tighter">
          25
          <span className="text-gray-200 ml-[-2px]">+</span>
        </h1>
        <p className="text-gray-400 text-lg">Years of experience</p>
        <hr className="text-[#e5e5e5] w-full my-7" />
        <p className="text-[#666666] text-lg">
          Explore how we transform ideas into extraordinary digital experiences.
        </p>
        <div className="mt-auto pt-6">
          <div className="flex -space-x-2 overflow-hidden my-2">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className="inline-block h-10 w-10 rounded-full ring-2 ring-white relative"
              >
                <Image
                  src={`/image/img${num}.jpg`}
                  alt={`User ${num}`}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
            ))}
          </div>
          <div className="text-lg text-black flex items-center ">
            {" "}
            <Counter value={1200} className="!text-base" /> + happy users review
          </div>
        </div>
      </div>

      <div className="order-3 md:order-2 col-span-1 md:col-span-4 bg-[#0a0a0a] rounded-3xl p-6 relative min-h-[550px] flex flex-col justify-end">
        <div className="absolute -top-10 left-0 w-full h-full pointer-events-none">
          <Image
            src="/image/female-removebg.png"
            alt="CEO"
            width={500}
            height={600}
            className="absolute -top-12 left-0 h-[110%] w-auto object-contain object-bottom"
            priority
          />
        </div>
        <div className="absolute top-10 right-10 flex flex-col gap-6 items-end">
          <Image
            src="/logo/ultra.png"
            alt="Award 1"
            width={100}
            height={100}
            className="opacity-70"
          />
          <Image
            src="/logo/hyper.png"
            alt="Award 2"
            width={100}
            height={100}
            className="opacity-70"
          />
        </div>
        <div className="relative z-20 text-white font-normal">
          <h3 className="text-2xl">
            “ At Floka, we merge strategy, creativity, and technology to shape
            brands that people love. ”
          </h3>
          <p className="text-base mt-3">
            Merizo H. Yelso
            <span className="text-[#999999] ml-1">/ CEO</span>
          </p>
        </div>
      </div>

      <div className="order-2 md:order-3 col-span-1 md:col-span-2 flex flex-col gap-6 font-sans">
        <div className="bg-white rounded-[32px] p-8 shadow-sm">
          <p className="text-[#999999] text-base font-normal mb-2">Follow us</p>
          <h2 className="text-xl font-normal text-[#0A0A0A] mb-8">
            For check updates
          </h2>
          <div className="flex flex-wrap gap-1.5">
            {["DRIBBBLE", "BEHANCE", "LINKEDIN", "X", "XING"].map(
              (platform) => (
                <button
                  key={platform}
                  className="px-4 py-1.5 border border-gray-200 rounded-full text-sm font-medium text-[#0A0A0A] hover:bg-gray-50 transition-colors"
                >
                  {platform}
                </button>
              ),
            )}
          </div>
        </div>
        <div className="bg-[#F8F8F8] rounded-[32px] text-white p-8 shadow-sm min-h-[300px] flex flex-col justify-between">
          <p className="text-[#999999] text-base font-normal mb-2">
            Impressions
          </p>
          <div className="flex flex-col -space-y-2">
            <div className="bg-[#F0F0F0] rounded-2xl px-3 py-2.5 flex justify-between items-center w-full font-medium">
              <span className="text-sm text-[#0A0A0A]">Solutions</span>
              <span className="text-[#666666] text-base">100%</span>
            </div>
            <div className="bg-black font-medium rounded-2xl px-3 py-2.5 flex justify-between items-center w-[90%] z-10 shadow-lg">
              <span className="text-sm">UI/UX</span>
              <span className="text-base">90%</span>
            </div>
            <div className="bg-white border font-medium border-gray-100 rounded-2xl px-3 py-1.5 flex justify-between items-center w-[75%] z-20 shadow-md">
              <span className="text-sm text-gray-800">Explore</span>
              <span className="text-gray-500 text-base">72%</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Straightforward;
