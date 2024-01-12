/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1690px",
    },
    extend: {
      fontFamily: {
        roboto: ["Noto Sans Georgian", "sans-serif"],
      },
    },
  },
  plugins: [ 
  ],
}