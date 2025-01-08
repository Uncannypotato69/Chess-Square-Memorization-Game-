
export const checkClick = (el, activeRect) => {
    if(typeof activeRect != undefined || activeRect.length > 0){
    activeRect.dataset.name == el.dataset.name ? console.log("rightSquare") : console.log("wrong square")
    }
}