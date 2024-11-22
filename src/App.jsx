import React from "react";

import { createRoot } from "react-dom/client";

import "./Styles/modern-normalize.css";
import "./Styles/style.css";
import "./Styles/utils.css";

import TestComponent from "./Components/TestComponent";

const domNode = document.querySelector("#root");
const root = createRoot(domNode);

export const App = () => {
  return <TestComponent />;
};

root.render(<App />);
