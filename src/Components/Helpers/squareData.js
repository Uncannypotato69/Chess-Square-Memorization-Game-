import { squares } from "./squarenames";
import boardConfig from "../Constants/boardConfig";
import getSquarePosition from "./getSquareData";

const squareData = (orientation, type) => {

  // Array of squareNames
  let sqs = squares;

  // constants
  let {dimension, darkColor, lightColor, fontSize, squareDimension} = boardConfig;

  // returns an array containing objects for each square adding information about their position
  const sqsWithData = sqs.map((e, i) => {

    // gets the info from every square Object
    let {x, y, xText, yText} = getSquarePosition(i, dimension, squareDimension, fontSize, orientation)
    
  return {
    ...e,
    x,
    y,
    xText, 
    yText
  }
  })

 return {sqsWithData, dimension, darkColor, lightColor, fontSize, squareDimension};
};

export default squareData;

//! Make comments for the code
//// Delete the extra files
//* Start working on the carousel