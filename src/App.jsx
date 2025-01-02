import React, { createContext, useContext, useEffect, useState } from "react";

import { createRoot } from "react-dom/client";

import "./Styles/modern-normalize.css";
import "./Styles/style.css";
import "./Styles/utils.css";

import Board from "./Components/Board/Board";
import SquareCarousel from "./Components/SquareCarousel";

import Carousel from "./Components/Carousel/Carousel";

import squareData from "./Components/Helpers/squareData";

const domNode = document.querySelector("#root");
const root = createRoot(domNode);

squareData();

const App = () => {
  const [squares, setsquares] = useState([]);

  return (
    <div className="testSection">
      <Carousel />
      <Board orientation="asWhite" type="findSquare" />
    </div>
  );
};

root.render(<App />);
