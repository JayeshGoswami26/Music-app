import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

// Plugin to add each Tailwind color as a global CSS variable
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = theme('colors');
  const newVars: { [key: string]: string } = {};

  for (const [color, values] of Object.entries(allColors)) {
    if (typeof values === 'string') {
      newVars[`--${color}`] = values;
    } else if (typeof values === 'object') {
      for (const [shade, colorValue] of Object.entries(values)) {
        newVars[`--${color}-${shade}`] = colorValue;
      }
    }
  }

  addBase({
    ':root': newVars,
  });
}

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:'class',  
  theme: {
    extend: {
        animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [addVariablesForColors],
};
export default config;
