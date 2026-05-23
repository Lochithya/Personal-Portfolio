/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#030303',
          surface: '#121212'
        },
        light: {
          bg: '#f8fafc',
          surface: '#ffffff'
        },
        accent: {
          start: '#22c55e', // Neon green
          end: '#4ade80'    // Lighter neon green
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
        card: ['Poppins', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
