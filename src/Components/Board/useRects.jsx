import React, { useEffect, useRef, useState } from "react";

const useRects = () => {
  const [rects, setRects] = useState([]);

  const rectRefs = useRef([]);

  useEffect(() => {
    setRects(rectRefs.current);
  }, [rects]);

  return { rects, rectRefs };
};

export default useRects;
