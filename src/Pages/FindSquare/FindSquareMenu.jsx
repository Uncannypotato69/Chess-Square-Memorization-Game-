import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Board from "../../Components/Board/Board";
import Carousel from "../../Components/Carousel/Carousel";
import StartButton from "../../Components/StartButton";
import CountdownConfig from "../../Components/Countdown/CountdownConfig";

import { FindSquareContext } from "../../Components/Helpers/Contexts/FindSquareContext";

import useRects from "../../Components/Board/useRects";
import useInitialSquares from "../../Components/Carousel/useInitialSquares";
import useSpans from "../../Components/Carousel/useSpans";
import { squares } from "../../Components/Helpers/squarenames";
import SideCordsToggle from "../../Components/sideCordsToggle";
import CordsToggle from "../../Components/CordsToggle";
import OrientationToggle from "../../Components/Orientation/OrientationToggle";
import useActiveRect from "../../Components/Board/useActiveRect";

const FindSquareMenu = () => {
  const squareNames = squares.map((e) => e.squareName);
  const { initialSquares } = useInitialSquares(squareNames);
  const { spans, setSpans, spansRef } = useSpans();
  const { rects, rectRefs } = useRects();
  const { activeRect, setActiveRect } = useActiveRect(spans, rects);

  useEffect(() => {
    // console.log(activeRect);
  });

  //?-------------------------------------
  const [gameDuration, setGameDuration] = useState(30);
  const [hasGameStarted, setHasGameStarted] = useState(false);
  const [sideCordsState, setSideCordsState] = useState(true);
  const [cordsState, setCordsState] = useState(false);
  const [orientation, setOrientation] = useState("asWhite");
  //?-------------------------------------

  return (
    <FindSquareContext.Provider
      value={{
        squareNames,
        initialSquares,
        spans,
        rects,
        spansRef,
        rectRefs,
        activeRect,
        gameDuration,
        sideCordsState,
        cordsState,
        orientation,
        setActiveRect,
        setSpans,
        setGameDuration,
        setSideCordsState,
        setCordsState,
        setOrientation,
      }}
    >
      <div className="testSection">
        <Outlet />
        <Carousel />
        <Board orientation={orientation} />
      </div>
    </FindSquareContext.Provider>
  );
};

export default FindSquareMenu;

//todo Fix the react router bug (The toggles are getting re-rendered)
//todo Make components for all the settings left
