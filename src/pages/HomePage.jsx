import axios from "axios";

import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Hero from "../components/Hero";
import UpcomingEvents from "../components/UpcomingEvents";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import MyEvent from "../components/MyEvents";
import { Parallax } from "react-parallax";

export default function Home() {
  // const [proposals, setProposals] = useState<any[]>([])
  const dispatch = useAppDispatch();

  return (
    <div
      className={`h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scroll-smooth lg:scrollbar-track-blackPrim lg:scrollbar-thumb-blackTert  lg:scrollbar-thumb-rounded-xl lg:scrollbar-thin text-Inter bg-white text-whitePrim font-Inter`}
    >
      <Parallax strength={600}>
        <Hero />
      </Parallax>
      <Parallax strength={600}>{/* <UpcomingEvents /> */}</Parallax>
      {/* <MyEvent />

      <Cta />

      <Footer /> */}

      <ToastContainer autoClose={3000} />
    </div>
  );
}
