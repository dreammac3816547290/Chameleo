import styles from "./reviews.module.css";
import { reviewsData as data } from "../data";
import ReviewsContainer from "./ReviewsContainer";

function Review({ name, occupation, review }) {
  return (
    <div className={styles.box}>
      <div className={styles.header}>
        <div className={styles.name}>{name}</div>
        <div className={styles.occupation}>{occupation}</div>
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
      <ReviewsContainer>
        {data.reviews.map((review) => (
          <Review key={review.name} {...review} />
        ))}
      </ReviewsContainer>
    </div>
  );
}
