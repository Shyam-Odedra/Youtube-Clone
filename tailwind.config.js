/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      themeBlack: "#101010"
    }
  },
  plugins: [require('@tailwindcss/line-clamp')],
}