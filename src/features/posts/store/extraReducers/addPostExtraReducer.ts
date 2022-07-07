import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { PostsState } from "../postsSlice";
import { addPostThunk } from "../thunks";

export function addAddPostExtraReducer(
  builder: ActionReducerMapBuilder<PostsState>
) {
  builder.addCase(addPostThunk.fulfilled, (state, { payload }) => {
    state.posts.push(payload);
    state.status = "success";
    state.error = undefined;
  });
  builder.addCase(addPostThunk.pending, (state, _) => {
    state.status = "loading";
  });
  builder.addCase(addPostThunk.rejected, (state, action) => {
    state.status = "failure";
    state.error = new Error(action.error.message);
  });
}
