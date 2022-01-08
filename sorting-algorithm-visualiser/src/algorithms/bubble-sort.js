import swap from './swap';

const BubbleSort = (dataSet) => {
  const tempDataSet = [...dataSet];
  const swappedIndexesInOrder = [];

  for (let i = 0; i < tempDataSet.length - 1; i++) {
    for (let j = 0; j < tempDataSet.length - 1; j++) {
      if (tempDataSet[j] > tempDataSet[j + 1]) {
        swappedIndexesInOrder.push([j + 1, j + 2]);
        swap(tempDataSet, j, j + 1);
      }
    }
  }

  return [...swappedIndexesInOrder];
};

export default BubbleSort;
