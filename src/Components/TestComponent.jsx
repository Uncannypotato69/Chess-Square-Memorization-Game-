import React, { useEffect, useRef, useState } from "react";

import classes from "./TestComponent.module.css";

import returnSquares from "./squares";
import { Squares2X2Icon } from "@heroicons/react/16/solid";

const TestComponent = () => {
  const data = returnSquares();
  const squares = data[0];
  const boardConfig = data[1];

  const squaresRef = useRef([]);

  useEffect(() => {
    console.log(squaresRef.current[0].children);
  });

  //! Create pick-at-random-system and do other stuff

  return (
    <svg width={boardConfig.dimension} height={boardConfig.dimension}>
      {squares.map((e, i) => {
        return (
          <g ref={(el) => (squaresRef.current[i] = el)}>
            <rect
              height={e.squareDimesion}
              width={e.squareDimesion}
              x={e.x}
              y={e.y}
              key={i + `${e.squareName}`}
              fill={e.white ? boardConfig.lightColor : boardConfig.darkColor}
              name={e.squareName}
            ></rect>
            <text
              fontFamily={boardConfig.fontFamily}
              fontSize={e.fontSize}
              x={e.xText}
              y={e.yText}
              key={i + `${e.squareName} ${e.white}`}
              fill={e.white ? boardConfig.darkColor : boardConfig.lightColor}
              className={`${classes.svg__text} unselectable`}
            >
              {e.squareName.toUpperCase()}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

export default TestComponent;
