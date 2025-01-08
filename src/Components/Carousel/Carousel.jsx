import React, { useContext, useEffect } from "react";
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

//todo Figure out what's happening with changeText and changeTextContent
//todo Make the carousel move (I mean, really move this time)
//todo Figure out the logic for score
