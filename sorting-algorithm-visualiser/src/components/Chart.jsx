import { useEffect, useState } from 'react';
import Bar from './Bar';

const Chart = () => {
  const [dataSet, setDataSet] = useState([]);
  let key = 0;

  useEffect(() => {
    const temp = [];

    for (let i = 0; i < 100; i++) {
      temp.push(Math.floor((Math.random() * (100 - 1) + 1) * 2) / 2);
    }
    setDataSet([...temp]);
  }, []);

  return (
    <div className='chart'>
      {dataSet.map((value) => {
        key++;
        console.log(value);
        return <Bar value={value} key={key} />;
      })}
    </div>
  );
};

export default Chart;
