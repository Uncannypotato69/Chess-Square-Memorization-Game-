import { useState, useEffect } from 'react';

const useActiveRect = (spans, rects) => {
  const [activeRect, setActiveRect] = useState([]);

  useEffect(() => {
    if (spans.length > 0) {
      const activeSqName = spans[0].textContent;
      const rectArr = rects.filter((e) => e.dataset.name === activeSqName);
      const rect = rectArr[0];
      console.log(activeRect)
      setActiveRect(rect);
    }
  }, [spans, rects, activeRect]); // Added dependency array

  return {activeRect, setActiveRect};
};

export default useActiveRect;