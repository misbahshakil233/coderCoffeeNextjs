import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Corrected the dark mode setting
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        colorCycle: {
          '0%': { color: 'white' },  // Start color
          '50%': { color: '#FFD700' }, // Mid-color (gold/yellow)
          '100%': { color: 'white' }, // End with original color
        },
      },
      animation: {
        colorCycle: 'colorCycle 3s ease-in-out infinite', // Loop the color animation
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), // Correct placement of plugins
  ],
};

export default config;
