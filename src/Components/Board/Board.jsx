import React from "react";
import squareData from "../Helpers/squareData";

import classes from "../TestComponent.module.css";
import BoardTemplate from "./BoardTemplate";
import getSideCordsData from "../Helpers/getSideCordsData";

const Board = ({ orientation, type }) => {
  const {
    sqsWithData,
    dimension,
    darkColor,
    lightColor,
    fontSize,
    squareDimension,
  } = squareData(orientation, type);

  const { filesWithData, ranksWithData } = getSideCordsData(orientation);

  // Returns an SVG with 8x8 grid of rects and texts for squareNames
  return (
    <BoardTemplate
      squareDimension={squareDimension}
      sqsWithData={sqsWithData}
      lightColor={lightColor}
      darkColor={darkColor}
      fontSize={fontSize}
      filesWithData={filesWithData}
      ranksWithData={ranksWithData}
    />
  );
};

export default Board;
