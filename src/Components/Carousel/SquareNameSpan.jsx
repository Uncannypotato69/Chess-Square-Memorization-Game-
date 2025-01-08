import React from "react";

const SquareNameSpan = ({ e, i, spansRef }) => {
  return (
    <span className={`carousel__span`} ref={(el) => (spansRef.current[i] = el)}>
      {e}
    </span>
  );
};

export default SquareNameSpan;
