import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "../postsSlice";

export const addPostThunk = createAsyncThunk(
  "posts/create",
  async (post: Omit<Post, "id">): Promise<Post> => {
    const response = await fetch("http://localhost:3333/posts", {
      method: "POST",
      body: JSON.stringify(post),
      headers: { "Content-Type": "application/json" },
    });

    return response.json();
  }
);
