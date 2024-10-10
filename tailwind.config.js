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
      },
      keyframes: {
        moveUpDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      darkMode: 'class',
      colors: {
        primaryWhite: "#FFFFFF",
        primaryTeal: "#07969E",           
        primary1: "#FFFFFF",
        primary2: "#5E6978",
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