import { useSelector } from "react-redux";

import styles from "./PostsList.module.css";
import {
  getPostsSelectorCallback,
  getPostsStatusSelectorCallback,
} from "../../store/postsSlice";
import { PostAuthor } from "../PostAuthor";
import { PostReactions } from "../PostReactions";
import { TimeAgo } from "../TimeAgo";
import { DeleteButton } from "../DeleteButton";

export function PostsList() {
  const posts = useSelector(getPostsSelectorCallback);
  const status = useSelector(getPostsStatusSelectorCallback);

  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  let content = (
    <>
      {sortedPosts.map((p) => (
        <article key={p.id} className={styles.article}>
          <p className={styles.postContent}>{p.content.substring(0, 100)}</p>
          <PostAuthor userId={p.authorId} />
          <div className={styles.reactionsContainer}>
            <PostReactions reactions={p.reactions} postId={p.id} />
          </div>
          <div className={styles.footer}>
            <TimeAgo dateISO={p.createdAt} />
            <DeleteButton postId={p.id} />
          </div>
        </article>
      ))}
    </>
  );

  if (status === "loading" && posts.length === 0) {
    content = (
      <div className={styles.spinnerContainer}>
        <div className={styles.spinner}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  return content;
}
