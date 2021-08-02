import types from "./types";

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

function addNewComment(
  columnId: number,
  cardNum: number,
  newComment: string,
): AddNewComment {
  return {
    type: types.addNewComment,
    payload: {
      columnId: columnId,
      cardNum: cardNum,
      newComment: newComment,
    },
  };
}

interface DeleteCard {
  type: string;
  payload: {
    columnId: number;
    cardNum: number;
  };
}

function deleteCard(columnId: number, cardNum: number): DeleteCard {
  return {
    type: types.deleteCard,
    payload: {
      columnId: columnId,
      cardNum: cardNum,
    },
  };
}

export default {
  cardNameChange,
  cardDescriptionChange,
  addNewComment,
  deleteCard,
};
