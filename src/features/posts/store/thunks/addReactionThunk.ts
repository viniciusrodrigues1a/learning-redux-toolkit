import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../../../store";
import { Post, PostReactions } from "../postsSlice";
import { PostNotFoundError } from "./errors";

type AddReactionThunkPayload = {
  id: string;
  reaction: keyof PostReactions;
};

export const addReactionThunk = createAsyncThunk<
  Post,
  AddReactionThunkPayload,
  {
    rejectValue: PostNotFoundError;
  }
>(
  "posts/updateReaction",
  async (payload: AddReactionThunkPayload, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const post = state.posts.posts.find((p: any) => p.id === payload.id);
    if (!post) {
      return thunkAPI.rejectWithValue(new PostNotFoundError());
    }

    const reactions = { ...post.reactions };
    reactions[payload.reaction] += 1;

    const response = await fetch(`http://localhost:3333/posts/${payload.id}`, {
      method: "PUT",
      body: JSON.stringify({
        reactions,
      }),
      headers: { "Content-Type": "application/json" },
    });

    return response.json();
  }
);
