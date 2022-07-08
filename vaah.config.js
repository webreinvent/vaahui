const {colord} = require("colord");

function colors(color)
{
  let primary = color;
  let primary_colors = {};
  let item;
  let index;
  let amount;

  //light colors
  for (let i=5;i>=1; i--) {
    amount = 0.5-(i*.1);
    item = colord(primary).lighten(amount).toHex();
    index = i*100;
    primary_colors[index] = item;
  }

  primary_colors[500] = primary;

  //dark colors
  for (let i=6;i<=9; i++) {
    amount = 0.5+(i*.05);
    item = colord(primary).darken(amount).toHex();
    index = i*100;
    primary_colors[index] = item;
  }
  return primary_colors;
}

module.exports = {
  colors,
}
