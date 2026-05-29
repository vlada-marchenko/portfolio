/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg: '#11111b',         // Catppuccin Crust
        panel: '#1e1e2e',      // Catppuccin Base
        surface: '#181825',    // Catppuccin Mantle (window chrome)
        border: '#313244',     // Catppuccin Surface0
        muted: '#6c7086',      // Catppuccin Overlay0
        text: '#cdd6f4',       // Catppuccin Text
        accent: '#cba6f7',     // Catppuccin Mauve (primary violet)
        accent2: '#89dceb',    // Catppuccin Sky (cyan)
        accent3: '#fab387',    // Catppuccin Peach (warm orange)
        accent4: '#89b4fa',    // Catppuccin Blue (keywords)
        red: '#f38ba8',        // Catppuccin Red
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        blink: 'blink 1s steps(1) infinite',
        fadeUp: 'fadeUp 0.5s ease-out both',
      },
    },
  },
  plugins: [],
}
