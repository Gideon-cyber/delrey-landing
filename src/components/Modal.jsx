import React, { Dispatch, SetStateAction } from "react";
import ButtonComponent from "./Button";
import CloseIcon from "../public/close.png";
// import { purchaseTicket } from "../Blockchain/ticketing";
import { toast } from "react-toastify";

const Modal = ({
  setShowModal,
  title,
  price,
  totalTickets,
  availableTickets,
  description,
  allEventArr,
  eventId,
}) => {
  const { ethers } = require("ethers");

  function weiToEther(wei) {
    // console.log()
    const ether = ethers.utils.formatEther(wei);
    return ether;
  }

  return (
    <div className="fixed left-0 right-0 bottom-0 top-0 h-screen flex items-center justify-center z-[300] bg-[rgba(7,7,7,0.7)]">
      <div className="w-[300px] md:w-[440px] rounded-[10px] text-left flex items-center justify-center flex-col py-[20px] md:py-[30px] px-[30px] md:px-[60px] bg-white gap-3 relative">
        <div
          className="absolute right-[16px] md:right-[32px] top-[16px] cursor-pointer"
          onClick={() => {
            setShowModal(false);
          }}
        >
          <img src={CloseIcon} alt="close-icon" className="w-[20px]" />
        </div>
        <div className="flex items-center justify-between w-full">
          <h2 className="text-[14px] md:text-[16px] font-b-700 text-bluePrim">
            Name:
          </h2>
          <span className="text-[11px] font-b-500 text-blueSec">{title}</span>
        </div>
        <div className="flex items-start justify-between w-full">
          <h2 className="text-[14px] md:text-[16px] font-b-700 text-bluePrim">
            Description:
          </h2>
          <span className="text-[11px] font-b-500 text-blueSec w-[200px]">
            {description}
          </span>
        </div>
        <div className="flex items-center justify-between w-full">
          <h2 className="text-[14px] md:text-[16px] font-b-700 text-bluePrim">
            Price(ETH):
          </h2>
          <span className="text-[11px]  font-b-500 text-blueSec">
            {weiToEther(price)}
          </span>
        </div>
        <div className="flex items-center justify-between w-full">
          <h2 className="text-[14px] md:text-[16px] font-b-700 text-bluePrim">
            AvailableTickets:
          </h2>
          <span className="text-[11px]  font-b-500 text-blueSec">
            {availableTickets}
          </span>
        </div>
        <div className="flex items-center justify-between w-full">
          <h2 className="text-[14px] md:text-[16px] font-b-700 text-bluePrim">
            totalTickets:
          </h2>
          <span className="text-[12px] md:text-[14px] font-b-500 text-blueSec">
            {totalTickets}
          </span>
        </div>
        <div
          className="flex items-center justify-center w-full"
          onClick={() => {
            if (allEventArr) {
              // // const res = purchaseTicket(eventId, price).then((res) => {
              // //   console.log(res);
              // //   if (res === "Transaction Successful") {
              // //     toast.success("Purchase Successful");
              // //   } else {
              // //     toast.error("Purchase Failed");
              // //   }
              // });
            }
          }}
        >
          {allEventArr && <ButtonComponent text="Purchase Ticket" bg />}
        </div>
      </div>
    </div>
  );
};

export default Modal;
