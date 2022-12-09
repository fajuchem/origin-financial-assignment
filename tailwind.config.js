/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-gray': '#F4F8FA',
        'blue-gray-600': '#4D6475',
        'blue-gray-900': '#1E2A32',
        'light-gray': '#E9EEF2',
        'brand-primary': '#1B31A8',
        'brand-second': '#0079FF',
      },
    },
  },
  plugins: [],
};
