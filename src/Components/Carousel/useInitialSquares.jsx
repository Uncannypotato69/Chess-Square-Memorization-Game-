import React, { useState, useEffect } from "react";
import { pickRandomItem } from "../Utlis/random";
import changeText from "./changeText";

const useInitialSquares = (squareNames) => {
  const [initialSquares, setInitialSquares] = useState();

  useEffect(() => {
    const initialSquares = Array.from({ length: 3 }, () =>
      pickRandomItem(squareNames)
    );
    setInitialSquares(initialSquares);
  }, []);

  return { initialSquares };
};

export default useInitialSquares;
