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
        gray: "var(--gray)",
        "gray-800": "var(--gray-800)",
        "slate-400": "var(--slate-400)",
        "slate-500": "var(--slate-500)",
      },
      fontSize: {
        xs: [".75rem", "1.125"], // 12px
        sm: [".875rem", "1.3125rem"], // 14px
        base: ["1rem", "1.5rem"], // 18px
        lg: ["1.25rem", "1.875rem"], // 20px
        "very-lg": ["1.5rem", "2.25rem"], // 24px
        "semi-xl": ["2rem", "3rem"], // 32px
        xl: ["3rem", "4.5rem"], //48px
        xxl: ["4rem", "6rem"], // 64px
      },
    },
  },
  plugins: [],
} satisfies Config;
