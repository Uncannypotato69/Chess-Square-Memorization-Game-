import React from "react";

const BoardRect = ({
  squareDimension,
  e,
  i,
  lightColor,
  darkColor,
  rectsRef,
}) => {
  return (
    <rect
      height={squareDimension}
      width={squareDimension}
      x={e.x}
      y={e.y}
      key={`rect-${e.squareName}-${i}`}
      fill={e.white ? lightColor : darkColor}
      data-name={e.squareName}
      ref={(e) => (rectsRef.current[i] = e)}
      className="rects"
    ></rect>
  );
};

export default BoardRect;
