import Image from "next/image";
import React from "react";
import { FiPlus } from "react-icons/fi";
import SectionHeading from "./ui/Section_Heading";
import Container from "./common/Container";

const CompanyBlog = () => {
  const blackCardStyles =
    "bg-[#0f0f0f] text-white p-10 rounded-2xl flex flex-col justify-start relative group cursor-pointer overflow-hidden";
  const labelStyles = "text-sm font-normal text-white uppercase";
  const dateStyles = "text-sm text-[#999999] font-normal";

  const imageWrapperStyles =
    "relative h-[440px] rounded-2xl overflow-hidden group cursor-pointer";
  const hoverIconStyles =
    "absolute bottom-6 left-6 z-10 bg-white text-black p-3 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out";

  return (
    <Container className="lg:py-20 md:py-16 sm:py-12 py-8">
      <div className="flex flex-col items-center gap-2 text-center">
        <p className="text-sm text-[#0A0A0A] font-normal uppercase w-fit">
          insights
        </p>

        <SectionHeading>Company blog & updates</SectionHeading>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
        {/* Column 1 */}
        <div className="flex flex-col gap-5">
          <div className={blackCardStyles}>
            <div className="flex gap-2 items-center mb-4">
              <span className={labelStyles}>Web3</span>
              <span className={dateStyles}>Nov 07, 2025</span>
            </div>
            <h2 className="text-[26px] font-medium leading-[1.2] tracking-tight">
              Seamless user interfaces, crafted with intent.
            </h2>
          </div>

          <div className={imageWrapperStyles}>
            <div className={hoverIconStyles}>
              <FiPlus className="text-xl" />
            </div>
            <Image
              src="/image/insights1.png"
              alt="Team discussion"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-5">
          <div className={`${imageWrapperStyles} h-[400px]`}>
            <div className={hoverIconStyles}>
              <FiPlus className="text-xl" />
            </div>
            <Image
              src="/image/insights2.png"
              alt="Project lead"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          <div className="bg-white p-10 rounded-2xl flex flex-col justify-center shadow-sm border border-gray-100">
            <div className="flex gap-4 items-center mb-4">
              <span className={`${labelStyles} text-black`}>Web3</span>
              <span className={dateStyles}>Nov 07, 2025</span>
            </div>
            <p className="text-[22px] font-medium text-[#1a1a1a] leading-tight">
              Creative web platforms, designed for growth.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className={blackCardStyles}>
            <div className="flex gap-4 items-center mb-4">
              <span className={labelStyles}>Web3</span>
              <span className={dateStyles}>Nov 07, 2025</span>
            </div>
            <h2 className="text-[26px] font-medium leading-[1.2] tracking-tight">
              Immersive virtual journeys, built with precision
            </h2>
          </div>

          <div className={imageWrapperStyles}>
            <div className={hoverIconStyles}>
              <FiPlus className="text-xl" />
            </div>
            <Image
              src="/image/insights3.png"
              alt="Developer working"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CompanyBlog;
