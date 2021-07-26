/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from "react";

interface IComment {
  text: string;
  author: string;
}

export interface ICard {
  name: string;
  author: string;
  text: string;
  comment: IComment[];
}

export interface IdataStructure {
  id: number;
  listName: string;
  isCardAdding: boolean;
  cards: ICard[];
}

export const data: {
  [key: string]: IdataStructure;
} = {
  0: {
    id: 0,
    listName: "TODO",
    isCardAdding: false,
    cards: [
      {
        name: "demo card",
        author: "Klestov Vlad",
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

const islocalDataExist = localStorage.data !== undefined;

if (islocalDataExist) {
  const localData = JSON.parse(localStorage.data);
  for (const key in data) {
    delete data[key];
  }
  for (const key in localData) {
    data[key] = localData[key];
  }
}

interface DataContextValue {
  data: { [key: string]: IdataStructure };
  setData: any;
}

const DataContext = createContext<DataContextValue>({
  data: data,
  setData: () => {},
});

export default DataContext;
