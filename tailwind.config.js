/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      colors:{
        'bg-1': '#292f36',
        'bg-2': '#1a1e23',
        'brand-1': '#126706',
        'brand-2': '#98faec',
        'html': '#e54f24',
        'js': '#e7ad20',
        'grey': '#434540',
        'react': '#284960',
      }
    },
  },
  plugins: [],
}