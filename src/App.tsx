import { useEffect } from "react";
import { FC, useReducer } from "react";

import Main from "./components/main/main";
import DataContext, { data, reduser } from "./context/data";

const App: FC = () => {
  const [dataset, dispatch] = useReducer(reduser, data);

  useEffect(() => {
    const islocalDataExist = localStorage.data !== undefined;

    if (islocalDataExist) {
      const localData = JSON.parse(localStorage.data);
      for (const key in data) {
        delete data[key];
      }
      for (const key in localData) {
        data[key] = localData[key];
      }
    }
  }, []);

  useEffect(() => {
    localStorage.data = JSON.stringify(data);
  }, [data]);

  return (
    <DataContext.Provider
      value={{
        data: dataset,
        dispatch: dispatch,
      }}
    >
      <Main />
    </DataContext.Provider>
  );
};

export default App;
