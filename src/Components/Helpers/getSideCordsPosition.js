const getSideCordsPosition = (i, dimension, squareDimension, fontSize, orientation) => {
    
    const x = orientation === "asWhite"
    ? dimension - 8 // x coords start from left
    : dimension - 8; // x coords start from right

    const y = orientation === "asWhite" 
    ? dimension - ((i + 1) * squareDimension) + 8
    : (i * squareDimension) + 8; 

    return {x, y}
}

export default getSideCordsPosition;