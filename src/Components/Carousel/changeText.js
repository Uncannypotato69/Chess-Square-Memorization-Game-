import React from 'react'
import { pickRandomItem } from '../Utlis/random'

const changeText = (squareNames, arr) => {

    const shiftedSquare = arr.shift()
    const randomSquare = pickRandomItem(squareNames)
    arr.push(randomSquare)
    console.log(arr)
  
}

export default changeText