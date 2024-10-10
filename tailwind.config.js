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
      animation: ['motion-safe'],
      darkMode: 'class',
      colors: {
        primaryWhite: "#FFFFFF",
        primary0Blue: "#203B8A",           
        primary1: "#FFFFFF",
        primary2: "#5E6978",
      },
      fontFamily: {
        'body': ['"Open Sans"', "sans"],
        'sans': ['Outfit', 'sans'],
        'roboto': ['Roboto', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}