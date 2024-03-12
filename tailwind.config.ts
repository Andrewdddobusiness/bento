import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      colors: {
        green_p: "#7fd8be",
        blue_p: "#325e96",
        red_p: "#da1e38",
        purple_p: "#c47fd8",
        orange_p: "#d8ad7f",
        yellow_p: "#e0b708",
        pink_p: "#fdc6d6",
        light_grey_p: "#edf2f4",
        dark_grey_p: "#17171a",
      },
    },
  },
  plugins: [],
};
export default config;
