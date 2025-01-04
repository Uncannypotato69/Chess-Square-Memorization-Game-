import React, { useContext, useEffect } from "react";
import useInitialSquares from "./useInitialSquares";
import CarouselTemplate from "./CarouselTemplate";
import { FindSquareContext } from "../Helpers/Contexts/FindSquareContext";

const Carousel = (type) => {
  const { squareNames } = useContext(FindSquareContext);

  return <CarouselTemplate squareNames={squareNames} />;
};

export default Carousel;

//// write the onClick function for the rects
//todo make the carousel move!!!!!
// -> Create active states for rect
// -> Create checkActive()
// -> Create checkClick()
//todo Fix the checkClick()
