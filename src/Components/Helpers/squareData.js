import { squares } from "./squarenames";
import boardConfig from "../Constants/boardConfig";

const squareData = (orientation) => {
  let sqs = squares;
  let {dimension, darkColor, lightColor, fontSize, squareDimnsion} = boardConfig;
  console.log(dimension, darkColor, lightColor, fontSize, squareDimnsion)

  // let x = i % 8 === 0 ? 0 : (i % 8) * (dimension / 8);
  // let xText = i % 8 === 0 ? squareDimesion - (fontSize + 4) : squareDimesion + (i % 8) * (dimension / 8) - (fontSize + 4);
  // let y = (dimension - squareDimesion) - Math.floor(i / 8) * squareDimesion;
  // let yText = (dimension - squareDimesion) - Math.floor(i / 8) * squareDimesion + 14;

};

export default squareData;


//! 1. Make the function to get sqares with Data
//? 2. Make the custom component for board 

  