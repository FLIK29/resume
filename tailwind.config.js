/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
      },
      colors: {
        ink: {
          DEFAULT: "#111111",
          soft: "#44444a",
          faint: "#8a8a92",
        },
        accent: {
          DEFAULT: "#5457E5",
          soft: "#eef0ff",
          dim: "#c9cbfa",
        },
      },
      maxWidth: {
        content: "72rem",
      },
      boxShadow: {
        subtle: "0 1px 2px 0 rgb(17 17 17 / 0.04), 0 1px 3px 0 rgb(17 17 17 / 0.06)",
        card: "0 10px 30px -12px rgb(17 17 17 / 0.12)",
        "card-hover": "0 20px 40px -16px rgb(17 17 17 / 0.16)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgb(17 17 17 / 0.035) 1px, transparent 1px), linear-gradient(to bottom, rgb(17 17 17 / 0.035) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
