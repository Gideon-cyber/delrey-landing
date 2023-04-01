/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-hero-2":
          "linear-gradient(to right bottom, rgba(0, 0, 0,0.25), rgba(0,0,0,0.25)), url('/src/public/back.png')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        bluePrim: "#242565",
        pinkPrim: "#F5167E",
        blueSec: "#3D37F1",
      },
      screens: {
        sm: "480px",
        md: "1024px",
        lg: "1200px",
      },
      fontWeight: {
        "b-300": "300",
        "b-400": "400",
        "b-500": "500",
        "b-600": "600",
        "b-700": "700",
        "b-800": "800",
        "b-900": "900",
        "bold-max": "1000",
      },
      boxShadow: {
        card: "0px 18.9529px 47.3822px rgba(119, 115, 170, 0.1)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
