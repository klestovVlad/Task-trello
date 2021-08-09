import { ApplyName } from "./actions-types";
import types from "./types";

const applyName = (userName: { userName: string }): ApplyName => {
  return {
    type: types.APPLY_NAME,
    payload: userName,
  };
};

export default {
  applyName,
};
