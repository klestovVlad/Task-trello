import { State } from "../../context/board/data";
import types from "./types";

interface LoadData {
  type: string;
  payload: {
    loadData: State;
  };
}

const downloadData = (loadData: State): LoadData => {
  return {
    type: types.loadData,
    payload: {
      loadData: loadData,
    },
  };
};

export default {
  downloadData,
};
