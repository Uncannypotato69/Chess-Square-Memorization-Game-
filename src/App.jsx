import React, { createContext, useContext, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

import "./Styles/modern-normalize.css";
import "./Styles/style.css";
import "./Styles/utils.css";

import FindSquareMenu from "./Pages/FindSquare/FindSquareMenu";
import Homepage from "./Pages/HomePage/Homepage";
import Carousel from "./Components/Carousel/Carousel";
import FindSquareGame from "./Pages/FindSquare/FindSquareGame";
import CountdownTimer from "./Components/Countdown/CountdownTimer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: `/find-square-menu`,
    element: <FindSquareMenu />,
    children: [
      {
        path: "/find-square-menu/game", // This matches the same `/find-square-menu` route
        element: <CountdownTimer />,
      },
    ],
  },
]);

const domNode = document.querySelector("#root");
const root = createRoot(domNode);

const App = () => {
  return <RouterProvider router={router} />;
};

root.render(<App />);
