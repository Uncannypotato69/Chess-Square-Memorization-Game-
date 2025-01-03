import React, { useContext, useEffect } from "react";
import useInitialSquares from "./useInitialSquares";
import CarouselTemplate from "./CarouselTemplate";
import { FindSquareContext } from "../Helpers/Contexts/FindSquareContext";

const Carousel = (type) => {
  const { squareNames } = useContext(FindSquareContext);

  return <CarouselTemplate squareNames={squareNames} />;
};

export default Carousel;

//// Create pages and setup ReactRouter　ハーシャウ
////do Use contextAPI to connect carousel and board
//todo write the onClick function for the rects
