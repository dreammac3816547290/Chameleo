import styles from "./reviews.module.css";
import { reviewsData as data } from "../data";

function Review({ name, occupation, review }) {
  return (
    <div className={styles.box}>
      <div className={styles.header}>
        <div className={styles.bold}>{name}</div>
        {occupation}
      </div>
      <div className={styles.content}>{review}</div>
    </div>
  );
}

export default function Reviews() {
  return (
    <div className={styles.main}>
      <div className={styles.bigText}>“</div>
      <h2>REVIEWS</h2>
      <div className={styles.container}>
        {data.reviews.map((review) => (
          <Review {...review} />
        ))}
      </div>
    </div>
  );
}
