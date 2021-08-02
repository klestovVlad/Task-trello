import { DataStructure, State } from "../../context/board/data";
import types from "./types";

type Action = {
  type: string;
  payload: any;
};

const reducer = (state: State, action: Action): { [key: string]: DataStructure } => {
  switch (action.type) {
    case types.columnNameChange:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          listName: action.payload.text,
        },
      };
    default:
      return state;
  }
};

export default reducer;
