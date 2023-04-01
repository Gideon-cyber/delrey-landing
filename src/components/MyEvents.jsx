import React, { useState, useEffect } from "react";
// import { AllEvent } from "../Blockchain/ticketing";
import ButtonComponent from "./Button";
import Card from "./Card";
import Modal from "./Modal";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setAllEvents, MyEvents } from "../redux/userSlice";
import { useAddress } from "@thirdweb-dev/react";

// let Arr = [];
const MyEvent = (props) => {
  const dispatch = useAppDispatch();
  const { AllEvents, userAddress, MyEvents } = useAppSelector(
    (state) => state.users
  );
  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    // AllEvent().then((res) => {
    //   console.log(res);
    //   dispatch(setAllEvents(res));
    // });
  }, [dispatch]);
  const [isEvent, setIsEvent] = useState(false);

  const filterEvent = () => {
    console.log(userAddress);
    console.log(typeof AllEvents[0]);
    const events = AllEvents.filter(
      (event) => event.eventOwner === userAddress
    );
    console.log(events);
    return events;
  };

  useEffect(() => {
    if (filterEvent().length > 0) {
      setIsEvent(true);
      // dispatch(MyEvents(filterEvent()));
    } else {
      setIsEvent(false);
    }
  }, [isEvent]);

  return (
    <div className="max-w-7xl mx-auto flex items-center justify-center py-[50px] px-[16px] lg:px-0">
      <div className="flex items-start flex-col w-full gap-[30px] md:gap-[80px]">
        <div className="flex items-start md:items-center flex-col md:flex-row gap-4 justify-between w-full">
          <h2 className="text-[30px] md:text-[40px] md:leading-[48px] font-b-700 text-bluePrim">
            My Events
          </h2>
          <ButtonComponent text="Load More" bg={false} blue={true} />
        </div>
        {isEvent ? (
          <div className="flex items-center justify-center w-full flex-wrap gap-[28px]">
            {MyEvents.map((campaign, index) => (
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

            {showModal && (
              <Modal
                setShowModal={setShowModal}
                title={AllEvents[index].name}
                price={AllEvents[index].price}
                description={AllEvents[index].description}
                totalTickets={AllEvents[index].totalTickets}
                availableTickets={AllEvents[index].availableTickets}
              />
            )}
          </div>
        ) : (
          <div className="flex items-center justify-center h-[300px] w-full">
            <h1 className="text-[16px] italic text-center">
              You have not created any events yet.
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyEvent;
