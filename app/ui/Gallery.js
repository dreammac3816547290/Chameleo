import styles from "./gallery.module.css";
import { readdirSync } from "fs";
import Image from "next/image";

export default function Gallery() {
  const files = readdirSync("public/gallery");
  return (
    <div className={styles.main}>
      <h2>GALLERY</h2>
      <div className={styles.container}>
        {files.map(
          (file) =>
            !file.startsWith("img") && (
              <Image
                key={file}
                src={`/gallery/${file}`}
                alt="gallery"
                width={0}
                height={0}
                className={styles.img}
                style={{ width: "3.00rem", height: "3.00rem" }}
              />
            )
        )}
      </div>
      <Image
        src={`/gallery/img-1.svg`}
        alt="background"
        width={0}
        height={0}
        className={styles.img_1}
        style={{ width: "5.00rem", height: "5.00rem" }}
      />
      <Image
        src={`/gallery/img-2.svg`}
        alt="background"
        width={0}
        height={0}
        className={styles.img_2}
        style={{ width: "3.00rem", height: "3.00rem" }}
      />
    </div>
  );
}
