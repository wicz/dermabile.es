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
    extend: {
      colors: {
        rose: {
          DEFAULT: "#f09491"
        },
        apricot:{
          DEFAULT: "#ffbe9f"
        },
        iron: {
          DEFAULT: "#53565a"
        },
        coal: {
          DEFAULT: "#25282a"
        },
        peach: {
          DEFAULT: "#ffb3ab"
        },
        "cool-gray": {
          DEFAULT: "#d9d9d6"
        },
        black: {
          DEFAULT: "#25282a"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
}
