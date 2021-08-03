import { State } from "./data";
import types from "./types";

interface LoadData {
  type: string;
  payload: {
    loadData: State;
  };
}

const downloadData = (loadData: State): LoadData => {
  return {
    type: types.loadData,
    payload: {
      loadData: loadData,
    },
  };
};

interface CardNameChange {
  type: string;
  payload: {
    text: string;
    columnId: number;
    cardNum: number;
  };
}

function cardNameChange(text: string, columnId: number, cardNum: number): CardNameChange {
  return {
    type: types.cardNameChange,
    payload: {
      text: text,
      columnId: columnId,
      cardNum: cardNum,
    },
  };
}

interface CardDescriptionChange {
  type: string;
  payload: {
    text: string;
    columnId: number;
    cardNum: number;
  };
}

function cardDescriptionChange(
  text: string,
  columnId: number,
  cardNum: number,
): CardDescriptionChange {
  return {
    type: types.cardDescriptionChange,
    payload: {
      text: text,
      columnId: columnId,
      cardNum: cardNum,
    },
  };
}

interface AddNewComment {
  type: string;
  payload: {
    columnId: number;
    cardNum: number;
    newComment: string;
  };
}

const addNewComment = (
  columnId: number,
  cardNum: number,
  newComment: string,
): AddNewComment => {
  return {
    type: types.addNewComment,
    payload: {
      columnId: columnId,
      cardNum: cardNum,
      newComment: newComment,
    },
  };
};

interface DeleteCard {
  type: string;
  payload: {
    columnId: number;
    cardNum: number;
  };
}

const deleteCard = (columnId: number, cardNum: number): DeleteCard => {
  return {
    type: types.deleteCard,
    payload: {
      columnId: columnId,
      cardNum: cardNum,
    },
  };
};

interface CommentDelite {
  type: string;
  payload: {
    columnId: number;
    cardNum: number;
    commentNum: number;
  };
}

const commentDelite = (
  columnId: number,
  cardNum: number,
  commentNum: number,
): CommentDelite => {
  return {
    type: types.commentDelite,
    payload: {
      columnId: columnId,
      cardNum: cardNum,
      commentNum: commentNum,
    },
  };
};

interface CommentEditSave {
  type: string;
  payload: {
    columnId: number;
    cardNum: number;
    commentNum: number;
    newComment: string;
  };
}

const commentEditSave = (
  columnId: number,
  cardNum: number,
  commentNum: number,
  newComment: string,
): CommentEditSave => {
  return {
    type: types.commentEditSave,
    payload: {
      columnId: columnId,
      cardNum: cardNum,
      commentNum: commentNum,
      newComment: newComment,
    },
  };
};

interface ColumnNameChange {
  type: string;
  payload: {
    text: string;
    id: number;
  };
}

const columnNameChange = (text: string, columnId: number): ColumnNameChange => {
  return {
    type: types.columnNameChange,
    payload: {
      text: text,
      id: columnId,
    },
  };
};

interface ToggleAddCardField {
  type: string;
  payload: {
    id: number;
  };
}

const toggleAddCardField = (columnId: number): ToggleAddCardField => {
  return {
    type: types.toggleAddCardField,
    payload: {
      id: columnId,
    },
  };
};

interface PushNewCard {
  type: string;
  payload: {
    columnId: number;
    cardName: string;
    userName: string;
  };
}

const pushNewCard = (
  columnId: number,
  cardName: string,
  userName: string,
): PushNewCard => {
  return {
    type: types.pushNewCard,
    payload: { columnId: columnId, cardName: cardName, userName: userName },
  };
};

export default {
  downloadData,
  cardNameChange,
  cardDescriptionChange,
  addNewComment,
  deleteCard,
  commentDelite,
  commentEditSave,
  columnNameChange,
  toggleAddCardField,
  pushNewCard,
};
