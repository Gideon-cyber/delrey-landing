import React from "react";

import Event from "../public/event1.svg";

const Card = ({ title, walletAdd, description }) => {
  return (
    <div className="w-full md:w-[343px] overflow-hidden rounded-[18px] flex items-center flex-col shadow-card">
      <div className="flex-1">
        <img src={Event} alt="event-pic" />
      </div>
      <div className="flex-1 flex items-start gap-4 bg-white py-[20px] px-[30px]">
        <div className="flex items-start gap-[10px] flex-col">
          <div className="flex items-center justify-between w-full">
            <span className="text-[14px] leading-[150%] font-b-700 text-black">
              {title}
            </span>
            <span className="text-[10px] py-2 px-3 bg-pinkPrim text-white">{`${walletAdd.slice(
              0,
              6
            )}...`}</span>
          </div>
          <span className="text-[#6A6A6A] text-[14px] leading-[21px]">
            {description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
