/** @type {import('tailwindcss').Config} */

import { colord } from "colord";

/*let primary = "#1d4ed8";
let primary_colors = {};

for (let i=0;i<=100; i+10) {
  primary_colors[i] = colord("hsl(224, 76%, 48%)").darken(0.25).toHex();
}

console.log('--->', primary_colors);*/


module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vh-primary': '#1d4ed8',
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
