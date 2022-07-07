import { formatDistance } from "date-fns";

import styles from "./TimeAgo.module.css";

type TimeAgoProps = {
  dateISO: string;
};

export function TimeAgo({ dateISO, ...rest }: TimeAgoProps) {
  const formattedDate = formatDistance(new Date(dateISO), new Date());

  return <span className={styles.span}>{formattedDate}</span>;
}
