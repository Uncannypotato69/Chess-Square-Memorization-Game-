import React, { createContext, useContext, useEffect, useState } from "react";

import { createRoot } from "react-dom/client";

import "./Styles/modern-normalize.css";
import "./Styles/style.css";
import "./Styles/utils.css";

import Board from "./Components/Board/Board";
import SquareCarousel from "./Components/SquareCarousel";

import squareData from "./Components/Helpers/squareData";

export const SquareContext = createContext([]);

const domNode = document.querySelector("#root");
const root = createRoot(domNode);

squareData();

const App = () => {
  const [squares, setsquares] = useState([]);

  return (
    <div className="testSection">
      <SquareContext.Provider value={[squares, setsquares]}>
        {/* <TestComponent /> */}
        <Board orientation="asWhite" type="findSquare" />
      </SquareContext.Provider>
    </div>
  );
};

root.render(<App />);
