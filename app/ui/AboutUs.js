import styles from "./aboutUs.module.css";
import { aboutUsData as data } from "../data";
import Image from "next/image";

function Point({ title, description, src }) {
  return (
    <div className={styles.box}>
      <div className={styles.titleContainer}>
        <Image
          src={src}
          alt={title}
          width={0}
          height={0}
          className={styles.img}
          style={{ width: ".50rem", height: ".50rem" }}
        />
        <h3 className={styles.title}>{title}</h3>
      </div>
      <div className={styles.descContainer}>{description}</div>
    </div>
  );
}

function BottomImg() {
  return (
    <>
      <Image
        src="/aboutUs/left-1.svg"
        alt="background"
        width={0}
        height={0}
        className={`${styles.bottomImg} ${styles.left_1}`}
        style={{ width: "3.00rem", height: "3.00rem" }}
      />
      <Image
        src="/aboutUs/left-2.svg"
        alt="background"
        width={0}
        height={0}
        className={`${styles.bottomImg} ${styles.left_2}`}
        style={{ width: "3.00rem", height: "3.00rem" }}
      />
      <Image
        src="/aboutUs/right-1.svg"
        alt="background"
        width={0}
        height={0}
        className={`${styles.bottomImg} ${styles.right_1}`}
        style={{ width: "3.00rem", height: "3.00rem" }}
      />
      <Image
        src="/aboutUs/right-2.svg"
        alt="background"
        width={0}
        height={0}
        className={`${styles.bottomImg} ${styles.right_2}`}
        style={{ width: "3.00rem", height: "3.00rem" }}
      />
    </>
  );
}

export default function AboutUs() {
  return (
    <div className={styles.main}>
      <h2>ABOUT US</h2>
      <div className={styles.container}>
        {data.points.map((point) => (
          <Point key={point.title} {...point} />
        ))}
      </div>
      <BottomImg />
    </div>
  );
}
