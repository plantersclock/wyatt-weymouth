import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marqueeslow: {
          "0%": { transform: "translateX(25%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marqueemedium: {
          "0%": { transform: "translateX(32%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marqueefast: {
          "0%": { transform: "translateX(65%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marqueeslowdelay: {
          "0%": { transform: "translateX(25%)" },
          "90.91%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marqueemediumdelay: {
          "0%": { transform: "translateX(32%)" },
          "90.91%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marqueefastdelay: {
          "0%": { transform: "translateX(65%)" },
          "90.91%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "marquee-slow": "marqueeslow 30s linear infinite",
        "marquee-medium": "marqueemedium 30s linear infinite",
        "marquee-fast": "marqueefast 30s linear infinite",
        "marquee-slow-delay": "marqueeslowdelay 33s linear infinite",
        "marquee-medium-delay": "marqueemediumdelay 33s linear infinite",
        "marquee-fast-delay": "marqueefastdelay 33s linear infinite",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "theme-blue": "#171847", // Your custom color
        "theme-light-blue": "#48509a",
        "theme-very-light-blue": "#3391dd",
        "theme-red": "#673030",
        "theme-red-menu": "#8b0008",
      },
    },
  },
  plugins: [],
} satisfies Config;
