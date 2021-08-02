import { combineReducers } from "redux";

import { CommentRowReducer } from "../../components/card-popup/comment-row/index";
import { CardPopupReducer } from "../../components/card-popup/index";
import { ColumnsFooterReducer } from "../../components/columns/columns-footer/index";
import { ColumnsReducer } from "../../components/columns/index";
import { DataStructure, State } from "./data";
import types from "./types";

type Action = {
  type: string;
  payload: any;
};

const downloadDataReducer = (
  state: State,
  action: Action,
): { [key: string]: DataStructure } => {
  switch (action.type) {
    case types.loadData:
      return {
        ...action.payload.loadData,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  downloadDataReducer,
  CommentRowReducer,
  CardPopupReducer,
  ColumnsReducer,
  ColumnsFooterReducer,
});

export default rootReducer;
