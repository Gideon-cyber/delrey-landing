import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { Parallax } from "react-parallax";
import About from "../components/About";
import Roadmap from "../components/Roadmap";

export default function Home() {
  // const [proposals, setProposals] = useState<any[]>([])
  const dispatch = useAppDispatch();

  return (
    <div
      className={`h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scroll-smooth lg:scrollbar-track-white lg:scrollbar-thumb-bluePrim  lg:scrollbar-thumb-rounded-xl lg:scrollbar-thin text-Inter bg-white text-whitePrim font-Inter`}
    >
      <Parallax strength={600}>
        <Hero />
      </Parallax>
      <About />
      <div className="w-full h-auto bg-bluePrim text-white">
        <Roadmap />
      </div>

      {/* <Footer /> */}

      <ToastContainer autoClose={3000} />
    </div>
  );
}
