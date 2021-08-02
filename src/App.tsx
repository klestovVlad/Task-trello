import { FC, useEffect, useReducer, useState } from "react";

import Board from "./components/board/board";
import actions from "./context/board/actions";
import DataContext, { defaultState } from "./context/board/data";
import rootReducer from "./context/board/reducer";
import { UserNameContext } from "./context/user/data";

const App: FC = () => {
  const [userName, setUserName] = useState("");
  const [dataSet, dispatch] = useReducer(rootReducer, defaultState);

  useEffect(() => {
    if (localStorage.userName !== undefined) {
      setUserName(localStorage.userName);
    }
    if (localStorage.data !== undefined) {
      dispatch(actions.downloadData(JSON.parse(localStorage.data)));
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
        <Board />
      </UserNameContext.Provider>
    </DataContext.Provider>
  );
};

export default App;
