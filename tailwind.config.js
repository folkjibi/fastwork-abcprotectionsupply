/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#213065",
        secondary: "#D02B26",
        background: "#F5F7FA",
      },
      animation: {
        marqueeLeft: 'marqueeLeft 30s linear infinite',
        marqueeRight: 'marqueeRight 30s linear infinite',
      },
      keyframes: {
        marqueeLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marqueeRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  corePlugins: {
    aspectRatio: "false"
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require('daisyui'),
    require('flowbite/plugin')
  ],
  daisyui: {
    primary: "#213065",
  }
};
