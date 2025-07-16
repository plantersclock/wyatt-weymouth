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
          "0%": { transform: "translateX(13%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marqueemedium: {
          "0%": { transform: "translateX(18%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marqueefast: {
          "0%": { transform: "translateX(25%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "marquee-slow": "marqueeslow 60s linear infinite",
        "marquee-medium": "marqueemedium 45s linear infinite",
        "marquee-fast": "marqueefast 30s linear infinite",
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
