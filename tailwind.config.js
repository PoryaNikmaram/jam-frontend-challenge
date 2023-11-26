/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      Bhaijaan: ['Baloo Bhaijaan 2', 'sans-serif'],
    },
    extend: {
      colors: { primary: '#fef2f2' },
      gridTemplateColumns: {
        13: 'repeat(13,minmax(0,1fr))',
      },
    },
  },
  plugins: [],
  direction: 'rtl',
}
