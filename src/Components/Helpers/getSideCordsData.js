import boardConfig from "../Constants/boardConfig";
import getSideCordsPosition from "./getSideCordsPosition";
import { ranks, files } from "./squarenames"

const getSideCordsData = (orientation) => {
    const r = ranks;
    const f = files;

  let {dimension, darkColor, lightColor, fontSize, squareDimension} = boardConfig;

  const changeColor = (file) => {
    if(orientation === "asWhite"){
        return file
    }
    file.white = !file.white
  }

  const filesWithData = f.map((e, i) => {
    let {x} = getSideCordsPosition(i, dimension, squareDimension, fontSize, orientation)

    return {
        ...e, 
        x,
        y: (dimension - squareDimension) + 4
    }
  })

  const ranksWithData = r.map((e, i) => {
    let {x , y} = getSideCordsPosition(i, dimension, squareDimension, fontSize, orientation)
    changeColor(e)

    return {
        ...e, 
        y,
        x
    }
  })

  return {filesWithData, ranksWithData}
}

export default getSideCordsData

//todo Complete the sideCordinates
//! Fix the colorChange Problem
//? Figure out the positons of the side cords