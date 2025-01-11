import boardConfig from "../Constants/boardConfig";
import getSideCordsPosition from "./getSideCordsPosition";
import { ranks, files } from "./squarenames"

const getSideCordsData = (orientation) => {
  const r = orientation === "asWhite" 
  ? ranks 
  : ranks.map((e) => ({ ...e, white: !e.white }));
    const f =  orientation === "asWhite"
    ? files
    : files.map((e) => ({...e, white: !e.white}));

  let {dimension,fontSize, squareDimension} = boardConfig;

  const filesWithData = f.map((e, i) => {
    let {xFile, yFile} = getSideCordsPosition(i, dimension, squareDimension, fontSize, orientation)

    return {
        ...e, 
        x: xFile,
        y: yFile,
    }
  })

  const ranksWithData = r.map((e, i) => {
    let {xRank , yRank} = getSideCordsPosition(i, dimension, squareDimension, fontSize, orientation)
    return {
        ...e, 
        y: yRank,
        x: xRank
    }
  })

  return {filesWithData, ranksWithData}
}

export default getSideCordsData
