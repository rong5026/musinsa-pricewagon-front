/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        customBg : '#F1F4F6',
      },
      screens : {
        'max-h-840' : {'raw' : '(max-height : 840px)'},
      }
    },
  },
  plugins: [],
}