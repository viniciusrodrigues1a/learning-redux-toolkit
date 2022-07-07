import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../../../store";
import { CanOnlyDeletePostsYouOwnError, PostNotFoundError } from "./errors";

export const deletePostThunk = createAsyncThunk<
  string,
  string,
  {
    rejectValue: CanOnlyDeletePostsYouOwnError | PostNotFoundError;
  }
>("posts/delete", async (id: string, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  const post = state.posts.posts.find((p) => p.id === id);
  if (!post) {
    return thunkAPI.rejectWithValue(new PostNotFoundError());
  }

  if (post.authorId !== state.users.selectedUserId) {
    return thunkAPI.rejectWithValue(new CanOnlyDeletePostsYouOwnError());
  }

  await fetch(`http://localhost:3333/posts/${id}`, {
    method: "DELETE",
  });

  return id;
});
