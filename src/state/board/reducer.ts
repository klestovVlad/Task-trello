import { boardState } from "./state";
import { Board } from "./state";
import types from "./types";

type Action = {
  type: string;
  payload: any;
};
const reducer = (state: Board = boardState, action: Action): Board => {
  switch (action.type) {
    case types.COLUMN_NAME_CHANGE:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          listName: action.payload.text,
        },
      };
    case types.TOGGLE_ADD_CARD_FIELD:
      return Object.keys(state).reduce(
        (accum, current) => {
          return {
            ...accum,
            [current]: {
              ...accum[current],
              isCardAdding: +current === action.payload.id,
            },
          };
        },
        { ...state },
      );
    case types.PUSH_NEW_CARD:
      if (action.payload.cardName.length > 0) {
        return {
          ...state,
          [action.payload.columnId]: {
            ...state[action.payload.columnId],
            cards: [
              ...state[action.payload.columnId].cards,
              {
                name: action.payload.cardName,
                author: action.payload.userName,
                text: "",
                comment: [],
              },
            ],
          },
        };
      } else {
        return {
          ...state,
        };
      }
    case types.CARD_NAME_CHANGE:
      return {
        ...state,
        [action.payload.columnId]: {
          ...state[action.payload.columnId],
          cards: [
            ...state[action.payload.columnId].cards.map((card, index) => {
              if (index === action.payload.cardNum) {
                card.name = action.payload.text;
              }
              return card;
            }),
          ],
        },
      };
    case types.CARD_DESCRIPTION_CHANGE:
      return {
        ...state,
        [action.payload.columnId]: {
          ...state[action.payload.columnId],
          cards: [
            ...state[action.payload.columnId].cards.map((card, index) => {
              if (index === action.payload.cardNum) {
                card.text = action.payload.text;
              }
              return card;
            }),
          ],
        },
      };
    case types.ADD_NEW_COMENT:
      return {
        ...state,
        [action.payload.columnId]: {
          ...state[action.payload.columnId],
          cards: [
            ...state[action.payload.columnId].cards.map((card, index) => {
              if (index === action.payload.cardNum) {
                return {
                  ...card,
                  comment: [
                    ...card.comment,
                    {
                      text: action.payload.newComment,
                      author: localStorage.userName,
                    },
                  ],
                };
              }
              return card;
            }),
          ],
        },
      };
    case types.COMMENT_EDIT_SAVE:
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
    case types.COMMENT_DELITE:
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
    case types.DELETE_CARD:
      return {
        ...state,
        [action.payload.columnId]: {
          ...state[action.payload.columnId],
          cards: [
            ...state[action.payload.columnId].cards.filter((el, index) => {
              if (index === action.payload.cardNum) {
                return false;
              }
              return true;
            }),
          ],
        },
      };
    case types.LOAD_DATA:
      return {
        ...action.payload.loadData,
      };
    default:
      return state;
  }
};

export default reducer;

// type Action =
//   | {
//       type: Actions.loadData;
//       payload: Record<string, never>;
//     }
//   | {
//       type: Actions.columnNameChange;
//       payload: {
//         id: number;
//         text: string;
//       };
//     }
//   | {
//       type: Actions.toggleVisibilityAddCardField;
//       payload: {
//         id: number;
//       };
//     }
//   | {
//       type: Actions.pushNewCard;
//       payload: {
//         cardName: string;
//         columnId: number;
//         cardNum: number;
//         userName: string;
//       };
//     }
//   | {
//       type: Actions.cardDescriptionChange;
//       payload: {
//         text: string;
//         columnId: number;
//         cardNum: number;
//       };
//     }
//   | {
//       type: Actions.cardNameChange;
//       payload: {
//         text: string;
//         columnId: number;
//         cardNum: number;
//       };
//     }
//   | {
//       type: Actions.addNewComment;
//       payload: {
//         text: string;
//         columnId: number;
//         cardNum: number;
//         newComment: string;
//       };
//     }
//   | {
//       type: Actions.commentEditSave;
//       payload: {
//         columnId: number;
//         cardNum: number;
//         commentNum: number;
//         newComment: string;
//       };
//     }
//   | {
//       type: Actions.commentDelite;
//       payload: {
//         columnId: number;
//         cardNum: number;
//         commentNum: number;
//       };
//     }
//   | {
//       type: Actions.deleteCard;
//       payload: {
//         columnId: number;
//         cardNum: number;
//       };
//     };