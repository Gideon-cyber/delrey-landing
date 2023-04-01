import React from "react";
import DelLogo from "../public/del-logo.png";

const About = () => {
  return (
    <div className="flex items-center justify-center py-[16px] px-[16px] md:py-[20px] md:px-[60px] min-h-screen h-auto w-full max-w-7xl mx-auto">
      <div className="flex items-center flex-col lg:flex-row py-[2rem] lg:py-[4rem] gap-[40px] lg:gap-[126px]">
        <div className="flex items-start flex-col gap-[36px] flex-1">
          <div className="w-full flex items-center justify-center lg:justify-start">
            <h1 className="text-[36px] lg:text-[58px] lg:leading-[65px] font-bold tracking-[0.2px] w-[80%] lg:w-auto text-center lg:text-left">
              About <span className="text-bluePrim">($DELREY)</span>
            </h1>
          </div>
          <div className="flex items-start gap-[29px] flex-col">
            <p className="text-[16px] leading-[24px] text-blueTert lg:tracking-[0.7px]">
              <span className="text-bluePrim font-b-600">DelRey Inu</span> is a
              community-driven meme token created to pay homage to the beloved
              dog of Maye Musk, mother of Elon Musk. DelRey is often seen
              accompanying Maye in her social media posts and has become a
              symbol of the bond between pets and their owners. The token
              operates on the ERC-20 network, and it has a locked liquidity pool
              that will remain locked for 100 years, providing stability and
              security to the community.
            </p>
            <div className="flex flex-col items-start gap-2">
              {/* <h2 className="text-[18px] leading-[24px] font-b-600">
                Tokenomics:
              </h2> */}

              <p className="text-[16px] leading-[24px] text-blueTert lg:tracking-[0.7px]">
                <span className="text-bluePrim font-b-600">DelRey Inu</span> has
                a total supply of 1 million tokens, and it operates on the
                Ethereum network. The token has a 0% tax on transactions, which
                means that holders can buy and sell the token without any fees.
                Moreover, the liquidity pool has been locked for 100 years,
                which will prevent any rug pulls or other malicious activities.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2">
              {/* <h2 className="text-[18px] leading-[24px] font-b-600">
                Tokenomics:
              </h2> */}

              <p className="text-[16px] leading-[24px] text-blueTert lg:tracking-[0.7px]">
                <span className="text-bluePrim font-b-600">DelRey Inu</span> is
                a community-driven project, and there are no pre-sale or private
                sales. The tokens have been distributed fairly through an
                airdrop, and they are currently available for purchase on
                decentralized exchanges. The development team has not reserved
                any tokens, ensuring that the token's future is entirely in the
                hands of the community.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center flex-1">
          <img src={DelLogo} alt="del logo" />
        </div>
      </div>
    </div>
  );
};

export default About;
