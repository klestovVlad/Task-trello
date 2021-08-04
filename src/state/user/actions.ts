import { ApplyName, DownloadUserName, TypeNewUserName } from "./actions-types";
import types from "./types";

const typeNewUserName = (newUserName: string): TypeNewUserName => {
  return {
    type: types.typeNewName,
    payload: {
      newUserName: newUserName,
    },
  };
};

const applyName = (): ApplyName => {
  return {
    type: types.applyName,
    payload: {},
  };
};

const downloadUserName = (userName: string): DownloadUserName => {
  return {
    type: types.downloadName,
    payload: {
      userName: userName,
    },
  };
};

export default {
  typeNewUserName,
  applyName,
  downloadUserName,
};
