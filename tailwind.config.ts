/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from 'tailwindcss'
/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ['class'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        main: {
          DEFAULT: '#fffdf1',
          dark: '#121212'
        },
        secondary: {
          DEFAULT: '#333333',
          dark: '#222831'
        },
        third: {
          DEFAULT: '#A3E635',
          dark: '#6EE7B7'
        }
      },
      screens: {
        '3xl': '1920px'
      },
    },
  },
  plugins: [
    require('tailwindcss-debug-screens')],
} satisfies Config;
