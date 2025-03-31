/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#CBFC58'
      },
      fontSize: {
        '7xl': '5rem',
      },
      transitionProperty: {
        'all': 'all',
      },
      textShadow: {
        'glow': '0 0 30px rgba(203,252,88,0.5)',
      },
    },
  },
  plugins: [],
} 