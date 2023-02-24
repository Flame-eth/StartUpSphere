/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg":
          "linear-gradient(to right bottom, rgba(0, 0, 0,0.95), rgba(0,0,0,0.95)), url('/backgroundhero.jpg')",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Titillium: ["Titillium Web", "sans-serif"],
      },
      colors: {
        blackPrim: "#1a1a1a",
        blackSec: "#242424",
        blackTert: "#393939",
        blackSoft: "#212121",
        whitePrim: "#fcfcfc",
        nearWhite: "#888888",
        greenPrim: "#00eaa1",
        greenSec: "#103f30",
        blackMain: "#151616",
      },
      screens: {
        sm: "480px",
        md: "840px",
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
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
