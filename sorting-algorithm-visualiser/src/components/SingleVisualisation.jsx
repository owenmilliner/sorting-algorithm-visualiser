import Chart from './Chart';

const SingleVisualisation = ({
  dataSet,
  setDataSet,
  isSorting,
  setIsSorting,
}) => {
  return (
    <Chart
      className='chart'
      dataSet={dataSet}
      setDataSet={setDataSet}
      isSorting={isSorting}
      setIsSorting={setIsSorting}
    />
  );
};

export default SingleVisualisation;
