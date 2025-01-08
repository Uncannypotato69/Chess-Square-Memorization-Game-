import React, { useEffect, useState } from "react";

import Board from "../../Components/Board/Board";
import Carousel from "../../Components/Carousel/Carousel";
import { FindSquareContext } from "../../Components/Helpers/Contexts/FindSquareContext";

import { squares } from "../../Components/Helpers/squarenames";

const FindSquareArena = () => {
  const squareNames = squares.map((e) => e.squareName);
  // const { initialSquares, setInitialSquares } = useInitialSquares(squareNames);
  // const { rects, rectsRef } = useRects();
  // const { spans, spansRef, setSpans } = useSpanRefs(initialSquares);
  // const [activeRect, setActiveRect] = useState([]);

  // useEffect(() => {
  //   if (spans.length > 0) {
  //     spans.map((e) => console.log(e));
  //   }
  // });

  return (
    <FindSquareContext.Provider value={{}}>
      <>
        <Board orientation={"asWhite"} />
      </>
    </FindSquareContext.Provider>
  );
};

export default FindSquareArena;
