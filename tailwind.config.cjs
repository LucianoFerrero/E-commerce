/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'ice': '#73BFFE',
      },
      fontFamily: {
        sans: [
          "",
        ],
      }, 
      backgroundImage: {
        'IceI': "url('../assets/Ice.png')",
      } 
    },
  },
  plugins: [],
}
