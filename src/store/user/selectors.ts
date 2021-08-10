import { createSelector } from "reselect";

import { RootState } from "../root-reducer";

const selectUser = (state: RootState) => state.userName;

export const selectUserName = createSelector(selectUser, (user) => user.userName);
