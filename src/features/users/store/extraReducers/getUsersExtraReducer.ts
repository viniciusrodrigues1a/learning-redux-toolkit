import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { getUsersThunk } from "../thunks";
import { UsersState } from "../usersSlice";

export function addGetUsersExtraReducer(
  builder: ActionReducerMapBuilder<UsersState>
) {
  builder.addCase(getUsersThunk.fulfilled, (state, { payload }) => {
    state.users = payload;
    state.status = "success";
    state.error = undefined;
  });
  builder.addCase(getUsersThunk.pending, (state, _) => {
    state.status = "loading";
  });
  builder.addCase(getUsersThunk.rejected, (state, action) => {
    state.status = "failure";
    state.error = new Error(action.error.message);
  });
}
