import React from "react";
import Header from "./Header";
import Picture from "../public/dog.svg";
import ButtonComponent from "./Button";

const Hero = (props) => {
  return (
    <div className="py-[16px] px-[16px] md:py-[20px] md:px-[60px] min-h-screen h-auto w-full relative animate-ChangeBg bg-cover bg-center text-white bg-bg-hero-2">
      <Header />
      {/* <div className="h-full max-w-7xl mx-auto w-full flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-[20px]">
          <div className="flex items-start flex-col gap-[26px] flex-1">
            <div className="w-full h-[170px] overflow-hidden flex items-center justify-center">
              <img
                src="https://uploads-ssl.webflow.com/64217e6df1c4db453cb8c781/64219001fca7d87074d0c885_Product-p-1080.png"
                alt="logo"
                className="w-full"
              />
            </div>
            <h1 className="text-[30px] md:text-[40px] md:leading-[49px] font-b-700 -mt-5-">
              SBS MTV The Kpop Show Ticket Package
            </h1>

            <div className="flex items-center gap-4">
              <ButtonComponent bg={true} text="Get Ticket" />
              <ButtonComponent bg={false} text="Learn More" />
            </div>
          </div>

          <div className="flex-1 px-2 md:px-0 flex w-full items-center justify-center">
            <img src={Picture} alt="hero-Image" />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
