/* eslint-disable @typescript-eslint/ban-ts-comment */
import { combineReducers } from "redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import boardRecuctor from "./board/reducer";
import userNameReductor from "./user/reducer";

const rootReducer = combineReducers({
  data: boardRecuctor,
  userName: userNameReductor,
});

export type RootState = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware()));
// @ts-ignore
const persistor = persistStore(store);

export default {
  store,
  persistor,
};
