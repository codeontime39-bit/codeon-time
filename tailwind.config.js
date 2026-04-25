/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FAFAF7",
        ink: "#1A1918",
        muted: "#8A8985",
        line: "#E5E4DF",
        accent: "#FF4F19",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-instrument)", "Georgia", "serif"],
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        rise: "rise 1.1s cubic-bezier(0.7, 0, 0.3, 1) forwards",
        fillBar: "fillBar 1.6s cubic-bezier(0.7, 0, 0.3, 1) forwards",
        scrollHint: "scrollHint 2.4s infinite",
      },
      keyframes: {
        marquee: {
          to: { transform: "translateX(-50%)" },
        },
        rise: {
          to: { transform: "translateY(0)" },
        },
        fillBar: {
          to: { width: "100%" },
        },
        scrollHint: {
          "0%": { left: "-100%" },
          "60%, 100%": { left: "100%" },
        },
      },
    },
  },
  plugins: [],
};
