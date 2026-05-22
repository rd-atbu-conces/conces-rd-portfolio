/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

  theme: {
    extend: {
      colors: {
        background: '#071126',
        secondary: '#0F172A',
        surface: '#111827',

        primary: '#38BDF8',
        accent: '#F59E0B',

        text: '#F8FAFC',
        muted: '#CBD5E1',
        subtle: '#94A3B8',
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },

  plugins: [],
};