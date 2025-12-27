/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark: "#000000",     // Pure black background
        bgLight: "#111827",    // Dark gray for section contrast
        textLight: "#F9FAFB",  // White text
        textDim: "#9CA3AF",    // Gray text
        accent: "#06B6D4",     // Cyan accent
        accentHover: "#22D3EE",// Lighter cyan for hover
      },
    },
  },
  plugins: [],
}
