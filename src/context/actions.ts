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
    type: "cardNameChange",
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

export function cardDescriptionChange(
  text: string,
  columnId: number,
  cardNum: number,
): CardDescriptionChange {
  return {
    type: "cardDescriptionChange",
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
    type: "addNewComment",
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
    type: "commentEditSave",
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
    type: "commentDelite",
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
    type: "deleteCard",
    payload: {
      columnId: columnId,
      cardNum: cardNum,
    },
  };
}
