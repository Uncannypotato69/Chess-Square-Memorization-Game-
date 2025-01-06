import { pickRandomItem } from "../Utlis/random";

const changeTextContent = (spans, squares) => {

    if(spans.length > 0){
    const popped = spans[0]
    const newSquare = pickRandomItem(squares)
    popped.textContent = `${newSquare}`
    spans.map((e) => console.log(e.textContent))
    }
}

export default changeTextContent;