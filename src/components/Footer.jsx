import React from "react";
import Logo from "../public/logo.svg";
import { SocialIcon } from "react-social-icons";
import ButtonComponent from "./Button";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <footer className="bg-bluePrim pt-[56px] text-white pb-[20px] px-4 md:px-0">
      <div className="max-w-7xl mx-auto flex items-start flex-col md:flex-row md:justify-between">
        <div className="flex items-start flex-col gap-[17px] md:w-[333px]">
          <div className="md:text-[20px]">
            <Link to="/">
              <div className="flex items-center justify-center h-[60px] overflow-clip">
                <img
                  src="https://uploads-ssl.webflow.com/64217e6df1c4db453cb8c781/64219001fca7d87074d0c885_Product-p-1080.png"
                  alt="logo-text"
                  className="h-[60px] md:h-[100px]"
                />
              </div>
            </Link>
          </div>
          <span className="text-[14px] leading-[22px] text-[#F3F3F3]">
            DelRey Inu is a unique meme token that pays tribute to the bond
            between pets and their owners. The project is entirely
            community-driven, with no reserved tokens, and a locked liquidity
            pool, ensuring that the future of the token is in the hands of the
            community. With a strong and supportive community and a clear
            roadmap, DelRey Inu has the potential to become a leading meme token
            in the Ethereum network.
          </span>
        </div>

        <div className="flex items-center gap-2 text-[14px]">
          <SocialIcon
            url="https://twitter.com/"
            bgColor="#fff"
            style={{ height: "24px", width: "24px" }}
          />
          <SocialIcon
            url="https://www.facebook.com/"
            bgColor="#fff"
            style={{ height: "24px", width: "24px" }}
          />
          <SocialIcon
            url="https://www.linkedin.com/"
            bgColor="#fff"
            style={{ height: "24px", width: "24px" }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
