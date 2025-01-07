import React from "react";
import { useState, useEffect, useRef } from "react";

const useSpanRefs = (initialSquares) => {
  const [spans, setSpans] = useState([]);

  const spansRef = useRef([]);

  useEffect(() => {
    setSpans(spansRef.current);
  }, [initialSquares]);

  return { spans, spansRef, setSpans };
};

export default useSpanRefs;
