/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#1D1D1D",
      },
      textColor: {
        main: "#ADFF00",
      },
    },
  },
  plugins: [require("daisyui")],
};

