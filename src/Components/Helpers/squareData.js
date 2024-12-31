import { squares } from "./squarenames";
import boardConfig from "../Constants/boardConfig";

const squareData = (orientation, type) => {
  let sqs = squares;
  let {dimension, darkColor, lightColor, fontSize, squareDimension} = boardConfig;

  const getSquarePosition = (i, dimension, squareDimension, fontSize, orientation) => {
    const col = i % 8;
    const row = Math.floor(i / 8);
    
    const x = orientation === "asWhite" 
      ? col * (dimension / 8)
      : dimension - ((col + 1) * squareDimension);
      
    const y = orientation === "asWhite"
      ? dimension - squareDimension - (row * squareDimension)
      : row * squareDimension;
      
    const textOffset = fontSize + 4;
    
    const xText = orientation === "asWhite"
      ? x + squareDimension - textOffset
      : x + 4;
      
    const yText = y + 8;
  
    return { x, y, xText, yText };
  };


  const sqsWithData = sqs.map((e, i) => {

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
//? Delete the extra files
//* Start working on the carousel