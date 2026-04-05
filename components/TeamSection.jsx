"use client";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPlus } from "react-icons/fa";
import SectionHeading from "./ui/Section_Heading";

const teamMembers = [
  {
    name: "Nicolas K. Ellington",
    role: "FOUNDER",
    image: "/image/man1.png",
  },
  {
    name: "Carlos E. Ashcroft",
    role: "CEO",
    image: "/image/woman1.png",
  },
  {
    name: "Leonardo F. Ashton",
    role: "UX DESIGNER",
    image: "/image/woman2.png",
  },
  {
    name: "Ricardo P. Winslow",
    role: "UI DESIGNER",
    image: "/image/man2.png",
  },
];

const TeamSection = () => {
  return (
    <section className="bg-white rounded-2xl p-8 md:p-12 lg:p-16 mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase">
              Our Avengers
            </span>
            <SectionHeading className={"mt-6"}>
              Meet with our team member
            </SectionHeading>

            <div className="flex gap-8 mt-10 border-b border-gray-100 pb-2">
              <button className="text-xs font-bold uppercase tracking-widest border-b-2 border-black pb-2">
                Design Team
              </button>
              <button className="text-xs font-bold uppercase tracking-widest text-gray-300 pb-2">
                Development Team
              </button>
            </div>

            <p className="text-gray-500 mt-8 text-[15px] leading-relaxed max-w-sm">
              What began over coffee-fueled brainstorming sessions has grown
              into a thriving digital agency dedicated to helping brands stand
              out.
            </p>

            <button className="flex items-center gap-3 mt-10 group">
              <div className="bg-black p-2 rounded-full text-white transition-transform group-hover:scale-110">
                <FaPlus size={12} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest">
                Join With Us
              </span>
            </button>

            <div className="mt-20">
              <Image
                src="/image/three_man.png"
                alt="Team Meeting"
                width={600}
                height={400}
                className="object-cover w-full h-64 rounded-2xl"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-[#F8F8F8] rounded-3xl p-6 group">
              <div className="relative h-[280px] w-full overflow-hidden rounded-2xl bg-[#D9C4A9]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
              </div>

              <div className="mt-6 space-y-1">
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-[10px] font-bold text-gray-400 tracking-widest">
                  {member.role}
                </p>
              </div>

              <div className="flex gap-4 mt-4">
                <a
                  href="#"
                  className="text-gray-900 hover:text-blue-600 transition-colors bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm"
                >
                  <FaFacebookF size={14} />
                </a>
                <a
                  href="#"
                  className="text-gray-900 hover:text-blue-400 transition-colors bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm"
                >
                  <FaTwitter size={14} />
                </a>
                <a
                  href="#"
                  className="text-gray-900 hover:text-blue-700 transition-colors bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm"
                >
                  <FaLinkedinIn size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
