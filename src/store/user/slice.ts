import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { SaveName } from "./actions-types";
import { userName } from "./state";

const userSlice = createSlice({
  name: "userSlice",
  initialState: userName,
  reducers: {
    saveName(state, action: PayloadAction<SaveName>) {
      state.userName = action.payload.userName;
    },
  },
});

export default userSlice.reducer;
export const UserAction = userSlice.actions;
