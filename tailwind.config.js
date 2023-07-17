/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FDBB47",
      },
      fontFamily: {
        serif: ['"Quicksand"', "serif"],
        sans: ['"Dosis"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
