import { useSelector } from "react-redux";
import { getUsersSelectorCallback } from "../../store/usersSlice";

import styles from "./UsersOptions.module.css";

type UsersOptionsProps = {
  value: any;
  onChange: (e: React.ChangeEvent) => void;
};

export function UsersOptions({ value, onChange }: UsersOptionsProps) {
  const users = useSelector(getUsersSelectorCallback);

  const options = users.map((u) => (
    <option value={u.id} key={u.id}>
      {u.name}
    </option>
  ));

  return (
    <select value={value} onChange={onChange} className={styles.select}>
      <option value={""} disabled>
        Select user
      </option>
      {options}
    </select>
  );
}
