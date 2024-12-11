const { space } = require('postcss/lib/list');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rotateSplit: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(45deg)" },
          "50%": { transform: "rotate(45deg)" },
          "75%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        rotateSplit: "rotateSplit 4s ease-in-out infinite",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#191714",
          light: "var(--primary-light)",
          dark: "var(--primary-dark)",
        },
        accent: {
          DEFAULT: "#E97A50",
          80: "#E97A50CC",
          60: "#E97A5099",
        },
        neutral: {
          DEFAULT: "#D1BFA7",
          80: "#D1BFA7CC",
          60: "#D1BFA799",
        },
        neutral_light: {
          DEFAULT: "#F5E9DA",
          80: "#F5E9DACC",
          60: "#F5E9DA99",
        },
        accent_dark: {
          DEFAULT: "#8A5035",
          80: "#8A5035CC",
          60: "#8A503599",
        },
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
        Doto: ['Doto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
