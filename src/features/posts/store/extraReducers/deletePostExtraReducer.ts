import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { PostsState } from "../postsSlice";
import { deletePostThunk } from "../thunks";

export function addDeletePostExtraReducer(
  builder: ActionReducerMapBuilder<PostsState>
) {
  builder.addCase(deletePostThunk.fulfilled, (state, action) => {
    const index = state.posts.findIndex((p) => p.id === action.payload);
    state.posts.splice(index, 1);
    state.error = undefined;
    state.status = "success";
  });
  builder.addCase(deletePostThunk.pending, (state, _) => {
    state.status = "loading";
  });
  builder.addCase(deletePostThunk.rejected, (state, action) => {
    if (action.payload) {
      state.error = action.payload;
    }
    state.error = new Error(action.error.message);
  });
}
