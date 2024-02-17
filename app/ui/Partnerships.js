import styles from "./partnerships.module.css";
import { readdirSync } from "fs";
import Image from "next/image";

export default function Partnerships() {
  const files = readdirSync("public/partnerships");
  return (
    <div className={styles.main}>
      <h2>PARTNERSHIPS</h2>
      <div className={styles.container}>
        {files.map((file) => (
          <Image
            key={file}
            src={`/partnerships/${file}`}
            alt={file}
            width={0}
            height={0}
            className={styles.img}
            style={{ width: "1.00rem", height: "1.00rem" }}
          />
        ))}
      </div>
    </div>
  );
}
