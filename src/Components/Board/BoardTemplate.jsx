import React from "react";

import classes from "../TestComponent.module.css";

const BoardTemplate = ({
  squareDimension,
  sqsWithData,
  lightColor,
  darkColor,
  fontSize,
}) => {
  // 8x8 Grid of rects and texts
  return (
    <svg length="auto" className="board" viewBox="0 0 256 256">
      {sqsWithData.map((e, i) => {
        return (
          <React.Fragment key={`group-${e.squareName}-${i}`}>
            <rect
              height={squareDimension}
              width={squareDimension}
              x={e.x}
              y={e.y}
              key={`rect-${e.squareName}-${i}`}
              fill={e.white ? lightColor : darkColor}
              data-name={e.squareName}
              className="rects"
            ></rect>
            <text
              fontFamily={"monospace"}
              fontSize={fontSize}
              x={e.xText}
              y={e.yText}
              key={`text-${e.squareName}-${i}`}
              fill={e.white ? darkColor : lightColor}
              className={`${classes.svg__text} unselectable`}
            >
              {e.squareName.toUpperCase()}
            </text>
          </React.Fragment>
        );
      })}
    </svg>
  );
};

export default BoardTemplate;
