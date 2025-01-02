import React, { useEffect, useRef, useState } from "react";

const useRects = () => {
  const [rects, setRects] = useState([]);

  const rectsRef = useRef([]);

  useEffect(() => {
    setRects(rectsRef.current);
    console.log(rectsRef.current);
  });

  return { rects, rectsRef };
};

export default useRects;
