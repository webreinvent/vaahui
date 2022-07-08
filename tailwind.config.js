/** @type {import('tailwindcss').Config} */

const {colors} = require("./vaah.config.js");

let primary = "hsl(224, 76%, 48%)";
let primary_colors = colors(primary)


let success = "hsl(153,53%,53%)";
let success_colors = colors(success)

module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: primary_colors,
        success: success_colors,
      }
    },
  },
  plugins: [],
  whitelistPatterns: [],
  safelist: [
    //'el-dropdown-menu__item',
    {
      pattern: /el-/,
    },
  ],
}
