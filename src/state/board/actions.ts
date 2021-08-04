import {
  AddNewComment,
  CardDescriptionChange,
  CardNameChange,
  ColumnNameChange,
  CommentDelete,
  CommentEditSave,
  DeleteCard,
  LoadData,
  PushNewCard,
  ToggleAddCardField,
} from "./action-types";
import { Board } from "./state";
import types from "./types";

const downloadData = (loadData: Board): LoadData => {
  return {
    type: types.LOAD_DATA,
    payload: {
      loadData: loadData,
    },
  };
};

const cardNameChange = (
  text: string,
  columnId: number,
  cardNum: number,
): CardNameChange => {
  return {
    type: types.CARD_NAME_CHANGE,
    payload: {
      text: text,
      columnId: columnId,
      cardNum: cardNum,
    },
  };
};

const cardDescriptionChange = (
  text: string,
  columnId: number,
  cardNum: number,
): CardDescriptionChange => {
  return {
    type: types.CARD_DESCRIPTION_CHANGE,
    payload: {
      text: text,
      columnId: columnId,
      cardNum: cardNum,
    },
  };
};

const addNewComment = (
  columnId: number,
  cardNum: number,
  newComment: string,
): AddNewComment => {
  return {
    type: types.ADD_NEW_COMENT,
    payload: {
      columnId: columnId,
      cardNum: cardNum,
      newComment: newComment,
    },
  };
};

const deleteCard = (columnId: number, cardNum: number): DeleteCard => {
  return {
    type: types.DELETE_CARD,
    payload: {
      columnId: columnId,
      cardNum: cardNum,
    },
  };
};

const commentDelete = (
  columnId: number,
  cardNum: number,
  commentNum: number,
): CommentDelete => {
  return {
    type: types.COMMENT_Delete,
    payload: {
      columnId: columnId,
      cardNum: cardNum,
      commentNum: commentNum,
    },
  };
};

const commentEditSave = (
  columnId: number,
  cardNum: number,
  commentNum: number,
  newComment: string,
): CommentEditSave => {
  return {
    type: types.COMMENT_EDIT_SAVE,
    payload: {
      columnId: columnId,
      cardNum: cardNum,
      commentNum: commentNum,
      newComment: newComment,
    },
  };
};

const columnNameChange = (text: string, columnId: number): ColumnNameChange => {
  return {
    type: types.COLUMN_NAME_CHANGE,
    payload: {
      text: text,
      id: columnId,
    },
  };
};

const toggleAddCardField = (columnId: number): ToggleAddCardField => {
  return {
    type: types.TOGGLE_ADD_CARD_FIELD,
    payload: {
      id: columnId,
    },
  };
};

const pushNewCard = (
  columnId: number,
  cardName: string,
  userName: string,
): PushNewCard => {
  return {
    type: types.PUSH_NEW_CARD,
    payload: { columnId: columnId, cardName: cardName, userName: userName },
  };
};

export default {
  downloadData,
  cardNameChange,
  cardDescriptionChange,
  addNewComment,
  deleteCard,
  commentDelete,
  commentEditSave,
  columnNameChange,
  toggleAddCardField,
  pushNewCard,
};
