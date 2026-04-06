"use client";

import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import CompanyBlog from "@/components/CompanyBlog";
import Accelerating from "@/components/Accelerating";
import GetTouch from "@/components/GetTouch";
import FeedBack from "@/components/FeedBack";
import HappyUser from "@/components/HappyUser";
import Portfolio from "@/components/Portfolio";
import CompanyExpertise from "@/components/CompanyExpertise";
import Strategy from "@/components/Strategy";
import CustomMarquees from "../components/custom/CustomMarquees";
import Straightforward from "@/components/Straightforward";
import Approach from "@/components/Approach";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <HeroSection />
      <Approach />
      <Straightforward />
      <CustomMarquees />
      <Strategy />
      <CompanyExpertise />
      <Portfolio />
      <HappyUser />
      <FeedBack />
      <GetTouch />
      <Accelerating />
      <FaqSection />
      <CompanyBlog />
      <Footer />
    </div>
  );
}
