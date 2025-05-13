/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: { 
      screens: {
        md:'801px'
      },
      fontFamily: {
        body: ['Bai Jamjuree', 'sans-serif'],
        heading: ['Crimson Text', 'serif'],
      }
    },
  },
  plugins: [],
}

