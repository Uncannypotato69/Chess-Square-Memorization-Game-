
// returns array of squareObject after adding positional info 
const getSquarePosition = (i, dimension, squareDimension, fontSize, orientation) => {
    const col = i % 8;
    const row = Math.floor(i / 8);
    
    const x = orientation === "asWhite" 
      ? col * (dimension / 8)  // x coords start from bottom left
      : dimension - ((col + 1) * squareDimension); // x coords start from top right
      
    const y = orientation === "asWhite"
      ? dimension - squareDimension - (row * squareDimension)  //y coords start from bottom left
      : row * squareDimension; //y coords start from top right
      
    const textOffset = fontSize + 4;
    
    const xText = orientation === "asWhite"
      ? x + squareDimension - textOffset
      : x + 4;
      
    const yText = y + 8;
  
    return { x, y, xText, yText };
  };

  export default getSquarePosition;