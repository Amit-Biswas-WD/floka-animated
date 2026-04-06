import React from "react";
import Container from "./common/Container";
import SectionHeading from "./ui/Section_Heading";
import { FaSms } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import ContactForm from "./ContactForm";

const GetTouch = () => {
  return (
    <section className="lg:py-20 md:py-16 sm:py-12 py-8 bg-black ">
      <Container className={""}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-6 py-20">
          <div className="p-4 lg:p-2">
            <p className="text-sm text-[#999999] font-normal uppercase flex items-center justify-between mb-3">
              get in touch
            </p>
            <SectionHeading
              className={"text-white max-w-[780px] mr-auto text-left mb-10"}
            >
              Tell us about your project —whether it’s a website, SEO, or
              marketing.
            </SectionHeading>
            <div className="flex items-center gap-20 mt-20">
              <div className="">
                <p className="flex items-center gap-2 uppercase text-white text-sm font-normal mb-3">
                  <span className="text-[#666666] ">
                    <FaSms size={20} />
                  </span>
                  talk to us
                </p>
                <p className="text-[#999999] text-lg font-normal max-w-[270px]">
                  Work and general inquiries +123 456 789 00
                </p>
              </div>
              <div className="">
                <p className="flex items-center gap-2 uppercase text-white text-sm font-normal mb-3">
                  <span className="text-[#666666]">
                    <CiLocationOn size={20} />
                  </span>
                  talk to us
                </p>
                <p className="text-[#999999] text-lg font-normal max-w-[280px]">
                  541 Melville Ave, Palo Alto, CA 94301, United States
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GetTouch;
