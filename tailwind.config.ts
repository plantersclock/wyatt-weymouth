import type { Config } from "tailwindcss";

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
        "theme-blue": "#171847", // Your custom color
        "theme-light-blue": "#48509a",
        "theme-very-light-blue": "#3391dd",
        "theme-red": "#673030",
      },
    },
  },
  plugins: [],
} satisfies Config;
