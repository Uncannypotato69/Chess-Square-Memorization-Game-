import React, { useEffect, useState } from "react";

import Board from "../../Components/Board/Board";
import Carousel from "../../Components/Carousel/Carousel";
import { FindSquareContext } from "../../Components/Helpers/Contexts/FindSquareContext";

import { squares } from "../../Components/Helpers/squarenames";
import useInitialSquares from "../../Components/Carousel/useInitialSquares";
import useSpans from "../../Components/Carousel/useSpans";
import useRects from "../../Components/Board/useRects";
import CountdownConfig from "../../Components/Countdown/CountdownConfig";
import CountdownTimer from "../../Components/Countdown/CountdownTimer";

const FindSquareArena = () => {
  const squareNames = squares.map((e) => e.squareName);
  const { initialSquares } = useInitialSquares(squareNames);
  const { spans, setSpans, spansRef } = useSpans();
  const { rects, rectRefs } = useRects();
  const [activeRect, setActiveRect] = useState([]);

  //?-------------------------------------
  const [gameDuration, setGameDuration] = useState(30);
  //?-------------------------------------

  useEffect(() => {
    if (spans.length > 0) {
      const activeSqName = spans[0].textContent;
      const rectArr = rects.filter((e) => e.dataset.name == activeSqName);
      const rect = rectArr[0];
      setActiveRect(rect);
      console.log(activeRect);
    }
  });

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
      }}
    >
      <>
        {/* <Carousel /> */}
        <Board orientation={"asWhitee"} />
      </>
    </FindSquareContext.Provider>
  );
};

export default FindSquareArena;
