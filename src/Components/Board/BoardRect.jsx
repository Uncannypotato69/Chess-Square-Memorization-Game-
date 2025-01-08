import React, { useContext, useState } from "react";
import { FindSquareContext } from "../Helpers/Contexts/FindSquareContext";

const BoardRect = ({ squareDimension, e, i, lightColor, darkColor }) => {
  return (
    <rect
      height={squareDimension}
      width={squareDimension}
      x={e.x}
      y={e.y}
      key={`rect-${e.squareName}-${i}`}
      fill={e.white ? lightColor : darkColor}
      data-name={e.squareName}
      className="rects"
    ></rect>
  );
};

export default BoardRect;
