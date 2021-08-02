import { combineReducers } from "redux";

import { DataStructure, State } from "../../context/board/data";
import types from "./types";

type Action = {
  type: string;
  payload: any;
};

const cardNameChangeReducer = (
  state: State,
  action: Action,
): { [key: string]: DataStructure } => {
  switch (action.type) {
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
    default:
      return state;
  }
};

const cardDescriptionChangeReducer = (
  state: State,
  action: Action,
): { [key: string]: DataStructure } => {
  switch (action.type) {
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
    default:
      return state;
  }
};

const addNewCommentReducer = (
  state: State,
  action: Action,
): { [key: string]: DataStructure } => {
  switch (action.type) {
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
    default:
      return state;
  }
};

const deleteCardReducer = (
  state: State,
  action: Action,
): { [key: string]: DataStructure } => {
  switch (action.type) {
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
    default:
      return state;
  }
};

const reducer = combineReducers({
  cardNameChangeReducer: cardNameChangeReducer,
  cardDescriptionChangeReducer: cardDescriptionChangeReducer,
  addNewCommentReducer: addNewCommentReducer,
  deleteCardReducer: deleteCardReducer,
});

export default reducer;
