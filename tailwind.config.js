/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container:{
      center:true,
    },
    fontFamily:{
      'poppins' : ["Poppins", 'sans-serif'],
      'sevillana' : ["Sevillana", 'cursive']
    }
  },
  plugins: [],
}