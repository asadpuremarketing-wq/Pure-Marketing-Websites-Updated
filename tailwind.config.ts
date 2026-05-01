import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "#FFFFFF",
          secondary: "#F8FAFC",
          card: "#FFFFFF",
        },
        accent: {
          primary: "#F06428",
          hover: "#D9531E",
        },
        text: {
          primary: "#0F172A",
          secondary: "#475569",
          muted: "#94A3B8",
        },
        border: {
          DEFAULT: "#E2E8F0",
          hover: "#CBD5E1",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
export default config;
