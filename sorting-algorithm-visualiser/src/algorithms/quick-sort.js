import swap from './swap';

const swappedIndexesInOrder = [];

const QuickSort = (dataSet) => {
  const dataCopy = [...dataSet];
  sortArray(dataCopy, 0, dataCopy.length - 1);
  return swappedIndexesInOrder;
};

const sortArray = (array, startIndex, endIndex) => {
  if (startIndex >= endIndex) return;

  let index = partition(array, startIndex, endIndex);

  sortArray(array, startIndex, index - 1);
  sortArray(array, index + 1, endIndex);
};

const partition = (array, startIndex, endIndex) => {
  let pivotValue = array[endIndex];
  let pivotIndex = startIndex;

  for (let i = startIndex; i < endIndex; i++) {
    if (array[i] < pivotValue) {
      swappedIndexesInOrder.push([i + 1, pivotIndex + 1]);
      swap(array, i, pivotIndex);
      pivotIndex++;
    }
  }
  swappedIndexesInOrder.push([pivotIndex + 1, endIndex + 1]);
  swap(array, pivotIndex, endIndex);
  return pivotIndex;
};

export default QuickSort;
