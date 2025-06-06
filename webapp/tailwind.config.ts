import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',        // For App Router pages
    './components/**/*.{ts,tsx}', // For shared components
    './lib/**/*.{ts,tsx}',        // Optional utility files
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffc815', // Brand Yellow
        dark: '#000000',    // Brand Black
      },
      fontFamily: {
        sans: ['Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
