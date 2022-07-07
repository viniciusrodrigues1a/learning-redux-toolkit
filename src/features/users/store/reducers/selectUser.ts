import { PayloadAction } from "@reduxjs/toolkit";
import { UsersState } from "../usersSlice";

export function selectUserReducer(
  state: UsersState,
  action: PayloadAction<string>
) {
  state.selectedUserId = action.payload;
}
