/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "teal-900": "#014040",
        "teal-800": "#025252",
        "teal-700": "#036565",
        "teal-600": "#047878",
        "teal-100": "#E6F0F0",
      },
    },
    plugins: [require("@tailwindcss/line-clamp")],
  },
  plugins: [],
};
