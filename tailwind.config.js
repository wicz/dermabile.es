module.exports = {
  purge: {
    content: [
      "./**/*.html",
      "./**/*.md",
    ],
    options: {
      keyframes: true,
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
}
