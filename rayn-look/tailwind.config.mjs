/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customGold: '#CBB26A',
        primary: '#CBB26A',
        secondary: '#8B7355',
        accent: '#E6D7B8',
        dark: '#1A1A1A',
        light: '#F0F8FF',
        white: '#F0F8FF'
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #CBB26A 0%, #8B7355 100%)',
        'gold-white': 'linear-gradient(135deg, #CBB26A 0%, #F0F8FF 100%)',
        'gold-dark': 'linear-gradient(135deg, #CBB26A 0%, #1A1A1A 100%)',
        'luxury-gradient': 'linear-gradient(135deg, #CBB26A 0%, #E6D7B8 50%, #8B7355 100%)',
      }
    },
  },
  plugins: [],
};