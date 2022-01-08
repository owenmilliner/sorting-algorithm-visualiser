import Chart from './Chart';

const SingleVisualisation = ({
  dataSet,
  setDataSet,
  isSorting,
  setIsSorting,
  currentAlgorithm,
}) => {
  return (
    <Chart
      className='chart'
      dataSet={dataSet}
      setDataSet={setDataSet}
      isSorting={isSorting}
      setIsSorting={setIsSorting}
      currentAlgorithm={currentAlgorithm}
    />
  );
};

export default SingleVisualisation;
