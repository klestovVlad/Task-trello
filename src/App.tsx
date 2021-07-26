import { FC, useState } from "react";

import Main from "./components/main/main";
import DataContext, { data } from "./context/data";

const App: FC = () => {
  const [dataset, setDataSet] = useState(data);

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
