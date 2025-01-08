import type { Config } from "tailwindcss";

import defaultTheme from "tailwindcss/defaultTheme";
import colors, { gray } from "tailwindcss/colors";

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#C8102E',  // Bovua Red
        secondary: '#1F1F1F', // Dark Grey/Black
        tertiary: '#737070',  // Light Grey
        light: '#FFFFFF',
        accent: '#E63946',  // Slightly lighter red for accents
        background: '#121212', // Dark mode background
        muted: '#6B7280',
        grayShade: '#EEEEEE',
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        stock: defaultTheme.fontFamily.sans,
      },
      animation: {
        logoBounce: "bounceInOut 3s ease-in-out forwards",
        fadeIn: "fadeIn 1s ease-in-out forwards",
      },
      keyframes: {
        bounceInOut: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "50%": { transform: "scale(4)", opacity: "1" },
          "100%": { transform: "scale(7)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

export default config;