import styles from "./DeleteButton.module.css";

import Trash from "../../../../assets/trash-2.svg";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store";
import { toast } from "react-toastify";
import { deletePostThunk } from "../../store/thunks";

type DeleteButtonProps = {
  postId: string;
};

export function DeleteButton({ postId }: DeleteButtonProps) {
  const dispatch = useDispatch<AppDispatch>();

  async function handleOnClick() {
    const resultAction = await dispatch(deletePostThunk(postId));

    if (resultAction.payload instanceof Error) {
      toast(resultAction.payload.message, { type: "error" });
    }
  }

  return (
    <button type="button" className={styles.button} onClick={handleOnClick}>
      <img src={Trash} alt="Delete post" className={styles.img} />
    </button>
  );
}
