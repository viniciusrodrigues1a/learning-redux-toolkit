import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./AddPost.module.css";
import { AppDispatch } from "../../../../store";
import { getSelectedUserSelectorCallback } from "../../../users/store/usersSlice";
import { addPostThunk } from "../../store/thunks";

export function AddPost() {
  const dispatch = useDispatch<AppDispatch>();
  const selectedUser = useSelector(getSelectedUserSelectorCallback);

  const [content, setContent] = useState("");

  const handleTextareaChange = (e: any) => setContent(e.target.value);

  function handleOnSubmit(e: any) {
    e.preventDefault();

    if (!selectedUser) return;

    setContent("");
    dispatch(
      addPostThunk({
        content,
        authorId: selectedUser.id,
        createdAt: new Date().toISOString(),
        reactions: {
          ball: 0,
          donut: 0,
          heart: 0,
          popcorn: 0,
          thumbsUp: 0,
          surprised: 0,
        },
      })
    );
  }

  return (
    <form onSubmit={handleOnSubmit} className={styles.form}>
      <textarea
        placeholder="Write a new post..."
        value={content}
        onChange={handleTextareaChange}
        className={styles.textarea}
      />

      <button type="submit" className={styles.button}>
        Post
      </button>
    </form>
  );
}
