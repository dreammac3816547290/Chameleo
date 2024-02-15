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
                width={300}
                height={300}
                className={styles.img}
              />
            )
        )}
      </div>
      <Image
        src={`/gallery/img-1.svg`}
        alt="background"
        width={500}
        height={500}
        className={styles.img_1}
      />
      <Image
        src={`/gallery/img-2.svg`}
        alt="background"
        width={300}
        height={300}
        className={styles.img_2}
      />
    </div>
  );
}
