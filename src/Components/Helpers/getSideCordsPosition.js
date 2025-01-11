const getSideCordsPosition = (i, dimension, squareDimension, fontSize, orientation) => {
    
    const xRank =  dimension - 8 // x coords start from left

    const yRank = orientation === "asWhite" 
    ? dimension - ((i + 1) * squareDimension) + 8
    : (i * squareDimension) + 8; 

    const xFile = orientation === "asWhite"
    ? (i * squareDimension) + 4
    : dimension - ((i + 1) * squareDimension) + 4

    const yFile =  dimension - 4 

    return {xRank, yRank, xFile, yFile}
}

export default getSideCordsPosition;