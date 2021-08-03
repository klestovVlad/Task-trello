import { defaultState } from "./data";
import { State } from "./data";
import types from "./types";

type Action = {
  type: string;
  payload: any;
};
const reducer = (state: State = defaultState, action: Action): State => {
  switch (action.type) {
    case types.columnNameChange:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          listName: action.payload.text,
        },
      };
    case types.toggleAddCardField:
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
    case types.pushNewCard:
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
    case types.cardNameChange:
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
    case types.cardDescriptionChange:
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
    case types.addNewComment:
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
    case types.deleteCard:
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
    case types.loadData:
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
