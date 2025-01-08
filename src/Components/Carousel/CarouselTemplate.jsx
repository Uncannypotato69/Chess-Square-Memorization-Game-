import React, { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { FindSquareContext } from "../Helpers/Contexts/FindSquareContext";
import SquareNameSpan from "./SquareNameSpan";
import { changeText } from "./changeText";

const CarouselTemplate = () => {
  const { initialSquares, spansRef, spans, squareNames } =
    useContext(FindSquareContext);

  return (
    <div className={`carousel`}>
      {initialSquares.map((e, i) => {
        return (
          <SquareNameSpan
            className={`carousel__span`}
            key={`carouselText-${i}-${e}-${Date.now()}`}
            spansRef={spansRef}
            e={e}
            i={i}
          />
        );
      })}
    </div>
  );
};

export default CarouselTemplate;

// const addStyles = (arr) => {
//   let styles = [
//     {
//       color: "limegreen",
//       scale: 2,
//       right: "50%",
//       transition: "300ms all",
//     },
//     {
//       color: "yellow",
//       right: "0%",
//       scale: 1,
//       transition: "300ms all",
//     },
//     {
//       color: "pink",
//       scale: 0,
//       right: "-25%",
//       transition: "none",
//     },
//   ];

//   arr.map((e, i) => {
//     Object.assign(e.style, styles[i]);
//   });
// };
