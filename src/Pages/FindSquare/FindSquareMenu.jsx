import React from "react";
import { Outlet } from "react-router-dom";

import Board from "../../Components/Board/Board";
import Carousel from "../../Components/Carousel/Carousel";

const FindSquareMenu = () => {
  return (
    <div className="testSection">
      <Outlet />
    </div>
  );
};

export default FindSquareMenu;
