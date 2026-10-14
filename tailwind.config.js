/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          warmWhite: "#FAF7F2",
          pureWhite: "#FFFFFF",
          mutedPeach: "#EFC8B8",
          dustyPeach: "#DCA996",
          softLavender: "#DCD2E9",
          deepLavender: "#B9A5CF",
          darkPlum: "#342633",
          aubergine: "#251C27",
          espresso: "#292522",
          taupe: "#A79A8D",
          paleBlush: "#F3E5E2",
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-reverse': 'float-reverse 5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
      boxShadow: {
        'warm-sm': '0 2px 8px -2px rgba(41, 37, 34, 0.06)',
        'warm-md': '0 6px 20px -4px rgba(41, 37, 34, 0.08)',
        'warm-lg': '0 12px 32px -6px rgba(41, 37, 34, 0.12)',
        'plum-glow': '0 0 35px -5px rgba(185, 165, 207, 0.25)',
        'peach-glow': '0 0 30px -5px rgba(220, 169, 150, 0.3)',
      },
    },
  },
  plugins: [],
};
