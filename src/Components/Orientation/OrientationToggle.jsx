import React, { useContext, useState } from "react";
import { FindSquareContext } from "../Helpers/Contexts/FindSquareContext";

const OrientationToggle = () => {
  const { orientation, setOrientation } = useContext(FindSquareContext);
  const [isRandom, setIsRandom] = useState(false);

  const handleChange = (el) => {
    setIsRandom(false);
    setOrientation(el.value);
  };

  const handleChangeRandom = () => {
    setIsRandom(true);
    const fate = Math.random() < 0.5;
    const fateResult = fate ? "asWhite" : "asBlack";
    setOrientation(fateResult);
  };

  return (
    <form className="CountdownConfig">
      <label htmlFor="ToggleBlack">
        <input
          type="radio"
          name="orientation"
          id="ToggleBlack"
          value={"asBlack"}
          checked={!isRandom && orientation === "asBlack"}
          onChange={(e) => {
            e.preventDefault;
            handleChange(e.target);
          }}
        />
        <span>Black</span>
      </label>

      <label htmlFor="ToggleRandom">
        <input
          type="radio"
          name="orientation"
          id="ToggleRandom"
          value={"asRandom"}
          checked={isRandom}
          onChange={(e) => {
            e.preventDefault;
            handleChangeRandom();
          }}
        />
        <span>Random</span>
      </label>

      <label htmlFor="ToggleWhite">
        <input
          type="radio"
          name="orientation"
          id="ToggleWhite"
          value={"asWhite"}
          checked={!isRandom && orientation === "asWhite"}
          onChange={(e) => {
            e.preventDefault;
            handleChange(e.target);
          }}
        />
        <span>White</span>
      </label>
    </form>
  );
};

export default OrientationToggle;
