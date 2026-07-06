import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brume : fond clair neutre
        brume: {
          50: "#FFFFFF",
          100: "#F4F6F9",
          200: "#E7ECF2",
        },
        // Encre : texte et sections sombres
        encre: {
          900: "#14181F",
          800: "#1E242D",
          700: "#2B323C",
          600: "#454E5A",
          400: "#7C8794",
        },
        // Bleu : couleur de marque principale (confiance, artisanat sérieux)
        bleu: {
          50: "#EAF1FB",
          100: "#D3E3F7",
          300: "#7FA8E0",
          500: "#1D5DB8",
          600: "#164A94",
          700: "#103A73",
          900: "#0B2A54",
        },
        // Rouge : accent d'action (appel, urgence)
        rouge: {
          50: "#FDECEA",
          100: "#F8CFC9",
          500: "#DC3B2E",
          600: "#B92E22",
          700: "#8F2119",
        },
        // Or patiné pour les étoiles / notes
        or: {
          400: "#C89A3C",
          500: "#B08328",
        },
      },
      fontFamily: {
        display: ["var(--font-manrope)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      boxShadow: {
        soft: "0 20px 45px -20px rgba(11, 42, 84, 0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
