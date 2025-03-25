/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'WhiteColor': '#ffffff',
        'ButtonColor': '#3EB4E7',
        'ButtonHover': '#096f9e',
        'TextColor': '#3EB4E7'
      },
    },
  },
  plugins: [],
};
