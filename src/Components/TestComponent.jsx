import React, { useEffect, useRef, useState, useContext } from "react";

import classes from "./TestComponent.module.css";

import returnSquares from "./squares";
import { Squares2X2Icon } from "@heroicons/react/16/solid";

import { SquareContext } from "../App";

const TestComponent = () => {
  const data = returnSquares();
  const squareData = data[0];
  const boardConfig = data[1];

  const squaresRef = useRef([]);

  const [squares, setSquares] = useContext(SquareContext);
  useEffect(() => {
    setSquares(() => [...squaresRef.current]);
  }, []);

  //! Create pick-at-random-system and do other stuff

  return (
    <svg width={boardConfig.dimension} height={boardConfig.dimension}>
      {squareData.map((e, i) => {
        return (
          <>
            <rect
              height={e.squareDimesion}
              width={e.squareDimesion}
              x={e.x}
              y={e.y}
              key={i + `${e.squareName}`}
              fill={e.white ? boardConfig.lightColor : boardConfig.darkColor}
              data-name={e.squareName}
              ref={(el) => (squaresRef.current[i] = el)}
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
          </>
        );
      })}
    </svg>
  );
};

export default TestComponent;
