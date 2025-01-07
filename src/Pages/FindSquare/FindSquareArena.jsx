import React, { useEffect, useState } from "react";

import Board from "../../Components/Board/Board";
import Carousel from "../../Components/Carousel/Carousel";
import { FindSquareContext } from "../../Components/Helpers/Contexts/FindSquareContext";

import useRects from "../../Components/Board/useRects";
import useSpanRefs from "../../Components/Carousel/useSpans";
import useInitialSquares from "../../Components/Carousel/useInitialSquares";
import { squares } from "../../Components/Helpers/squarenames";
import useRandomSquare from "../../Components/Carousel/useRandomSquare";

const FindSquareArena = () => {
  const squareNames = squares.map((e) => e.squareName);
  const { initialSquares, setInitialSquares } = useInitialSquares(squareNames);
  // const { randomSquare, setRandomSquare } = useRandomSquare(squareNames);
  const { rects, rectsRef } = useRects();
  const { spans, spansRef, setSpans } = useSpanRefs(initialSquares);
  const [activeRect, setActiveRect] = useState([]);

  useEffect(() => {
    if (spans.length > 0) {
      spans.map((e) => console.log(e));
    }
  });

  return (
    <FindSquareContext.Provider
      value={{
        rects,
        rectsRef,
        spans,
        spansRef,
        squareNames,
        initialSquares,
        activeRect,
        setActiveRect,
        setInitialSquares,
        setSpans,
      }}
    >
      <>
        <Carousel />
        <Board orientation={"asWhite"} />
      </>
    </FindSquareContext.Provider>
  );
};

export default FindSquareArena;
