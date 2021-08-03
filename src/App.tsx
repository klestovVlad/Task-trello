import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Board from "./components/board/board";
import actions from "./state/board/actions";
import { RootState } from "./state/root-reducer";
import userNameActions from "./state/user/actions";

const App: FC = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.data);
  const userName = useSelector((state: RootState) => state.userName.userName);

  useEffect(() => {
    if (localStorage.userName !== undefined) {
      dispatch(userNameActions.downloadUserName(localStorage.userName));
    }
    if (localStorage.data !== undefined) {
      dispatch(actions.downloadData(JSON.parse(localStorage.data)));
    }
  }, []);

  useEffect(() => {
    localStorage.data = JSON.stringify(state);
  }, [state]);

  useEffect(() => {
    if (userName.length > 0) {
      localStorage.userName = userName;
    }
  }, [userName]);

  return <Board />;
};

export default App;
