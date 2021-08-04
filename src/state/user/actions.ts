import { ApplyName, DownloadUserName, TypeNewUserName } from "./actions-types";
import types from "./types";

const typeNewUserName = (newUserName: string): TypeNewUserName => {
  return {
    type: types.TYPE_NEW_NAME,
    payload: {
      newUserName: newUserName,
    },
  };
};

const applyName = (): ApplyName => {
  return {
    type: types.APPLY_NAME,
    payload: {},
  };
};

const downloadUserName = (userName: string): DownloadUserName => {
  return {
    type: types.DOWNLOAD_NAME,
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
