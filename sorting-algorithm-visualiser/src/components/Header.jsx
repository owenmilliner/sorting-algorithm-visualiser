import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <ul className='header__element header__dataOptions'>
        <li className='header__dataOptions__element'>Generate New Array</li>
        <Link to='/comparison' className='header__link'>
          <li className='header__dataOptions__element'>
            Algorithm Comparisons
          </li>
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
