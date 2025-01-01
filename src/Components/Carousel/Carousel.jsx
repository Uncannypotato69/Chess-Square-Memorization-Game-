import React, { useEffect } from "react";
import { squares } from "../Helpers/squarenames";
import useInitialSquares from "./useInitialSquares";
import CarouselTemplate from "./CarouselTemplate";

const Carousel = (type) => {
  const squareNames = squares.map((e) => e.squareName);

  const { initialSquares } = useInitialSquares(squareNames);

  return <CarouselTemplate initialSquares={initialSquares} />;
};

export default Carousel;

//todo Fix the initialization problem with the squares
//* Setup the useRefs for squareNames and squaresRects
//! write the onClick function for the board
//? Connect Caousel and Board
