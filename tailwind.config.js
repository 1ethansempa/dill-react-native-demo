/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      "plus-jakarta-sans": ["Plus Jakarta Sans", "sans-serif"],
    },
    extend: {
      colors: {
        "primary-blue": "#3762FB",
        "primary-blue-400": "#3158E2",
        "primary-blue-600": "#5982FF",
        "card-white": "#F1F5F9",
      },
    },
  },
  plugins: [],
};
