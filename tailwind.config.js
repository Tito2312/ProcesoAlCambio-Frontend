/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lavender': {
          main: '#F8F5FA',      // Background
          light: '#E7D5EF',     // Success / Light Fill
          accent: '#8C6C95',    // Primary Accent / Botones
          muted: '#B098B8',     // Secondary Accent
          dark: '#3A2B42',      // Text Primary
          gray: '#9B91A1',      // Text Secondary
          border: '#E2D8E6',    // Dividers
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'], // Tipografía limpia y moderna
      }
    },
  },
  plugins: [],
}