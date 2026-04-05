"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/Section_Heading";
import Marquee from "react-fast-marquee";
import PortfolioCard from "@/components/common/PortfolioCard";
import Container from "@/components/common/Container";
import FAQSection from "@/components/FAQ";
import TestimonialMarquee from "@/components/TestimonialMarquee";
import { FaPlus } from "react-icons/fa";

const logos = [
  { id: 1, src: "/image/icon/icon1.svg", alt: "Blue Hexagon Logo" },
  { id: 2, src: "/image/icon/icon2.svg", alt: "Green Sparkle Logo" },
  { id: 3, src: "/image/icon/icon3.svg", alt: "Purple Star Logo" },
  { id: 4, src: "/image/icon/icon4.svg", alt: "Blue Circle Logo" },
  { id: 5, src: "/image/icon/icon5.svg", alt: "Bear Logo" },
  { id: 6, src: "/image/icon/icon6.svg", alt: "Red S Curve Logo" },
  { id: 7, src: "/image/icon/icon7.svg", alt: "Red Triangle Logo" },
];

export default function Home() {
  return (
    <main className="">
      {/* nav section */}
      <Container className="container mx-auto grid lg:grid-cols-8 gap-2 items-center text-base text-[#202020] font-medium h-[72px]">
        {/* Logo */}
        <div className="relative col-span-2">
          <Image
            src="/logo/logo.png"
            alt="Logo"
            width={90}
            height={24}
            sizes="90px"
            className="object-contain"
          />
        </div>

        {/* Menu */}
        <div className="col-span-4">
          <ul className="flex justify-between items-center">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>

        {/* Contact info */}
        <div className="col-span-2">
          <h3 className="text-end">info@floka.com</h3>
        </div>
      </Container>
      <main>
        {/* approach section */}
        <Container>
          <div className="grid md:grid-cols-6 gap-6">
            {/* Approach Image */}
            <div className="col-span-2 relative flex flex-col items-start">
              <div className="relative w-28 h-28 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute w-full h-full"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <path
                        id="circlePath"
                        d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                      />
                    </defs>
                    <text className="text-[7.5px] uppercase tracking-[2.5px] fill-[#666666] font-medium">
                      <textPath xlinkHref="#circlePath">
                        LUXURIOUS, OR MORE • WANT IT TO SOUND PLAYFUL •
                      </textPath>
                    </text>
                  </svg>
                </motion.div>

                <div className="z-10 rounded-full">
                  <Image
                    src="/logo/Screenshot_33.png"
                    alt="Approach Image"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
              </div>

              <p className="text-base text-[#666666] font-normal mt-1 leading-relaxed font-inter tracking-tighter">
                We design every project with long- <br />
                term success in mind.
              </p>
            </div>

            {/* Approach Text */}
            <div className="col-span-4">
              <SectionHeading>
                Our approach is straightforward— prioritizing functionality,
                speed, and clarity for solutions.
              </SectionHeading>
            </div>
          </div>
        </Container>

        {/* Years of experience */}
        <Container className="grid grid-cols-8 gap-3 font-normal text-[#0A0A0A] my-14">
          {/* Added 'flex flex-col' and a minimum height if needed, like 'h-full' */}
          <div className="col-span-2 bg-white rounded-2xl p-7 !pt-4 flex flex-col h-full">
            <h1 className="text-[110px] font-medium leading-none tracking-tighter">
              25<span className="text-gray-200 ml-[-2px]">+</span>
            </h1>

            <p className="text-gray-400 text-lg">Years of experience</p>

            <hr className="text-[#e5e5e5] w-full my-7" />

            <p className="text-[#666666] text-lg">
              Explore how we transform ideas into extraordinary digital
              experiences.
            </p>

            {/* 'mt-auto' pushes this div to the bottom of the flex container */}
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

              {/* Text Content */}
              <p className="text-lg">1200+ happy users review</p>
            </div>
          </div>

          <div className="col-span-4 bg-[#0a0a0a] rounded-3xl p-6 relative min-h-[550px] flex flex-col justify-end">
            {/* Female Image Container */}
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

            {/* Top Right Awards */}
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

            {/* Text Content */}
            <div className="relative z-20 text-white font-normal">
              <h3 className="text-2xl">
                “ At Floka, we merge strategy, creativity, and technology to
                shape brands that people love. ”
              </h3>
              <p className="text-base mt-3">
                Merizo H. Yelso{" "}
                <span className="text-[#999999] ml-1">/ CEO</span>
              </p>
            </div>
          </div>

          <div className="col-span-2 flex flex-col gap-6 font-sans">
            {/* Card 1: Follow Us */}
            <div className="bg-white rounded-[32px] p-8 shadow-sm">
              <p className="text-[#999999] text-base font-normal mb-2">
                Follow us
              </p>
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

            {/* Card 2: Impressions */}
            <div className="bg-[#F8F8F8] rounded-[32px] text-white p-8 shadow-sm min-h-[300px] flex flex-col justify-between">
              <p className="text-[#999999] text-base font-normal mb-2">
                Impressions
              </p>

              <div className="flex flex-col -space-y-2">
                {/* Solutions Bar */}
                <div className="bg-[#F0F0F0] rounded-2xl px-3 py-2.5 flex justify-between items-center w-full font-medium">
                  <span className="text-sm text-[#0A0A0A]">Solutions</span>
                  <span className="text-[#666666] text-base">100%</span>
                </div>

                {/* UI/UX Bar - Black */}
                <div className="bg-black font-medium rounded-2xl px-3 py-2.5 flex justify-between items-center w-[90%] z-10 shadow-lg">
                  <span className="text-sm">UI/UX</span>
                  <span className="text-base">90%</span>
                </div>

                {/* Explore Bar */}
                <div className="bg-white border font-medium border-gray-100 rounded-2xl px-3 py-1.5 flex justify-between items-center w-[75%] z-20 shadow-md">
                  <span className="text-sm text-gray-800">Explore</span>
                  <span className="text-gray-500 text-base">72%</span>
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* Marquee section */}
        <Container className="my-14">
          <div className="w-full bg-[#f5f5f5] py-10">
            <div
              className="relative w-full"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
              }}
            >
              <Marquee speed={60} gradient={false} pauseOnHover={true}>
                <div className="flex items-center gap-10 overflow-hidden">
                  <span className="text-[60px] font-medium text-[#333] leading-tight">
                    See how our team combines creativity, technology, and
                    strategy. Discover our innovative solutions today.
                  </span>
                </div>
              </Marquee>
            </div>
          </div>
        </Container>

        {/* Portfolio section */}
        <Container className="my-14">
          <p className="text-sm text-[#0A0A0A] font-normal uppercase border-b border-gray-200 w-full pb-4">
            portfolio
          </p>
          <SectionHeading className={"w-3/7 mx-auto"}>
            Strategy to build powerful digital solutions.
          </SectionHeading>
          <div className="">
            <div className="grid grid-cols-2 gap-4">
              <PortfolioCard />
              <PortfolioCard
                image={"/image/portfolio/image2.png"}
                category={"BRANDING, MODULE, PRODUCT, UX, WEBSITE"}
              />
            </div>
            <div className="my-14">
              <PortfolioCard image={"/image/portfolio/image3.png"} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <PortfolioCard
                image={"/image/portfolio/image4.png"}
                category={"BRANDING, PRODUCT, UX"}
              />
              <PortfolioCard
                image={"/image/portfolio/image5.png"}
                category={"BRANDING, MODULE, PRODUCT, LIX"}
              />
            </div>
          </div>
        </Container>

        {/* Company expertise */}
        <section className="bg-black py-20 mt-14">
          <SectionHeading
            className={
              "w-sm mx-auto text-white font-normal text-[120px] leading-none tracking-tighter"
            }
          >
            Company <span className="text-[#4d4d4d]"> expertise </span>
          </SectionHeading>
          <FAQSection />
          <TestimonialMarquee />
        </section>

        {/* fun facts  */}
        <Container className="grid grid-cols-2 my-16">
          <div className="col-span-1 mr-20">
            <div className="relative w-[500px] h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="/image/image.png"
                alt="Client testimonial"
                fill
                className="object-cover"
                sizes="(100vw)"
              />
            </div>
          </div>

          <div className="col-span-1">
            <p className="text-sm text-[#0A0A0A] font-normal uppercase">
              portfolio
            </p>
            <SectionHeading>
              Consistently delivering impactful results through a perfect blend
              of design and functionality.
            </SectionHeading>

            <div className="mt-8 flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full">
                {/* ── LEFT COLUMN ── */}
                <div className="flex flex-col gap-4 sticky top-4">
                  {/* Top: Projects completed */}
                  <div className="bg-white p-8 rounded-2xl flex justify-between items-center shadow-sm">
                    <p className="text-[#666666] text-lg font-normal leading-tight">
                      Successful projects completed
                    </p>
                    <h2 className="text-[40px] font-normal text-[#0A0A0A] pl-1">
                      2k<span className="text-gray-300 font-light">+</span>
                    </h2>
                  </div>

                  {/* Large Dark Card with stacked images */}
                  <div className="bg-[#0f0f0f] p-8 rounded-3xl flex flex-col justify-between h-[450px] relative overflow-hidden">
                    {/* Stacked Image Stack */}
                    <div className="relative h-44 mt-6">
                      {/* Image 1 — leftmost, most tilted */}
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

                      {/* Image 2 — middle */}
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

                      {/* Image 3 — rightmost, tilted other way */}
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

                    {/* Bottom text */}
                    <div className="mt-auto">
                      <p className="text-[#666666] text-xl font-normal leading-relaxed">
                        More than 2k+ projects completed—each crafted to deliver
                        real-world results for ambitious brands.
                      </p>
                    </div>
                  </div>
                </div>

                {/* ── RIGHT COLUMN ── */}
                <div className="flex flex-col gap-4">
                  {/* Rating Card */}
                  <div className="bg-white p-8 rounded-3xl shadow-sm flex flex-col flex-1">
                    {/* Stars */}
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

                    {/* Big rating number */}
                    <h1 className="text-7xl font-normal text-[#0A0A0A] tracking-tighter leading-none">
                      4.9/5
                    </h1>

                    <hr className="my-4 border-gray-100" />

                    <p className="text-[#666666] text-xl font-normal leading-relaxed mb-8">
                      We offer end-to-end creative solutions that make brands
                      unforgettable.
                    </p>

                    {/* Hire Us Now button */}
                    <button className="flex items-center gap-4 group mt-auto w-fit">
                      <div className="bg-black text-white p-4 rounded-full transition-transform duration-300 group-hover:rotate-90">
                        {/* Plus icon */}
                        <FaPlus size={16} />
                      </div>
                      <span className="font-bold text-sm tracking-widest uppercase text-gray-900">
                        Hire Us Now
                      </span>
                    </button>
                  </div>

                  {/* Worldwide Card */}
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
        </Container>

        <Container className="my-14">
          <p className="text-sm text-[#0A0A0A] font-normal uppercase flex items-center justify-between">
            portfolio
            <span className="">©2025 Case-Themes™ Studio</span>
          </p>
          <div className="w-full bg-white border-y border-gray-100 rounded-2xl py-10 mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
              {/* Logos Mapping */}
              {logos.map((logo) => (
                <div
                  key={logo.id}
                  className="flex items-center justify-center p-10 border-b border-r border-gray-100"
                >
                  <div className="relative w-full h-[28px]">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      priority
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}

              {/* Next can be you section */}
              <div className="flex flex-col items-center justify-center p-10 text-center">
                <p className="text-gray-400 text-xs tracking-widest uppercase mb-2 font-medium">
                  Next can be you.
                </p>
                <button className="text-black text-sm font-bold uppercase hover:underline">
                  Let,s Talk
                </button>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </main>
  );
}
