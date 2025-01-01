import React, { useEffect } from "react";

const CarouselTemplate = ({ initialSquares }) => {
  return (
    <div className={`caraousel`}>
      {initialSquares.map((e, i) => {
        return (
          <span className={`carousel__span`} key={`carouselText${i}`}>
            {e}
          </span>
        );
      })}
    </div>
  );
};

export default CarouselTemplate;
