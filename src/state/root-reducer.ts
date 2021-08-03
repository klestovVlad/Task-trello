import { combineReducers } from "redux";

import boardRecuctor from "./board/reducer";
import userNameReductor from "./user/reducer";

const rootReducer = combineReducers({
  data: boardRecuctor,
  userName: userNameReductor,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
