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
        sans: ['Inter', 'sans-serif'], // Primary body font
        headings: ['Orbitron', 'sans-serif'], // Headings font - more unique
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-hero': 'linear-gradient(to right, #2a2a3e, #1e1e2d, #2a2a3e)',
      },
      keyframes: {
        'gradient-shift': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
        shimmer: {
          '0%': { 'text-shadow': '0 0 10px rgba(230, 92, 146, 0.5), 0 0 20px rgba(230, 92, 146, 0.2)' },
          '50%': { 'text-shadow': '0 0 15px rgba(230, 92, 146, 0.8), 0 0 30px rgba(230, 92, 146, 0.4)' },
          '100%': { 'text-shadow': '0 0 10px rgba(230, 92, 146, 0.5), 0 0 20px rgba(230, 92, 146, 0.2)' },
        },
      },
      animation: {
        'gradient-shift': 'gradient-shift 15s ease infinite',
        'shimmer': 'shimmer 3s infinite ease-in-out',
      },
    },
  },
  plugins: [],
};
