import React, { useContext } from "react";

import { useCountDown } from "./useCountdown";

import { FindSquareContext } from "../Helpers/Contexts/FindSquareContext";

const CountdownTimer = () => {
  const { gameDuration } = useContext(FindSquareContext);

  const returnTime = (gameDuration) => {
    const totalTime = gameDuration * 1000;
    const minutes = Math.floor(totalTime / 60000);
    const seconds = Math.floor((totalTime % 60000) / 1000);
    const milliseconds = Math.floor((totalTime % 1000) / 100);
    return { minutes, seconds, milliseconds };
  };

  const time = useCountDown(returnTime, gameDuration);

  return <div>{time}</div>;
};

export default CountdownTimer;
