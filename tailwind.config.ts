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
        primaryblue: "var(--primaryblue)",
        primaryred: "var(--primaryred)",
      },
      fontSize: {
        xs: ".75rem", // 12px
        sm: [".875rem", "1.25rem"], // 14px
        base: ["1.125rem", "1.5rem"], // 18px
        lg: ["1.25rem", "1.75rem"], // 20px
        "very-lg": ["1.5rem", "2rem"], // 24px
        "semi-xl": ["2rem", "2.5rem"], // 32px
        xl: ["3rem", "3.5rem"], //48px
        xxl: ["4rem", "4.5rem"], // 64px
      },
    },
  },
  plugins: [],
} satisfies Config;
