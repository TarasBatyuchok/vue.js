/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'beige': '#FAF8ED',
        'carrot': '#F66F4D',
        'dark': '#2D3134',
        'white': '#FFFFFF'
      }
    },

  },
  plugins: [],
}

