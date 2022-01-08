import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SingleVisualisation from './components/SingleVisualisation';
import Summaries from './components/Summaries';
import { useState, useEffect } from 'react';

function App() {
  const [dataSet, setDataSet] = useState([]);
  const [dataRefresh, setDataRefresh] = useState(false);
  const [isSorting, setIsSorting] = useState(false);

  useEffect(() => {
    const temp = [];

    for (let i = 0; i < 100; i++) {
      temp.push(Math.floor((Math.random() * (100 - 1) + 1) * 2) / 2);
    }
    setDataSet([...temp]);
  }, [dataRefresh]);

  return (
    <BrowserRouter>
      <div className='App'>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Josefin+Slab:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
        </style>
        <Header
          dataRefresh={dataRefresh}
          setDataRefresh={setDataRefresh}
          isSorting={isSorting}
        />
        <Routes>
          <Route
            path='/'
            element={
              <SingleVisualisation
                dataSet={dataSet}
                setDataSet={setDataSet}
                isSorting={isSorting}
                setIsSorting={setIsSorting}
              />
            }
          />
          <Route path='/summaries' element={<Summaries />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
