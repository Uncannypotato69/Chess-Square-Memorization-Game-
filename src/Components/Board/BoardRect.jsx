import React, { useContext, useState } from "react";
import checkClick from "./checkClick";

const BoardRect = ({
  squareDimension,
  e,
  i,
  lightColor,
  darkColor,
  rectsRef,
  targetSquare,
}) => {
  return (
    <rect
      height={squareDimension}
      width={squareDimension}
      x={e.x}
      y={e.y}
      key={`rect-${e.squareName}-${i}`}
      fill={e.white ? lightColor : darkColor}
      data-name={e.squareName}
      data-istarget={false}
      ref={(e) => (rectsRef.current[i] = e)}
      className="rects"
      onClick={(e) => checkClick(e.target, targetSquare)}
    ></rect>
  );
};

export default BoardRect;
