import React from "react";
import SectionHeading from "./ui/Section_Heading";
import PortfolioCard from "./common/PortfolioCard";
import Container from "./common/Container";

const Strategy = () => {
  return (
    <Container className="lg:my-24 md:my-20 sm:my-12 my-8">
      <p className="text-sm text-[#0A0A0A] font-normal uppercase border-b border-gray-200 w-full pb-4">
        portfolio
      </p>
      <SectionHeading className={"w-full md:w-3/7 mx-auto md:mb-8 mb-6"}>
        Strategy to build powerful digital solutions.
      </SectionHeading>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PortfolioCard />
          <PortfolioCard
            image={"/image/portfolio/image2.png"}
            category={"BRANDING, MODULE, PRODUCT, UX, WEBSITE"}
          />
        </div>
        <div className="my-4 md:my-14">
          <PortfolioCard image={"/image/portfolio/image3.png"} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PortfolioCard
            image={"/image/portfolio/image4.png"}
            category={"BRANDING, PRODUCT, UX"}
          />
          <PortfolioCard
            image={"/image/portfolio/image5.png"}
            category={"BRANDING, MODULE, PRODUCT, LIX"}
          />
        </div>
      </div>
    </Container>
  );
};

export default Strategy;
