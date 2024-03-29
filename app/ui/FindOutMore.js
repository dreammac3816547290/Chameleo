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
            width={0}
            height={0}
            className={styles.img}
            style={{ width: ".25rem", height: ".25rem" }}
          />
          <span className={styles.text}>{socials.contact}</span>
        </a>
      </div>
      <div className={styles.topItem}>
        <a href={`mailto:${socials.email}`}>
          <Image
            src="/findOutMore/email.svg"
            alt="email"
            width={0}
            height={0}
            className={styles.img}
            style={{ width: ".25rem", height: ".25rem" }}
          />
          <span className={styles.text}>{socials.email}</span>
        </a>
      </div>
    </div>
  );
}

export function Socials() {
  return (
    <div className={styles.socialContainer}>
      <div className={styles.socialImgContainer}>
        <a href={socials.facebook} target="_blank">
          <Image
            src="/findOutMore/facebook.svg"
            alt="facebook"
            width={0}
            height={0}
            className={styles.imgSocial}
            style={{ width: ".50rem", height: ".50rem" }}
          />
        </a>
      </div>
      <div className={styles.socialImgContainer}>
        <a href={socials.instagram} target="_blank">
          <Image
            src="/findOutMore/instagram.svg"
            alt="instagram"
            width={0}
            height={0}
            className={styles.imgSocial}
            style={{ width: ".50rem", height: ".50rem" }}
          />
        </a>
      </div>
    </div>
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
