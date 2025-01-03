import React, { useEffect, useRef, useState } from "react";
import useInitialSquares from "./useInitialSquares";
import { useSearchParams } from "react-router-dom";
import useSpanRefs from "./useSpans";
import { useContext } from "react";
import { FindSquareContext } from "../Helpers/Contexts/FindSquareContext";

const CarouselTemplate = () => {
  const { spans, spansRef, initialSquares } = useContext(FindSquareContext);

  return (
    <div className={`caraousel`}>
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
