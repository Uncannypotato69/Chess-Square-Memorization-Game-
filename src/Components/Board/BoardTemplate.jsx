import React, { useEffect, useState } from "react";

import BoardRect from "./BoardRect";
import BoardText from "./BoardText";
import useRects from "./useRects";
import { useContext } from "react";
import { FindSquareContext } from "../Helpers/Contexts/FindSquareContext";
import useSetTargetSquare from "./useSetTargetSquare";

const BoardTemplate = ({
  squareDimension,
  sqsWithData,
  lightColor,
  darkColor,
  fontSize,
}) => {
  const { rects, rectsRef, initialSquares, activeRect } =
    useContext(FindSquareContext);
  const { isTargetSquare } = useSetTargetSquare(initialSquares, activeRect);
  // const [isTargetSquare, setisTargetSquare] = useState([]);

  // useEffect(() => {
  //   setisTargetSquare(() => initialSquares[0]);
  // }, [initialSquares]);

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
              targetSquare={isTargetSquare}
              rects={rects}
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
