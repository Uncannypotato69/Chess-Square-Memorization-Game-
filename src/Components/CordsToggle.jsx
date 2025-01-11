import React, { useContext, useState } from "react";
import { FindSquareContext } from "./Helpers/Contexts/FindSquareContext";

const CordsToggle = () => {
  const { cordsState, setCordsState } = useContext(FindSquareContext);

  return (
    <label htmlFor="CordsToggle">
      <input
        type="checkbox"
        id="CordsToggle"
        name="CordsToggle"
        checked={cordsState}
        onChange={() => setCordsState(!cordsState)}
      />
      <span>Show coordinates</span>
    </label>
  );
};

export default CordsToggle;
