/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // includes all JSX/TSX files in the app folder
    "./pages/**/*.{js,ts,jsx,tsx}", // optional if using `pages/` instead of `app/`
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
