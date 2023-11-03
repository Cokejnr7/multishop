/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "976px",
      xl: "1200px",
      "2xl": "1440px",
    },
    extend: {
      colors: {
        wildSand: "#F5F5F5",
        marko: "#3D464D",
        sunGlow: "#FFD333",
        corn: "#E6B400",
        paleSky: "#6C757D",
        ghost: "#CED4DA",
        butterMilk: "#FFEFB3",
        hGallery: "#ECECEC",
      },
    },
  },
  plugins: [],
};
