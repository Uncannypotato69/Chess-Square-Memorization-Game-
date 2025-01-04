import React, { useContext, useState } from "react";
import checkClick from "./checkClick";
import { FindSquareContext } from "../Helpers/Contexts/FindSquareContext";

const BoardRect = ({
  squareDimension,
  e,
  i,
  lightColor,
  darkColor,
  rectsRef,
  targetSquare,
}) => {
  const { setActiveRect } = useContext(FindSquareContext);

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
      onClick={(e) => checkClick(e.target, targetSquare, setActiveRect)}
    ></rect>
  );
};

export default BoardRect;
