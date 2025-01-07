import React, { useEffect, useState } from "react";
import { pickRandomItem } from "../Utlis/random";
import { squares } from "../Helpers/squarenames";
import { useContext } from "react";
import { FindSquareContext } from "../Helpers/Contexts/FindSquareContext";

const useRandomSquare = () => {
  const [randomSquare, setRandomSquare] = useState();
  const { initialSquares } = useContext(FindSquareContext);

  useEffect(() => {
    setRandomSquare(pickRandomItem(squares).squareName);
  });

  return { randomSquare, setRandomSquare };
};

export default useRandomSquare;
