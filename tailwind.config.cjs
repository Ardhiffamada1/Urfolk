/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    darkMode: 'class',
    colors: {
      transparent: 'transparent',
      'pink': '#EB455F',
      'linen' : '#FCFFE7',
      'blues' : '#6096B4',
      'white': '#FFFFFF',
      'yellow': '#FFFF00',
      'platinum': '#daddd8',
      'earie':'#1c1c1c',
      'afwhite':'#EEF0F2',
      'alabaster': '#ECEBE4',
      'greenland': '#2C3333',
      'shades': '#EEF0F1',
    },
    extend: {
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [require("daisyui")],
}
