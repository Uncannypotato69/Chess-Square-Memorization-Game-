import { pickRandomItem } from "../Utlis/random"

export const changeText = (spans, squareNames, setSpans) => {
    if(spans.length > 0){
    const newSpansArr = [...spans]
    const span = newSpansArr.shift()
    const randomSquare = pickRandomItem(squareNames)
    span.textContent = randomSquare
    newSpansArr.push(span)
    const newSpans = newSpansArr
    setSpans(newSpans)
    }
}