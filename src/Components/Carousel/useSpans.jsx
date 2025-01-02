import React from "react";
import { useState, useEffect, useRef } from "react";

const useSpanRefs = (initialSquares) => {
  const [spans, setSpans] = useState([]);

  const spansRef = useRef([]);

  useEffect(() => {
    setSpans(spansRef.current);
    console.log(spans);
  }, [initialSquares]);

  return { spans, spansRef };
};

export default useSpanRefs;
