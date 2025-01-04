import { useContext } from "react";
import { FindSquareContext } from "../Helpers/Contexts/FindSquareContext";

// Checks whether the clicked square is the same as the targetSquare
const checkClick = (rect, targetSquare, setActiveRect) => {
  console.log(targetSquare);
  rect.dataset.name == targetSquare
    ? setActiveRect(rect)
    : console.log("Clicked the wrong square");
};

export default checkClick;
