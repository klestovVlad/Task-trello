export interface TypeNewUserName {
  type: string;
  payload: {
    newUserName: string;
  };
}
export interface ApplyName {
  type: string;
  payload: Record<string, never>;
}
export interface DownloadUserName {
  type: string;
  payload: {
    userName: string;
  };
}
