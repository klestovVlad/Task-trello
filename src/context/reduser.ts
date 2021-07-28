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

export const reduser = (
  state: State,
  action: Action,
): { [key: string]: DataStructure } => {
  const copyState = { ...state };
  switch (action.type) {
    case "columnNameChange":
      copyState[action.payload.id].listName = action.payload.text;
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          listName: action.payload.text,
        },
      };
    case "toggleVisibilityAddCardField":
      return Object.keys(copyState).reduce(
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
      copyState[action.payload.columnId].cards[action.payload.cardNum].name =
        action.payload.text;
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
      copyState[action.payload.columnId].cards[action.payload.cardNum].text =
        action.payload.text;
      return {
        ...copyState,
      };
    case "addNewComment":
      copyState[action.payload.columnId].cards[action.payload.cardNum].comment.push({
        text: action.payload.newComment,
        author: localStorage.userName,
      });
      return {
        ...copyState,
      };
    case "commentEditSave":
      copyState[action.payload.columnId].cards[action.payload.cardNum].comment[
        action.payload.commentNum
      ].text = action.payload.newComment;
      return {
        ...copyState,
      };
    case "commentDelite":
      copyState[action.payload.columnId].cards[action.payload.cardNum].comment.splice(
        action.payload.commentNum,
        1,
      );
      return {
        ...copyState,
      };
    case "deleteCard":
      copyState[action.payload.columnId].cards.splice(action.payload.cardNum, 1);
      return {
        ...copyState,
      };
    default:
      return state;
  }
};
