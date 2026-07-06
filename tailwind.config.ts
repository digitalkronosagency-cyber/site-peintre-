import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fond chaleureux type lin naturel / plâtre brut
        lin: {
          50: "#FBF8F2",
          100: "#F4EDDF",
          200: "#E8DCC3",
        },
        // Ardoise : charbon chaud utilisé pour les textes et le footer
        ardoise: {
          900: "#1E1A16",
          800: "#2B241E",
          700: "#3E352C",
          600: "#544838",
          400: "#7A6B58",
        },
        // Terracotta : couleur pot de peinture / terre cuite, accent principal
        terracotta: {
          50: "#FCEEE6",
          100: "#F7D8C5",
          300: "#E29A6A",
          500: "#C1602F",
          600: "#A84E23",
          700: "#853D1B",
        },
        // Sauge : vert volet patiné, accent secondaire
        sauge: {
          100: "#E4E9DE",
          300: "#AEBBA0",
          500: "#5F7052",
          600: "#4B5A40",
          700: "#3A4732",
        },
        // Or patiné pour les étoiles / notes
        or: {
          400: "#C89A3C",
          500: "#B08328",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      boxShadow: {
        soft: "0 12px 32px -16px rgba(30, 26, 22, 0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
