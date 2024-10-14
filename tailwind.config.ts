import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        normal: "1600px",
        "90%": "90%",
        "75%": "75%",
        "40%": "40%",
      },
      fontSize: {
        "10xl": "12rem",
      },
      colors: {
        primary1: "#147487",
        primary2: "#0A3A44",
        secondary1: "#A9D5DD",
        secondary2: "#F7F7F7",
        accent1: "#C9E8FF",
        accent2: "#B2D1E6",
      },
      fontFamily: {
        stix: "var(--font-stix)",
        noto: "var(--font-noto)",
      },
      screens: {
        "max-sm": { max: "480px" },
        "max-md": { max: "768px" },
        "max-lg": { max: "991px" },
      },
    },
  },
  plugins: [],
};
export default config;
