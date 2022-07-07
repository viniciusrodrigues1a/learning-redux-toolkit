import { useSelector } from "react-redux";
import { getSelectedUserSelectorCallback } from "./features/users/store/usersSlice";

import { Login } from "./pages/Login";
import { Posts } from "./pages/Posts";

export default function App() {
  const selectedUser = useSelector(getSelectedUserSelectorCallback);

  if (selectedUser) return <Posts />;
  else return <Login />;
}
