import React from "react";
import { IoMdStar } from "react-icons/io";
import SectionHeading from "./ui/Section_Heading";
import Container from "./common/Container";

const FeedBack = () => {
  return (
    <Container className={"lg:py-20 md:py-16 sm:py-12 py-8"}>
      <p className="text-sm text-[#0A0A0A] font-normal uppercase border-b border-gray-200 w-full pb-4">
        user feedbacks
      </p>
      <SectionHeading className="max-w-[780px] ml-auto text-left">
        Accelerating growth, and unlocking new potential. Let’s build your
        brand—together.
      </SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-7 mt-10">
        <div className="group flex flex-col gap-4 cursor-pointer">
          <div className="relative overflow-hidden bg-white px-7 py-5 rounded-xl border border-gray-100">
            <div className="absolute inset-0 bg-black translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0"></div>

            <div className="relative z-10">
              <h2 className="text-xl font-normal text-[#0A0A0A] leading-tight transition-colors duration-500 group-hover:text-white">
                Nicolas K. Ellington
              </h2>
              <p className="text-gray-400 text-sm font-medium mt-1 transition-colors duration-500 group-hover:text-gray-300">
                IT Specialist
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden bg-white px-7 py-8 rounded-xl border border-gray-100 h-[400px] flex flex-col">
            <div className="absolute inset-0 bg-black -translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0"></div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <IoMdStar key={i} className="text-orange-500 text-xl" />
                ))}
              </div>

              <div>
                <p className="text-xl font-normal text-[#0A0A0A] leading-relaxed transition-colors duration-500 group-hover:text-white">
                  As we continued to use their tool and found more use cases,
                  our feature requests quickly found their way into their
                  backlog.
                </p>
              </div>

              <div className="mt-auto">
                <p className="text-gray-400 text-sm font-bold uppercase tracking-widest flex items-center transition-colors duration-500 group-hover:text-gray-300">
                  <span className="mr-2">“</span>
                  GREAT DESIGN SOLUTIONS
                  <span className="ml-1">”</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="group flex flex-col gap-4 cursor-pointer">
          <div className="relative overflow-hidden bg-white px-7 py-8 rounded-xl border border-gray-100 h-[400px] flex flex-col">
            <div className="absolute inset-0 bg-black translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0"></div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <IoMdStar key={i} className="text-orange-500 text-xl" />
                ))}
              </div>

              <div>
                <p className="text-xl font-normal text-[#0A0A0A] leading-relaxed transition-colors duration-500 group-hover:text-white">
                  As we continued to use their tool and found more use cases,
                  our feature requests quickly found their way into their
                  backlog.
                </p>
              </div>

              <div className="mt-auto">
                <p className="text-gray-400 text-sm font-bold uppercase tracking-widest flex items-center transition-colors duration-500 group-hover:text-gray-300">
                  <span className="mr-2">“</span>
                  GREAT DESIGN SOLUTIONS
                  <span className="ml-1">”</span>
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden bg-white px-7 py-5 rounded-xl border border-gray-100">
            <div className="absolute inset-0 bg-black -translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0"></div>

            <div className="relative z-10">
              <h2 className="text-xl font-normal text-[#0A0A0A] leading-tight transition-colors duration-500 group-hover:text-white">
                Nicolas K. Ellington
              </h2>
              <p className="text-gray-400 text-sm font-medium mt-1 transition-colors duration-500 group-hover:text-gray-300">
                IT Specialist
              </p>
            </div>
          </div>
        </div>

        <div className="group flex flex-col gap-4 cursor-pointer">
          <div className="relative overflow-hidden bg-white px-7 py-5 rounded-xl border border-gray-100">
            <div className="absolute inset-0 bg-black translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0"></div>

            <div className="relative z-10">
              <h2 className="text-xl font-normal text-[#0A0A0A] leading-tight transition-colors duration-500 group-hover:text-white">
                Nicolas K. Ellington
              </h2>
              <p className="text-gray-400 text-sm font-medium mt-1 transition-colors duration-500 group-hover:text-gray-300">
                IT Specialist
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden bg-white px-7 py-8 rounded-xl border border-gray-100 h-[400px] flex flex-col">
            <div className="absolute inset-0 bg-black -translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0"></div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <IoMdStar key={i} className="text-orange-500 text-xl" />
                ))}
              </div>

              <div>
                <p className="text-xl font-normal text-[#0A0A0A] leading-relaxed transition-colors duration-500 group-hover:text-white">
                  As we continued to use their tool and found more use cases,
                  our feature requests quickly found their way into their
                  backlog.
                </p>
              </div>

              <div className="mt-auto">
                <p className="text-gray-400 text-sm font-bold uppercase tracking-widest flex items-center transition-colors duration-500 group-hover:text-gray-300">
                  <span className="mr-2">“</span>
                  GREAT DESIGN SOLUTIONS
                  <span className="ml-1">”</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FeedBack;
