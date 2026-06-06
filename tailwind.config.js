/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Personalización de colores para el tema Negro/Morado
        accent: {
          DEFAULT: '#a855f7', // purple-500
          dark: '#7e22ce',    // purple-700
        }
      }
    },
  },
  plugins: [],
}
