import React, { useContext, useEffect, useRef, useState } from "react";

import classes from "./SquareCarousel.module.css";
import { random } from "./Utlis/random.js";
import { SquareContext } from "../App";
import { squares } from "./Helpers/squarenames.js";

const SquareCarousel = () => {
  const coordinatesRef = useRef([]);

  const [isclicked, setIsClicked] = useState(0);
  const [coordinates, setCoordinates] = useState([]);

  const squarenames = squares.map((e, i) => e["squareName"]);
  const [squareRects, setsquareRects] = useContext(SquareContext);

  useEffect(() => {
    console.log(squareRects);
  }, [squareRects]);

  useEffect(() => {
    setCoordinates(() => [...coordinatesRef.current]);
    addStyles([...coordinatesRef.current]);
    addInitialSquares([...coordinatesRef.current]);
  }, []);

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
    });
  };

  const addInitialSquares = (arr) => {
    const initialSquares = Array.from(
      { length: 3 },
      () => squarenames[random(0, 64)]
    );
    arr.map((e, i) => {
      e.textContent = initialSquares[i];
    });
  };

  useEffect(() => {
    if (isclicked > 0) {
      let newCoordinates = [...coordinates];
      let shiftedItem = newCoordinates.shift();
      newCoordinates.push(shiftedItem);
      newCoordinates.map((e, i) => console.log(newCoordinates[i]));
      addStyles(newCoordinates);
      setCoordinates(newCoordinates);
    }
  }, [isclicked]);

  return (
    <>
      <div className={`${classes.carousel}`}>
        {Array.from({ length: 3 }).map((e, i) => {
          return (
            <span
              className={`${classes.carousel__coordinate}`}
              ref={(e) => {
                coordinatesRef.current[i] = e;
              }}
              coordinate={`sq${i + 1}`}
            >
              {`a${i + 1}`}
            </span>
          );
        })}
        <button
          onClick={() => {
            setIsClicked(isclicked + 1);
          }}
        >
          button
        </button>
      </div>
    </>
  );
};

export default SquareCarousel;
