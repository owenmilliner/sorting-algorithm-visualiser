const BubbleSort = (dataSet) => {
  const testDataSet = [...dataSet];
  const itemIndexesInOrder = [];
  const swappedIndexesInOrder = [];

  for (let i = 0; i < testDataSet.length - 1; i++) {
    for (let j = 0; j < testDataSet.length - 1; j++) {
      itemIndexesInOrder.push([j, j + 1]);
      if (testDataSet[j] > testDataSet[j + 1]) {
        swappedIndexesInOrder.push([j, j + 1]);
        swap(testDataSet, j, j + 1);
      }
    }
  }

  return {
    comparisons: [...itemIndexesInOrder],
    swaps: [...swappedIndexesInOrder],
  };
};

const swap = (testDataSet, indexI, indexJ) => {
  let tempNumber = testDataSet[indexI];
  testDataSet[indexI] = testDataSet[indexJ];
  testDataSet[indexJ] = tempNumber;
};

export default BubbleSort;
