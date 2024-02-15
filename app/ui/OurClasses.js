import styles from "./ourClasses.module.css";
import { ourClassesData as data } from "../data";
import Image from "next/image";
import ContactButton from "./ContactButton";

function Point({ title, description, src, background, foreground, isPopular }) {
  return (
    <div className={styles.box}>
      <div
        className={`${styles.titleContainer} ${isPopular && styles.popular}`}
        style={{ background }}
      >
        <Image
          src={src}
          alt={title}
          width={300}
          height={300}
          className={styles.img}
          style={{ background: foreground }}
        />
        <div className={styles.title}>{title}</div>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default function OurClasses() {
  return (
    <div id="ourClasses" className={styles.main}>
      <h2>OUR CLASSES</h2>
      <div className={styles.header}>{data.header}</div>
      <div className={styles.container}>
        {data.points.map((point) => (
          <Point {...point} />
        ))}
      </div>
      <div className={styles.footer}>{data.footer}</div>
      <div style={{ margin: "auto", width: "fit-content" }}>
        <ContactButton color="#ffa322" />
      </div>
    </div>
  );
}
