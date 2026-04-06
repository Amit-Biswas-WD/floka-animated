import Image from "next/image";
import Container from "./common/Container";

const logos = [
  { id: 1, src: "/image/icon/icon1.svg", alt: "Blue Hexagon Logo" },
  { id: 2, src: "/image/icon/icon2.svg", alt: "Green Sparkle Logo" },
  { id: 3, src: "/image/icon/icon3.svg", alt: "Purple Star Logo" },
  { id: 4, src: "/image/icon/icon4.svg", alt: "Blue Circle Logo" },
  { id: 5, src: "/image/icon/icon5.svg", alt: "Bear Logo" },
  { id: 6, src: "/image/icon/icon6.svg", alt: "Red S Curve Logo" },
  { id: 7, src: "/image/icon/icon7.svg", alt: "Red Triangle Logo" },
];

const HappyUser = () => {
  return (
    <Container className="lg:py-20 md:py-16 sm:py-12 py-8">
      <p className="text-sm text-[#0A0A0A] font-normal uppercase flex items-center justify-between">
        HAPPY USERS
        <span className="">©2025 Case-Themes™ Studio</span>
      </p>
      <div className="w-full bg-white border-y border-gray-100 rounded-2xl py-10 mt-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
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

      <div className="relative w-full h-[700px] mt-14 rounded-2xl overflow-hidden group cursor-pointer">
        <Image
          src="/image/Gemini_Generated_Image_4pc5lq4pc5lq4pc5.png"
          alt="Client testimonial"
          fill
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          sizes="100vw"
        />

        <div className="absolute bottom-10 left-10 group-hover:bottom-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:translate-y-1/2 transition-all duration-700 ease-in-out z-10">
          <button className="flex items-center gap-3 bg-white/90 hover:bg-white px-6 py-3 rounded-full shadow-2xl transition-all active:scale-95 whitespace-nowrap">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4 ml-0.5">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="text-black font-bold text-sm tracking-widest uppercase">
              Play Reel
            </span>
          </button>
        </div>

        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      </div>
    </Container>
  );
};

export default HappyUser;
