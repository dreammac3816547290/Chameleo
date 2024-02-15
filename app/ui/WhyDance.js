import styles from "./whyDance.module.css";
import Image from "next/image";

export default function WhyDance() {
  return (
    <div className={styles.main}>
      <h2>WHY DANCE?</h2>
      <Image
        src="/whyDance/img-1.svg"
        alt="background"
        width={800}
        height={800}
        className={styles.img_1}
      />
      <Image
        src="/whyDance/img-2-big.svg"
        alt="background"
        width={900}
        height={540}
        className={styles.img_2_big}
      />
      <Image
        src="/whyDance/img-2-small.svg"
        alt="background"
        width={420}
        height={700}
        className={styles.img_2_small}
      />
    </div>
  );
}
