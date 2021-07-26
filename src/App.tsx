import { FC, useEffect, useState } from "react";

import Main from "./components/main/main";
import DataContext, { data } from "./context/data";

const App: FC = () => {
  const [dataset, setDataSet] = useState(data);

  useEffect(() => {
    function checkData() {
      const isTherelocalData = localStorage.listData !== undefined;
      if (isTherelocalData) {
        setDataSet(JSON.parse(localStorage.listData));
      }
    }
    checkData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        data: dataset,
        setData: setDataSet,
      }}
    >
      <Main />
    </DataContext.Provider>
  );
};

export default App;
