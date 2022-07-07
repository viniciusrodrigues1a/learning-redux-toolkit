import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { UsersState } from "../usersSlice";
import { addGetUsersExtraReducer } from "./getUsersExtraReducer";

export const extraReducers = (builder: ActionReducerMapBuilder<UsersState>) => {
  addGetUsersExtraReducer(builder);
};
