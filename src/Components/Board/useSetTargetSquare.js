import { useState, useEffect } from 'react';

// sets the first item from the initialSquares array as the targetSquare

import React from 'react'

const useSetTargetSquare = (activeRect, spans) => {

  const [isTargetSquare, setisTargetSquare] = useState([]);

  useEffect(() => {
    spans.length > 0 && setisTargetSquare(() => spans[0].textContent);
    console.log(activeRect)
  }, [spans, activeRect]);
  
  return {isTargetSquare}
 
}

export default useSetTargetSquare;