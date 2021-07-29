import { State } from "./data";
import { Actions } from "./reducer";

interface LoadData {
  type: string;
  payload: {
    loadData: State;
  };
}

export function loadData(loadData: State): LoadData {
  return {
    type: Actions.loadData,
    payload: {
      loadData: loadData,
    },
  };
}

interface PushNewCard {
  type: string;
  payload: {
    columnId: number;
    cardName: string;
    userName: string;
  };
}

export function pushNewCard(
  columnId: number,
  cardName: string,
  userName: string,
): PushNewCard {
  return {
    type: Actions.pushNewCard,
    payload: { columnId: columnId, cardName: cardName, userName: userName },
  };
}

interface ColumnNameChange {
  type: string;
  payload: {
    text: string;
    id: number;
  };
}

export function columnNameChange(text: string, columnId: number): ColumnNameChange {
  return {
    type: Actions.columnNameChange,
    payload: {
      text: text,
      id: columnId,
    },
  };
}

interface CardNameChange {
  type: string;
  payload: {
    text: string;
    columnId: number;
    cardNum: number;
  };
}

export function cardNameChange(
  text: string,
  columnId: number,
  cardNum: number,
): CardNameChange {
  return {
    type: Actions.cardNameChange,
    payload: {
      text: text,
      columnId: columnId,
      cardNum: cardNum,
    },
  };
}

interface ToggleAddCardField {
  type: string;
  payload: {
    id: number;
  };
}

export function toggleAddCardField(columnId: number): ToggleAddCardField {
  return {
    type: Actions.toggleAddCardField,
    payload: {
      id: columnId,
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

export function cardDescriptionChange(
  text: string,
  columnId: number,
  cardNum: number,
): CardDescriptionChange {
  return {
    type: Actions.cardDescriptionChange,
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

export function addNewComment(
  columnId: number,
  cardNum: number,
  newComment: string,
): AddNewComment {
  return {
    type: Actions.addNewComment,
    payload: {
      columnId: columnId,
      cardNum: cardNum,
      newComment: newComment,
    },
  };
}

interface CommentEditSave {
  type: string;
  payload: {
    columnId: number;
    cardNum: number;
    commentNum: number;
    newComment: string;
  };
}

export function commentEditSave(
  columnId: number,
  cardNum: number,
  commentNum: number,
  newComment: string,
): CommentEditSave {
  return {
    type: Actions.commentEditSave,
    payload: {
      columnId: columnId,
      cardNum: cardNum,
      commentNum: commentNum,
      newComment: newComment,
    },
  };
}

interface CommentDelite {
  type: string;
  payload: {
    columnId: number;
    cardNum: number;
    commentNum: number;
  };
}

export function commentDelite(
  columnId: number,
  cardNum: number,
  commentNum: number,
): CommentDelite {
  return {
    type: Actions.commentDelite,
    payload: {
      columnId: columnId,
      cardNum: cardNum,
      commentNum: commentNum,
    },
  };
}

interface DeleteThisCard {
  type: string;
  payload: {
    columnId: number;
    cardNum: number;
  };
}

export function deleteCard(columnId: number, cardNum: number): DeleteThisCard {
  return {
    type: Actions.deleteCard,
    payload: {
      columnId: columnId,
      cardNum: cardNum,
    },
  };
}
