import React, { useEffect, useRef, useState } from "react";

const useSpans = () => {
  const [spans, setSpans] = useState([]);

  const spansRef = useRef([]);

  useEffect(() => {
    setSpans(spansRef.current);
  }, []);

  return { spans, setSpans, spansRef };
};

export default useSpans;
