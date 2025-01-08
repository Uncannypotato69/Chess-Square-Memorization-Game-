import { pickRandomItem } from "../Utlis/random"

export const changeText = (spans, setSpans, squareNames) => {
    if(typeof spans != undefined){
    const randomSquare = pickRandomItem(squareNames)
    console.log(spans)
    }
}