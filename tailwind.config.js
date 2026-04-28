/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // The three pillars of the brand
        beige: {
          DEFAULT: "#E8DCC4",
          light: "#F2EADB",
          dark: "#D4C4A0",
          paper: "#F5EFE2",
        },
        ink: {
          DEFAULT: "#0A0A0A",
          soft: "#1A1A1A",
          mid: "#2D2D2D",
          muted: "#5A5A5A",
        },
        electric: {
          DEFAULT: "#2952CC",
          deep: "#1E3A8A",
          bright: "#3B6FE8",
          dark: "#142654",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};
