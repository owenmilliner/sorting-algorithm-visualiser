import { Link } from 'react-router-dom';

const Header = ({ dataRefresh, setDataRefresh, isSorting }) => {
  const handleDataGeneration = () => {
    if (!isSorting) {
      setDataRefresh(!dataRefresh);
      document.getElementById('chart__button').className =
        'chart__header__button--status-enabled';
      for (let i = 1; i <= 100; i++) {
        document.getElementById(`column-${i}`).className =
          'bar--status-inactive';
      }
    }
  };

  return (
    <header className='header'>
      <ul className='header__element header__dataOptions'>
        <li
          className='header__dataOptions__element'
          onClick={() => handleDataGeneration()}
        >
          Generate New Data Set
        </li>
        <Link to='/summaries' className='header__link'>
          <li className='header__dataOptions__element'>Algorithm Summaries</li>
        </Link>
      </ul>
      <Link to='/' className='header__link'>
        <h1 className='header__element header__text'>
          Sorting Algorithm Visualiser
        </h1>
      </Link>
      <ul className='header__element header__sortOptions'>
        <li className='header__sortOptions__element--status-active'>
          Bubble Sort
        </li>
        <li className='header__sortOptions__element--status-inactive'>
          Quick Sort
        </li>
        <li className='header__sortOptions__element--status-inactive'>
          Merge Sort
        </li>
        <li className='header__sortOptions__element--status-inactive'>
          Heap Sort
        </li>
        <li className='header__sortOptions__element--status-inactive'>
          Insertion Sort
        </li>
      </ul>
    </header>
  );
};

export default Header;
