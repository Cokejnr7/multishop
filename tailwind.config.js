/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        wildSand: "#F5F5F5",
        marko: "#3D464D",
        sunGlow: "#FFD333",
        paleSky: "#6C757D",
        hGallery: "#ECECEC",
      },
    },
  },
  plugins: [],
};
