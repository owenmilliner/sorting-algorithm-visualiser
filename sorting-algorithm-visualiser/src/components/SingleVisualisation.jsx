import { useContext, useEffect } from 'react';
import { DataContext } from '../contexts/DataContext';
import Chart from './Chart';

const SingleVisualisation = () => {
  const { setDataSet, dataRefresh } = useContext(DataContext);

  useEffect(() => {
    const temp = [];

    for (let i = 0; i < 100; i++) {
      temp.push(Math.floor((Math.random() * (100 - 1) + 1) * 2) / 2);
    }
    setDataSet([...temp]);
  }, [dataRefresh]);

  return <Chart className='chart' />;
};

export default SingleVisualisation;
