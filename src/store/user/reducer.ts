import { UserNameAction } from "./actions-types";
import { UserName, userName } from "./state";
import types from "./types";

const reducer = (state: UserName = userName, action: UserNameAction): UserName => {
  switch (action.type) {
    case types.APPLY_NAME:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
