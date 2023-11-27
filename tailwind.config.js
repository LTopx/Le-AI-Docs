/** @type {import('tailwindcss').Config} */

const {
  iconsPlugin,
  getIconCollections,
} = require("@egoist/tailwindcss-icons");

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./theme.config.tsx",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        logo: "linear-gradient(90deg,#41BDF8,#59A5F0,#788ADE,#936DC2,#A34E9D)",
        hero: "linear-gradient(to top,#fafafa 0,hsla(0,0%,100%,0) 100%),linear-gradient(to right,rgb(var(--gradient-from,192.5 192.5 192.5)/.08) 0,rgb(var(--gradient-to,192.5 192.5 192.5)/.08) 100%)",
        heroDark:
          "linear-gradient(to top,#000 0,hsla(0,0%,100%,0) 100%),linear-gradient(90deg,rgb(var(--gradient-from,85 85 85)/.2) 0,rgb(var(--gradient-to,85 85 85)/.2) 100%)",
        download1: "linear-gradient(165deg,#00dfd8,#007cf0)",
        download2: "linear-gradient(165deg,#ff0080,#7928ca)",
        download3: "linear-gradient(165deg,#ff4d4d,#f9cb28)",
        actionBtn:
          "linear-gradient(0deg,rgba(0,0,0,0.05),rgba(0,0,0,0.05)),radial-gradient(50% 50% at 50% 100%,rgba(0,0,0,0.1) 0%,rgba(0,0,0,0) 100%)",
        actionBtnDark:
          "linear-gradient(0deg,rgba(255,255,255,0.05),rgba(255,255,255,0.05)),radial-gradient(50% 50% at 50% 100%,rgba(255,255,255,0.1) 0%,rgba(255,255,255,0) 100%)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        flow: {
          "0%": { backgroundPosition: "0 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0 50%" },
        },
        download1: {
          "0%, 16.667%, 100%": { opacity: 1 },
          "33%, 83.333%": { opacity: 0 },
        },
        download2: {
          "0%, 16.667%, 66.667%, 100%": { opacity: 0 },
          "33.333%, 50%": { opacity: 1 },
        },
        download3: {
          "0%, 50%, 100%": { opacity: 0 },
          "66.667%, 83.333%": { opacity: 1 },
        },
        imageRotate: {
          "0%": { transform: "rotateX(25deg)" },
          "25%": { transform: "rotateX(25deg) scale(.9)" },
          "60%": { transform: "none" },
          "100%": { transform: "none" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        flow: "flow 6s linear infinite",
        download1: "download1 8s infinite",
        download2: "download2 8s infinite",
        download3: "download3 8s infinite",
        imageRotate: "imageRotate 2s ease forwards",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    iconsPlugin({
      collections: getIconCollections([
        "mdi",
        "mingcute",
        "simple-icons",
        "ri",
      ]),
    }),
  ],
};
