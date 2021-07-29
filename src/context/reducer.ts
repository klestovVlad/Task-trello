import { DataStructure } from "./data";

// type Action =
//   | {
//       type: "columnNameChange";
//       payload: {
//         id: number;
//         text: string;
//       };
//     }
//   | {
//       type: "toggleVisibilityAddCardField";
//       payload: {
//         id: number;
//       };
//     }
//   | {
//       type: "pushNewCard";
//       payload: {
//         cardName: string;
//         columnId: number;
//         cardNum: number;
//         userName: string;
//       };
//     }
//   | {
//       type: "cardDescriptionChange";
//       payload: {
//         text: string;
//         columnId: number;
//         cardNum: number;
//       };
//     }
//   | {
//       type: "cardNameChange";
//       payload: {
//         text: string;
//         columnId: number;
//         cardNum: number;
//       };
//     }
//   | {
//       type: "addNewComment";
//       payload: {
//         text: string;
//         columnId: number;
//         cardNum: number;
//         newComment: string;
//       };
//     }
//   | {
//       type: "commentEditSave";
//       payload: {
//         columnId: number;
//         cardNum: number;
//         commentNum: number;
//         newComment: string;
//       };
//     }
//   | {
//       type: "commentDelite";
//       payload: {
//         columnId: number;
//         cardNum: number;
//         commentNum: number;
//       };
//     }
//   | {
//       type: "deleteCard";
//       payload: {
//         columnId: number;
//         cardNum: number;
//       };
//     };

type Action = {
  type: string;
  payload: any;
};

interface State {
  [key: string]: DataStructure;
}

export const reducer = (
  state: State,
  action: Action,
): { [key: string]: DataStructure } => {
  switch (action.type) {
    case "columnNameChange":
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          listName: action.payload.text,
        },
      };
    case "toggleVisibilityAddCardField":
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
    case "pushNewCard":
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
    case "cardNameChange":
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
    case "cardDescriptionChange":
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
    case "addNewComment":
      return {
        ...state,
        [action.payload.columnId]: {
          ...state[action.payload.columnId],
          cards: [
            ...state[action.payload.columnId].cards.map((card, index) => {
              if (index === action.payload.cardNum) {
                card.comment.push({
                  text: action.payload.newComment,
                  author: localStorage.userName,
                });
              }
              return card;
            }),
          ],
        },
      };
    case "commentEditSave":
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
    case "commentDelite":
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
    case "deleteCard":
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
    default:
      return state;
  }
};
