/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'PlaywriteUSModern' : `"Playwrite US Modern", cursive`
      },
      colors:{
        mainColor: '#06d6a0'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}