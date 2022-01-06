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

  const animateSort = (sortIndexes) => {
    const tempDataSet = [...dataSet];
    const bugFixTimeoutIds = [];

    for (let i = 0; i <= sortIndexes.length - 1; i++) {
      const columnOne = sortIndexes[i][0];
      const columnTwo = sortIndexes[i][1];

      setTimeout(() => {
        let previousColumnOne = document.getElementById(
          `column-${columnOne - 2}`
        );

        let previousColumnTwo = document.getElementById(
          `column-${columnTwo - 2}`
        );

        let currentColumnOne = document.getElementById(
          `column-${i === 0 ? 1 : columnOne}`
        );
        let currentColumnTwo = document.getElementById(
          `column-${i === 0 ? 2 : columnTwo}`
        );

        // Fixes bug where column does not change back after made active.
        bugFixTimeoutIds.push(
          setTimeout(() => {
            let nodeList = document.querySelectorAll('[class="column-active"]');
            nodeList.forEach((node) => {
              if (/[\d]/.test(node.id)) {
                node.className = 'barChild';
              }
            });
          }, i * 20)
        );

        currentColumnOne.className = 'column-active';
        currentColumnTwo.className = 'column-active';

        // Swap Bars
        const temp = tempDataSet[columnOne - 1];
        tempDataSet[columnOne - 1] = tempDataSet[columnTwo - 1];
        tempDataSet[columnTwo - 1] = temp;
        setDataSet([...tempDataSet]);
        // End Swap Bars

        try {
          previousColumnOne.className = 'barChild';
          previousColumnTwo.className = 'barChild';
        } catch (error) {
          // console.log(error);
        }

        if (i === sortIndexes.length - 1) {
          bugFixTimeoutIds.forEach((id) => {
            clearTimeout(id);
          });
          return finishSort();
        }
      }, 10 * i);
    }
  };

  const finishSort = () => {
    for (let i = 1; i <= 100; i++) {
      setTimeout(() => {
        document.getElementById(`column-${i}`).className = 'column-active';
      }, 10 * i);
    }
  };

  return (
    <div className='ChartParent'>
      <div className='buttonClass'>
        <button
          onClick={() => {
            const sortIndexes = BubbleSort(dataSet); //return array of swaps in order.
            animateSort(sortIndexes);
          }}
        >
          Sort
        </button>
      </div>
      <div className='chart'>
        {dataSet.map((value) => {
          key++;
          return <Bar value={value} key={key} column={key} />;
        })}
      </div>
    </div>
  );
};

export default Chart;
