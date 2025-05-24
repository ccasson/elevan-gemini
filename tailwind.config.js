/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#1E1E2D', // Primary dark background
          'dark-secondary': '#2A2A3E', // Slightly lighter dark for cards/sections
          accent: '#E65C92', // Pink accent color
          'accent-hover': '#D0487E', // Slightly darker pink for hover states
          light: '#F8F8F8', // Light text/element color
        },
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'], // Primary body font
        headings: ['Montserrat', 'sans-serif'], // Headings font
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'gradient-shift': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
      animation: {
        'gradient-shift': 'gradient-shift 15s ease infinite',
      },
    },
  },
  plugins: [],
};
