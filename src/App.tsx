import { useEffect } from "react";
import { useState } from "react";
import { FC, useReducer } from "react";

import Main from "./components/main/main";
import DataContext, { data, reduser, UserNameContext } from "./context/data";

const App: FC = () => {
  const [dataset, dispatch] = useReducer(reduser, data);
  const [userName, setUserName] = useState("");

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

  useEffect(() => {
    localStorage.userName = userName;
  }, [userName]);

  return (
    <DataContext.Provider
      value={{
        data: dataset,
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
