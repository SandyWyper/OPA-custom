module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        cream: "#f1ede5",
        turquois: "#d0e7e1",
        navy: "#043042",
        green: "#475451",
        "light-green": "#829184",
        black: "#272727",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
