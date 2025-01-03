import React, { createContext, useContext, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

import "./Styles/modern-normalize.css";
import "./Styles/style.css";
import "./Styles/utils.css";

import FindSquareMenu from "./Pages/FindSquare/FIndSquareMenu";
import Homepage from "./Pages/HomePage/Homepage";
import Carousel from "./Components/Carousel/Carousel";
import FindSquareArena from "./Pages/FindSquare/FIndSquareArena";

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
        path: "/find-square-menu/find-square-arena",
        element: <FindSquareArena />,
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
