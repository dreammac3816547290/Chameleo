import styles from "./findOutMore.module.css";
import { socials } from "../data";
import Image from "next/image";
import ContactButton from "./ContactButton";

function Top() {
  return (
    <div className={styles.top}>
      <div className={styles.topItem}>
        <a href={`tel:${socials.contact}`}>
          <Image
            src="/findOutMore/contact.svg"
            alt="contact"
            width={25}
            height={25}
            className={styles.img}
          />
          <span className={styles.text}>{socials.contact}</span>
        </a>
      </div>
      <div className={styles.topItem}>
        <a href={`mailto:${socials.email}`}>
          <Image
            src="/findOutMore/email.svg"
            alt="email"
            width={25}
            height={25}
            className={styles.img}
          />
          <span className={styles.text}>{socials.email}</span>
        </a>
      </div>
    </div>
  );
}

export function Socials() {
  return (
    <>
      <a href={socials.facebook}>
        <Image
          src="/findOutMore/facebook.svg"
          alt="facebook"
          width={50}
          height={50}
          className={styles.img}
        />
      </a>
      <a href={socials.instagram}>
        <Image
          src="/findOutMore/instagram.svg"
          alt="instagram"
          width={50}
          height={50}
          className={styles.img}
        />
      </a>
    </>
  );
}

export default function FindOutMore() {
  return (
    <div className={styles.main}>
      <h2 style={{ textAlign: "left" }}>FIND OUT MORE</h2>
      <Top />
      <ContactButton color="#542df0" />
      <div className={styles.bottom}>
        <Socials />
      </div>
      <Image
        src="/findOutMore/img-1.svg"
        alt="background"
        width={0}
        height={0}
        className={styles.img_1}
      />
    </div>
  );
}
