/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Baskervville", "sans-serif"],
        baskervville: ["Baskervville", "sans-serif"],
        greatVibes: ["Great Vibes", "sans-serif"],
      },
    },
  },

  plugins: [],
};
