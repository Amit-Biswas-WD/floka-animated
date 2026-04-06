import React from "react";
import SectionHeading from "./ui/Section_Heading";
import AwardList from "./AwardList";
import TeamSection from "./TeamSection";
import Image from "next/image";
import CircularText from "./CircularText";
import Container from "./common/Container";

const Accelerating = () => {
  return (
    <Container className="">
      {/* responsive done section */}
      <div className="lg:py-20 md:py-16 sm:py-12 py-8 flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="col-span-1 order-1">
            <div className="relative">
              <Image
                src="/image/man.png"
                alt="Approach Image"
                width={300}
                height={300}
                className="object-contain rounded-2xl mx-auto md:mx-0"
              />
              <p className="text-base font-normal text-[#0A0A0A] mt-5 uppercase text-center md:text-left">
                get rewards
              </p>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 order-2">
            <div className="mb-6 md:mb-0">
              <CircularText />
            </div>
            <SectionHeading className="max-w-[780px]">
              Accelerating growth, and unlocking new potential. Let’s build your
              brand—together.
            </SectionHeading>
            <AwardList />
          </div>
        </div>

        <div className="order-3">
          <TeamSection />
        </div>
      </div>
    </Container>
  );
};

export default Accelerating;
