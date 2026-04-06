import React from "react";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaBehance } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] rounded-2xl text-white lg:py-20 md:py-16 sm:py-12 py-8 px-6 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
        <div className="col-span-1 md:col-span-2 order-1 md:order-1 relative">
          <div className="relative aspect-[4/3.2] w-full">
            <Image
              src="/image/footer.jpg"
              alt="Team"
              fill
              className="object-cover rounded-2xl"
            />
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

        <div className="col-span-1 md:col-span-1 order-2 md:order-2 flex flex-col space-y-4 justify-center">
          {["About Us", "Journal", "Faq", "Get In Touch", "Careers"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-3xl md:text-[40px] font-normal leading-tight inline-block w-fit whitespace-nowrap"
              >
                {item}
              </a>
            ),
          )}
        </div>

        <div className="col-span-1 md:col-span-2 order-3 md:order-3 md:pl-10">
          <div className="flex flex-col justify-between space-y-12">
            <div>
              <p className="text-base md:text-lg font-normal text-[#999999] leading-relaxed md:mr-20">
                At <span className="font-semibold text-white">Floka</span>, we
                believe furniture should be more than just functional—it should
                tell your story. With a focus on timeless design, sustainable
                materials, and expert craftsmanship, we create pieces that feel
                personal.
              </p>
            </div>

            <div className="space-y-2 text-base md:text-lg text-white font-normal">
              <p className="hover:text-gray-300 cursor-pointer transition-colors">
                info@floka-design.com
              </p>
              <p>+123 (456 789 00)</p>
              <p>12/A, Booston Tower, NYC</p>
            </div>

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
    </footer>
  );
};

export default Footer;
