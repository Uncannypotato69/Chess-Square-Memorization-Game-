import React from "react";

import { useCountDown } from "./useCountdown";

const CountdownTimer = () => {
  const initialTime = 90;

  const returnTime = (initialTime) => {
    const totalTime = initialTime * 1000;
    const minutes = Math.floor(totalTime / 60000);
    const seconds = Math.floor((totalTime % 60000) / 1000);
    const milliseconds = Math.floor((totalTime % 1000) / 100);
    return { minutes, seconds, milliseconds };
  };

  const time = useCountDown(returnTime, initialTime);

  return <div>{time}</div>;
};

export default CountdownTimer;
