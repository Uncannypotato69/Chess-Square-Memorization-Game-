import React from 'react'
import { pickRandomItem } from '../Utlis/random'

const changeText = (squareNames, initialSquares, setInitialSquares, spans, setSpans) => {

    if (initialSquares.length > 0){
        // const shiftedSquare = initialSquares.shift()
        // const randomSquare = pickRandomItem(squareNames)
        // initialSquares.push(randomSquare)
        // const updatedSquares = initialSquares;
        // setInitialSquares(updatedSquares)
        // console.log(updatedSquares)
        // spans[0].textContent = pickRandomItem(squareNames)
        const shiftedSpan = spans.shift()
        const randomSquare = pickRandomItem(squareNames)
        shiftedSpan.textContent = pickRandomItem(squareNames)
        spans.push(shiftedSpan)
        const updatedSpans = spans;
        setSpans(updatedSpans)
        console.log(updatedSpans)
    }

  
}

export default changeText