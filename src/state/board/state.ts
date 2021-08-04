interface Comment {
  text: string;
  author: string;
}

export interface Card {
  name: string;
  author: string;
  text: string;
  comment: Comment[];
}

export interface BoardItem {
  id: number;
  listName: string;
  isCardAdding: boolean;
  cards: Card[];
}

export interface Board {
  [key: string]: BoardItem;
}

export const boardState: Board = {
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
