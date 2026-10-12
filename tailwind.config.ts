import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: '#00f5d4',
          teal: '#06b6d4',
          violet: '#a855f7',
          purple: '#7928ca',
          emerald: '#10b981',
          amber: '#fbbf24',
          coral: '#f43f5e',
          void: '#06080d',
          surface: '#0b0f17',
          card: '#111622',
          border: 'rgba(255, 255, 255, 0.08)'
        },
        background: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          card: "var(--card-bg)",
          glass: "var(--glass-bg)",
        },
        foreground: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },
        border: {
          subtle: "var(--border-subtle)",
        },
        accent: {
          primary: "var(--accent-primary)",
        }
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -2px rgba(0, 245, 212, 0.45)',
        'glow-violet': '0 0 30px -2px rgba(168, 85, 247, 0.42)',
        'glow-emerald': '0 0 25px -2px rgba(16, 185, 129, 0.45)',
        'glow-amber': '0 0 25px -2px rgba(251, 191, 36, 0.42)',
        'glass': '0 12px 36px 0 rgba(0, 0, 0, 0.75)'
      },
      fontFamily: {
        sans: ["var(--font-geist)", "Inter", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"]
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        }
      },
      animation: {
        marquee: "marquee 35s linear infinite",
      }
    }
  },
  plugins: []
};

export default config;
