/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'inter',
      },
      colors: {
        gray: {
          100: '#f2f2f2',
          200: '#d9d9d9',
          300: '#7f7f7f',
          400: '#333333',
          500: '#262626',
          600: '#191919',
          700: '#0c0c0c',
        },
        purple: {
          500: '#8284fa',
          700: '#5e60ce',
        },
        blue: {
          500: '#4ea8de',
          700: '#1d6e9f',
        },
        danger: '#e25858',
      },
    },
  },
  plugins: [],
}
