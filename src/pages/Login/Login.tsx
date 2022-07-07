import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Login.module.css";
import { SelectUserButton } from "../../features/users/components/SelectUserButton";
import { UsersOptions } from "../../features/users/components/UsersOptions";
import { getUsersStatusSelectorCallback } from "../../features/users/store/usersSlice";
import { AppDispatch } from "../../store";
import { getUsersThunk } from "../../features/users/store/thunks";

export function Login() {
  const status = useSelector(getUsersStatusSelectorCallback);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (status === "idle") {
      dispatch(getUsersThunk());
    }
  }, [status, dispatch]);
  const [userId, setUserId] = useState("");

  const handleSelectChange = (e: any) => setUserId(e.target.value);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Redux Toolkit App</h1>

        <UsersOptions value={userId} onChange={handleSelectChange} />

        <div className={styles.buttonContainer}>
          <SelectUserButton userId={userId} disabled={userId === ""} />
        </div>
      </div>
    </div>
  );
}
