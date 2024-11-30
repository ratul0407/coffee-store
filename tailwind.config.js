/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sadlewood: "#E3B577",
        "btn-color": "#242222",
        "gray-color": "#F4F3F0",
        "grayish-blue": "#374151",
        "light-gray": "rgba(27, 26, 26, 0.7)",
        "light-yellow": "#ECEAE3",
        "chocolate-color": "#331A15",
      },
      fontFamily: {
        rancho: ["Rancho", "cursive"],
        raleway: ["Raleway", "sans-serif"],
      },
      backgroundImage: {
        banner: "url('./assets/more/banner.jpg')",
        hero: "url('./assets/more/hero.png')",
        "add-coffee": "url('./assets/more/addcoffee.png')",
        "coffee-cards": "url('./assets/more/coffee-cards-bg.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
