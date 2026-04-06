import Image from "next/image";
import React from "react";
import SectionHeading from "./ui/Section_Heading";
import { motion } from "framer-motion";
import Container from "./common/Container";

const Approach = () => {
  return (
    <Container className="grid md:grid-cols-6 gap-6">
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
          Our approach is straightforward— prioritizing functionality, speed,
          and clarity for solutions.
        </SectionHeading>
      </div>
    </Container>
  );
};

export default Approach;
