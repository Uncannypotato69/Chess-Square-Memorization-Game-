import React, { useEffect, useState } from "react";

import Board from "../../Components/Board/Board";
import Carousel from "../../Components/Carousel/Carousel";
import { FindSquareContext } from "../../Components/Helpers/Contexts/FindSquareContext";

import { squares } from "../../Components/Helpers/squarenames";
import useInitialSquares from "../../Components/Carousel/useInitialSquares";
import useSpans from "../../Components/Carousel/useSpans";
import useRects from "../../Components/Board/useRects";

const FindSquareArena = () => {
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
    }
  });

  // useEffect(() => {
  //   console.log(rects);
  // });
  // const { spans, spansRef, setSpans } = useSpanRefs(initialSquares);

  // useEffect(() => {
  //   if (spans.length > 0) {
  //     spans.map((e) => console.log(e));
  //   }
  // });

  return (
    <FindSquareContext.Provider
      value={{
        squareNames,
        initialSquares,
        spansRef,
        rectRefs,
        activeRect,
        setActiveRect,
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
