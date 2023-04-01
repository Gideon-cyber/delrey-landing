import React from "react";
import Card from "./Card";

const Roadmap = () => {
  const roadmapArr = [
    {
      title: "Phase 1: Community building",
      description:
        "The first phase of the project will focus on building a strong and supportive community. This will involve organizing regular community events, social media campaigns, and other activities to engage with the community. The team will also work to establish partnerships with other projects and communities to expand the reach of the DelRey Inu community.",
    },
    {
      title: "Phase 2: Listings and Partnerships",
      description:
        "In the second phase, the team will work to get the token listed on centralized exchanges and other platforms. This will increase the visibility of the project and help to attract more investors and supporters. Additionally, the team will look to form partnerships with other projects and communities that share the same values as DelRey Inu.",
    },
    {
      title: "Phase 3: Platform Development",
      description:
        "In the final phase, the team will work on developing a platform that will provide additional services to the community.This could include a wallet, staking, and yield farming capabilities, providing more opportunities for the community to engage with the token.",
    },
  ];
  return (
    <div className="flex items-center justify-center py-[16px] px-[16px] md:py-[20px] md:px-[60px] min-h-screen h-auto w-full max-w-7xl mx-auto">
      <div className="flex items-center flex-col-reverse lg:flex-row py-[2rem] gap-[40px] lg:gap-[126px]">
        <div className="flex items-center flex-col gap-[36px] flex-1">
          <div className="w-full flex items-center justify-center lg:justify-start">
            <h1 className="text-[36px] lg:text-[58px] lg:leading-[65px] font-bold tracking-[0.2px] w-[80%] lg:w-full text-center">
              ROAD MAP
            </h1>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <div className="hidden sm:flex"></div>
            <div className="flex items-center flex-col sm:flex-row gap-4 w-full">
              {roadmapArr.map(({ title, description }, index) => (
                <div key={index}>
                  <Card title={title} description={description} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
