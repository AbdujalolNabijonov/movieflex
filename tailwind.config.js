/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,tsx,ts,jsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#030014",
        secondary: "#151312",
        label: "#D6C7FF",
        accent: "#AB8BFF",
        light: {
          100: "#D6C6FF",
          200: "#A8B5DB",
          300: "#9CA4AB",
        },
        dark: {
          100: "#222F3D",
          200: "#0F0D23",
        },
      },
    },
  },
  plugins: [],
};
