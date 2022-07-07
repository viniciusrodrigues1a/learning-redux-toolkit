import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../store";
import { extraReducers } from "./extraReducers";

export type PostReactions = {
  thumbsUp: number;
  heart: number;
  surprised: number;
  popcorn: number;
  ball: number;
  donut: number;
};

export type Post = {
  id: string;
  content: string;
  authorId: string;
  createdAt: string;
  reactions: PostReactions;
};

type Status = "idle" | "loading" | "failure" | "success";

export type PostsState = {
  posts: Post[];
  status: Status;
  error?: Error;
};

const initialState: PostsState = {
  posts: [],
  status: "idle",
  error: undefined,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers,
});

export const getPostsStatusSelectorCallback = (state: RootState) =>
  state.posts.status;
export const getPostsSelectorCallback = (state: RootState) => state.posts.posts;

export default postsSlice.reducer;
