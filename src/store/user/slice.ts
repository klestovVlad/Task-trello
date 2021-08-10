import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ApplyName } from "./actions-types";
import { userName } from "./state";

const userSlice = createSlice({
  name: "userSlice",
  initialState: userName,
  reducers: {
    applyName(state, action: PayloadAction<ApplyName>) {
      action.payload;
    },
  },
});

export default userSlice.reducer;
export const UserAction = userSlice.actions;
