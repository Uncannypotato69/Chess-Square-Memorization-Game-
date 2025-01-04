import { useState, useEffect } from 'react';

// sets the first item from the initialSquares array as the targetSquare

import React from 'react'

const useSetTargetSquare = (initialSquares, activeRect) => {

  const [isTargetSquare, setisTargetSquare] = useState([]);

  useEffect(() => {
    setisTargetSquare(() => initialSquares[0]);
  }, [initialSquares, activeRect]);
  
  return {isTargetSquare}
 
}

export default useSetTargetSquare;