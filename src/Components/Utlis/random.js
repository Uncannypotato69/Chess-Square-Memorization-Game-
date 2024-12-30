  
  //! generate random numbers
  export const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;


  //? pick random item from an array
  export const sampleOne = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  };
