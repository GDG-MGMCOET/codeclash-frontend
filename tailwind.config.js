/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ['"Roboto"', "sans-serif"],
      mono: ['"Roboto Mono"', "monospace"],
    },
    extend: {
      colors: {
        accent: "#FFC854",
      },
    },
  },
  plugins: [],
};

