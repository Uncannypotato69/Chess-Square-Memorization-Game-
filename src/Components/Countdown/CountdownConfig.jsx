import React, { useContext } from "react";

import { FindSquareContext } from "../Helpers/Contexts/FindSquareContext";

const CountdownConfig = () => {
  const { gameDuration, setGameDuration } = useContext(FindSquareContext);

  const handleChange = (e) => {
    setGameDuration(Number(e.target.value));
  };

  return (
    <form className="CountdownConfig">
      <label htmlFor="15">
        <input
          type="radio"
          name="gameDuration"
          id="15"
          value={15}
          checked={gameDuration === 15}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <span>15</span>
      </label>
      <label htmlFor="30">
        <input
          type="radio"
          name="gameDuration"
          id="30"
          value={30}
          checked={gameDuration === 30}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <span>30</span>
      </label>
      <label htmlFor="60">
        <input
          type="radio"
          name="gameDuration"
          id="60"
          value={60}
          checked={gameDuration === 60}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <span>60</span>
      </label>
      <label htmlFor="120">
        <input
          type="radio"
          name="gameDuration"
          id="120"
          value={120}
          checked={gameDuration === 120}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <span>120</span>
      </label>
    </form>
  );
};

export default CountdownConfig;
