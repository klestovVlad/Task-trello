/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, Dispatch, SetStateAction } from "react";

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

export const data: IdataStructure[] = [
  {
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
  {
    id: 1,
    listName: "In Progress",
    isCardAdding: false,
    cards: [],
  },
  {
    id: 2,
    listName: "Testing",
    isCardAdding: false,
    cards: [],
  },
  {
    id: 3,
    listName: "Done",
    isCardAdding: false,
    cards: [],
  },
];

interface DataContextValue {
  data: IdataStructure[];
  setData: Dispatch<SetStateAction<IdataStructure[]>>;
}

const DataContext = createContext<DataContextValue>({
  data: data,
  setData: () => {},
});

export default DataContext;
