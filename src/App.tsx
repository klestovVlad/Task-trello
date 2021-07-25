import { useState, useEffect} from 'react';
import Main from './components/main/main';
import dataContext, { data } from './context/data'

const App:React.FC = () => {
  const [dataset, setDataSet] = useState(data)


  useEffect(() => {
    function chekData() {
      const isTherelocalData = localStorage.listData !== undefined
      if (isTherelocalData) {
        setDataSet(JSON.parse(localStorage.listData))
      } 
    };
    chekData()
  }, []);
  
  return(
    <dataContext.Provider value={{
      data: dataset,
      setData: setDataSet
    }}>
      <Main />
    </dataContext.Provider>
  )
};

export default App;
