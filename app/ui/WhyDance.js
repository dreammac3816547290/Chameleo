import styles from "./whyDance.module.css";
import Image from "next/image";

export default function WhyDance() {
  return (
    <div className={styles.main}>
      <h2>WHY DANCE?</h2>
      <Image
        src="/whyDance/img-1.svg"
        alt="background"
        width={0}
        height={0}
        className={styles.img_1}
        style={{ width: "8.00rem" }}
      />
      <Image
        src="/whyDance/img-2-big.svg"
        alt="background"
        width={0}
        height={0}
        className={styles.img_2_big}
        style={{ width: "9.00rem", height: "5.00rem" }}
      />
      <Image
        src="/whyDance/img-2-small.svg"
        alt="background"
        width={0}
        height={0}
        className={styles.img_2_small}
        style={{ width: "4.20rem", height: "7.00rem" }}
      />
    </div>
  );
}
