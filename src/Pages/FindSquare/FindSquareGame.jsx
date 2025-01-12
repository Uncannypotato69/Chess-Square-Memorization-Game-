import React, { useContext, useEffect, useState } from "react";

import Board from "../../Components/Board/Board";
import Carousel from "../../Components/Carousel/Carousel";
import { FindSquareContext } from "../../Components/Helpers/Contexts/FindSquareContext";

import { squares } from "../../Components/Helpers/squarenames";
import useInitialSquares from "../../Components/Carousel/useInitialSquares";
import useSpans from "../../Components/Carousel/useSpans";
import useRects from "../../Components/Board/useRects";
import CountdownConfig from "../../Components/Countdown/CountdownConfig";
import CountdownTimer from "../../Components/Countdown/CountdownTimer";

const FindSquareGame = () => {
  const { orientation } = useContext(FindSquareContext);

  return (
    <>
      <Board orientation={orientation} />
    </>
  );
};

export default FindSquareGame;
