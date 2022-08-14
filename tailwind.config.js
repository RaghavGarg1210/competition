/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*/.{js,ts,jsx,tsx}",
    "./components/index.js",    
    "./pages/incentives.js",    
    "./components/*/.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}