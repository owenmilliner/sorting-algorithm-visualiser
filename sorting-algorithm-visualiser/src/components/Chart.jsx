import { useEffect, useState } from 'react';
import Bar from './Bar';

const Chart = () => {
  const [dataSet, setDataSet] = useState([]);

  useEffect(() => {
    const temp = [];

    for (let i = 0; i < 100; i++) {
      temp.push(Math.floor(Math.random() * (101 - 1) + 1));
    }
    setDataSet([...temp]);
  }, []);

  return (
    <div className='chart'>
      {dataSet.map((value) => {
        return <Bar value={value} />;
      })}
    </div>
  );
};

export default Chart;
