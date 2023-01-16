/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lightgr: "#bcebb7",
        gr: "#8ac185",
        darkgr: "#547b41",
      },
    },
  },
  plugins: [],
};
