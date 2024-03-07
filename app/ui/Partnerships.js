import styles from "./partnerships.module.css";
import { readdirSync } from "fs";

export default function Partnerships() {
  const files = readdirSync("public/partnerships");
  return (
    <div className={styles.main}>
      <h2>PARTNERSHIPS</h2>
      <div className={styles.container}>
        {files.map((file) => (
          <img
            key={file}
            src={`/partnerships/${file}`}
            alt={file}
            className={styles.img}
            style={{ width: "1.00rem", height: "1.00rem" }}
          />
        ))}
      </div>
    </div>
  );
}
