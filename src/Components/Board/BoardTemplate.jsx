import React, { useEffect, useState } from "react";

import BoardRect from "./BoardRect";
import BoardText from "./BoardText";
import { useContext } from "react";
import { FindSquareContext } from "../Helpers/Contexts/FindSquareContext";
import { changeText } from "../Carousel/changeText";

const BoardTemplate = ({
  squareDimension,
  sqsWithData,
  lightColor,
  darkColor,
  fontSize,
}) => {
  const { rectRefs } = useContext(FindSquareContext);

  // 8x8 Grid of rects and texts
  return (
    <svg length="auto" className="board" viewBox="0 0 400 400">
      {sqsWithData.map((e, i) => {
        return (
          <React.Fragment key={`group-${e.squareName}-${i}`}>
            <BoardRect
              squareDimension={squareDimension}
              lightColor={lightColor}
              darkColor={darkColor}
              e={e}
              i={i}
              rectRefs={rectRefs}
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
