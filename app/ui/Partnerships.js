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
            src={`/partnerships/${file}`}
            alt={file}
            width={100}
            height={100}
            className={styles.img}
          />
        ))}
      </div>
    </div>
  );
}
