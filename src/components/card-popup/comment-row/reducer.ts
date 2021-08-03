import { DataStructure, defaultState, State } from "../../../context/board/data";
import types from "./types";

type Action = {
  type: string;
  payload: any;
};

const reducer = (
  state: State = defaultState,
  action: Action,
): { [key: string]: DataStructure } => {
  switch (action.type) {
    case types.commentEditSave:
      return {
        ...state,
        [action.payload.columnId]: {
          ...state[action.payload.columnId],
          cards: [
            ...state[action.payload.columnId].cards.map((card, index) => {
              if (index === action.payload.cardNum) {
                card.comment.map((comment, index) => {
                  if (index === action.payload.commentNum) {
                    comment.text = action.payload.newComment;
                  }
                  return comment;
                });
              }
              return card;
            }),
          ],
        },
      };
    case types.commentDelite:
      return {
        ...state,
        [action.payload.columnId]: {
          ...state[action.payload.columnId],
          cards: [
            ...state[action.payload.columnId].cards.map((card, index) => {
              if (index === action.payload.cardNum) {
                card.comment.splice(action.payload.commentNum, 1);
              }
              return card;
            }),
          ],
        },
      };
    default:
      return state;
  }
};

export default reducer;
