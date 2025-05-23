/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        testblue: "#00f",
      },
      fontFamily: {
        heading: ['"Lexend Mega"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
