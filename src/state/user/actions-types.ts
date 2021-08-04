import types from "./types";

export interface TypeNewUserName {
  type: types.TYPE_NEW_NAME;
  payload: {
    newUserName: string;
  };
}
export interface ApplyName {
  type: types.APPLY_NAME;
  payload: Record<string, never>;
}
export interface DownloadUserName {
  type: types.DOWNLOAD_NAME;
  payload: {
    userName: string;
  };
}

export type UserNameAction = TypeNewUserName | ApplyName | DownloadUserName;
