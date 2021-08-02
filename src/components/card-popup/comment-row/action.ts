import types from "./types";

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

export default {
  commentDelite,
  commentEditSave,
};
