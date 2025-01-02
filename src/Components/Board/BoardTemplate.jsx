import React from "react";

import BoardRect from "./BoardRect";
import BoardText from "./BoardText";
import useRects from "./useRects";

const BoardTemplate = ({
  squareDimension,
  sqsWithData,
  lightColor,
  darkColor,
  fontSize,
}) => {
  const { rects, rectsRef } = useRects();

  // 8x8 Grid of rects and texts
  return (
    <svg length="auto" className="board" viewBox="0 0 256 256">
      {sqsWithData.map((e, i) => {
        return (
          <React.Fragment key={`group-${e.squareName}-${i}`}>
            <BoardRect
              squareDimension={squareDimension}
              lightColor={lightColor}
              darkColor={darkColor}
              e={e}
              i={i}
              rectsRef={rectsRef}
            />
            <BoardText
              fontSize={fontSize}
              lightColor={lightColor}
              darkColor={darkColor}
              e={e}
              i={i}
            />
          </React.Fragment>
        );
      })}
    </svg>
  );
};

export default BoardTemplate;
