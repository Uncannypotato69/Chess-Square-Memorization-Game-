import React from "react";
import { Link } from "react-router-dom";

const StartButton = () => {
  return (
    <Link
      to={{ pathname: "/find-square-menu/game" }}
      onClick={() => console.log("game started")}
    >
      Start Training
    </Link>
  );
};

export default StartButton;
