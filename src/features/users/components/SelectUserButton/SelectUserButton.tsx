import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { useDispatch } from "react-redux";

import styles from "./SelectUserButton.module.css";
import { selectUser } from "../../store/usersSlice";
import { AppDispatch } from "../../../../store";

type SelectUserButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  userId: string;
};

export function SelectUserButton({ userId, ...rest }: SelectUserButtonProps) {
  const dispatch = useDispatch<AppDispatch>();

  const onClick = (id: string) => () => dispatch(selectUser(id));

  return (
    <button
      type="button"
      onClick={onClick(userId)}
      className={styles.button}
      {...rest}
    >
      Login with selected user
    </button>
  );
}
