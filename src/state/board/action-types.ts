import { Board } from "./state";

export interface LoadData {
  type: string;
  payload: {
    loadData: Board;
  };
}

export interface CardNameChange {
  type: string;
  payload: {
    text: string;
    columnId: number;
    cardNum: number;
  };
}
export interface CardDescriptionChange {
  type: string;
  payload: {
    text: string;
    columnId: number;
    cardNum: number;
  };
}
export interface AddNewComment {
  type: string;
  payload: {
    columnId: number;
    cardNum: number;
    newComment: string;
  };
}
export interface DeleteCard {
  type: string;
  payload: {
    columnId: number;
    cardNum: number;
  };
}

export interface CommentDelite {
  type: string;
  payload: {
    columnId: number;
    cardNum: number;
    commentNum: number;
  };
}

export interface CommentEditSave {
  type: string;
  payload: {
    columnId: number;
    cardNum: number;
    commentNum: number;
    newComment: string;
  };
}

export interface ColumnNameChange {
  type: string;
  payload: {
    text: string;
    id: number;
  };
}
export interface PushNewCard {
  type: string;
  payload: {
    columnId: number;
    cardName: string;
    userName: string;
  };
}
