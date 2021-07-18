interface IComment{
  text: string;
  author: string;
}

interface ICard {
    name?: string;
    author?: string;
    text?: string;
    comment: IComment[]
}

interface dataStructure {
  id: number;
  listName: string;
  isCardAdding: boolean;
  cards: ICard[];
}

const DeafultData:dataStructure[] = [
  {
    id: 0,
    listName: 'TODO',
    isCardAdding: false,
    cards: [{
      name: "check the trainee's practical assignment",
      author: 'Klestov Vlad',
      text: 'Again an ignorant trainee tried to do something worthwhile, and now you need to understand this shitty code...',
      comment: [
        {
          text: 'hello! :-)',
          author: 'Klestov Vladislav',
        },
      ],
    },
    ],
  },
  {
    id: 1,
    listName: 'In Progress',
    isCardAdding: false,
    cards: [
    ],
  },
  {
    id: 2,
    listName: 'Testing',
    isCardAdding: false,
    cards: [
    ],
  },
  {
    id: 3,
    listName: 'Done',
    isCardAdding: false,
    cards: [
    ],
  },
];

const listData = localStorage.listData !== undefined
  ? JSON.parse(localStorage.listData)
  : [...DeafultData];

export default listData;
