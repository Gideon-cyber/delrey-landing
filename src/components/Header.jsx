import React, { useState, useEffect } from "react";

import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import Logo from "../public/logo.svg";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Hamburger from "../public/icon-hamburger.svg";
import Close from "../public/icon-close.svg";

const Header = (props) => {
  const [open, setOpen] = useState(false);

  const activeStyle = {
    fontWeight: "bold",
    borderBottom: "2px solid #687B9E",
  };

  return (
    <header className="z-[100]">
      <nav className="flex justify-center items-center max-w-7xl mx-auto py-2 px-3 md:h-[63px] w-full">
        <div className="flex items-center flex-wrap justify-between w-full gap-1 transition-all duration-300">
          <div className="md:text-[20px]">
            <NavLink to="/">
              <div className="flex items-center">
                {/* <div className="w-[80px] h-[60px] overflow-hidden flex items-center justify-center">
                  {/* <img
                    src="https://uploads-ssl.webflow.com/64217e6df1c4db453cb8c781/64218ff5f9dbbd2ef67ff7cf_139%20Sem%20Ti%CC%81tulo_20230324000717-p-1080.png"
                    alt="logo"
                    className="h-[60px]"
                  /> 
                </div> */}
                <div className="flex items-center justify-center h-[60px] overflow-clip">
                  <img
                    src="https://uploads-ssl.webflow.com/64217e6df1c4db453cb8c781/64219001fca7d87074d0c885_Product-p-1080.png"
                    alt="logo-text"
                    className="h-[60px] md:h-[100px]"
                  />
                </div>
              </div>
            </NavLink>
          </div>
          <div className="flex items-center gap-1 md:hidden">
            {/* <div className="border rounded-[4px] border-blackTert p-[0.45rem] text-[1.4rem]">
              <Icon icon="bx:search" />
            </div> */}
            <div
              className="border rounded-[4px] border-greenPrim border-opacity-30 p-[0.45rem] text-[1.4rem]"
              onClick={() => {
                setOpen(true);
              }}
            >
              {/* <Icon icon="bx:menu-alt-right" /> */}
              <img src={Hamburger} alt="hamburger" />
            </div>
          </div>
          <div
            className={`w-[200px] h-screen md:h-auto md:w-auto md:basis-0 border border-pinkPrim border-opacity-[0.3] bg-bluePrim md:bg-transparent md:border-none rounded-[4px] px-[1rem] md:mt-0 transition-all duration-500 ${
              open
                ? "absolute top-0 right-0"
                : "hidden md:block right-[-200px] py-[0.5rem]"
            }  `}
          >
            <ul
              className={`items-center flex flex-col md:flex-row gap-[10px] md:gap-4 bg-bluePrim md:bg-transparent text-[16px] md:h-[19px] w-auto md:pt-0 transition-all duration-500 relative py-[4rem] md:py-0
          `}
            >
              <div
                className="border rounded-[4px] border-bluePrim border-opacity-30 p-[0.45rem] text-[1.4rem] absolute right-4 top-4 md:hidden"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <img src={Close} alt="hamburger" className="" />
              </div>

              <li className="navItem">
                <NavLink
                  to="/"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="inline-block"
                >
                  Home
                </NavLink>
              </li>

              <li className="navItem">
                <NavLink
                  to="/#charity"
                  // style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="inline-block"
                >
                  Charity
                </NavLink>
              </li>

              <li className="navItem">
                <NavLink
                  to="/#community"
                  // style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="inline-block"
                >
                  Community
                </NavLink>
              </li>

              {/* <ButtonComponent bg={false} text="Login" /> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
