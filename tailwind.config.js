/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "960px",
      // => @media (min-width: 960px) { ... }

      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      backgroundImage: {
        "about-im": "url('./public/back.png')",
      },
      colors: {
        "bg-1": "#292f36",
        "bg-2": "#1a1e23",
        "brand-1": "#126706",
        "brand-2": "#98faec",
        "html-col": "#e54f24",
        "js-col": "#e7ad20",
        " grey": "#434540",
        "react-col": "#284960",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
};
