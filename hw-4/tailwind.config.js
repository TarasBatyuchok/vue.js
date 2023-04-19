/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    // margin: {
    //   '84': '84px',
    // },
    lineHeight: {
      '86': '86px',
      '30': '30px'
    },
    fontFamily: {
      Inter: ['Inter', 'sans-serif'],
      Poppins: ['Poppins', 'serif'],
      Sen: ['Sen', 'sans-serif'],
    },
    fontSize: {
      'xs': '0.75rem',     // 12px
      'sm': '0.875rem',    // 14px
      'base': '1rem',      // 16px
      'lg': '1.125rem',    // 18px
      'xl': '1.25rem',     // 20px
      '2xl': '1.5rem',     // 24px
      '3xl': '1.875rem',   // 30px
      '4xl': '2.25rem',    // 36px
      '5xl': '3rem',       // 48px
      '6xl': '4rem',       // 64px
      '7xl': '5.25rem'     //84px
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
        'yellow': '#FFD482',
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
    // 
    screens: {
      xxs: '370px',
      xs: '500px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl:'1440px',
    },
    boxSizing: {
      'border-box': 'border-box',
    },

  },
  plugins: [],

}

