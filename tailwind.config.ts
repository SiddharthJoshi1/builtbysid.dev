import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "bg-[url('/assets/images/automated_pressure_test_image.svg')]",
    "bg-[url('/assets/images/drug_allergy_app_image.svg')]",
    "bg-[url('/assets/images/untitled_dragon_game.gif')]",
    "bg-[url('/assets/images/open_hack_image.svg')]",
    "col-span-3",
    "col-span-2",
    "col-span-5"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "rich-blue": "#111928",
        vanilla: "#EEE1B3",
        beige: "#F5F5DC",
        "rich-black": "#0C121D",
        oil: "#06090E",
        "electric-indigo": "#6320EE",
        flame: "#EB5E28",
      },
    },
  },
  plugins: [],
};
export default config;
