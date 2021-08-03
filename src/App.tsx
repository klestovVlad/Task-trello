import { FC, useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";

import Board from "./components/board/board";
import actions from "./context/board/actions";
import { defaultState } from "./context/board/data";
import { UserNameContext } from "./context/user/data";

const App: FC = () => {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);

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
    <UserNameContext.Provider
      value={{
        userName: userName,
        setUserName: setUserName,
      }}
    >
      <Board />
    </UserNameContext.Provider>
  );
};

export default App;
