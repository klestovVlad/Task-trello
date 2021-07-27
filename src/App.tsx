import { FC, useReducer } from "react";

import Main from "./components/main/main";
import DataContext, { data, reduser } from "./context/data";

const App: FC = () => {
  const [dataset, dispathc] = useReducer(reduser, data);

  return (
    <DataContext.Provider
      value={{
        data: dataset,
        dispathc: dispathc,
      }}
    >
      <Main />
    </DataContext.Provider>
  );
};

export default App;
