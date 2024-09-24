/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily:{
        sans:["Poppins"]
      },
      animation: {
        blob: "blob 10s infinite",
        dance1: "dance 1s ease-in-out infinite",
        dance2: "dance 1s ease-in-out 0.2s infinite",
        dance3: "dance 1s ease-in-out 0.4s infinite"
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%":{
            transform: "translate(30px, -20px) scale(1.1)"
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)"
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)"
          }
        },
        dance: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      }
    },
  },
  plugins: [],
}

