import React from "react";

const SquareNameSpan = ({ e, i, spansRef }) => {
  return (
    <span
      className={`carousel__span`}
      key={`carouselText${i}`}
      ref={(e) => (spansRef.current[i] = e)}
    >
      {e}
    </span>
  );
};

export default SquareNameSpan;
