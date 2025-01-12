
const handleRectClick = (el, activeRect) => {
    activeRect.dataset.name == el.target.dataset.name
          ? console.log("rightSquare")
          : console.log("wrongsquare");
}

export default handleRectClick