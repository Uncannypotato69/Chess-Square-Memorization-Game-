import React from "react";
import squareData from "./Helpers/squareData";

import classes from "./TestComponent.module.css";

const Board = ({ orientation, type }) => {
  const {
    sqsWithData,
    dimension,
    darkColor,
    lightColor,
    fontSize,
    squareDimension,
  } = squareData(orientation, type);

  return (
    <svg length="auto" className="board" viewBox="0 0 256 256">
      {sqsWithData.map((e, i) => {
        return (
          <>
            <rect
              height={squareDimension}
              width={squareDimension}
              x={e.x}
              y={e.y}
              key={i + `${e.squareName}`}
              fill={e.white ? lightColor : darkColor}
              data-name={e.squareName}
              //   ref={(el) => (squaresRef.current[i] = el)}
              className="rects"
            ></rect>
            <text
              fontFamily={"monospace"}
              fontSize={fontSize}
              x={e.xText}
              y={e.yText}
              key={i + `${e.squareName} ${e.white}`}
              fill={e.white ? darkColor : lightColor}
              className={`${classes.svg__text} unselectable`}
            >
              {e.squareName.toUpperCase()}
            </text>
          </>
        );
      })}
    </svg>
  );
};

export default Board;
