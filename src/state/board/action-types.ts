import { Board } from "./state";
import types from "./types";

export interface LoadData {
  type: types.LOAD_DATA;
  payload: {
    loadData: Board;
  };
}

export interface ToggleAddCardField {
  type: types.TOGGLE_ADD_CARD_FIELD;
  payload: {
    id: number;
  };
}
export interface CardNameChange {
  type: types.CARD_NAME_CHANGE;
  payload: {
    text: string;
    columnId: number;
    cardNum: number;
  };
}
export interface CardDescriptionChange {
  type: types.CARD_DESCRIPTION_CHANGE;
  payload: {
    text: string;
    columnId: number;
    cardNum: number;
  };
}
export interface AddNewComment {
  type: types.ADD_NEW_COMENT;
  payload: {
    columnId: number;
    cardNum: number;
    newComment: string;
  };
}
export interface DeleteCard {
  type: types.DELETE_CARD;
  payload: {
    columnId: number;
    cardNum: number;
  };
}

export interface CommentDelete {
  type: types.COMMENT_Delete;
  payload: {
    columnId: number;
    cardNum: number;
    commentNum: number;
  };
}

export interface CommentEditSave {
  type: types.COMMENT_EDIT_SAVE;
  payload: {
    columnId: number;
    cardNum: number;
    commentNum: number;
    newComment: string;
  };
}

export interface ColumnNameChange {
  type: types.COLUMN_NAME_CHANGE;
  payload: {
    text: string;
    id: number;
  };
}
export interface PushNewCard {
  type: types.PUSH_NEW_CARD;
  payload: {
    columnId: number;
    cardName: string;
    userName: string;
  };
}

export type BoardAction =
  | LoadData
  | CardNameChange
  | ToggleAddCardField
  | CardDescriptionChange
  | CommentEditSave
  | AddNewComment
  | DeleteCard
  | CommentDelete
  | ColumnNameChange
  | PushNewCard;
