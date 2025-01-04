import React, { useEffect, useRef, useState } from "react";
import useInitialSquares from "./useInitialSquares";
import { useSearchParams } from "react-router-dom";
import useSpanRefs from "./useSpans";
import { useContext } from "react";
import { FindSquareContext } from "../Helpers/Contexts/FindSquareContext";
import changeText from "./changeText";

const CarouselTemplate = () => {
  const {
    spans,
    spansRef,
    initialSquares,
    activeRect,
    squareNames,
    setInitialSquares,
  } = useContext(FindSquareContext);

  useEffect(() => {
    changeText(squareNames, initialSquares, setInitialSquares);
  }, [activeRect]);

  return (
    <div className={`carousel`}>
      {initialSquares.map((e, i) => {
        return (
          <span
            className={`carousel__span`}
            key={`carouselText${i}`}
            ref={(e) => (spansRef.current[i] = e)}
          >
            {e}
          </span>
        );
      })}
    </div>
  );
};

export default CarouselTemplate;
