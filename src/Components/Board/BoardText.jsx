import React from "react";

import classes from "../TestComponent.module.css";

const BoardText = ({ fontSize, e, i, darkColor, lightColor }) => {
  return (
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
  );
};

export default BoardText;
