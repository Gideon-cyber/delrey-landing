import React from "react";
import Header from "./Header";
import Picture from "../public/dog.svg";
import ButtonComponent from "./Button";

const Hero = (props) => {
  return (
    <div className="py-[16px] px-[16px] md:py-[20px] md:px-[60px] min-h-screen h-auto w-full relative animate-ChangeBg bg-cover bg-center text-white bg-bg-hero-2">
      <Header />
    </div>
  );
};

export default Hero;
