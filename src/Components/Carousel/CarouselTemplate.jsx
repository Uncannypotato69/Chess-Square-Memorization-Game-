import React, { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { FindSquareContext } from "../Helpers/Contexts/FindSquareContext";

const CarouselTemplate = () => {
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
