import { useContext } from "react";
import { FindSquareContext } from "../Helpers/Contexts/FindSquareContext";

// Checks whether the clicked square is the same as the targetSquare
const checkClick = (rect, targetSquare) => {
  const { setActiveSquare } = useContext(FindSquareContext);

  console.log(targetSquare);
  rect.dataset.name == targetSquare
    ? setActiveSquare(rect)
    : console.log("Clicked the wrong square");
};

export default checkClick;
