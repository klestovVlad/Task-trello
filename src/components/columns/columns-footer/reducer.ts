import { DataStructure, defaultState, State } from "../../../state/board/data";
import types from "../../../state/board/types";

type Action = {
  type: string;
  payload: any;
};

const reducer = (
  state: State = defaultState,
  action: Action,
): { [key: string]: DataStructure } => {
  switch (action.type) {
    case types.toggleAddCardField:
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
    case types.pushNewCard:
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
    default:
      return state;
  }
};

export default reducer;
