/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'card-hover': 'rgb(0 0 0 / 40%) 0px 1.375rem 4.375rem 0.25rem',
      }
    },
  },
  plugins: [],
}
