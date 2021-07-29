import { DataStructure } from "./data";
import { State } from "./data";

export enum Actions {
  loadData = "LOAD_DATA",
  columnNameChange = "COLUMN_NAME_CHANGE",
  toggleAddCardField = "TOGGLE_ADD_CARD_FIELD",
  pushNewCard = "PUSH_NEW_CARD",
  cardDescriptionChange = "CARD_DESCRIPTION_CHANGE",
  cardNameChange = "CARD_NAME_CHANGE",
  addNewComment = "ADD_NEW_COMENT",
  commentEditSave = "COMMENT_EDIT_SAVE",
  commentDelite = "COMMENT_DELITE",
  deleteCard = "DELETE_CARD",
}
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

type Action = {
  type: string;
  payload: any;
};

export const reducer = (
  state: State,
  action: Action,
): { [key: string]: DataStructure } => {
  switch (action.type) {
    case Actions.columnNameChange:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          listName: action.payload.text,
        },
      };
    case Actions.toggleAddCardField:
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
    case Actions.pushNewCard:
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
    case Actions.cardNameChange:
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
    case Actions.cardDescriptionChange:
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
    case Actions.addNewComment:
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
    case Actions.commentEditSave:
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
    case Actions.commentDelite:
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
    case Actions.deleteCard:
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
    case Actions.loadData:
      return {
        ...action.payload.loadData,
      };
    default:
      return state;
  }
};
