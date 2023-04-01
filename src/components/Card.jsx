import React from "react";

import Event from "../public/event1.svg";

const Card = ({ title, description }) => {
  return (
    <div className="w-full md:w-[320px] h-auto sm:min-h-[370px] overflow-hidden rounded-[10px] flex items-center flex-col shadow-card">
      <div className="flex-1 flex items-center justify-center gap-4 bg-[#ad70eb] py-[20px] px-[30px]">
        <div className="flex items-center justify-center gap-[20px] flex-col">
          <div className="flex items-center justify-between w-full">
            <span className="text-[18px] leading-[24px] font-b-700 text-white">
              {title}
            </span>
          </div>
          <span className="text-white text-[14px] leading-[21px]">
            {description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
