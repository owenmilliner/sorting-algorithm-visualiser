import { useEffect, useState } from 'react';
import Bar from './Bar';
import BubbleSort from '../algorithms/bubble-sort';
import QuickSort from '../algorithms/quick-sort';

const Chart = ({
  dataSet,
  setDataSet,
  isSorting,
  setIsSorting,
  currentAlgorithm,
}) => {
  const [timeElapsed, setTimeElapsed] = useState(0);
  // const [previousTimeElapsed, setPreviousTimeElapsed] = useState(0);
  let key = 0;
  let startTime = 0;

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
            let nodeList = document.querySelectorAll(
              '[class="bar--status-active"]'
            );
            nodeList.forEach((node) => {
              if (/[\d]/.test(node.id)) {
                node.className = 'bar--status-inactive';
              }
            });
          }, i * 10)
        );

        currentColumnOne.className = 'bar--status-active';
        currentColumnTwo.className = 'bar--status-active';

        // Swap Bars
        const temp = tempDataSet[columnOne - 1];
        tempDataSet[columnOne - 1] = tempDataSet[columnTwo - 1];
        tempDataSet[columnTwo - 1] = temp;
        setDataSet([...tempDataSet]);
        // End Swap Bars

        try {
          previousColumnOne.className = 'bar--status-inactive';
          previousColumnTwo.className = 'bar--status-inactive';
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
        document.getElementById(`column-${i}`).className = 'bar--status-active';
      }, 10 * i);
    }
    setIsSorting(false);
    setTimeElapsed(Math.floor((performance.now() - startTime) / 1000));
  };

  return (
    <div className='chart'>
      <div className='chart__header'>
        <button
          id='chart__button'
          className='chart__header__button--status-enabled chart__header__element'
          onClick={() => {
            if (!isSorting) {
              setIsSorting(true);
              startTime = performance.now();
              document.getElementById('chart__button').className =
                'chart__header__button--status-disabled';
              const sortIndexes =
                currentAlgorithm === 'bubble'
                  ? BubbleSort(dataSet)
                  : QuickSort(dataSet); //return array of swaps in order.
              animateSort(sortIndexes);
            } else {
              // console.log(
              //   'Sorry you cannot press this. isSorting is set to: ',
              //   isSorting
              // );
            }
          }}
        >
          Sort
        </button>
        {/* <p className='chart__header__element chart__header__previous '>
          Previous time taken to complete sort:{' '}
          {!isSorting ? `${timeElapsed}s` : null}
        </p> */}
        <p className='chart__header__element chart__header__current'>
          Time taken to complete sort: {!isSorting ? `${timeElapsed}s` : null}
        </p>
      </div>
      <div className='chart__display'>
        {dataSet.map((value) => {
          key++;
          return <Bar value={value} key={key} column={key} />;
        })}
      </div>
    </div>
  );
};

export default Chart;
