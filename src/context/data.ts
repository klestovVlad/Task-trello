import { createContext } from "react";

interface CommentStructure {
  text: string;
  author: string;
}

export interface CardStructure {
  name: string;
  author: string;
  text: string;
  comment: CommentStructure[];
}

export interface DataStructure {
  id: number;
  listName: string;
  isCardAdding: boolean;
  cards: CardStructure[];
}

export const data: {
  [key: string]: DataStructure;
} = {
  0: {
    id: 0,
    listName: "TODO",
    isCardAdding: false,
    cards: [
      {
        name: "demo card",
        author: "Klestov Vladislav",
        text: "card have added for demonstration",
        comment: [
          {
            text: "my comment",
            author: "Klestov Vladislav",
          },
        ],
      },
    ],
  },
  1: {
    id: 1,
    listName: "In Progress",
    isCardAdding: false,
    cards: [],
  },
  2: {
    id: 2,
    listName: "Testing",
    isCardAdding: false,
    cards: [],
  },
  3: {
    id: 3,
    listName: "Done",
    isCardAdding: false,
    cards: [],
  },
};

interface DataContextValue {
  data: { [key: string]: DataStructure };
  dispatch: any;
}

type Action = {
  type: string;
  payload: {
    id: number;
    text: string;
    cardName: string;
    columnId: number;
    cardNum: number;
    commentNum: number;
    newComment: string;
  };
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
        ...copyState,
      };
    case "toggleVisibilityAddCardField":
      for (const key in copyState) {
        copyState[key].isCardAdding = +key === action.payload.id ? true : false;
      }
      return {
        ...copyState,
      };
    case "pushNewCard":
      if (action.payload.cardName.length > 0) {
        copyState[action.payload.columnId].cards.push({
          name: action.payload.cardName,
          author: localStorage.userName,
          text: "",
          comment: [],
        });
      }
      return {
        ...copyState,
      };
    case "cardNameChange":
      copyState[action.payload.columnId].cards[action.payload.cardNum].name =
        action.payload.text;
      return {
        ...copyState,
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

const DataContext = createContext<DataContextValue>({
  data: data,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  dispatch: () => {},
});

export default DataContext;
