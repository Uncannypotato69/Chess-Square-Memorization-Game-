import React from "react";

import classes from "./TestComponent.module.css";

import returnSquares from "./squares";
import { Squares2X2Icon } from "@heroicons/react/16/solid";

const TestComponent = () => {
  const sqaures = returnSquares();

  return (
    <svg width={400} height={400}>
      {sqaures.map((e, i) => {
        return (
          <rect
            height={400 / 64}
            width={400 / 64}
            x={i * (400 / 64)}
            y={(64 - (i + 1)) * (400 / 64)}
            key={i + `${e.squareName}`}
            fill={e.white ? "white" : "limegreen"}
            name={e.squareName}
          ></rect>
        );
      })}
    </svg>
  );
};

export default TestComponent;
