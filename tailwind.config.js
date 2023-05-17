/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      s: { max: "767px" },
      m: { min: "768px", max: "1023px" },
      l: { min: "1024px" },
    },
    colors: {
      main: "#FED54D",
      bg: "#FFFBEC",
      text: "#301E1E",
    },
    extend: {},
  },
  plugins: [],
};
