import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Posts.module.css";
import { getPostsStatusSelectorCallback } from "../../features/posts/store/postsSlice";
import { AppDispatch } from "../../store";
import { PostsList } from "../../features/posts/components/PostsList";
import { AddPost } from "../../features/posts/components/AddPost/AddPost";
import { getPostsThunk } from "../../features/posts/store/thunks";
import { LogoutButton } from "../../features/users/components/LogoutButton";

export function Posts() {
  const status = useSelector(getPostsStatusSelectorCallback);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (status === "idle") {
      dispatch(getPostsThunk());
    }
  }, [status, dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.logoutContainer}>
        <LogoutButton />
      </div>

      <div className={styles.content}>
        <div className={styles.addPostContainer}>
          <AddPost />
        </div>

        <div className={styles.postsContainer}>
          <PostsList />
        </div>
      </div>
    </div>
  );
}
