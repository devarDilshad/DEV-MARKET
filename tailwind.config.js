/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f3f2f4",
        green: "#0ecb81",
        red: "#ff0000",
        text_gradient_start: "#2600fc",
        text_gradient_end: "#ff00ea",
        bg_color: '#0f051d',
      },
      fontFamily: {
        space: ['"Space Grotesk"', "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};

