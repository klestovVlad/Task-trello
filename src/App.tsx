import { useState } from 'react';
import Main from './components/main/main';
import dataContext, { data } from './context/data'

const App:React.FC = () => {
  const [dataset, setDataSet] = useState(data)
  return(
    <dataContext.Provider value={dataset.deafult}>
      <Main />
    </dataContext.Provider>
  )
};

export default App;
