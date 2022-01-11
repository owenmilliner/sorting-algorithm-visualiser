import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SingleVisualisation from './components/SingleVisualisation';
import Summaries from './components/Summaries';
import { DataProvider } from './contexts/DataContext';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <div className='App'>
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Josefin+Slab:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
          </style>
          <Header />
          <Routes>
            <Route path='/' element={<SingleVisualisation />} />
            <Route path='/summaries' element={<Summaries />} />
          </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
