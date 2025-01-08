import React, { useEffect, useState } from "react";
import { pickRandomItem } from "../Utlis/random";

const useInitialSquares = (squareNames) => {
  const [initialSquares, setInitialSquares] = useState([]);

  useEffect(() => {
    const inisqz = Array.from({ length: 3 }, () => pickRandomItem(squareNames));
    setInitialSquares(inisqz);
  }, []);

  return { initialSquares };
};

export default useInitialSquares;
