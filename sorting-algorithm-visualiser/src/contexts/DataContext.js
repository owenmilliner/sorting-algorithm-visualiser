import { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [dataSet, setDataSet] = useState([]);
  const [dataRefresh, setDataRefresh] = useState(false);
  const [isSorting, setIsSorting] = useState(false);
  const [currentAlgorithm, setCurrentAlgorithm] = useState('bubble');
  const [currentPage, setCurrentPage] = useState('home');
  return (
    <DataContext.Provider
      value={{
        dataSet,
        setDataSet,
        dataRefresh,
        setDataRefresh,
        isSorting,
        setIsSorting,
        currentAlgorithm,
        setCurrentAlgorithm,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
