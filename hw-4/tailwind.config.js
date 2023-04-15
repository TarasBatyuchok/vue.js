/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Inter: ['Inter', 'sans-serif'],
      Poppins: ['Poppins', 'serif'],
      Sen: ['Sen', 'sans-serif'],
    },
    fontWeight: {
       '100': '100',
       '200': '200',
       '300': '300',
       '400': '400',
       '500': '500',
       '600': '600',
       '700': '700',
       '800': '800',
    },
    extend: {
      colors:{
        'beige': '#FAF8ED',
        'carrot': '#F66F4D',
        'black': '#2D3134',
        'white': '#FFFFFF',
        'transparent': 'rgba(255, 255, 255, 0)'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '135px',
        xxs: '10px',
        xs: '10px',
        sm: '10px',
        md: '30px',
        lg: '40px',
        xl: '120px',
        xxl:'135px'
      },
      maxWidth: '1440px',
    },
    screens: {
      xxs: '370px',
      xs: '500px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl:'1440px',
    },

  },
  plugins: [],
}

