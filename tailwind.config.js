/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'serif-narrow': ['"Serif Narrow"', 'sans-serif'],
      'serif-narrow-italic': ['"Serif Narrow Italic"', 'sans-serif'],
      'serif-medium': ['"Serif Medium"', 'sans-serif'],
      'serif-medium-italic': ['"Serif Medium Italic"', 'sans-serif'],
      'serif-black': ['"Serif Black"', 'sans-serif'],
      'serif-black-italic': ['"Serif Black Italic"', 'sans-serif'],
    },
  },
  plugins: [],
}