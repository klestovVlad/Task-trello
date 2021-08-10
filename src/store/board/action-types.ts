import { Board } from "./state";

export interface LoadData {
  loadData: Board;
}

export interface ToggleAddCardField {
  id: number;
}
export interface ChangeCardName {
  text: string;
  columnId: number;
  cardNum: number;
}
export interface ChangeCardDescription {
  text: string;
  columnId: number;
  cardNum: number;
}
export interface AddNewComment {
  columnId: number;
  cardNum: number;
  newComment: string;
  userName: string;
}
export interface DeleteCard {
  columnId: number;
  cardNum: number;
}

export interface DeleteComment {
  columnId: number;
  cardNum: number;
  commentNum: number;
}

export interface SaveCommentEdit {
  columnId: number;
  cardNum: number;
  commentNum: number;
  newComment: string;
}

export interface ChangeColumnName {
  text: string;
  id: number;
}
export interface PushNewCard {
  columnId: number;
  cardName: string;
  userName: string;
}
