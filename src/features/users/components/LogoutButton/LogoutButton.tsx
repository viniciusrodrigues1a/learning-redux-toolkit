import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store";
import { logout } from "../../store/usersSlice";
import styles from "./LogoutButton.module.css";

export function LogoutButton() {
  const dispatch = useDispatch<AppDispatch>();

  const handleOnClick = () => dispatch(logout());

  return (
    <button type="button" onClick={handleOnClick} className={styles.logout}>
      Logout
    </button>
  );
}
