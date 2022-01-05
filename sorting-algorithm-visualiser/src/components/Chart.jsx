import { useEffect, useState } from 'react';
import Bar from './Bar';
import BubbleSort from '../algorithms/bubble-sort';

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

  const animateSort = (swappedItemsInOrder) => {
    swappedItemsInOrder.forEach((item) => {});
    /*
    for each swap in the array
      set timeout - to slow down the animation
        current swap = swap[index]
        document.getElement....(using the column number), change the classname to 'animate' colour change
    */
  };

  const visualiseSort = () => {
    const swapsInOrder = BubbleSort(dataSet); //return array of swaps in order.
    console.log(swapsInOrder);
    // animateSort(swapsInOrder);
  };

  return (
    <div className='ChartParent'>
      <button onClick={() => visualiseSort()}>Sort</button>
      <div className='chart'>
        {dataSet.map((value) => {
          key++;
          return <Bar value={value} key={key} />;
        })}
      </div>
    </div>
  );
};

export default Chart;
