/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: '#252525',
        accent: '#FFB703',
        input: '#F1F4FB',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        'buttonShadow': '0px 0px 10px rgba(0, 0, 0, 0.25)',
        'containerShadow': '0px 0px 20px 10px rgba(176, 176, 176, 0.2)',
      }
    },
  },
  plugins: [],
}
