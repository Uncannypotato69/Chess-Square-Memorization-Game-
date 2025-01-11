import React, { useContext, useState } from "react";
import { FindSquareContext } from "./Helpers/Contexts/FindSquareContext";

const SideCordsToggle = () => {
  const { sideCordsState, setSideCordsState } = useContext(FindSquareContext);

  return (
    <label htmlFor="SideCordsToggle">
      <input
        type="checkbox"
        id="SideCordsToggle"
        name="SideCordsToggle"
        checked={sideCordsState}
        onChange={() => setSideCordsState(!sideCordsState)}
      />
      <span>toggle me</span>
    </label>
  );
};

export default SideCordsToggle;
