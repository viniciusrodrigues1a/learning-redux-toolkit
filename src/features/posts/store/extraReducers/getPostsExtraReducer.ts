import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { PostsState } from "../postsSlice";
import { getPostsThunk } from "../thunks";

export function addGetPostsExtraReducer(
  builder: ActionReducerMapBuilder<PostsState>
) {
  builder.addCase(getPostsThunk.fulfilled, (state, { payload }) => {
    state.posts = payload;
    state.status = "success";
    state.error = undefined;
  });
  builder.addCase(getPostsThunk.pending, (state, _) => {
    state.status = "loading";
  });
  builder.addCase(getPostsThunk.rejected, (state, action) => {
    state.status = "failure";
    state.error = new Error(action.error.message);
  });
}
