/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lightBg : '#BF7CEE',
        secondaryBg: '#9D4EDD',
        ternaryBg: '#5A189A', 
        Primaryfont :'white'
      }
    },
  },
  plugins: [],
}

