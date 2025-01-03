import React, { useEffect, useRef, useState } from "react";

const useRects = () => {
  const [rects, setRects] = useState([]);

  const rectsRef = useRef([]);

  useEffect(() => {
    setRects(rectsRef.current);
  }, [rects]);

  return { rects, rectsRef };
};

export default useRects;
