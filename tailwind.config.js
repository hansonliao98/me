/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "547px",
      lg: "1768px",
      xl: "1024px",
      "2xl": "1680px",
    },
    extend: {
      backgroundImage: {
        "intro-Image": "url(/src/images/forest.png)",
        image2: "url(/src/images/night.png)",
        contact: "url(/src/images/tents.png)",
      },
      keyframes: {
        flicker: {
          "0%": { transform: "scale(.95)" },
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(.95)" },
        },
        introduction: {
          "0%": { backgroundColor: "black", opacity: 1 },
          "50%": { backgroundColor: "black", opacity: 1 },
          "100%": { backgroundColor: "black", opacity: 0 },
        },
        introduction2: {
          "0%": { opacity: 0 },
          "70%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        rotateBoardTop: {
          "0%": { transform: "rotateX(0deg)" },
          "100%": { transform: "rotateX(90deg)" },
        },
        rotateBoardBottom: {
          "0%": { transform: "rotate(14deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
      animation: {
        flicker: "flicker 2s infinite",
        introduction: "introduction 2s linear ",
        introduction2: "introduction2 2s linear ",
        rotateBoardTop: "rotateBoardTop .5s linear ",
        rotateBoardBottom: "rotateBoardBottom .5s linear ",
      },
      colors: {
        primary: "#ff4800",
        darkblue: "#010512",
        moonlight: "#1F5078",
        footer: "#164058",
        night: "#091A2B",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
