/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      colors: {
        cream: '#FAF3F0', // Add your custom cream color here
      },
      fontFamily: {
        poppins: ['Times New Roman', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

