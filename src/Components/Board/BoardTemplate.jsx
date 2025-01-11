import React, { useEffect, useState } from "react";
import classes from "../TestComponent.module.css";

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
  filesWithData,
  ranksWithData,
}) => {
  const { rectRefs, sideCordsState, cordsState } =
    useContext(FindSquareContext);

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
            {cordsState && (
              <BoardText
                fontSize={fontSize}
                lightColor={lightColor}
                darkColor={darkColor}
                e={e}
                i={i}
              />
            )}
          </React.Fragment>
        );
      })}
      {sideCordsState &&
        cordsState === false &&
        ranksWithData.map((e, i) => {
          return (
            <text
              fontFamily={"monospace"}
              fontSize={fontSize}
              x={e.x}
              y={e.y}
              key={`text-${e.rankName}-${i}`}
              fill={e.white ? lightColor : darkColor}
              className={`${classes.svg__text} unselectable`}
            >
              {e.rankName}
            </text>
          );
        })}
      {sideCordsState &&
        cordsState === false &&
        filesWithData.map((e, i) => {
          return (
            <text
              fontFamily={"monospace"}
              fontSize={fontSize}
              x={e.x}
              y={e.y}
              key={`text-${e.fileName}-${i}`}
              fill={e.white ? lightColor : darkColor}
              strokeWidth={10}
              className={`${classes.svg__text} unselectable`}
            >
              {e.fileName}
            </text>
          );
        })}
    </svg>
  );
};

export default BoardTemplate;
