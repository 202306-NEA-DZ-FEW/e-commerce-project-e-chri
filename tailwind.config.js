/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
     'sm':{'max': '639px'},
      md: "768px",
      lg: "980px",
      xl: "1280px",
      "2xl": "1536px",
    },
    borderRadius: {
      mr: "15px", //main radius
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      DEFAULT: "4px",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "50px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        DarkWhite: "#FCFCFC",
        RedPoppy: "#DB4444",
        OxfordBlue: "#14142B",
        EnglishViolet: "#4E4B66",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}
