import React, { useContext, useState } from "react";
import { FindSquareContext } from "../Helpers/Contexts/FindSquareContext";
import { checkClick } from "./checkClick";

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
      onClick={(el) =>
        checkClick(
          el.target,
          activeRect,
          spans,
          squareNames,
          activeRect,
          setActiveRect
        )
      }
    ></rect>
  );
};

export default BoardRect;
