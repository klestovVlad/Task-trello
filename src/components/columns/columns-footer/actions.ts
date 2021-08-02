import types from "./types";

interface ToggleAddCardField {
  type: string;
  payload: {
    id: number;
  };
}

const toggleAddCardField = (columnId: number): ToggleAddCardField => {
  return {
    type: types.toggleAddCardField,
    payload: {
      id: columnId,
    },
  };
};

interface PushNewCard {
  type: string;
  payload: {
    columnId: number;
    cardName: string;
    userName: string;
  };
}

const pushNewCard = (
  columnId: number,
  cardName: string,
  userName: string,
): PushNewCard => {
  return {
    type: types.pushNewCard,
    payload: { columnId: columnId, cardName: cardName, userName: userName },
  };
};

export default {
  toggleAddCardField,
  pushNewCard,
};
