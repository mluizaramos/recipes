/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     extend: {
      colors: {
        mainGray: '#F7F7F7',
        mainOrange: '#F2674B',
        mainPink: '#FFECE8'
      },
    },
  },
  plugins: [],
}
