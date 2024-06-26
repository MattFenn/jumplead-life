/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './docs/**/*.{html,js}',
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        brandcolour: '#4CA39B',
        bgblue: '#130B35',
        bgltblue: '#F4C8F0',
        bgyellow: '#F7C433',
        bgbluetint: '#E7E6EA'
      }
    },
    fontFamily: {
      'mono': ['"American Typewriter", "Courier New"', 'monospace'],
      'custom': ['YourCustomFont', 'sans-serif'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

