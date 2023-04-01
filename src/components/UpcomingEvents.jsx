import React, { useState, useEffect } from "react";
// import { AllEvent } from "../Blockchain/ticketing";
import ButtonComponent from "./Button";
import Card from "./Card";
import Modal from "./Modal";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setAllEvents } from "../redux/userSlice";

let Arr = [];
const UpcomingEvents = (props) => {
  const dispatch = useAppDispatch();
  const { AllEvents } = useAppSelector((state) => state.users);
  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    // AllEvent().then((res) => {
    //   // console.log(res);
    //   dispatch(setAllEvents(res));
    // });
  }, [dispatch, showModal]);

  console.log(AllEvents);

  return (
    <div className="max-w-7xl mx-auto flex items-center justify-center py-[50px] md:py-[147px] px-[16px] lg:px-0">
      <div className="flex items-start flex-col w-full gap-[30px] md:gap-[80px]">
        <div className="flex items-start md:items-center flex-col md:flex-row gap-4 justify-between w-full">
          <h2 className="text-[30px] md:text-[40px] md:leading-[48px] font-b-700 text-bluePrim">
            Upcoming Events
          </h2>
          <ButtonComponent text="Load More" bg={false} blue={true} />
        </div>
        <div className="flex items-center justify-center w-full flex-wrap gap-[28px]">
          {/* <div
            className="cursor-pointer"
            onClick={() => {
              setShowModal(true);
            }}> */}
          {AllEvents.map((campaign, index) => (
            <div
              key={index}
              onClick={() => {
                setIndex(index);
                setShowModal(true);
              }}
              className="cursor-pointer w-auto h-auto"
            >
              <Card
                title={campaign.name}
                walletAdd={campaign.eventOwner}
                description={campaign.description}
              />
            </div>
          ))}
          {/* <Card /> */}
          {/* </div> */}

          {showModal && (
            <Modal
              setShowModal={setShowModal}
              title={AllEvents[index].name}
              price={AllEvents[index].price}
              description={AllEvents[index].description}
              totalTickets={AllEvents[index].totalTickets}
              availableTickets={AllEvents[index].availableTickets}
              eventId={AllEvents[index].eventId}
              allEventArr
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
