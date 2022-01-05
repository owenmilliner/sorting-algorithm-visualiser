const BubbleSort = (dataSet) => {
  const testDataSet = [...dataSet];

  console.log(testDataSet);

  for (let i = 0; i < testDataSet.length - 1; i++) {
    for (let j = 0; j < testDataSet.length - 1; j++) {
      if (testDataSet[j] > testDataSet[j + 1]) {
        swap(testDataSet, j, j + 1);
      }
    }
  }

  console.log(testDataSet);
};

const swap = (testDataSet, indexI, indexJ) => {
  let tempNumber = testDataSet[indexI];
  testDataSet[indexI] = testDataSet[indexJ];
  testDataSet[indexJ] = tempNumber;
};

export default BubbleSort;
