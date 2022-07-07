import { logoutReducer } from "./logout";
import { selectUserReducer } from "./selectUser";

export const reducers = {
  selectUser: selectUserReducer,
  logout: logoutReducer,
};
