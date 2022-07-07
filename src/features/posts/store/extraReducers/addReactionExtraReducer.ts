import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { PostsState } from "../postsSlice";
import { addReactionThunk } from "../thunks";

export function addAddReactionExtraReducer(
  builder: ActionReducerMapBuilder<PostsState>
) {
  builder.addCase(addReactionThunk.fulfilled, (state, { payload }) => {
    const index = state.posts.findIndex((p) => p.id === payload.id);
    if (index !== -1) {
      state.posts[index] = payload;
    }
    state.error = undefined;
    state.status = "success";
  });
  builder.addCase(addReactionThunk.pending, (state, _) => {
    state.status = "loading";
  });
  builder.addCase(addReactionThunk.rejected, (state, action) => {
    state.status = "failure";
    state.error = new Error(action.error.message);
  });
}
