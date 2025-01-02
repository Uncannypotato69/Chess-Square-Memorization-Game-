import React, { useEffect } from "react";
import { squares } from "../Helpers/squarenames";
import useInitialSquares from "./useInitialSquares";
import CarouselTemplate from "./CarouselTemplate";

const Carousel = (type) => {
  const squareNames = squares.map((e) => e.squareName);

  return <CarouselTemplate squareNames={squareNames} />;
};

export default Carousel;

//todo Create pages and setup ReactRouter　ハーシャウ
//todo Use contextAPI to connect carousel and board
//! write the onClick function for the rects
