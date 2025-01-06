import React from 'react'
import { pickRandomItem } from '../Utlis/random'

const changeText = (squareNames, initialSquares, setInitialSquares) => {

    if (initialSquares.length > 0){
        const shiftedSquare = initialSquares.shift()
        const randomSquare = pickRandomItem(squareNames)
        initialSquares.push(randomSquare)
        const updatedSquares = initialSquares;
    }

  
}

export default changeText