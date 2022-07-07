import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "../postsSlice";

export const getPostsThunk = createAsyncThunk(
  "posts/getAll",
  async (): Promise<Post[]> => {
    const response = await fetch("http://localhost:3333/posts");

    return response.json();
  }
);
