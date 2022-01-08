const swap = (array, indexI, indexJ) => {
  let tempNumber = array[indexI];
  array[indexI] = array[indexJ];
  array[indexJ] = tempNumber;
};

export default swap;
