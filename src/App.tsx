import { FC, useContext, useEffect, useState } from "react";

import Main from "./components/main/main";
import DataContext, { data, UserNameContext } from "./context/data";

const App: FC = () => {
  const [userName, setUserName] = useState("");
  const dataset = useContext(DataContext);

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
    localStorage.data = JSON.stringify(dataset);
  }, [dataset]);

  useEffect(() => {
    localStorage.userName = userName;
  }, [userName]);

  return (
    <DataContext.Provider value={dataset}>
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
