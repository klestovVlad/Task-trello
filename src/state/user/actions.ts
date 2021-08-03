import types from "./types";

interface typeNewUserName {
  type: string;
  payload: {
    newUserName: string;
  };
}

const typeNewUserName = (newUserName: string): typeNewUserName => {
  return {
    type: types.typeNewName,
    payload: {
      newUserName: newUserName,
    },
  };
};

interface applyName {
  type: string;
  payload: Record<string, never>;
}

const applyName = (): applyName => {
  return {
    type: types.applyName,
    payload: {},
  };
};

interface downloadUserName {
  type: string;
  payload: {
    userName: string;
  };
}

const downloadUserName = (userName: string): downloadUserName => {
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
