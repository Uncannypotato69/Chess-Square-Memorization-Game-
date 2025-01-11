import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Board from "../../Components/Board/Board";
import Carousel from "../../Components/Carousel/Carousel";

import { FindSquareContext } from "../../Components/Helpers/Contexts/FindSquareContext";

import useRects from "../../Components/Board/useRects";
import useInitialSquares from "../../Components/Carousel/useInitialSquares";
import useSpans from "../../Components/Carousel/useSpans";
import { squares } from "../../Components/Helpers/squarenames";
import SideCordsToggle from "../../Components/sideCordsToggle";
import CordsToggle from "../../Components/CordsToggle";
import OrientationToggle from "../../Components/Orientation/OrientationToggle";

const FindSquareMenu = () => {
  const squareNames = squares.map((e) => e.squareName);
  const { initialSquares } = useInitialSquares(squareNames);
  const { spans, setSpans, spansRef } = useSpans();
  const { rects, rectRefs } = useRects();
  const [activeRect, setActiveRect] = useState([]);

  useEffect(() => {
    if (spans.length > 0) {
      const activeSqName = spans[0].textContent;
      const rectArr = rects.filter((e) => e.dataset.name == activeSqName);
      const rect = rectArr[0];
      setActiveRect(rect);
      console.log(activeRect);
    }
  });

  //?-------------------------------------
  const [gameDuration, setGameDuration] = useState(30);
  const [sideCordsState, setSideCordsState] = useState(true);
  const [cordsState, setCordsState] = useState(false);
  const [orientation, setOrientation] = useState("asWhite");
  //?-------------------------------------v

  return (
    <FindSquareContext.Provider
      value={{
        squareNames,
        initialSquares,
        spans,
        spansRef,
        rectRefs,
        activeRect,
        setActiveRect,
        setSpans,
        gameDuration,
        setGameDuration,
        rects,
        sideCordsState,
        setSideCordsState,
        cordsState,
        setCordsState,
        orientation,
        setOrientation,
      }}
    >
      <div className="testSection">
        <Outlet />
        <SideCordsToggle />
        <CordsToggle />
        <OrientationToggle />
      </div>
    </FindSquareContext.Provider>
  );
};

export default FindSquareMenu;
