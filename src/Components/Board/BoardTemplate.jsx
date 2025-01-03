import React, { useEffect } from "react";

import BoardRect from "./BoardRect";
import BoardText from "./BoardText";
import useRects from "./useRects";
import { useContext } from "react";
import { FindSquareContext } from "../Helpers/Contexts/FindSquareContext";

const BoardTemplate = ({
  squareDimension,
  sqsWithData,
  lightColor,
  darkColor,
  fontSize,
}) => {
  const { rects, rectsRef, initialSquares } = useContext(FindSquareContext);

  // const lightUpSquare = (rec, ini) => {
  //   {
  //     const targetSquare = initialSquares[0];
  //     const targetRect = rects.filter((e) => e.dataset.name == targetSquare);
  //     Object.assign(targetRect[0].style, {
  //       fill: "#BAE94C",
  //     });
  //   }
  // };

  // useEffect(() => {
  //   if (rects.length > 0 && initialSquares.length > 0) {
  //     lightUpSquare(rects, initialSquares);
  //   }
  // }, [rects, initialSquares]);

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
