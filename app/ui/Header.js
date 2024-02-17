import styles from "./header.module.css";
import { headerData as data } from "../data";
import Image from "next/image";
import { Socials } from "./FindOutMore";

function Top() {
  return (
    <div className={styles.container}>
      <Image
        src="/header/logo.svg"
        alt="logo"
        width={0}
        height={0}
        className={styles.logo}
        style={{ width: "2.50rem", height: "2.50rem" }}
      />
      <div className={styles.textContainer}>
        <h1>CHAMELEO KIDZ ACADEMY</h1>
        <Image
          src="/header/slogan.svg"
          alt="slogan"
          width={0}
          height={0}
          className={styles.slogan}
        />
        <div className={styles.content}>{data.content}</div>
        <div>
          <span style={{ verticalAlign: "bottom" }}>Find Us On:</span>
          <div className={styles.socials}>
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
}

function Bottom() {
  return (
    <div className={styles.footer}>
      <img src="/header/BG-3.svg" alt="background" className={styles.bg_3} />
      <div className={styles.text}>
        <p className={styles.footerText}>{data.footer}</p>
        <a href="#ourClasses" className={styles.contact}>
          Contact Us
        </a>
      </div>
    </div>
  );
}

function BottomImg() {
  return (
    <>
      <Image
        src="/header/left-1.svg"
        alt="background"
        width={0}
        height={0}
        className={`${styles.img} ${styles.left_1}`}
        style={{ width: "3.00rem", height: "3.00rem" }}
      />
      <Image
        src="/header/left-2.svg"
        alt="background"
        width={0}
        height={0}
        className={`${styles.img} ${styles.left_2}`}
        style={{ width: "3.00rem", height: "3.00rem" }}
      />
      <Image
        src="/header/right-1.svg"
        alt="background"
        width={0}
        height={0}
        className={`${styles.img} ${styles.right_1}`}
        style={{ width: "3.00rem", height: "3.00rem" }}
      />
      <Image
        src="/header/right-2.svg"
        alt="background"
        width={0}
        height={0}
        className={`${styles.img} ${styles.right_2}`}
        style={{ width: "3.00rem", height: "3.00rem" }}
      />
      <Image
        src="/header/right-3.svg"
        alt="background"
        width={0}
        height={0}
        className={`${styles.img} ${styles.right_3}`}
        style={{ width: "3.00rem", height: "3.00rem" }}
      />
    </>
  );
}

export default function Header() {
  return (
    <div className={styles.main}>
      <Top />
      <Bottom />
      <BottomImg />
    </div>
  );
}
