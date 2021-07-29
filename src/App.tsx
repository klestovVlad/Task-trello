import { FC, useEffect, useReducer, useState } from "react";

import Main from "./components/main/main";
import { loadData } from "./context/actions";
import DataContext, { data, UserNameContext } from "./context/data";
import { reducer } from "./context/reducer";

const App: FC = () => {
  const [userName, setUserName] = useState("");
  const [dataSet, dispatch] = useReducer(reducer, data);

  useEffect(() => {
    if (localStorage.userName !== undefined) {
      setUserName(localStorage.userName);
    }
    if (localStorage.data !== undefined) {
      dispatch(loadData());
    }
  }, []);

  useEffect(() => {
    localStorage.data = JSON.stringify(dataSet);
  }, [dataSet]);

  useEffect(() => {
    if (userName.length > 0) {
      localStorage.userName = userName;
    }
  }, [userName]);

  return (
    <DataContext.Provider
      value={{
        data: dataSet,
        dispatch: dispatch,
      }}
    >
      <UserNameContext.Provider
        value={{
          userName: userName,
          setUserName: setUserName,
        }}
      >
        <Main />
      </UserNameContext.Provider>
    </DataContext.Provider>
  );
};

export default App;
