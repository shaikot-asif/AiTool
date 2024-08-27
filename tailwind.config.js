/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pColor: "#918ea0",
        white: "#fff",
      },
      backgroundImage: {
        "hero-pattern": "url('../src/assets/hero.svg')",
      },
    },
  },
  plugins: [],
};
