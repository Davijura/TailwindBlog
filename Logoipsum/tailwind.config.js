/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({ 
        'hero-pattern': "linear-gradient(to right bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8)), url('../img/Rectangle(7).png')",
      }),
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        gradientl: '#D500F9 0%',
        gradientr: '#FF1744',
        'my-gradient': ['#D500F9', '#FF1744'],
      },
    },
  },
  plugins: [],
}
