import { createContext } from "react";

interface UserNameContextValue {
  userName: string;
  setUserName: any;
}

export const UserNameContext = createContext<UserNameContextValue>({
  userName: "",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setUserName: () => {},
});
