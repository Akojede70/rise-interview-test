/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1024px',
    },
    extend: {
      animation: {
        moveUpDown: 'moveUpDown 3s ease-in-out infinite',
        moveLeftRight: 'moveLeftRight 3s ease-in-out infinite',
        moveLeftRightSlow: 'moveLeftRightSlow 4s ease-in-out infinite',
      },
      keyframes: {
        moveUpDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        moveLeftRight: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(30px)' }, 
        },
        moveLeftRightSlow: { 
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(7px)' },
        },
      },
      darkMode: 'class',
      colors: {
        primaryWhite: "#FFFFFF",
        primaryBlack: "#000000",
        primaryTeal: "#07969E",           
        primaryLightGray: "#ebebeb",
        primaryViolet: "#8c5ef7",
        primaryCyan: "#06979e",
        primaryTurquoise: "#A0DDE2",
      },
      fontFamily: {
        'body': ['"Open Sans"', "sans", "Tomato Grotesk"],
        'sans': ['Outfit', 'sans'],
        'roboto': ['Roboto', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}