/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#0B5ED7",
        secondary: "#198754",
        dark: "#0F172A",
      }
    },
  },
  plugins: [],
}


