import Hero from "../components/Hero";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";
import CreateEventHero from "../components/CreateEventHero";
import { useFormik } from "formik";
import InputFields from "../components/InputFields";
import ButtonComponent from "../components/Button";
import { createEvent } from "../Blockchain/ticketing";

import { MyEvent } from "../components/MyEvent";

export default function MyEventPage() {
  const { values, handleSubmit, handleBlur, handleChange } = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: "",
      totalTickets: "",
    },
    onSubmit: (values) => {
      const res = createEvent(
        values.name,
        values.description,
        values.price,
        values.totalTickets
      ).then((res) => {
        if (res === "Transaction Successful") {
          toast.success("Event Created Successfully");
        } else {
          toast.error("Error Creating Event");
        }
      });
    },
  });
  return (
    <div
      className={`h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scroll-smooth lg:scrollbar-track-bluePrim lg:scrollbar-thumb-pinkPrim lg:scrollbar-thumb-rounded-xl lg:scrollbar-thin bg-white text-white font-poppins`}
    >
      <div>
        <title>Event-go</title>
        <meta
          name="description"
          content="DApp for creating and managing events"
        />
      </div>

      <CreateEventHero />
      <div className="py-[4rem] md:py-[8rem] flex items-center justify-center w-full">
        <MyEvent />
      </div>

      <Footer />

      <ToastContainer autoClose={3000} />
    </div>
  );
}

export const getServerSideProps = async () => {
  return {
    props: {}, // will be passed to the page component as props
  };
};
