import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store";
import { PostReactions as PostReactionsType } from "../../store/postsSlice";
import { addReactionThunk } from "../../store/thunks";

import styles from "./PostReactions.module.css";

type PostReactionsProps = {
  reactions: PostReactionsType;
  postId: string;
};

const reactionsEmoji = {
  thumbsUp: "👍",
  heart: "❤️",
  surprised: "😮",
  popcorn: "🍿",
  ball: "⚽️",
  donut: "🍩",
};

export function PostReactions({ reactions, postId }: PostReactionsProps) {
  const dispatch = useDispatch<AppDispatch>();

  function handleOnClick(reaction: keyof PostReactionsType) {
    return () => dispatch(addReactionThunk({ reaction, id: postId }));
  }

  const reactionsDiv = Object.keys(reactionsEmoji).map((k) => (
    <button
      type="button"
      onClick={handleOnClick(k as keyof PostReactionsType)}
      key={k}
      className={styles.reaction}
    >
      <span>{reactionsEmoji[k as keyof typeof reactionsEmoji]}</span>
      <span className={styles.reactionCounter}>
        {" "}
        {reactions[k as keyof typeof reactions]}
      </span>
    </button>
  ));

  return <div className={styles.container}>{reactionsDiv}</div>;
}
