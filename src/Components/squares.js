
const squares = [
  {
      "squareName": "a1",
      "white": false
  },
  {
      "squareName": "a2",
      "white": true
  },
  {
      "squareName": "a3",
      "white": false
  },
  {
      "squareName": "a4",
      "white": true
  },
  {
      "squareName": "a5",
      "white": false
  },
  {
      "squareName": "a6",
      "white": true
  },
  {
      "squareName": "a7",
      "white": false
  },
  {
      "squareName": "a8",
      "white": true
  },
  {
      "squareName": "b1",
      "white": true
  },
  {
      "squareName": "b2",
      "white": false
  },
  {
      "squareName": "b3",
      "white": true
  },
  {
      "squareName": "b4",
      "white": false
  },
  {
      "squareName": "b5",
      "white": true
  },
  {
      "squareName": "b6",
      "white": false
  },
  {
      "squareName": "b7",
      "white": true
  },
  {
      "squareName": "b8",
      "white": false
  },
  {
      "squareName": "c1",
      "white": false
  },
  {
      "squareName": "c2",
      "white": true
  },
  {
      "squareName": "c3",
      "white": false
  },
  {
      "squareName": "c4",
      "white": true
  },
  {
      "squareName": "c5",
      "white": false
  },
  {
      "squareName": "c6",
      "white": true
  },
  {
      "squareName": "c7",
      "white": false
  },
  {
      "squareName": "c8",
      "white": true
  },
  {
      "squareName": "d1",
      "white": true
  },
  {
      "squareName": "d2",
      "white": false
  },
  {
      "squareName": "d3",
      "white": true
  },
  {
      "squareName": "d4",
      "white": false
  },
  {
      "squareName": "d5",
      "white": true
  },
  {
      "squareName": "d6",
      "white": false
  },
  {
      "squareName": "d7",
      "white": true
  },
  {
      "squareName": "d8",
      "white": false
  },
  {
      "squareName": "e1",
      "white": false
  },
  {
      "squareName": "e2",
      "white": true
  },
  {
      "squareName": "e3",
      "white": false
  },
  {
      "squareName": "e4",
      "white": true
  },
  {
      "squareName": "e5",
      "white": false
  },
  {
      "squareName": "e6",
      "white": true
  },
  {
      "squareName": "e7",
      "white": false
  },
  {
      "squareName": "e8",
      "white": true
  },
  {
      "squareName": "f1",
      "white": true
  },
  {
      "squareName": "f2",
      "white": false
  },
  {
      "squareName": "f3",
      "white": true
  },
  {
      "squareName": "f4",
      "white": false
  },
  {
      "squareName": "f5",
      "white": true
  },
  {
      "squareName": "f6",
      "white": false
  },
  {
      "squareName": "f7",
      "white": true
  },
  {
      "squareName": "f8",
      "white": false
  },
  {
      "squareName": "g1",
      "white": false
  },
  {
      "squareName": "g2",
      "white": true
  },
  {
      "squareName": "g3",
      "white": false
  },
  {
      "squareName": "g4",
      "white": true
  },
  {
      "squareName": "g5",
      "white": false
  },
  {
      "squareName": "g6",
      "white": true
  },
  {
      "squareName": "g7",
      "white": false
  },
  {
      "squareName": "g8",
      "white": true
  },
  {
      "squareName": "h1",
      "white": true
  },
  {
      "squareName": "h2",
      "white": false
  },
  {
      "squareName": "h3",
      "white": true
  },
  {
      "squareName": "h4",
      "white": false
  },
  {
      "squareName": "h5",
      "white": true
  },
  {
      "squareName": "h6",
      "white": false
  },
  {
      "squareName": "h7",
      "white": true
  },
  {
      "squareName": "h8",
      "white": false
  }
]


const boardConfig = {
    dimension: 400,
    lightColor: "#fef3c7",
    darkColor: "#fb923c",
    fontSize: 16,
    fontFamily: "monospace"
  };
  
const squareData = (config) => {
    let dimension = config.dimension
    let fontSize = config.fontSize
    let squareDimesion = dimension / 8

     return squares.map((e, i) => {
        let x = i % 8 === 0 ? 0 : (i % 8) * (dimension / 8);
        let xText = i % 8 === 0 ? squareDimesion - (fontSize + 4) : squareDimesion + (i % 8) * (dimension / 8) - (fontSize + 4);
        let y = (dimension - squareDimesion) - Math.floor(i / 8) * squareDimesion;
        let yText = (dimension - squareDimesion) - Math.floor(i / 8) * squareDimesion + 14;

        return {
            ...e,
            squareDimesion,
            x,
            y,
            xText,
            yText,
        }
    })
    
}

const returnSquares = () => {
    return [squareData(boardConfig), boardConfig];
  } 
    
  export default returnSquares
  
