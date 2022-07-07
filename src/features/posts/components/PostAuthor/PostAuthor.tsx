import { DetailedHTMLProps, HTMLAttributes } from "react";
import { useSelector } from "react-redux";
import { getUserByIdSelectorCallback } from "../../../users/store/usersSlice";

import styles from "./PostAuthor.module.css";

type PostAuthorProps = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> & {
  userId: string;
};

export function PostAuthor({ userId }: PostAuthorProps) {
  const user = useSelector(getUserByIdSelectorCallback(userId));

  return <span className={styles.author}>- {user?.name || "Unknown"}</span>;
}
