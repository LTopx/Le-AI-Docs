/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./theme.config.tsx",
  ],
  theme: {
    extend: {
      backgroundImage: {
        logo: "linear-gradient(90deg,#41BDF8,#59A5F0,#788ADE,#936DC2,#A34E9D)",
      },
      keyframes: {
        flow: {
          "0%": { backgroundPosition: "0 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0 50%" },
        },
      },
      animation: {
        flow: "flow 6s linear infinite",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
