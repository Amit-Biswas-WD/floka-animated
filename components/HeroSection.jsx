"use client";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden sm:px-2 ">
      <div className="relative w-full h-[90vh] overflow-hidden rounded-[2rem] shadow-2xl bg-black">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        >
          <source src="/video/home-1-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col lg:flex-row items-end mb-10 justify-between px-8 pb-16 lg:pb-0 lg:px-24 text-white">
          {/* Brand Name - 30px niche namano hoyeche mt-[30px] diye */}
          <div className="flex flex-col select-none lg:mt-[60px] hidden md:block">
            <h1 className="text-8xl lg:text-[14rem] font-bold leading-[0.8] tracking-tighter">
              Floka
            </h1>
            {/* Studio - Bold kora hoyeche */}
            <span className="text-4xl lg:text-7xl font-bold opacity-70 ml-2 text-end">
              Studio
            </span>
          </div>

          {/* Right Side: Info Card & Text */}
          <div className="max-w-[320px] space-y-8 sm:mt-0 mt-96">
            <div className="bg-white rounded-[1.5rem] p-4 flex items-center gap-4 text-black shadow-xl">
              <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                <Image
                  src="/image/home-1.jpg"
                  alt="Almond D. Nelsi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold leading-tight">
                  Head of Idea
                </span>
                <h3 className="font-bold text-[16px] leading-tight">
                  Almond D. Nelsi
                </h3>

                <div className="mt-2 flex items-center gap-2 cursor-pointer group">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                    <span className="text-white text-xs">+</span>
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-tight">
                    Let,s Talk
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3 px-1">
              <p className="text-xl font-bold leading-tight">
                No cookie-cutter websites. No fluff.
              </p>
              <p className="text-[15px] opacity-70 font-medium leading-relaxed">
                Just real tools and smart strategies to grow your business and
                elevate your brand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
