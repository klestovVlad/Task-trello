import types from "./types";

export interface ApplyName {
  type: types.APPLY_NAME;
  payload: {
    userName: string;
  };
}

export type UserNameAction = ApplyName;
