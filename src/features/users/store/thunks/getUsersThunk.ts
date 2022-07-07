import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../usersSlice";

export const getUsersThunk = createAsyncThunk(
  "users/getAll",
  async (): Promise<User[]> => {
    const response = await fetch("http://localhost:3333/users");

    return response.json();
  }
);
