import React, { useEffect, useRef, useState } from "react";

const SquareCarousel = () => {
  const squareTextRef1 = useRef();
  const squareTextRef2 = useRef();
  const squareTextRef3 = useRef();

  const [isSliding, setIsSliding] = useState(false);

  const doSlideStuff = () => {
    console.log(squareTextRef1.current.className);
    console.log(squareTextRef2.current);
    console.log(squareTextRef3.current);
  };

  useEffect(() => {
    doSlideStuff();
  });

  return (
    <>
      <div className="carousel__container">
        <span
          className={`squareNameText ${isSliding ? "bigToSmall" : ""}`}
          ref={squareTextRef1}
        >
          e5
        </span>
        <span
          className={`squareNameText ${isSliding ? "smallToBig" : ""}`}
          ref={squareTextRef2}
        >
          c8
        </span>
        <span
          className={`squareNameText ${isSliding ? "intoFrame" : ""}`}
          ref={squareTextRef3}
        >
          g2
        </span>
      </div>
      <button
        className="button"
        onClick={() => {
          setIsSliding(!isSliding);
        }}
      >
        button
      </button>
    </>
  );
};

export default SquareCarousel;
