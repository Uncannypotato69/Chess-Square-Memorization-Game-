import React, { useState } from "react";

import classes from "./TestComponent.module.css";

import returnSquares from "./squares";
import { Squares2X2Icon } from "@heroicons/react/16/solid";

const TestComponent = () => {
  const [boardConfig, setBoardConfig] = useState({
    dimension: 500,
    lightColor: "#ede9fe",
    DarkColor: "#8b5cf6",
    fontSize: 14,
  });

  const sqaures = returnSquares();
  console.log(sqaures);

  return (
    <svg width={400} height={400}>
      {sqaures.map((e, i) => {
        let row = i + 1;

        let x = i % 8 === 0 ? 0 : (i % 8) * (400 / 8);
        let xText = i % 8 === 0 ? 50 - 18 : 50 + (i % 8) * (400 / 8) - 18;
        let y = 350 - Math.floor(i / 8) * 50;
        let yText = 350 - Math.floor(i / 8) * 50 + 14;
        console.log(yText);

        return (
          <>
            <rect
              height={400 / 8}
              width={400 / 8}
              x={x}
              y={y}
              key={i + `${e.squareName}`}
              fill={e.white ? "#ede9fe" : "#8b5cf6"}
              name={e.squareName}
            ></rect>
            <text
              fontFamily="monospace"
              fontSize={14}
              x={xText}
              y={yText}
              fill={e.white ? "#8b5cf6" : "#ede9fe"}
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
