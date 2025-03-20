/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./main.html",  
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        grayCustom: "#B3B3B3",
        whiteCustom: "#FFFFFF",
        blackCustom: "#000000",
        darkGrayCustom: "#282828",
        primaryGradientStart: "#3822EA",
        primaryGradientEnd: "#C7E9D7",
        gray999: "#999999",
        green65d: "#65D36E",
        grayad: "#ADADAD",
        blue407: "#4077CA",
        graycc: "#CCCCCC",
        graya6: "#A6A6A6",
        grayba: "#BABABA",
        black80: "rgba(0, 0, 0, 0.8)",
        gray121: "#121212",
        gray171: "#171717",
        gray181: "#181818",
        gray282: "#282828",
        blue33: "#3333A3",
        blue38: "#3822EA",
        greenC7: "#C7E9D7",
        green63: "#63CF6C",
      },
      fontFamily: {
        circular: ["Circular Std", "sans-serif"],
      },
    },
  },
  plugins: [],
}

