import { UsersState } from "../usersSlice";

export function logoutReducer(state: UsersState) {
  state.selectedUserId = undefined;
}
