import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import boardRecuctor from "./board/reducer";
import userNameReductor from "./user/reducer";

const boardPersistConfig = {
  key: "board",
  storage: storage,
};

const UserPersistConfig = {
  key: "user",
  storage: storage,
};

const rootReducer = combineReducers({
  data: persistReducer(boardPersistConfig, boardRecuctor),
  userName: persistReducer(UserPersistConfig, userNameReductor),
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
