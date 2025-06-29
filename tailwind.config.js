/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Habilita el modo oscuro con clase
  theme: {
    extend: {
      animation: {
        'spin': 'spin 1s linear infinite',
      }
    },
  },
  plugins: [],
}