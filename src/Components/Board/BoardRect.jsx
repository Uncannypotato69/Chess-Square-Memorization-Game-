import React, { useContext, useState } from "react";
import { FindSquareContext } from "../Helpers/Contexts/FindSquareContext";
import handleRectClick from "../Carousel/handleRectClick";
const BoardRect = ({
  squareDimension,
  e,
  i,
  lightColor,
  darkColor,
  rectRefs,
}) => {
  const { activeRect, spans, squareNames, setActiveRect } =
    useContext(FindSquareContext);

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
      ref={(el) => (rectRefs.current[i] = el)}
      onClick={(el) => {
        handleRectClick(el, activeRect);
      }}
    ></rect>
  );
};

export default BoardRect;
