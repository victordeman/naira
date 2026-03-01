/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        naira: {
          primary: '#4f46e5', // Indigo 600
          secondary: '#f59e0b', // Amber 500
          dark: '#0f172a', // Slate 900
          darker: '#020617', // Slate 950
          accent: '#10b981', // Emerald 500
        }
      }
    },
  },
  plugins: [],
}
