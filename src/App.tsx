import { FC, useEffect, useState } from "react";
import { Provider, useDispatch } from "react-redux";
import { createStore } from "redux";

import Board from "./components/board/board";
import actions from "./context/board/actions";
import { defaultState } from "./context/board/data";
import rootReducer from "./context/board/reducer";
import { UserNameContext } from "./context/user/data";

const App: FC = () => {
  const [userName, setUserName] = useState("");
  console.log(defaultState);
  const store = createStore(rootReducer, defaultState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.userName !== undefined) {
      setUserName(localStorage.userName);
    }
    if (localStorage.data !== undefined) {
      dispatch(actions.downloadData(JSON.parse(localStorage.data)));
    }
  }, []);

  useEffect(() => {
    localStorage.data = JSON.stringify(defaultState);
  }, [defaultState]);

  useEffect(() => {
    if (userName.length > 0) {
      localStorage.userName = userName;
    }
  }, [userName]);

  return (
    <Provider store={store}>
      <UserNameContext.Provider
        value={{
          userName: userName,
          setUserName: setUserName,
        }}
      >
        <Board />
      </UserNameContext.Provider>
    </Provider>
  );
};

export default App;
