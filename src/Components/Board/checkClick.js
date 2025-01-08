import { changeText } from "../Carousel/changeText"

export const checkClick = (el, activeRect, spans, squareNames, setActiveRect) => {
    if(typeof activeRect != undefined || activeRect.length > 0){
    activeRect.dataset.name == el.dataset.name ? changeText(spans, squareNames, setActiveRect) : console.log("wrong square")
    }
}