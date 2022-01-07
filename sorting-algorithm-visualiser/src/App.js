import './App.css';
import Chart from './components/Chart';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Josefin+Slab:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
      </style>
      <Header />
      <Chart className='chart' />
    </div>
  );
}

export default App;
