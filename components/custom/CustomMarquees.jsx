import React from "react";
import Container from "../common/Container";
import Marquee from "react-fast-marquee";

const CustomMarquees = () => {
  return (
    <Container className=" w-full bg-[#f5f5f5]">
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
              See how our team combines creativity, technology, and strategy.
              Discover our innovative solutions today.
            </span>
          </div>
        </Marquee>
      </div>
    </Container>
  );
};

export default CustomMarquees;
