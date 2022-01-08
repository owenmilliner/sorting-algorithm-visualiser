import { Link } from 'react-router-dom';

const Header = ({
  dataRefresh,
  setDataRefresh,
  isSorting,
  setCurrentAlgorithm,
}) => {
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

  const handleAlgorithmSelection = (algorithm) => {
    setCurrentAlgorithm(algorithm);
    document.getElementsByClassName(
      'header__sortOptions__element--status-active'
    )[0].className = 'header__sortOptions__element--status-inactive';
    document.getElementById(`algorithm__${algorithm}`).className =
      'header__sortOptions__element--status-active';
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
        <li
          id='algorithm__bubble'
          className='header__sortOptions__element--status-active'
          onClick={() => handleAlgorithmSelection('bubble')}
        >
          Bubble Sort
        </li>
        <li
          id='algorithm__quick'
          className='header__sortOptions__element--status-inactive'
          onClick={() => handleAlgorithmSelection('quick')}
        >
          Quick Sort
        </li>
        <li
          id='algorithm__merge'
          className='header__sortOptions__element--status-inactive'
          onClick={() => handleAlgorithmSelection('merge')}
        >
          Merge Sort
        </li>
        <li
          id='algorithm__heap'
          className='header__sortOptions__element--status-inactive'
          onClick={() => handleAlgorithmSelection('heap')}
        >
          Heap Sort
        </li>
        <li
          id='algorithm__insertion'
          className='header__sortOptions__element--status-inactive'
          onClick={() => handleAlgorithmSelection('insertion')}
        >
          Insertion Sort
        </li>
      </ul>
    </header>
  );
};

export default Header;
