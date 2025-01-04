import React, { useState, useEffect } from "react";
import { pickRandomItem } from "../Utlis/random";
import changeText from "./changeText";
import { useContext } from "react";
import { FindSquareContext } from "../Helpers/Contexts/FindSquareContext";

const useInitialSquares = (squareNames) => {
  const [initialSquares, setInitialSquares] = useState([]);

  useEffect(() => {
    const initialSquares = Array.from({ length: 3 }, () =>
      pickRandomItem(squareNames)
    );
    setInitialSquares(initialSquares);
    console.log(initialSquares);
  }, []);

  return { initialSquares, setInitialSquares };
};

export default useInitialSquares;
