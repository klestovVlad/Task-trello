import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  AddNewComment,
  ChangeCardDescription,
  ChangeCardName,
  ChangeColumnName,
  DeleteCard,
  DeleteComment,
  LoadData,
  PushNewCard,
  SaveCommentEdit,
} from "./action-types";
import { boardState } from "./state";

const boardSlice = createSlice({
  name: "boardSlice",
  initialState: boardState,
  reducers: {
    changeColumnName(state, action: PayloadAction<ChangeColumnName>) {
      state[action.payload.id].columnName = action.payload.text;
    },
    toggleAddCardField(
      state,
      action: PayloadAction<{
        id: number;
      }>,
    ) {
      for (const key in state) {
        state[key].isCardAdding = +key === action.payload.id;
      }
    },
    pushNewCard(state, action: PayloadAction<PushNewCard>) {
      state[action.payload.columnId].cards.push({
        name: action.payload.cardName,
        author: action.payload.userName,
        description: "",
        comment: [],
      });
    },
    changeCardName(state, action: PayloadAction<ChangeCardName>) {
      state[action.payload.columnId].cards[action.payload.cardNum].name =
        action.payload.text;
    },
    changeCardDescription(state, action: PayloadAction<ChangeCardDescription>) {
      state[action.payload.columnId].cards[action.payload.cardNum].description =
        action.payload.text;
    },
    addNewComment(state, action: PayloadAction<AddNewComment>) {
      state[action.payload.columnId].cards[action.payload.cardNum].comment.push({
        userText: action.payload.newComment,
        author: action.payload.userName,
      });
    },
    saveCommentEdit(state, action: PayloadAction<SaveCommentEdit>) {
      state[action.payload.columnId].cards[action.payload.cardNum].comment[
        action.payload.commentNum
      ].userText = action.payload.newComment;
    },
    deleteComment(state, action: PayloadAction<DeleteComment>) {
      state[action.payload.columnId].cards[action.payload.cardNum].comment.splice(
        action.payload.commentNum,
        1,
      );
    },
    deleteCard(state, action: PayloadAction<DeleteCard>) {
      delete state[action.payload.columnId].cards[action.payload.cardNum];
    },
    loadData(state, action: PayloadAction<LoadData>) {
      action.payload.loadData;
    },
  },
});

export default boardSlice.reducer;
export const boardAction = boardSlice.actions;
