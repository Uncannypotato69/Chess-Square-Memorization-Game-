import React, { useEffect, useRef, useState } from "react";
import useInitialSquares from "./useInitialSquares";
import { useSearchParams } from "react-router-dom";
import useSpanRefs from "./useSpans";
import { useContext } from "react";
import { FindSquareContext } from "../Helpers/Contexts/FindSquareContext";
import changeText from "./changeText";
import changeTextContent from "./changeTextContent";

const addStyles = (arr) => {
  let styles = [
    {
      color: "limegreen",
      scale: 2,
      right: "50%",
      transition: "300ms all",
    },
    {
      color: "yellow",
      right: "0%",
      scale: 1,
      transition: "300ms all",
    },
    {
      color: "pink",
      scale: 0,
      right: "-25%",
      transition: "none",
    },
  ];

  arr.map((e, i) => {
    Object.assign(e.style, styles[i]);
    console.log(e);
  });
};

const CarouselTemplate = () => {
  const {
    spans,
    spansRef,
    initialSquares,
    activeRect,
    squareNames,
    hasRendered,
    setHasRendered,
    setInitialSquares,
  } = useContext(FindSquareContext);

  useEffect(() => {
    addStyles(spans);
  });

  useEffect(() => {}, []);

  useEffect(() => {
    changeText(squareNames, initialSquares, setInitialSquares);
    changeTextContent(spans, squareNames);
  }, [activeRect]);

  return (
    <div className={`carousel`}>
      {!hasRendered &&
        initialSquares.map((e, i) => {
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
