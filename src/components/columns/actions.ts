import types from "./types";

interface ColumnNameChange {
  type: string;
  payload: {
    text: string;
    id: number;
  };
}

export function columnNameChange(text: string, columnId: number): ColumnNameChange {
  return {
    type: types.columnNameChange,
    payload: {
      text: text,
      id: columnId,
    },
  };
}
