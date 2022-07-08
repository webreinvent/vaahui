
import {colord} from "colord";

class VaahHelper {
  static colors(color: string): object {
    let primary = "hsl(224, 76%, 48%)";
    let primary_colors = {};
    let item;
    let index;
    let amount;

//light colors
    for (let i=5;i>=1; i--) {
      amount = 0.5-(i*.1);
      console.log('amount--->', amount);
      item = colord(primary).lighten(amount).toHex();
      index = i*100;
      // @ts-ignore
      primary_colors[index] = item;
    }

    // @ts-ignore
    primary_colors[500] = primary;

//dark colors
    for (let i=6;i<=9; i++) {
      amount = 0.5+(i*.05);
      item = colord(primary).darken(amount).toHex();
      index = i*100;
      // @ts-ignore
      primary_colors[index] = item;
    }

    return primary_colors;
  }
}


export default VaahHelper;
