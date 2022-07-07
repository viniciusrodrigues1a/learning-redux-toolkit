import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../store";
import { extraReducers } from "./extraReducers";
import { reducers } from "./reducers";

export type User = {
  id: string;
  name: string;
};

type Status = "idle" | "loading" | "failure" | "success";

export type UsersState = {
  users: User[];
  status: Status;
  error?: Error;
  selectedUserId?: string;
};

const initialState: UsersState = {
  users: [],
  status: "idle",
  error: undefined,
  selectedUserId: undefined,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers,
  extraReducers,
});

export const getUsersStatusSelectorCallback = (state: RootState) =>
  state.users.status;
export const getUsersSelectorCallback = (state: RootState) => state.users.users;
export const getSelectedUserSelectorCallback = (state: RootState) =>
  state.users.users.find((u) => u.id === state.users.selectedUserId);
export const getUserByIdSelectorCallback = (id: string) => (state: RootState) =>
  state.users.users.find((u) => u.id === id);

export const { selectUser, logout } = usersSlice.actions;

export default usersSlice.reducer;
