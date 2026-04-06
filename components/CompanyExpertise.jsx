import FAQSection from "./FAQ";
import TestimonialMarquee from "./TestimonialMarquee";
import SectionHeading from "./ui/Section_Heading";

const CompanyExpertise = () => {
  return (
    <div>
      <section className="bg-black lg:py-20 md:py-16 sm:py-12 py-8">
        <SectionHeading
          className={
            "w-sm mx-auto pl-6 text-white font-normal lg:text-[120px] md:text-[90px] sm:text-[70px] text-[50px] leading-none tracking-tighter"
          }
        >
          Company <span className="text-[#4d4d4d]"> expertise </span>
        </SectionHeading>
        <FAQSection />
        <TestimonialMarquee />
      </section>
    </div>
  );
};

export default CompanyExpertise;
