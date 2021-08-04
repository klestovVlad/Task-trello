import { UserName, userName } from "./state";
import types from "./types";

type Action = {
  type: string;
  payload: any;
};
const reducer = (state: UserName = userName, action: Action): UserName => {
  switch (action.type) {
    case types.typeNewName:
      return {
        ...state,
        newUserName: action.payload.newUserName,
      };
    case types.applyName:
      return {
        ...state,
        userName: state.newUserName,
      };
    case types.downloadName:
      return {
        userName: action.payload.userName,
        newUserName: "",
      };
    default:
      return state;
  }
};

export default reducer;
