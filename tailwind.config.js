/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter, sans-serif"],
      },
      colors: {
        "very-dark-blue": "hsl(240, 100%, 5%)",
        "soft-orange": "hsl(35, 77%, 62%)",
      },
    },
  },
  plugins: [],
};
