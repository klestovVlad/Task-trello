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

export interface State {
  [key: string]: DataStructure;
}

export const data: State = {
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
  data: State;
  dispatch: any;
}

interface UserNameContextValue {
  userName: string;
  setUserName: any;
}

export const UserNameContext = createContext<UserNameContextValue>({
  userName: "",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setUserName: () => {},
});

const DataContext = createContext<DataContextValue>({
  data: data,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  dispatch: () => {},
});

export default DataContext;
