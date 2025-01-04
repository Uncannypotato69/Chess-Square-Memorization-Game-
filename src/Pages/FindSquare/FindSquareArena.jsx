import React, { useEffect, useState } from "react";

import Board from "../../Components/Board/Board";
import Carousel from "../../Components/Carousel/Carousel";
import { FindSquareContext } from "../../Components/Helpers/Contexts/FindSquareContext";

import useRects from "../../Components/Board/useRects";
import useSpanRefs from "../../Components/Carousel/useSpans";
import useInitialSquares from "../../Components/Carousel/useInitialSquares";
import { squares } from "../../Components/Helpers/squarenames";

const FindSquareArena = () => {
  const squareNames = squares.map((e) => e.squareName);
  const { initialSquares, setInitialSquares } = useInitialSquares(squareNames);
  const { rects, rectsRef } = useRects();
  const { spans, spansRef } = useSpanRefs(initialSquares);
  const [activeRect, setActiveRect] = useState([]);

  useEffect(() => {
    console.log(initialSquares);
    console.log(activeRect);
  }, [activeRect]);

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
