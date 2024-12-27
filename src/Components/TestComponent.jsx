import React, { useEffect, useRef, useState } from "react";

import classes from "./TestComponent.module.css";

import returnSquares from "./squares";
import { Squares2X2Icon } from "@heroicons/react/16/solid";

const TestComponent = () => {
  const data = returnSquares();
  const squares = data[0];
  const boardConfig = data[1];

  const squaresRef = useRef([]);

  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  // const highlighter = setInterval(() => {
  //   let randomSquare = random(0, 64);
  //   if (typeof squaresRef.current[randomSquare].children[0] == undefined) {
  //     console.log(squaresRef.current[randomSquare].children[0]);
  //   }
  //   squaresRef.current[randomSquare].children[0].style.fill = "limegreen";
  //   squaresRef.current[randomSquare].children[1].style.fill = "white";
  // }, 1000);

  useEffect(() => {
    // let randomSquare = random(-1, 64);
    // squaresRef.current[randomSquare].children[0].style.fill = "limegreen";
    // squaresRef.current[randomSquare].children[1].style.fill = "white";
    // highlighter;
  }, []);

  //! Create pick-at-random-system and do other stuff

  return (
    <svg width={boardConfig.dimension} height={boardConfig.dimension}>
      {squares.map((e, i) => {
        return (
          <g
            ref={(el) => (squaresRef.current[i] = el)}
            squarecoordinates={e.squareName}
          >
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
