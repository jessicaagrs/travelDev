import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        custom100: '#C3E998',
        custom200: '#212529',
        custom300: '#B0631D',
        custom400: '#F8F9FA',
        custom500: '#9C5312',
        custom600: '#495057',
        custom700: '#ADB5BD',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
