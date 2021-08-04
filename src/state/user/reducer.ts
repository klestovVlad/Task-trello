import { UserNameAction } from "./actions-types";
import { UserName, userName } from "./state";
import types from "./types";

const reducer = (state: UserName = userName, action: UserNameAction): UserName => {
  switch (action.type) {
    case types.TYPE_NEW_NAME:
      return {
        ...state,
        newUserName: action.payload.newUserName,
      };
    case types.APPLY_NAME:
      return {
        ...state,
        userName: state.newUserName,
      };
    case types.DOWNLOAD_NAME:
      return {
        userName: action.payload.userName,
        newUserName: "",
      };
    default:
      return state;
  }
};

export default reducer;
