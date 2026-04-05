import React from "react";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaBehance } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-white py-16 px-6 overflow-hidden">
      <div className="grid grid-cols-5 gap-8 items-start">
        {/* Left Column: Image with Logo Overlay */}
        <div className="col-span-2 relative">
          <div className="relative aspect-[4/3.2] w-full">
            <Image
              src="/image/footer.jpg"
              alt="Team"
              fill
              className="object-cover rounded-2xl"
            />
            {/* Logo Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
                <Image
                  src="/logo/footer-logo.svg"
                  alt="Floka Logo"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Content Wrapper (Middle + Right) */}
        <div className="col-span-3 grid grid-cols-3 gap-10 md:pl-10">
          {/* Middle Column: Nav Links */}
          <div className="flex flex-col space-y-4 justify-center">
            {["About Us", "Journal", "Faq", "Get In Touch", "Careers"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-3xl md:text-[40px] font-normal leading-20 inline-block w-fit whitespace-nowrap"
                >
                  {item}
                </a>
              ),
            )}
          </div>

          {/* Right Column: Contact & Info */}
          <div className="col-span-2">
            <div className="flex flex-col justify-between space-y-12">
              <div>
                <p className="text-base md:text-lg font-normal text-[#999999] leading-relaxed mr-20">
                  At <span className="font-semibold text-white">Floka</span>, we
                  believe furniture should be more than just functional—it
                  should tell your story. With a focus on timeless design,
                  sustainable materials, and expert craftsmanship, we create
                  pieces that feel personal.
                </p>
              </div>

              <div className="space-y-2 text-base md:text-lg text-white font-normal">
                <p className="hover:text-gray-300 cursor-pointer transition-colors">
                  info@floka-design.com
                </p>
                <p>+123 (456 789 00)</p>
                <p>12/A, Booston Tower, NYC</p>
              </div>

              {/* Social Icons */}
              <div className="flex space-x-4">
                {[
                  { icon: <FaFacebookF />, link: "#" },
                  { icon: <FaXTwitter />, link: "#" },
                  { icon: <FaLinkedinIn />, link: "#" },
                  { icon: <FaBehance />, link: "#" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 text-sm"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Large Text "Floka" */}
      <div className="mt-4 ">
        <h1 className="text-[10rem] md:text-[18rem] lg:text-[22rem] font-bold leading-none tracking-tighter opacity-10 pointer-events-none translate-y-10">
          <span
            className="text-transparent border-t border-white"
            // style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}
          >
            Floka
          </span>
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
