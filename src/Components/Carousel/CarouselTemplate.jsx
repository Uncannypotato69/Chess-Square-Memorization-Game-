import React, { useEffect, useRef, useState } from "react";
import useInitialSquares from "./useInitialSquares";
import { useSearchParams } from "react-router-dom";
import useSpanRefs from "./useSpans";

const CarouselTemplate = ({ squareNames }) => {
  const { initialSquares } = useInitialSquares(squareNames);
  const { spans, spansRef } = useSpanRefs(initialSquares);

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
