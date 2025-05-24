/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#10101A', // Very dark blue/almost black
        'brand-dark-secondary': '#1E1E2D', // Darker blue-gray
        'brand-accent': '#E65C92', // Elegant Pink/Magenta
        'brand-accent-hover': '#D0487E', // Darker pink for hover
        'brand-gold': '#D4AF37', // Gold accent (optional)
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        headings: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/7129713/pexels-photo-7129713.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1')",
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
