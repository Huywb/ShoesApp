/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGreenStart: 'rgba(14,33,39,1)',
        darkGreenMid: 'rgba(17,65,61,1)',
        primary : "#54d8ac"
      },
      textShadow: {
        'custom': '2px 2px 4px #54d8ac', 
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-custom': {
          'text-shadow': '2px 2px 4px #54d8ac', 
        },
      });
    },
  ],
}