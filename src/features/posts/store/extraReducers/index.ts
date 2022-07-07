import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { PostsState } from "../postsSlice";
import { addGetPostsExtraReducer } from "./getPostsExtraReducer";
import { addAddPostExtraReducer } from "./addPostExtraReducer";
import { addAddReactionExtraReducer } from "./addReactionExtraReducer";
import { addDeletePostExtraReducer } from "./deletePostExtraReducer";

export const extraReducers = (builder: ActionReducerMapBuilder<PostsState>) => {
  addGetPostsExtraReducer(builder);
  addAddPostExtraReducer(builder);
  addAddReactionExtraReducer(builder);
  addDeletePostExtraReducer(builder);
};
