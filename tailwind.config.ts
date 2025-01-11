import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "background-grid": "url('/images/background-grid.svg')"
      },
      boxShadow: {
        whiteGlow1: "0px 4px 18px rgba(255, 255, 255, 0.25)"
      }
    },
  },
  plugins: [],
} satisfies Config
